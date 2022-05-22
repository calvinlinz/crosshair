import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Team.module.css";

const data = require("../Crosshair/crosshairs.json");

export const getStaticProps = async () => {
  return {
    props: { Crosshairs: data }
  }
}


export default function Home({ Crosshairs }) {
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
