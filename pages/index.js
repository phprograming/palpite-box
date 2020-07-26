import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import PageTitle from '../components/pageTitle';
import styles from '../css/index.module.css';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Index = () => {

  const { data, error } = useSWR('/api/get-promo', fetcher);

  return (
    <>
      <PageTitle title='Seja bem-vindo' />
      <div className={styles.message}>
        <p>O restaurante X sempre busca por atender melhor seus clientes.</p>
        <p>Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      </div>

      <Link href='/seach'>
        <a>
          <div className={styles.buttonContainer}>
            Dar opnião ou sugestão
            </div>
        </a>
      </Link>

      {!data && <p>Carregando...</p>}

      {!error && data && data.showCoupon &&
        <div className={styles.message}>
          <p>{data.message}</p>
        </div>
      }
    </>
  )
}

export default Index;