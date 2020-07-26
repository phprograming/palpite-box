import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.layoutContainer}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;