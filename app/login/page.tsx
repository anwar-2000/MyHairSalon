import React from 'react'
import classes from "@/styles/pages/loginPage.module.css"
import LoginForm from '@/Components/LoginForm'
interface Props {}

const Index = () => {
  return <div className={classes.loginPage__container}>
      <h1>Welcome !</h1>
      <LoginForm />
  </div>
}
export default Index