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
  const [background, setBackground] = useState("rgb(139, 139, 132)");
  const [currentTeam, setTeam] = useState("All");  

  const teams = ["All"];
  let count = 1;
  Crosshairs.forEach((crosshair) =>{
    if(!teams.includes(crosshair.player_info.team)){
      teams[count] = crosshair.player_info.team;
      count++;
    }
  })

  function handleTeam(event){
    setTeam(event.target.value);
  }

  //WIP
  function handleChange(event) {
    if(event.target.value === "range.png"){
      setBackground(event.target.value);
      event.backgroundColor=null;
      event.backgroundImage ="/range.png" ;
    }
    if(event.target.value === "custom"){
      setBackground(event.target.value);
      event.backgroundColor = "grey";
    }
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
          <p>Website is still a work in progress as I develop my skills in web development.<br></br>I've created this website to learn javaScript from scratch. <br></br>This website contains a JSON file of many pro Valorant players and their respective crosshairs they use in game.<br></br> The data is then used to draw each crosshair and allows users to copy the crosshair and use the code in the game.<br></br>Users are also able to create their own crosshair dynamically.</p>


      <div className = {styles.selector}>
          <label className = {styles.labels}>Team</label>
          <div className = {styles.selectorTeams}>
            <select className = {styles.teamSelector} name = "teamSelector" value = {currentTeam} placeholder = {currentTeam} onChange={handleTeam}>
              {teams.map((team)=>{
                  return <option key = {team} value ={team}> {team}</option>
                })
              }
              </select>
              </div>
              <div className = {styles.selectorSearch}>
          <input className = "search"
            placeholder="Search Player" type="text"
            onChange={(event) => setQuery(event.target.value)}
            />
            </div>
          {/* <label>Background</label>
          <select className = {styles.background} value = {background} onChange={handleChange}>
              <option value = "custom">Custom</option>
              <option value = "range.png">Range</option>
             </select> */}

          


        </div>
          
        </div>
   

        <div className={styles.gridContainer}>
          {Crosshairs.filter((Crosshair) => {
            if( currentTeam === "All"){
              if (query === "" ) {
                return Crosshair;
              } else if (Crosshair.player_info.name.toLowerCase().startsWith(query.toLowerCase())) {
                return Crosshair;
              }
          }else{
            if (query === "" && currentTeam === Crosshair.player_info.team) {
              return Crosshair;
            } else if (Crosshair.player_info.name.toLowerCase().startsWith(query.toLowerCase()) && currentTeam === Crosshair.player_info.team) {
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
                <div className={styles.square}  style={{background: background}}>
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
