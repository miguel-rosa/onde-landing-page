import React from 'react';
import Image from 'next/image'
import imageAppStoreFront from '../../uploads/app-store-front.png';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>

      
    <div className={styles.infos}>
      <h1 className={styles.title}>Faça parte do <br/><span className="highlight">futuro do ecommerce</span></h1>
      <p className={styles.description}>Somos uma plataforma de app commerce enterprise, criada para </p>
    </div>
    <a className={styles.button} href="https://wa.me/5511950465529">Usar agora</a>
    <div className={styles.image}>
    <Image
      className={styles.phone}
      src={imageAppStoreFront}
      width="480px"
      height="981.5px"
      alt="Loja virtual para vender pelo whatsapp"
      layout="intrinsic"
    />
    </div>
    </div>
    </div>
    )
};

export default Hero;