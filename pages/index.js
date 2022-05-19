import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { jsonToVal } from "../jsonToVal";
import { useState } from "react";

const data = require("../crosshairs.json");

export const getStaticProps = async () => {
  return {
    props: { Crosshairs: data },
  };
};
export const copy = (Crosshairs, name) => {
  jsonToVal(Crosshairs, name);
  popUp(name);
};
export const popUp = (name) => {
  alert(`Copied ${name}'s crosshair to clipboard`);
};

export default function Home({ Crosshairs }) {
  const [query, setQuery] = useState("");
  return (
    <div className="page">
      <Head>
        <title>Crosshair</title>
        <meta name="description" content="Cross hair website for Valorant" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Crosshair Website</h1>
          <p>Welcome to my crosshair website for Valorant</p>

          <input
            placeholder="Search"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className={styles.gridContainer}>
          {Crosshairs.filter((Crosshair) => {
            if (query === "") {
              return Crosshair;
            } else if (
              Crosshair.player_info.name
                .toLowerCase()
                .startsWith(query.toLowerCase())
            ) {
              return Crosshair;
            }
          }).map((Crosshair) => (
            <div key={Crosshair.player_info.name}>
              <div className={styles.gridBox}>
                <div className={styles.gridBoxTop}>
                  <h3>{`${Crosshair.player_info.name} | ${Crosshair.player_info.team} `}</h3>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        jsonToVal(Crosshairs, Crosshair.player_info.name)
                      )
                    }
                  >
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
  );
}
