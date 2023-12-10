import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

export default function EditAppointmentForm({ show, onHide, onSubmit}) {
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleEditSubmit = () => {
    if (newDate && newTime) {
      onSubmit(newDate, newTime);
      onHide();
      setNewDate('');
      setNewTime('');
    }
  };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleSubmit = () => {
//     if (formData.date && formData.time) {
//       onSubmit(formData);
//     }
//   };

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "fixed", margin: "7rem 0.5rem" }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Edit Appointment Form</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label htmlFor="">Date : </label>
          <input
            type="date"
            name="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
          />
          <br />
          <label htmlFor="">Time : </label>
          <input
            type="time"
            name="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Add Client
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
