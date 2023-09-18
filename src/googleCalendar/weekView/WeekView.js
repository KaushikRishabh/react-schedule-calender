import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import moment from "moment";
import AddEventModal from "./components/AddEventModal";

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
      {/* Here you'll add the WeekHeader, TimeSlotGroup, and other components */}
    </div>
  );
}

export default WeekView;
