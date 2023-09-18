import React from "react";
import { Row, Col } from "react-bootstrap";

function WeekHeader(props) {
  return (
    <Row>
      {props.weekDays.map((day) => (
        <Col key={day.dateStamp}>
          <p>{day.weekDayName}</p>
          <p>{day.date}</p>
        </Col>
      ))}
    </Row>
  );
}

export default WeekHeader;
