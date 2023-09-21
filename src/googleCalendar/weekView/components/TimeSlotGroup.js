import React from "react";
import { Row, Col } from "react-bootstrap";
import TimeSlot from "./TimeSlot";

function TimeSlotGroup(props) {
  // console.log("props", props);
  return (
    <Row>
      <Col xs={1} className="text-right pr-0">
        {props.time}:00
      </Col>
      {props.weekDays.map((day) => (
        <TimeSlot
          key={day.dateStamp}
          dateStamp={day.dateStamp}
          time={props.time}
          openAddEventModal={props.openAddEventModal}
          events={props.events}
          onEventUpdate={props.onEventUpdate}
          onEventDelete={props.onEventDelete}
        />
      ))}
    </Row>
  );
}

export default TimeSlotGroup;
