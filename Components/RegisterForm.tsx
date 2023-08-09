"use client";
import React, { useState } from "react";
import classes from "@/styles/register.module.css";
import { addUser } from "@/utils/userHelpers";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState("customer"); // Default value

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // Create an object with form data
    const formData = {
      username,
      email,
      password,
      password2 : confirmPassword,
      role : accountType,
    };
   // console.log("form data " , formData)
    try {
      const response = await addUser(formData);
      if (response) {
            router.push('/login');
      }
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  return (
    <div className={classes.register__container}>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
      <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
      <select onChange={(e) => setAccountType(e.target.value)}>
        <option value="customer">Customer</option>
        <option value="salonOwner">Salon Owner</option>
      </select>
      <button onClick={handleSubmit}>Create Account</button>
    </div>
  );
};

export default RegisterForm;
