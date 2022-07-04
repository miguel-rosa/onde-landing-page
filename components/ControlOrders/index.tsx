

import React from 'react';
import Image from 'next/image'
import imageWebWhatsapp from '../../uploads/whatsapp-web.png';
import styles from './ControlOrders.module.css';

const ControlOrders = () => {
  return (
    <section className={styles.container}>
    <div className={styles.orders}>
          <div className={styles.infos}>
            <h2 className={styles.title}>Controle seus<br/><span className="highlight">pedidos</span></h2>
            <p className={styles.description}>Através da ondié, você centraliza seus pedidos,
            tudo vai chegar no seu whatsapp, já organizado!</p>
            <a className={styles.button} href="https://wa.me/5511950465529">Falar com consultor</a>
          </div>
          <div className={styles.image}><Image className={styles.whatsapp} alt="Whatsapp web chat"width="960px" height="669px" src={imageWebWhatsapp}/></div>
        </div>
        </section>
    )
};

export default ControlOrders;