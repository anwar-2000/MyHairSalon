import About from '@/Components/UI/About'
import Hero from '@/Components/UI/Hero'
import Testomenials from '@/Components/UI/Testomenials'
import { createMongoConnection } from '@/database/Conn'
import styles from './page.module.css'

export default async function Home() {
  createMongoConnection();
  return (
    <main className={styles.main}>
        <Hero />
        <About />
        <Testomenials />
    </main>
  )
}
