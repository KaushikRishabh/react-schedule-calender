import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import moment from "moment";
import AddEventModal from "./components/AddEventModal";
import WeekHeader from "./components/WeekHeader";
import TimeSlotGroup from "./components/TimeSlotGroup";
import "./styles.css";

function WeekView(props) {
  const [startDate, setStartDate] = useState(moment());
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [eventStart, setEventStart] = useState(null);
  const [eventEnd, setEventEnd] = useState(null);

  const goToNextWeek = () => {
    const dateAfter7Days = moment(startDate).add(7, "days");
    setStartDate(dateAfter7Days);
  };

  const goToPreviousWeek = () => {
    const dateBefore7Days = moment(startDate).subtract(7, "days");
    setStartDate(dateBefore7Days);
  };

  const goToToday = () => {
    setStartDate(moment());
  };

  const openAddEventModal = (dateStamp, time) => {
    const start = moment(dateStamp).set("hour", time);
    const end = start.clone().add(1, "hour");
    setShowAddEventModal(true);
    setEventStart(start);
    setEventEnd(end);
  };

  const weekDays = Array.from({ length: 7 }).map((_, i) => {
    const date = moment(startDate).add(i, "days");
    return {
      dateStamp: date.valueOf(),
      weekDayName: date.format("ddd"),
      date: date.format("D MMM"),
    };
  });

  return (
    <div>
      <AddEventModal
        show={showAddEventModal}
        onHide={() => setShowAddEventModal(false)}
        eventStart={eventStart}
        eventEnd={eventEnd}
        onEventAdd={props.onNewEvent}
      />
      <Row>
        <Col>
          <Button onClick={goToPreviousWeek}>Previous</Button>
        </Col>
        <Col>
          <Button onClick={goToToday}>Today</Button>
        </Col>
        <Col>
          <Button onClick={goToNextWeek}>Next</Button>
        </Col>
      </Row>
      <Row>
        <WeekHeader weekDays={weekDays} />
        {Array.from({ length: 24 }).map((_, hour) => (
          <TimeSlotGroup
            key={hour}
            time={hour}
            weekDays={weekDays}
            openAddEventModal={openAddEventModal}
            events={props.events}
            onEventUpdate={props.onEventUpdate}
            onEventDelete={props.onEventDelete}
          />
        ))}
      </Row>
    </div>
  );
}

export default WeekView;
