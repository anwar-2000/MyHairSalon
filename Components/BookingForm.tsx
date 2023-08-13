"use client";

import React, { useState } from "react";
import classes from "@/styles/bookingform.module.css";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { add, format } from "date-fns";

/**
 *
 * fetching days and closing days of the salon and pass it here as props
 */

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}
const BookingForm = ({ artists }: any) => {
  const [showForm, setshowForm] = useState(false);
  const [artistChosen, setArtistChosen] = useState("");

  const [date, setDate] = useState<DateType>({
    justDate: null,
    dateTime: null,
  });

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const begening = add(justDate, { hours: 9 });
    const end = add(justDate, { hours: 17 });
    const interval = 30; // minutes

    const times = [];

    for (let i = begening; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }

    return times;
  };

  const times = getTimes();

  console.log(date.dateTime);

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
                <ReactCalendar
                  minDate={new Date()}
                  /**days and closed days */
                  view="month"
                  onClickDay={(date) =>
                    setDate((prev) => ({ ...prev, justDate: date }))
                  }
                  className={classes.react_calendar}
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
