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
        <Testomenials />    
      </div>
     
      
}
