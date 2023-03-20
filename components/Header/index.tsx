import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
    <p className={styles.logo}><span className={styles.smart}>smart</span><span className={styles.mob}>mob</span></p>
    <nav className={styles.menu}>
      {/* <a className={styles.menuItem}>Link 1</a>
      <a className={styles.menuItem}>Link 2</a>
      <a className={styles.menuItem}>Link 3</a> */}
      <a className={styles.button} href="https://wa.me/5511950465529">Usar agora</a>
    </nav>
    </div>
  </header>
    )
};

export default Header;