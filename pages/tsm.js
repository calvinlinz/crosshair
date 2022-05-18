import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Team.module.css'


var data = require("../crosshairs.json");


for(var i =0; i < data.length; i++){
  var obj = data[i];
  if(obj.player_info.team == "TSM"){
    console.log(`name:  ${obj.player_info.name}, Team: ${obj.player_info.team}`);
  }
}

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Crosshair</title>
        <meta name="description" content="Cross hair website for Valorant" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1> TSM </h1>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.gridBox}>
            <div className={styles.gridBoxTop}>
              <h3>Rossy</h3>
              <button onClick={() => navigator.clipboard.writeText("Test")}>Copy</button>
            </div>
            <div className={styles.square}>
            </div>
          </div>
          <div className={styles.gridBox}>
            <div className={styles.gridBoxTop}>
              <h3>seven</h3>
              <button onClick={() => navigator.clipboard.writeText("Test")}>Copy</button>
            </div>
            <div className={styles.square}>
            </div>
          </div>
          <div className={styles.gridBox}>
            <div className={styles.gridBoxTop}>
              <h3>gMd</h3>
              <button onClick={() => navigator.clipboard.writeText("Test")}>Copy</button>
            </div>
            <div className={styles.square}>
            </div>
          </div>
          <div className={styles.gridBox}>
            <div className={styles.gridBoxTop}>
              <h3>Subroza</h3>
              <button onClick={() => navigator.clipboard.writeText("Test")}>Copy</button>
            </div>
            <div className={styles.square}>

            </div>
          </div>
          <div className={styles.gridBox}>
            <div className={styles.gridBoxTop}>
              <h3>Corey</h3>
              <button onClick={() => navigator.clipboard.writeText("Test")}>Copy</button>
            </div>
            <div className={styles.square}>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}