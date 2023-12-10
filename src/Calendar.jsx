import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";


import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function CalendarComp({ clients, backToClients }) {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState("month");
  // const events = clients.map((client) => ({
  //   title: `${client.firstName} ${client.lastName}`,
  //   start: new Date(client.appointments.date + " " + client.appointments.time),
  //   end: new Date(client.appointments.date + " " + client.appointments.time),
  // }));

  const events = clients.flatMap((client) =>
    client.appointments.map((appointment) => {
      const startDateTime = new Date(
        `${appointment.date} ${moment(appointment.time, "HH:mm").format("HH:mm")}`
      );
      const endDateTime = new Date(startDateTime);
    endDateTime.setHours(startDateTime.getHours() + 1);
      
      return {
        title: `${client.firstName} ${client.lastName}`,
      start: startDateTime,
      end: endDateTime,
      }
    })
  )

  return (
    <div style={{ height: "500px" }} className="calendar">
      <button onClick={backToClients}>Back to Clients Page</button>
      <Calendar
        localizer={localizer}
        events={events}
      />
    </div>
  );
}
