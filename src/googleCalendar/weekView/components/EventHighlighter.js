import React, { useState } from "react";
import { Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import { eventHighlighterStyle } from "../styles";
import moment from "moment";
import EditEventModal from "./EditEventModal";

function EventHighlighter(props) {
  const [showEditEventModal, setShowEditEventModal] = useState(false);

  const handleEventClick = () => {
    // Logic to handle event click, like opening an edit modal
    setShowEditEventModal(true);
  };

  const handleEventUpdate = (updatedEvent) => {
    props.onEventUpdate(props.event.id, updatedEvent);
    setShowEditEventModal(false);
  };

  const handleEventDelete = () => {
    props.onEventDelete(props.event.id);
    setShowEditEventModal(false);
  };

  const formattedStartTime = moment(props.event.start).format("hh:mm a");
  const formattedEndTime = moment(props.event.end).format("hh:mm a");

  return (
    <div>
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip>
            {props.event.title} ({formattedStartTime} - {formattedEndTime})
          </Tooltip>
        }
      >
        <Badge
          variant="primary"
          onClick={handleEventClick}
          style={eventHighlighterStyle}
        >
          {props.event.title}
        </Badge>
      </OverlayTrigger>
      {showEditEventModal && (
        <EditEventModal
          event={props.event}
          onUpdate={handleEventUpdate}
          onDelete={handleEventDelete}
          onClose={() => setShowEditEventModal(false)}
        />
      )}
    </div>
  );
}

export default EventHighlighter;
