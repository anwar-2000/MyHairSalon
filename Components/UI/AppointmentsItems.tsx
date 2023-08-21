"use client"
import React, { useState } from 'react';
import { format, isToday, isTomorrow } from 'date-fns';

import classes from '@/styles/appointmentsItems.module.css';

const AppointmentsItems = ({ appointments }: any) => {
  const [filteredAppointments, setFilteredAppointments] = useState(appointments);
  const [filter, setFilter] = useState('all');

  const handleTodayClick = () => {
    const todayAppointments = appointments.filter((item: any) => isToday(new Date(item.date)));
    setFilteredAppointments(todayAppointments);
    setFilter('today');
  };

  const handleTomorrowClick = () => {
    const tomorrowAppointments = appointments.filter((item: any) => isTomorrow(new Date(item.date)));
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
        <button onClick={handleTodayClick}>Aujourd&apos;hui</button>
        <button onClick={handleTomorrowClick}>Demain</button>
        <button onClick={handleAllClick}>Tous</button>
      </div>
      <div className={classes.appointments__list}>
        {filteredAppointments.map((item: any, index: number) => (
          <div key={index} className={classes.appointment__item}>
            <div className={classes.appointment__info}>
              <p><strong>Client:</strong> {item.customer}</p>
              <p><strong>La coupe:</strong> {item.haircut}</p>
              <p><strong>Artiste:</strong> {item.artist}</p>
              <p><strong>Heure:</strong> {format(new Date(item.date), 'HH:mm')}</p>
              <p><strong>Date:</strong> {format(new Date(item.date), 'dd-MM-yyyy')}</p>
            </div>
          </div>
        ))}
        {filter === 'today' && filteredAppointments.length === 0 && <p>No appointments for today.</p>}
        {filter === 'tomorrow' && filteredAppointments.length === 0 && <p>No appointments for tomorrow.</p>}
      </div>
    </div>
  );
};

export default AppointmentsItems;
