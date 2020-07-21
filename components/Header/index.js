import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import Layout from '../Layout';

const Header = () => {
  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <div className='container mx-auto'>
          <Link href='/'>
            <a><img className='h-48 mx-auto rounded-md shadow-xl' src='/logo_palpitebox.png' alt='PalpiteBox' /></a>
          </Link>
        </div>
      </div>
      <div className='bg-pink-500 p-4 shadow-md text-center'>
        <Link href='/'>
          <a className='px-2 hover:underline'>Início</a>
        </Link>
        <Link href='/about'>
          <a className='px-2 hover:underline'>Sobre</a>
        </Link>
        <Link href='/contact'>
          <a className='px-2 hover:underline'>Contato</a>
        </Link>
        <Link href='/seach'>
          <a className='px-2 hover:underline'>Pesquisa</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Header;