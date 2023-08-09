import React from 'react'
import classes from "@/styles/personalInfo.module.css"
import {AiFillEdit} from "react-icons/ai"
interface Props {
    username : string;
    email : string;
    role : string;
}

const PersonalInfo:React.FC<Props> = ({username , role , email}) => {
  return <div className={classes.personalinfo__container}>
        <div className={classes.item}>
            <input value={username} />
            <AiFillEdit color='black' size={20}/>
        </div>
        <div className={classes.item}>
            <input value={role} />
            <AiFillEdit color='black' size={20}/>
        </div>
        <div className={classes.item}>
            <input value={email} />
            <AiFillEdit color='black' size={20}/>
        </div>
        <button>
            SAVE
        </button>
  </div>
}

export default PersonalInfo