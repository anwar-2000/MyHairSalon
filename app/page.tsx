
import About from '@/Components/UI/About'
import Hero from '@/Components/UI/Hero'
import Testomenials from '@/Components/UI/Testomenials'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <Hero />
        <About />
        <Testomenials />
    </main>
  )
}
