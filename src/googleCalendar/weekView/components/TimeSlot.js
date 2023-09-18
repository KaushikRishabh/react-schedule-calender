import React from "react";
import { Col } from "react-bootstrap";

function TimeSlot(props) {
  return (
    <Col onClick={() => props.openAddEventModal(props.dateStamp, props.time)}>
      {/* This is where the events will be displayed */}
    </Col>
  );
}

export default TimeSlot;
