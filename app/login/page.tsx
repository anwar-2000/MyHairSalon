import React from 'react'
import classes from "@/styles/pages/loginPage.module.css"
import LoginForm from '@/Components/LoginForm'
import { createMongoConnection } from '@/database/Conn';
interface Props {}

const Index = () => {
  createMongoConnection();
  return <div className={classes.loginPage__container}>
      <h1>Welcome !</h1>
      <LoginForm />
  </div>
}
export default Index