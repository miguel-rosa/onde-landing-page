import React from 'react';
import Image from 'next/image'
import imageAppStoreFront from '../../uploads/app-store-front.png';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
    <div className={styles.infos}>
      <h1 className={styles.title}>Venda mais no <br/><span className="highlight">whatsapp</span></h1>
      <p className={styles.description}>Somos a plataforma que te faz vender mais pelo whatsapp, direcionando seus clientes para onde importa.</p>
    </div>
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
    )
};

export default Hero;