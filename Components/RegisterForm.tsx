import React from 'react'
import classes from "@/styles/register.module.css"



const RegisterForm = () => {
    return <div className={classes.register__container}>
    <input  placeholder='Username' />
    <input type="email" placeholder='Email' />
    <input type="password" placeholder='password' />
    <input type="password" placeholder='confirm password' />
    <select>
        <option value="customer">
            Customer
        </option>
        <option value="salonOwner">
            Salon Owner
        </option>
    </select>
    <button>
        Create Account
    </button>
</div>
}

export default RegisterForm