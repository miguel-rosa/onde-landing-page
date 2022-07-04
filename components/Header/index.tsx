import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
    <p className={styles.logo}>ondié</p>
    <nav className={styles.menu}>
      {/* <a className={styles.menuItem}>Link 1</a>
      <a className={styles.menuItem}>Link 2</a>
      <a className={styles.menuItem}>Link 3</a> */}
      <a className={styles.button} href="https://wa.me/5511950465529">Usar agora</a>
    </nav>
  </header>
    )
};

export default Header;