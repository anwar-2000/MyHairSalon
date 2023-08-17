"use client"
import React, { useState } from 'react';
import { format, isToday, isTomorrow } from 'date-fns';

import classes from "@/styles/appointmentsItems.module.css"


const AppointmentsItems = ({ appointments } : any) => {
  const [filteredAppointments, setFilteredAppointments] = useState(appointments);
  const [filter, setFilter] = useState('all');

  const handleTodayClick = () => {
    const todayAppointments = appointments.filter((item : any) => isToday(new Date(item.date)));
    setFilteredAppointments(todayAppointments);
    setFilter('today');
  };

  const handleTomorrowClick = () => {
    const tomorrowAppointments = appointments.filter((item : any) => isTomorrow(new Date(item.date)));
    setFilteredAppointments(tomorrowAppointments);
    setFilter('tomorrow');
  };

  const handleAllClick = () => {
    setFilteredAppointments(appointments);
    setFilter('all');
  };

  return (
    <div className={classes.container}>
        <div className={classes.buttons}>
      <button onClick={handleTodayClick}>Today</button>
      <button onClick={handleTomorrowClick}>Tomorrow</button>
      <button onClick={handleAllClick}>All</button>
      </div>
      <div className={classes.table__container}>
      <table>
        <thead>
          <tr>
            <th>Client</th>
            <th>La coupe</th>
            <th>Artiste</th>
            <th>Heure</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((item :any, index : number) => (
            <tr key={index}>
              <td>{item.customer}</td>
              <td>{item.haircut}</td>
              <td>{item.artist}</td>
              <td>{format(new Date(item.date), 'HH:mm')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     
      {filter === 'today' && filteredAppointments.length === 0 && <p>No appointments for today.</p>}
      {filter === 'tomorrow' && filteredAppointments.length === 0 && <p>No appointments for tomorrow.</p>}
    </div>
  );
};

export default AppointmentsItems;
