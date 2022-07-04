

import React from 'react';
import Image from 'next/image'
import styles from './Features.module.css';
import imageCart from '../../uploads/cart.png';
import imageFilter from '../../uploads/filter.png';
import imageSearch from '../../uploads/search.png';
import imageFast from '../../uploads/fast.png';

const Features = () => {
  return (
    <section className={styles.container}>
      <div className={styles.features}>
        <div className={styles.infos}>
          </div>
          <div className={styles.cards}>
            <div className={`${styles.card} ${styles.card1}`}>
              <h3>Carrinho flexível, que facilita a venda de vários itens simultaneos</h3>
              {/* <p></p> */}
              <Image className={styles.image} src={imageCart} width="512" height="458" />
            </div>
            <div className={`${styles.card} ${styles.card2}`}>
              <Image className={styles.image} src={imageFilter} width="1080" height="525" />
              <h3>Facilite a organização de produtos, <br></br>dividindo por categoria utilizando um filtro intuitivo e simples</h3>
            </div>
            <div className={`${styles.card} ${styles.card3}`}>
              <h3>Busque facilmente por <br/> produtos, obtendo o resultado <br/>instantaneamente</h3>
              <Image className={styles.image} src={imageSearch} width="1080" height="435" />
            </div>
            <div className={`${styles.card} ${styles.card4}`}>
              <Image className={styles.image} src={imageFast} width="739" height="878" />
              <h3>Além de fácil de usar, nossa plataforma é extremamente rápida</h3>
            </div>
          </div>
        </div>
        </section>
    )
};

export default Features;