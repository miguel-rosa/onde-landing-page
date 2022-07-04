import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import ControlOrders from '../components/ControlOrders';
import Features from '../components/Features';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css'

import imageWebWhatsapp from "../uploads/whatsapp-web.png"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&family=Space+Grotesk:wght@500;600;700&family=Trispace:wght@100&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header />
      <main className={styles.main}>
        <Hero/>
        <ControlOrders />
        <Features />
      </main>

    </div>
  )
}

export default Home
