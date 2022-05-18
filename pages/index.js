import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const data = require("../crosshairs.json");

export const getStaticProps = async() =>{
  return {
    props: {Crosshairs:data}
  }
}



export default function Home({Crosshairs}) {
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
          <div className={styles.gridContainer}>
            {Crosshairs.map(Crosshair => (  
            <div key={Crosshair.player_info.name}>
              <div className={styles.gridBox}>
            <div className={styles.gridBoxTop}>
                <h3>{`${Crosshair.player_info.name} | ${Crosshair.player_info.team} `}</h3>
                <button onClick={() => navigator.clipboard.writeText("Test")}>
                Copy
              </button>
                
            </div>
            <div className={styles.square}></div>
            </div>
            </div>
          ))}
          </div>
        

        
      </main>
 

    </div>
  )
}
