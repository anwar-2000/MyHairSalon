import React from 'react'
import classes from "@/styles/usersside.module.css"
interface Props {
    users : any[]
}

const UsersSide:React.FC<Props> = ({users}) => {
  return <div className={classes.userside__container}>

  </div>
}

export default UsersSide