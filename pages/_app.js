import Layout from '../comps/layout'
import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head> 
            <link rel="icon" type="image/x-icon" href="/crosshair.png"></link>
        </Head>
       <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
