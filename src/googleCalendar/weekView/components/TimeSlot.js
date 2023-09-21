import React from "react";
import { Col } from "react-bootstrap";
import EventHighlighter from "./EventHighlighter";

function TimeSlot(props) {
  const eventsForThisSlot =
    props.events[props.dateStamp + props.time * 3600000] || [];

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
