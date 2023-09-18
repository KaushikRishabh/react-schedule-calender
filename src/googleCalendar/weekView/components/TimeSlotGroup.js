import React from "react";
import { Row, Col } from "react-bootstrap";
import TimeSlot from "./TimeSlot";

function TimeSlotGroup(props) {
  return (
    <Row>
      <Col>{props.time}</Col>
      {props.weekDays.map((day) => (
        <TimeSlot
          key={day.dateStamp}
          dateStamp={day.dateStamp}
          time={props.time}
          openAddEventModal={props.openAddEventModal}
        />
      ))}
      {props.children}
    </Row>
  );
}

export default TimeSlotGroup;
