import React, { useState } from "react";
import ClientForm from "./ClientForm";
import AppointmentForm from "./AppointmentForm";
import EditAppointmentForm from "./EditAppointmentForm";
import "./ClientList.css";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import CalendarComp from "./Calendar";

export default function ClientList() {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [addClient, setAddClient] = useState(false);
  const [isEditingAppointment, setIsEditingAppointment] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [editingField, setEditingField] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleEditAppointment = (clientIndex, appIndex) => {
    setSelectedClient(null);
    setSelectedAppointment({
      clientIndex,
      appIndex,
      date: clients[clientIndex].appointments[appIndex].date,
      time: clients[clientIndex].appointments[appIndex].time,
    });
    setIsEditingAppointment(true);
  };

  const handleEditAppointmentSubmit = (newDate, newTime) => {
    if (selectedAppointment) {
      const { clientIndex, appIndex } = selectedAppointment;
      setClients((prevClients) => {
        const newClients = [...prevClients];
        newClients[clientIndex].appointments[appIndex].date = newDate;
        newClients[clientIndex].appointments[appIndex].time = newTime;
        return newClients;
      });
      setSelectedAppointment(null);
      setIsEditingAppointment(false);
    }
  };

  const handleAddClient = (client) => {
    const newClient = {
      firstName: client.firstName,
      lastName: client.lastName,
      location: client.location,
      appointments: [
        {
          date: client.appointment.date,
          time: client.appointment.time,
        },
      ],
    };
    setClients((prevClients) => [...prevClients, newClient]);
    setAddClient(false);
  };

  const handleAddAppointment = (clientIndex, appointment) => {
    setClients((prevClients) => {
      const newClients = [...prevClients];
      newClients[clientIndex].appointments.push(appointment);
      return newClients;
    });
    setSelectedClient(null);
  };

  const handleDeleteAppointment = (clientIndex, appIndex) => {
    setClients((prevClients) => {
      const newClients = [...prevClients];
      const client = { ...newClients[clientIndex] };
      client.appointments = client.appointments.filter(
        (_, index) => index !== appIndex
      );
      newClients[clientIndex] = client;
      if (client.appointments.length === 0) {
        newClients.splice(clientIndex, 1);
      }
      return newClients;
    });
  };

  const handleEditClient = (clientIndex, field, value) => {
    setClients((prevClients) => {
      const newClients = [...prevClients];
      newClients[clientIndex][field] = value;
      return newClients;
    });
  };

  const handleStartEditing = (field) => {
    setEditingField(field);
  };

  const handleFinishEditing = () => {
    setEditingField(null);
  };

  const handleBackToClients = () => {
    setShowCalendar(false);
  };

  return (
    <div>
      {showCalendar ?  (
        <CalendarComp
        clients={clients} 
        backToClients = {handleBackToClients} />
      ) : (
        <div>
          <h2 id="clientList">Client List</h2>
          <button id="calendarBtn" onClick={() => setShowCalendar(true)} >Show Calendar</button>
          <Table responsive="sm" className="table">
        <thead id="thead">
          <tr>
            <th className="th">First Name</th>
            <th className="th">Last Name</th>
            <th className="th">Location</th>
            <th className="th">Appointments</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => {
            return (
              <tr key={index} id="tr">
                <td
                  className="td"
                >
                  {editingField === "firstName" ? (
                    <Form.Control
                      type="text"
                      value={client.firstName}
                      onChange={(e) =>
                        handleEditClient(
                          index,
                          "firstName",
                          e.target.value
                        )
                      }
                      onBlur={handleFinishEditing}
                    />
                  ) : (
                    <span onClick={() => handleStartEditing("firstName")} onBlur={handleFinishEditing}>{client.firstName}</span>
                  )}
                </td>
                <td
                  className="td"
                >
                  {editingField === 'lastName' ? (
                  <Form.Control
                    type="text"
                    value={client.lastName}
                    onChange={(e) => handleEditClient(index, 'lastName', e.target.value)}
                    onBlur={() => handleFinishEditing}
                  />
                ) : (
                  <span onClick={() => handleStartEditing("lastName")} onBlur={handleFinishEditing}>{client.lastName}</span>
                )}
                </td>
                <td
                  className="td"
                >
                  {editingField === 'location' ? (
                  <Form.Control
                    type="text"
                    value={client.location}
                    onChange={(e) => handleEditClient(index, 'location', e.target.value)}
                    onBlur={() => handleFinishEditing}
                  />
                ) : (
                  <span onClick={() => handleStartEditing("location")} onBlur={handleFinishEditing}>{client.location}</span>
                )}
                </td>
                <td className="td">
                  {client.appointments.map((appointment, appIndex) => (
                    <div key={appIndex} className="appointmentDiv">
                      <span id="appointment">
                        {appointment.date} - {appointment.time}
                      </span>
                      <hr />

                      <Button
                        variant="light"
                        className="button"
                        id="editApp"
                        onClick={() => handleEditAppointment(index, appIndex)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="light"
                        className="button"
                        id="delApp"
                        onClick={() => handleDeleteAppointment(index, appIndex)}
                      >
                        Delete
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="light"
                    id="addAppBtn"
                    onClick={() => setSelectedClient({ ...client, index })}
                  >
                    Add Appointment
                  </Button>
                </td>
                {/* <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <button onClick={() => setAddClient(true)} id="addClient" >
        Add New Client
      </button>
        </div>
      )}
      

      {addClient && (
        <ClientForm
          onSubmit={(client) => handleAddClient(client)}
          onCancel={() => setAddClient(false)}
        />
      )}
      {selectedClient && (
        <AppointmentForm
          client={selectedClient}
          onSubmit={(appointment) =>
            handleAddAppointment(selectedClient.index, appointment)
          }
          onCancel={() => setSelectedClient(null)}
        />
      )}

      {isEditingAppointment && (
        <EditAppointmentForm
          show={isEditingAppointment}
          onHide={() => setIsEditingAppointment(false)}
          onSubmit={handleEditAppointmentSubmit}
          // onCancel = {() => setSelectedApp(null)}
        />
      )}

       {/* {showCalendar && (
          <CalendarComp
            clients={clients}
        />
      )} */}
    </div>
  );
}
