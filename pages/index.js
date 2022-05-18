import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const data = require("../crosshairs.json");

for(var i =0; i < data.length; i++){
  var obj = data[i];
    console.log(`name:  ${obj.player_info.name}, Team: ${obj.player_info.team}`);
  }

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
          {Crosshairs.map(Crosshair => (
            <div key={Crosshair.player_info.name}>
              <a>
                <h3>{`Name: ${Crosshair.player_info.name} | Team: ${Crosshair.player_info.team} `}</h3>
              </a>
            </div>
          ))}
        </div>

        
      </main>
 

    </div>
  )
}
