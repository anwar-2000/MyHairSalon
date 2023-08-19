"use client"
import React, { useState } from 'react'
import classes from "@/styles/login.module.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { signIn } from 'next-auth/react';
import Link from 'next/link';



const LoginForm = () => {

  const [email,setEmail] = useState<string>('')
  const [password,setPassword] = useState<string>('')
    

    
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(email)
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
   // console.log(password)
  };
  
  return <div className={classes.login__container}>
        <input type="email" placeholder='Email' onChange={handleEmailChange}/>
        <input type="password" placeholder='password' onChange={handlePasswordChange} />
        <button onClick={()=>HandleClick(email,password)}>
            Log In
        </button>
        <Link href={'/create-account'} style={{fontSize : "0.8rem",textDecoration : "underline"}}>Je veux créer un Compte</Link>
  </div>
}
export default LoginForm;



async function HandleClick(email: string, password: string) {
  console.log(email, password);
  if (email === '' || password === '') {
      toast.info("Veuillez remplir le formulaire !", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored"
      });
      return;
  }

  try {
      let res = await signIn('credentials', {
          email,
          password,
          callbackUrl: '/profile',
      });
      //console.log('response ',res)
      return res;
  } catch (error) {
      console.log(error);
      toast.error("Une erreur s'est produite lors de la connexion. Veuillez réessayer ultérieurement.", {
          position: toast.POSITION.TOP_RIGHT,
          theme: "colored"
      });
  }
}
