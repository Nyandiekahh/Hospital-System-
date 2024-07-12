import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const DoctorCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const now = moment();
    const selectedStart = moment(start);

    // Check if the selected slot is in the past or the current day
    if (selectedStart.isBefore(now, 'day')) {
      alert('You cannot set a schedule for a previous day.');
      return;
    }

    if (selectedStart.isSame(now, 'day')) {
      alert('You cannot set a schedule for the current day.');
      return;
    }

    const title = window.prompt('Enter the hospital name for this availability slot');
    if (title) {
      setEvents([
        ...events,
        {
          start,
          end,
          title,
        },
      ]);
    }
  };

  const handleSelectEvent = (event) => {
    const newTitle = window.prompt('Edit the hospital name', event.title);
    if (newTitle) {
      setEvents(events.map(e => e === event ? { ...e, title: newTitle } : e));
    }
  };

  return (
    <div>
      <h2>Doctor Availability Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }}
      />
    </div>
  );
};

export default DoctorCalendar;
