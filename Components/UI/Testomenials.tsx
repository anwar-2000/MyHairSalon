import React from 'react'
import classes from "@/styles/testomenials.module.css"
import {BsArrowLeft , BsArrowRight } from "react-icons/bs"


const Testomenials = () => {
  return <div className={classes.testomenials__container}>
        <div className={classes.arrows}>
                <BsArrowLeft color='black' size={25} />

                <BsArrowRight color='black'  size={25} />
        </div>
        <div className={classes.testomenial}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus iusto tenetur beatae non id, architecto hic culpa odit deleniti accusamus officia minima aliquam labore doloremque.</p>
                <small> - John Doe -</small>
        </div>
  </div>
}

export default Testomenials