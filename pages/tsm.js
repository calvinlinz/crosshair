import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Crosshair</title>
        <meta name="description" content="Cross hair website for Valorant" />
      </Head>

      <main className={styles.main}>
        <div className = {styles.header}>
            <h1> TSM </h1>
        </div>

        <div className = {styles.gridContainer}>
          <div className = {styles.gridBox}>
            <h3>gMd</h3>
            <div className = {styles.square}>
             
             </div>
          </div>
          <div className = {styles.gridBox}>
           <h3>seven</h3>
           <div className = {styles.square}>
           </div>

          </div>
          <div className = {styles.gridBox}>
            <h3>Subroza</h3>
            <div className = {styles.square}>
             
             </div>
          </div>
          <div className = {styles.gridBox}>
            <h3>Rossy</h3>
            <div className = {styles.square}>
            
             </div>
          </div>
          <div className = {styles.gridBox}>
            <h3>Corey</h3>
            <div className = {styles.square}>
             
           </div>
          </div>
        </div>
      </main>
     
    </div>
  )
}