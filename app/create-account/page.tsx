import RegisterForm from '@/Components/RegisterForm'
import React from 'react'
import classes from "@/styles/pages/registerPage.module.css"
interface Props {}

const Index = () => {
  return <div className={classes.registerPage__container}>
        <h1>Create Account </h1>
        <RegisterForm />
  </div>
}

export default Index