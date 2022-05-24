import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { jsonToVal } from "../jsonToVal";
import { useState } from "react";
import React from 'react';
import CrosshairCanvas from "../Crosshair/CrosshairCanvas";


export const getStaticProps = async () => {
  const data = require("../Crosshair/crosshairs.json");
  return {
    props: { Crosshairs: data },
  };
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

          <input className = "search"
            placeholder="Search" type="text"
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
                      navigator.clipboard.writeText(jsonToVal(Crosshair))
                    }
                  >
                    Copy
                  </button>
                </div>
                <div className={styles.square}>
                  <CrosshairCanvas player = {Crosshair}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
