import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className = "page">
      <Head>
        <title>Crosshair</title>
        <meta name="description" content="Cross hair website for Valorant" />
      </Head>

      <main className={styles.main}>
        <div className = {styles.header}>
          <h1>Crosshair Website</h1>
          <p>Welcome to my crosshair website for Valorant</p>
        </div>
      </main>
 

    </div>
  )
}
