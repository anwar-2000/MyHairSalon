"use client"

import React, { useState } from 'react'
import classes from "@/styles/personalInfo.module.css"
import {AiFillEdit} from "react-icons/ai"
import { updateUser } from '@/utils/userHelpers';
interface Props {
    username : string;
    email : string;
    role : string;
}

const PersonalInfo:React.FC<Props> = ({username , role , email}) => {

    const [updatedEmail, setupdatedEmail] = useState(email)
    const [updatedusername, setupdatedUsername] = useState(username)
    const [updatedRole, setupdatedRole] = useState(role)

    async function EditPersonalInfos(e : any , email : string) {
        e.preventDefault();


        let formData = {
            username : updatedusername,
            email : updatedEmail,
            role : updatedRole,
        }
        //console.log(formData)
        let updatedUser = await updateUser(email,formData);

        if(updatedUser){
            //console.log(updatedUser);
        }
      }

  return <form onSubmit={(e)=>EditPersonalInfos(e,email)}>
        <div className={classes.personalinfo__container}>
        <div className={classes.item}>
            <input defaultValue={username} onChange={(e)=>setupdatedUsername(e.target.value)}/>
            
        </div>
        <div className={classes.item} >
            <select onChange={(e)=>setupdatedRole(e.target.value)} defaultValue={role}>
            <option value="customer">Customer</option>
            <option value="salonOwner">Salon Owner</option>
            </select>
            
        </div>
        <div className={classes.item}>
            <input defaultValue={email} onChange={(e)=>setupdatedEmail(e.target.value)}/>
            
        </div>
        <button >
            SAVE
        </button>
        </div>
  </form>
 
 
}

export default PersonalInfo