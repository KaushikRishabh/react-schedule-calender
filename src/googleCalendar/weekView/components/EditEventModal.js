import React, { useState } from "react";
import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import DatePicker from "react-datepicker";

function EditEventModal(props) {
  const [title, setTitle] = useState(props.event.title);
  const [start, setStart] = useState(new Date(props.event.start));
  const [end, setEnd] = useState(new Date(props.event.end));

  const handleUpdate = () => {
    props.onUpdate({
      title,
      start: start.getTime(),
      end: end.getTime()
    });
  };

  return (
    <Modal show={true} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Event</Modal.Title>
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
        <Button variant="danger" onClick={props.onDelete}>
          Delete
        </Button>
        <Button variant="secondary" onClick={props.onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditEventModal;
