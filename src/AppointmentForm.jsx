import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AppointmentForm({client, onSubmit, onCancel}) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (formData.date && formData.time) {
      onSubmit(formData);
    }
  };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "fixed", margin: "7rem 0.5rem" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Add Appointment Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label htmlFor="">Date : </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="">Time : </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>
            Close
          </Button>
          <Button variant="light" onClick={handleSubmit}>
            Add Client
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
