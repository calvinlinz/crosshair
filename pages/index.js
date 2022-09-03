import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { jsonToVal } from "../jsonToVal";
import { useEffect, useState } from "react";
import React from 'react';
import CrosshairCanvas from "../Crosshair/CrosshairCanvas";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SketchPicker} from 'react-color';

export const getStaticProps = async () => {
  const data = require("../Crosshair/crosshairs.json");
  return {
    props: { Crosshairs: data },
  };
};


export default function Home({ Crosshairs }) {
  const [query, setQuery] = useState("");
  const [background, setBackground] = useState("");
  const [currentTeam, setTeam] = useState("");  


  const teams = ["All"];
  let count = 1;
  Crosshairs.forEach((crosshair) =>{
    if(!teams.includes(crosshair.player_info.team)){
      teams[count] = crosshair.player_info.team;
      count++;
    }
  })

  function handleTeam(event){
    setTeam({value:event.target.value});
    console.log({value:event.target.value})
  }

  //WIP
  function handleChange(event) {
    setBackground({value: event.target.value});
  }


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
          <label>Background</label>
          <select className = {styles.background} value = {background.value} onChange={handleChange}>
              <option value = "custom">Custom</option>
              <option value = "range">Range</option>
             </select>

          
          <div className = {styles.teams} >
            <label>Team</label>
            <select name = "teamSelector" value = {currentTeam.value} placeholder = {currentTeam} onChange={handleTeam}>
              {teams.map((team)=>{
                  return <option value ={team}> {team}</option>
                })
              }
              </select>
          </div>
            
          
        </div>
        <div className={styles.gridContainer}>
          {Crosshairs.filter((Crosshair) => {
            if(currentTeam.value === "All"){
              if (query === "" ) {
                return Crosshair;
              } else if (Crosshair.player_info.name.toLowerCase().startsWith(query.toLowerCase())) {
                return Crosshair;
              }
          }else{
            if (query === "" && currentTeam.value === Crosshair.player_info.team) {
              return Crosshair;
            } else if (Crosshair.player_info.name.toLowerCase().startsWith(query.toLowerCase()) && currentTeam.value === Crosshair.player_info.team) {
              return Crosshair;
            }
          }
          }).map((Crosshair) => (
            <div key={Crosshair.player_info.name}>
              <div className={styles.gridBox}>
                <div className={styles.gridBoxTop}>
                  <h3>{`${Crosshair.player_info.name} | ${Crosshair.player_info.team} `}</h3>
                  <button  onClick={() => {
                    navigator.clipboard.writeText(jsonToVal(Crosshair))
                    toast(`Copied ${Crosshair.player_info.name}'s crosshair.`,{
                    })
                  }}>Copy</button>
                </div>
                <div className={styles.square}>
                  <CrosshairCanvas player = {Crosshair}/>
                </div>
              </div>
            </div>
          ))}
          <ToastContainer
            toastStyle={{background: "white"}}
            bodyStyle={{color:"black"}}
            progressStyle ={{background: "#6e7cfc"}}
          />
        </div>
      </main>
    </div>
  );
  
}
