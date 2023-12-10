import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ClientForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    location: "",
    appointment: {
      date: "",
      time: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      appointment: {
        ...prevData.appointment,
        [name]: value,
      },
    }));
  };

  const handleSubmit = () => {
    if (formData.firstName && formData.lastName && formData.location && formData.appointment.date && formData.appointment.time) {
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
          <Modal.Title>Add Client Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label htmlFor="">First Name : </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="">Last Name : </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="">Location : </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <h3>Appointment</h3>
          <label htmlFor="">Date : </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleAppointmentChange}
          />
          <br />
          <label htmlFor="">Time : </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleAppointmentChange}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Client
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
