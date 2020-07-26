import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="p-4 shadow-md">
        <ul className={styles.ul}>
          <li>
            <Link href='/'>
              <a className="m-4">
                <figure className={styles.figure}>
                  <img
                    className={styles.img}
                    src="/logo_palpitebox.png"
                    alt="PalpiteBox"
                  />
                </figure>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className="m-4">Início</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className="m-4">Sobre</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a className="m-4">Contato</a>
            </Link>
          </li>
          <li>
            <Link href='/seach'>
              <a className="m-4">Pesquisa</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;