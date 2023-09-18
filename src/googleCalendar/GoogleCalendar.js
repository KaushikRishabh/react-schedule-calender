import React, { useState, useEffect } from "react";
import WeekView from "./weekView/WeekView";
import CalendarEventHandler from "./calendarEventHandler";

function GoogleCalendar() {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || {}
  );

  useEffect(() => {
    const saveEventsToLocal = () => {
      localStorage.setItem("events", JSON.stringify(events));
    };

    window.addEventListener("beforeunload", saveEventsToLocal);

    return () => {
      window.removeEventListener("beforeunload", saveEventsToLocal);
    };
  }, [events]);

  const addNewEvent = (event) => {
    event = {
      ...event,
      id: CalendarEventHandler.generateId(event)
    };
    setEvents((prevEvents) => CalendarEventHandler.add(prevEvents, event));
  };

  const updateEvent = (eventId, updatedEvent) => {
    setEvents((prevEvents) =>
      CalendarEventHandler.update(eventId, updatedEvent, prevEvents)
    );
  };

  const deleteEvent = (eventId) => {
    setEvents((prevEvents) => CalendarEventHandler.delete(eventId, prevEvents));
  };

  return (
    <WeekView
      events={events}
      onNewEvent={addNewEvent}
      onEventUpdate={updateEvent}
      onEventDelete={deleteEvent}
    />
  );
}

export default GoogleCalendar;
