import BestSalon from '@/Components/BestSalon'
import About from '@/Components/UI/About'
import Hero from '@/Components/UI/Hero'
import Testomenials from '@/Components/UI/Testomenials'
import { createMongoConnection } from '@/database/Conn'
import classes from './page.module.css'

export default async function Home() {
        createMongoConnection();
  return <div className={classes.home__container}>
        <Hero />
        <About />
        <BestSalon name={'The Gentelman'} url={"http://res.cloudinary.com/dbaiwyu3e/image/upload/v1692484412/zbtkrtsdoxrffrsjkpsp.jpg"} location={'Poitiers'} reviews={15} />
        <Testomenials />    
      </div>
     
      
}
