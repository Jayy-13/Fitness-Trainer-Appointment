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
    <div>
      <label>Date: </label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <label>Time: </label>
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Add Appointment</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
