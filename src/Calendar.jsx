import React from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// BigCalendar.setLocalizermomentLocalizer(moment));

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

export default function CalendarComp({clients}){
    return (
        <div style={{ height: '100vw', position: 'relative' }} className='calendar'>
            <button >Back to Clients Page</button>
          <Calendar
            localizer={localizer}
            events={clients.map(client => ({
              title: `${client.firstName} ${client.lastName}`,
              start: new Date(client.appointments.date + ' ' + client.appointments.time),
              end: new Date(client.appointments.date + ' ' + client.appointments.time),
            }))}
          />
        </div>
      );
}