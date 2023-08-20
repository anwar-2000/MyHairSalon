"use client";

import React, { useState } from "react";
import classes from "@/styles/bookingform.module.css";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { add, format } from "date-fns";
import { days } from "@/utils/salonHelpers";
import { createAppointment } from "@/utils/AppointmentsHelpers";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useRouter} from "next/navigation";
/**
 *
 * fetching days and closing days of the salon and pass it here as props
 */

interface DateType {
  justDate: Date | null;
  dateTime: Date | null;
}
const BookingForm = ({ salonName , owner,  session , artists , image , weekends , closedDays , openDays , haircuts , appointments }: any) => {
  const router = useRouter()
  const [showForm, setshowForm] = useState(false);
  const [artistChosen, setArtistChosen] = useState("");
  const [openDay, setOpenDay] = useState(openDays[0]);
  const [haircutChosen, setHaircutChosen] = useState("");
 // console.log(appointments);
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
    const interval = 45; // minutes

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

  const handleConfirmation = async () =>{
    let dateObject = new Date(date.dateTime!);
    dateObject.setHours(dateObject.getHours() + 1);
    let updatedDate = dateObject.toISOString();
    let formData = {
      owner,
      salon : salonName ,
      customer : session?.user?.email,
      artist : artistChosen,
      date : date.dateTime,
      haircut : haircutChosen
    }
    //console.log(formData)
    const response = await createAppointment(formData);
    if(!response){
        toast.info('Error While Booking',{
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored"
        });
    }else if(response){
      let email = await fetch('/api/sendmail',{
        method : "POST",
        headers :{ "Content-Type" : "application/json"},
        body : JSON.stringify({
          ...formData,
          date : updatedDate,
          lien : image,
          client : session?.user?.email
        })
      })
      email  && toast.info(`Check Your Email For A Receipt`,{
        position: toast.POSITION.TOP_RIGHT,
        theme: "colored"
      });
    
      router.push('/profile')
    }
  }

  //console.log(appointments)

  const isSlotTaken = (selectedDate: Date, selectedTime: Date, selectedArtist: string) => {
    const isTaken = appointments.some((appointment: any) => {
      const appointmentDate = new Date(appointment.date);
      const isSameDate = appointmentDate.toDateString() === selectedDate.toDateString();
      const isSameTime = format(appointmentDate, "kk:mm") === format(selectedTime, "kk:mm");
      const isSameArtist = appointment.artist === selectedArtist;
      
      return isSameDate && isSameTime && isSameArtist;
    });
    
    return isTaken;
  };
  


  return (
    <div className={classes.form__container}>
      <div className={classes.appintments}>
        <button onClick={() => setshowForm(true)}>MAKE AN APPOINTMENT</button>
      </div>
      {showForm && (
        <>
         {artistChosen === "" && <div className={classes.artists}>
            {artists.map((artist: any, index: number) => (
              <button
                key={index}
                onClick={() => handleChooseArtist(artist.name)}
              >
                {artist.name}
              </button>
            ))}
          </div>}
          {artistChosen !== "" && (
            <div className={classes.form}>
              {date.justDate ? (
               <div className={classes.times}>
                {times &&
    times
      .filter((time) => isSlotTaken(date.justDate as Date, time, artistChosen))
      .map((time, index) => (
        <button
          key={`time-${index}`}
          disabled={true}
          className='taken'
        >
          {format(time, "kk:mm")}
        </button>
    ))}
               {times &&
                 times
                   .filter((time) => !isSlotTaken(date.justDate as Date, time, artistChosen))
                   .map((time, index) => (
                     <button
                       key={`time-${index}`}
                       onClick={() =>
                         setDate((prev) => ({ ...prev, dateTime: time }))
                       }
                     >
                       {format(time, "kk:mm")}
                     </button>
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
          {date.dateTime &&
            <select name="" id="" onChange={(e)=>setHaircutChosen(e.target.value)}>
              <option value="choose" disabled selected>
                     Choose a haircut
               </option>
                {haircuts.map((haircut:any,index : number)=>(
                    <option key={index} value={haircut.name} >{haircut.name}</option>
                ))}
            </select>
          }
          {haircutChosen !== "" && (
                <div className={classes.confirm}>
                      <h5>{session.user.email}</h5>
                      <h6>{artistChosen}</h6>
                      <h6>{haircutChosen}</h6>
                      <h6>{date.dateTime && date.dateTime.toLocaleString()}</h6>
                      <button onClick={handleConfirmation}>
                          Confirm
                      </button>

                </div>
            )}
        </>
      )}
    </div>
  );
};

export default BookingForm;


