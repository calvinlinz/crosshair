import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Create.module.css'
import { useState } from "react";
import CrosshairCanvas from "../Crosshair/CrosshairCanvas";
import { jsonToVal } from "../jsonToVal";
import { useRef , useEffect } from 'react';
import createBaseCrosshair from "../Crosshair/createBaseCrosshair";




export default function Home() {

  let [player, setPlayer] = useState(createBaseCrosshair);

  const onChangeHandlerPrimaryChecked = (event) => {
    const newValue = event.target.checked;
    setPlayer(player => ({
      ...player,
      crosshair: {              
        ...player.crosshair, 
        primary : {
          ...player.crosshair.primary,
          [event.target.name]: newValue ,  
      }
    }
  }));
  }

  const onChangeHandlerPrimaryColor = (event) => {
    const newValue = event.target.value;
    setPlayer(player => ({
      ...player,
      crosshair: {              
        ...player.crosshair, 
        primary : {
          ...player.crosshair.primary,
          [event.target.name]: newValue ,  
      }
    }
  }));
  }

  const onChangeHandlerPrimary = (event) => {
    const newValue = parseFloat(event.target.value);
    setPlayer(player => ({
      ...player,
      crosshair: {              
        ...player.crosshair, 
        primary : {
          ...player.crosshair.primary,
          [event.target.name]: newValue ,  
      }
    }
  }));
  }

  const onChangeHandlerInner = (event) => {
    const newValue = parseFloat(event.target.value);
    setPlayer(player => ({
      ...player,
      crosshair: {              
        ...player.crosshair, 
        primary:{
          ...player.crosshair.primary,
          inner: {
            ...inner,
            [event.target.name]:newValue ,  
          }
        }
       
    }
  }));
  console.log(player);
  }
  const onChangeHandlerInnerChecked = (event) => {
    const newValue = event.target.checked;
    setPlayer(player => ({
      ...player,
      crosshair: {              
        ...player.crosshair, 
        primary:{
          ...player.crosshair.primary,
          inner : {
            ...inner,
            [event.target.name]: newValue ,  
        }
        }
        
    }
  }));
  console.log(newValue)
  }
  const onChangeHandlerOuter = (event) => {
    const newValue = parseFloat(event.target.value);
    setPlayer(player => ({
      ...player,
      crosshair: {              
        ...player.crosshair, 
        primary: {
          ...player.crosshair.primary,
          outer: {
            ...outer,
            [event.target.name]:newValue ,  
        }
        }
        
    }
  }));
  console.log(player);

  }
  
  const onChangeHandlerOuterChecked = (event) => {
    const newValue = event.target.checked;
    setPlayer(player => ({
      ...player,
      crosshair: {              
        ...player.crosshair, 
        primary:{
          ...player.crosshair.primary,
          outer: {
            ...outer,
            [event.target.name]:newValue ,  
        }
        }
        
    }
  }));
  }
  
  let inner = player.crosshair.primary.inner;
  let outer = player.crosshair.primary.outer;

  return (
    <div className="page">
      <Head>
        <title>Crosshair</title>
        <meta name="description" content="Cross hair website for Valorant" />
      </Head>

      <main className={styles.main}>
      <div className = {styles.gridContainer}>
              <div className={styles.gridBox}>
                <div className={styles.gridBoxTop}>
                  <h3>{`Custom Crosshair`}</h3>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(jsonToVal(player))
                    }
                  >
                    Copy
                  </button>
                </div>
                <div className={styles.square}>     
                  <CrosshairCanvas player = {player} className = {styles.xhair}/>
                </div>
          </div>
          
          <div className={styles.customize}>
          <h2 className= {styles.primaryHeader}>Primary</h2>
          <div className ={styles.primary}>
            <div className={styles.section1}>
            {/* OUTLINES */}
            Outlines <input type = "checkbox" name ="outlines" checked = {player.crosshair.primary.outlines} onChange = {(event)=> onChangeHandlerPrimaryChecked(event)}/><br></br>
            Outline Opacity <input type= "range" min="0" max="1" step ="0.25" name="outlineOpacity" value={player.crosshair.primary.outlineOpacity} onChange={(event) => onChangeHandlerPrimary(event)}/><br></br>
            Outline Thickness <input type= "range" min="0" max="6" step ="1" name="outlineThickness" value={player.crosshair.primary.outlineThickness} onChange={(event) => onChangeHandlerPrimary(event)}/>
            </div>
            {/* CENTERDOT */}
            <div className={styles.section2}>
            Center Dot <input type = "checkbox" name ="centerDot" checked = {player.crosshair.primary.centerDot} onChange = {(event)=> onChangeHandlerPrimaryChecked(event)}/><br></br>
            Center Dot Opacity <input type= "range" min="0" max="1" step ="0.25" name="centerDotOpacity" value={player.crosshair.primary.centerDotOpacity} onChange={(event) => onChangeHandlerPrimary(event)}/><br></br>
            Center Dot Thickness <input type= "range" min="0" max="6" step ="1" name="centerDotThickness" value={player.crosshair.primary.centerDotThickness} onChange={(event) => onChangeHandlerPrimary(event)}/>
            {/* CENTERDOT */}
            </div>
            </div>


            
            <div className={styles.section3}>
            Override Firing Error Offset With Crosshair Offset <input type = "checkbox" name ="overrideFiringErrorOffsetWithCrosshairOffset" checked = {player.crosshair.primary.overrideFiringErrorOffsetWithCrosshairOffset} onChange = {(event)=> onChangeHandlerPrimaryChecked(event)}/><br></br>
              {/* Color */}
              <br></br>Color: <select name="crosshairColor" value={player.crosshair.primary.crosshairColor} onChange={(event) => onChangeHandlerPrimaryColor(event)}>
              <option value="white">White</option>
              <option value="cyan">Cyan</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="green">Green</option>
              <option value="yellowgreen">Yellow Green</option>
              <option value="greenyellow">Green Yellow</option>
              <option value="pink">Pink</option>
            </select>
            </div>
       

            <h2>Inner</h2>
            <div className ={styles.inner}>
            {/* Inner Lines */}
            <div className={styles.section1}>
            <label>Show Inner Lines </label><input type = "checkbox" name ="showLines" checked = {inner.showLines} onChange = {(event)=> onChangeHandlerInnerChecked(event)}/><br></br>
            <label>Inner Line Opacity  </label> <input type= "range" min="0" max="1" step="0.25" name="lineOpacity" value={inner.lineOpacity} onChange={(event) => onChangeHandlerInner(event)}/><br></br>
            <label>Inner Line Length  </label><input type= "range" min="1" max="20" step="1" name="lineLength" value={inner.lineLength} onChange={(event) => onChangeHandlerInner(event)}/><br></br>
            <label>Inner Line Thickness  </label><input type= "range" min="1" max="10" step="1" name="lineThickness" value={inner.lineThickness} onChange={(event) => onChangeHandlerInner(event)}/><br></br>
            <label>Inner Line Offset  </label><input type= "range" min="1" max="20" step="1" name="lineOffset" value={inner.lineOffset} onChange={(event) => onChangeHandlerInner(event)}/>
            </div>
            {/* Inner Lines Movement Error */}
            <div className={styles.section2}>
            <label>Movement Error </label><input type = "checkbox" name ="lineMovementError" checked = {inner.lineMovementError} onChange = {(event)=> onChangeHandlerInnerChecked(event)}/><br></br>
            <label> Movement Error Multiplier</label><input type= "range" min="0" max="3" step="0.25" name="lineMovementErrorMultiplier" value={inner.lineMovementErrorMultiplier} onChange={(event) => onChangeHandlerInner(event)}/><br></br>
            <label>Firing Error</label> <input type = "checkbox" name ="lineFiringError" checked = {inner.lineFiringError} onChange = {(event)=> onChangeHandlerInnerChecked(event)}/><br></br>
            <label>Firing Error Multiplier </label><input type= "range" min="0" max="3" step="0.25" name="lineFiringErrorMultiplier" value={inner.lineFiringErrorMultiplier} onChange={(event) => onChangeHandlerInner(event)}/>
            </div>
            </div>

            <h2>Outer</h2>
            <div className ={styles.outer}>
            {/* Outer Lines */}
            <div className={styles.section1}>
            <label>Show Outer Lines </label> <input type = "checkbox" name ="showLines" checked = {outer.showLines} onChange = {(event)=> onChangeHandlerOuterChecked(event)}/><br></br>
            <label>Outer Line Opacity</label> <input type= "range" min="0" max="1" step="0.25" name="lineOpacity" value={outer.lineOpacity} onChange={(event) => onChangeHandlerOuter(event)}/><br></br>
            <label>Outer Line Length </label> <input type= "range" min="1" max="20" step="1" name="lineLength" value={outer.lineLength} onChange={(event) => onChangeHandlerOuter(event)}/><br></br>
            <label>Outer Line Thickness </label> <input type= "range" min="1" max="10" step="1" name="lineThickness" value={outer.lineThickness} onChange={(event) => onChangeHandlerOuter(event)}/><br></br>
            <label>Outer Line Offset </label> <input type= "range" min="1" max="40" step="1" name="lineOffset" value={outer.lineOffset} onChange={(event) => onChangeHandlerOuter(event)}/>
            </div>
            {/* Outer Lines Movement Error */}
            <div className={styles.section2}>
            <label>Movement Error </label> <input type = "checkbox" name ="lineMovementError" checked = {outer.lineMovementError} onChange = {(event)=> onChangeHandlerOuterChecked(event)}/><br></br>
            <label>Movement Error Multiplier </label> <input type= "range" min="0" max="3" step="0.25" name="lineMovementErrorMultiplier" value={outer.lineMovementErrorMultiplier} onChange={(event) => onChangeHandlerOuter(event)}/><br></br>
            <label>Firing Error </label> <input type = "checkbox" name ="lineFiringError" checked = {outer.lineFiringError} onChange = {(event)=> onChangeHandlerOuterChecked(event)}/><br></br>
            <label>Firing Error Multiplier </label> <input type= "range" min="0" max="3" step="0.25" name="lineFiringErrorMultiplier" value={outer.lineFiringErrorMultiplier} onChange={(event) => onChangeHandlerOuter(event)}/>
            </div>
            </div>
          </div>
          </div>
         
      </main>


    </div>
  )
}