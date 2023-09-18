import React, { useState } from "react";
import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import DatePicker from "react-datepicker";

function AddEventModal(props) {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(props.eventStart);
  const [end, setEnd] = useState(props.eventEnd);

  const handleSave = () => {
    props.onEventAdd({
      title,
      start,
      end
    });
    setTitle("");
    props.onHide();
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>Title</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Event Title"
            />
          </InputGroup>
          <DatePicker
            selected={start}
            onChange={(date) => setStart(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
          />
          <DatePicker
            selected={end}
            onChange={(date) => setEnd(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddEventModal;
