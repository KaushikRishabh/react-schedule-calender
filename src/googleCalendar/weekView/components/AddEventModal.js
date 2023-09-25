import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddEventModal(props) {
  const formik = useFormik({
    initialValues: {
      title: "",
      start: props.eventStart,
      end: props.eventEnd,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      start: Yup.date().required("Required"),
      end: Yup.date()
        .required("Required")
        .min(Yup.ref("start"), "End date should be after start date"),
    }),
    onSubmit: (values) => {
      props.onEventAdd(values);
      formik.resetForm();
      props.onHide();
    },
  });

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Event</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="text-danger">{formik.errors.title}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Start</label>
            <DatePicker
              selected={formik.values.start}
              onChange={(date) => formik.setFieldValue("start", date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">End</label>
            <DatePicker
              selected={formik.values.end}
              onChange={(date) => formik.setFieldValue("end", date)}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
              className="form-control"
            />
          </div>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default AddEventModal;
