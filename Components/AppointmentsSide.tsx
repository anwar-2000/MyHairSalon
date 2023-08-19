import React from 'react'
import classes from "@/styles/appointmentsSide.module.css"


interface Props {
    appointments : any[]
}

const AppointmentsSide:React.FC<Props> = ({appointments}) => {
  return <div className={classes.appointments__container}>
            
  </div>
}

export default AppointmentsSide