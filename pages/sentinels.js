import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

var data = require("../crosshairs.json");


for(var i =0; i < data.length; i++){
  var obj = data[i];
  if(obj.player_info.team == "Sentinels"){
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
          <h1> Sentinels </h1>
        </div>

        <div className={styles.gridContainer}>
          <div className={styles.gridBox}>
            <div className={styles.gridBoxTop}>
              <h3>Tenz</h3>
              <button onClick={() => navigator.clipboard.writeText("Test")}>
                Copy
              </button>
            </div>
            <div className={styles.square}></div>
          </div>
          <div className={styles.gridBox}>
            <div className={styles.gridBoxTop}>
              <h3>Kanpeki</h3>
              <button onClick={() => navigator.clipboard.writeText("Test")}>
                Copy
              </button>
            </div>
            <div className={styles.square}></div>
          </div>
          <div className={styles.gridBox}>
            <div className={styles.gridBoxTop}>
              <h3>Shazham</h3>
              <button onClick={() => navigator.clipboard.writeText("Test")}>
                Copy
              </button>
            </div>
            <div className={styles.square}></div>
          </div>
          <div className={styles.gridBox}>
            <div className={styles.gridBoxTop}>
              <h3>Sick</h3>
              <button onClick={() => navigator.clipboard.writeText("Test")}>
                Copy
              </button>
            </div>
            <div className={styles.square}></div>
          </div>
          <div className={styles.gridBox}>
            <div className={styles.gridBoxTop}>
              <h3>Dapr</h3>
              <button onClick={() => navigator.clipboard.writeText("Test")}>
                Copy
              </button>
            </div>
            <div className={styles.square}></div>
          </div>
        </div>
      </main>
    </div>
  );
}
