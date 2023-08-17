import React from 'react'
import classes from "@/styles/appointmentsProfile.module.css"


import { fetchSalonAppointments } from '@/utils/AppointmentsHelpers'
import AppointmentsItems from './UI/AppointmentsItems'
interface Props {
    salon : string
}

const ApointmentsProfile = async ({salon} : Props) => {
    const appointments = await fetchSalonAppointments(salon)
   // console.log(appointments)
  return <div className={classes.profile__appointment}>
            <AppointmentsItems appointments={appointments} />
  </div>
}

export default ApointmentsProfile

