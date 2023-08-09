import React from 'react'
import classes from "@/styles/login.module.css"


const LoginForm = () => {
  return <div className={classes.login__container}>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='password' />
        <button>
            Log In
        </button>
  </div>
}

export default LoginForm