"use client";

import React, { useState } from "react";
import classes from "@/styles/bookingform.module.css";
import ReactCalendar, { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { add, format } from "date-fns";
import { days } from "@/utils/salonHelpers";

/**
 *
 * fetching days and closing days of the salon and pass it here as props
 */

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}
const BookingForm = ({ artists , weekends , closedDays , openDays }: any) => {

  const [showForm, setshowForm] = useState(false);
  const [artistChosen, setArtistChosen] = useState("");
  const [openDay, setOpenDay] = useState(openDays[0]);
  console.log(openDay,closedDays,weekends);
  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });



//extracting the weekends
const weekend1 = days.indexOf(weekends[0]);
const weekend2 = days.indexOf(weekends[1]);

//extracting the closed day
const closedThisDay = closedDays[0].date;



const tileClassName = ({ date = new Date() }) => {
  if (date.getDay() === weekend1 || date.getDay() === weekend2) {
    return 'weekend disabled';
  }
  return null;
};


// Extracting hours from startTime and endTime
const startHour = parseInt(openDay.startTime.split(':')[0], 10);
const endHour = parseInt(openDay.endTime.split(':')[0], 10);



  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const begening = add(justDate, { hours: startHour });
    const end = add(justDate, { hours: endHour });
    const interval = 30; // minutes

    const times = [];

    for (let i = begening; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }

    return times;
  };

  const times = getTimes();
  //console.log(date.justDate)

  const handleChooseArtist = (artist: string) => {
    setArtistChosen(artist);
  };
  return (
    <div className={classes.form__container}>
      <div className={classes.appintments}>
        <button onClick={() => setshowForm(true)}>MAKE AN APPOINTMENT</button>
      </div>
      {showForm && (
        <>
          <div className={classes.artists}>
            {artists.map((artist: any, index: number) => (
              <button
                key={index}
                onClick={() => handleChooseArtist(artist.name)}
              >
                {artist.name}
              </button>
            ))}
          </div>
          {artistChosen !== "" && (
            <div className={classes.form}>
              {date.justDate ? (
                <div>
                  {times &&
                    times.map((time, index) => (
                      <div key={`time-${index}`}>
                        <button
                          onClick={() =>
                            setDate((prev) => ({ ...prev, dateTime: time }))
                          }
                        >
                          {format(time, "kk:mm")}
                        </button>
                      </div>
                    ))}
                </div>
              ) : (
                <Calendar
                  minDate={new Date()}
                  /**closed day */
                  tileDisabled={({ date }) => date.toDateString() === closedThisDay.toDateString()}
                  view="month"
                  onClickDay={(date) =>
                    setDate((prev) => ({ ...prev, justDate: date }))
                  }
                  tileClassName={tileClassName}
                />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BookingForm;
