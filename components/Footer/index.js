import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        Projeto desenvolvido por:
        <a className='px-2 hover:underline' href=''>Paulo Henrique Barbosa Santos</a> /
        <a className='px-2 hover:underline' target="_blank" href='https://www.linkedin.com/in/paulo-henrique-barbosa/'>Linkedin</a> /
        <a className='px-2 hover:underline' target="_blank" href='https://github.com/phprograming'>Github</a>
      </div>
    </div>
  )
}

export default Footer;
