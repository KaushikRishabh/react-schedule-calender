import React from "react";
import { Col } from "react-bootstrap";
import { isToday } from "../../utils";
import EventHighlighter from "./EventHighlighter";

function TimeSlot(props) {
  const isTodayColumn = isToday(props.dateStamp);
  const eventsForThisSlot =
    props.events[props.dateStamp + props.time * 3600000] || [];

  return (
    <Col
      style={{
        border: "1px solid #eaeaea", //#eaeaea
        height: "60px",
        cursor: "pointer",
        backgroundColor: isTodayColumn ? "#d9d9d9" : "white", // #f2f2f2 Highlight today's column
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
