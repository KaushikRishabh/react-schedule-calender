import React from "react";
import { Col } from "react-bootstrap";
import EventHighlighter from "./EventHighlighter";

function TimeSlot(props) {
  const eventsForThisSlot = props?.events?.filter((event) => {
    // Logic to determine if the event falls within this time slot
    return (
      event.start >= props.dateStamp && event.end <= props.dateStamp + 3600000
    ); // 1 hour in milliseconds
  });

  return (
    <Col
      style={{
        border: "1px solid #eaeaea",
        height: "60px",
        cursor: "pointer",
      }}
      onClick={() => props.openAddEventModal(props.dateStamp, props.time)}
    >
      {eventsForThisSlot.map((event) => (
        <EventHighlighter
          key={event.id}
          event={event}
          onEventUpdate={props.onEventUpdate}
          onEventDelete={props.onEventDelete}
        />
      ))}
    </Col>
  );
}

export default TimeSlot;
