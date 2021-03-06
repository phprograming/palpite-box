import React, { useState } from 'react';

import styles from '../css/seach.module.css';
import PageTitle from '../components/pageTitle';

const Seach = () => {
  const notas = [1, 2, 3, 4, 5];

  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: '',
    Mensagem: ''
  });

  const [success, setSuccess] = useState(false);
  const [successReturn, setSuccessReturn] = useState({});

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      });

      const data = await response.json();

      setSuccess(true);
      setSuccessReturn(data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeForm = event => {
    const key = event.target.name;
    const value = event.target.value;

    setForm(old => ({
      ...old,
      [key]: value
    }));
  };

  return (
    <div className={styles.seachContainer}>
      <PageTitle title="Pesquisa" />

      {!success &&
        <div>
          <h1 className={styles.title}>Opinião ou Sugestão</h1>
          <p>Texto1</p>
          <p>Texto2</p>
          <div className={styles.inputGroup}>
            <div className={styles.input}>
              <label htmlFor="name">Nome:</label>
              <input
                id="name"
                type="text"
                name="Nome"
                value={form.Nome}
                onChange={changeForm}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="email">e-mail:</label>
              <input
                id="email"
                type="email"
                name="Email"
                value={form.Email}
                onChange={changeForm}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="Whatsapp">Whatsapp:</label>
              <input
                id="Whatsapp"
                type="tel"
                pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                name="Whatsapp"
                value={form.Whatsapp}
                onChange={changeForm}
              />
            </div>
            <div className={styles.input}>
              <label htmlFor="opiniaoSugestao">Opinião / Sugestão:</label>
              <textarea
                name="opiniaoSugestao"
                id="opiniaoSugestao"
                cols="40"
                rows="10"
                maxLength="500"
                name="Mensagem"
                value={form.Mensagem}
                onChange={changeForm}>
              </textarea>
            </div>
            <div className={styles.radioContainer}>
              <label htmlFor="nota">Nota:</label>

              {notas.map((nota, index) => {
                return (
                  <div className={styles.radioGroup} key={index}>
                    <input
                      className={styles.radio}
                      type="radio"
                      name="Nota"
                      value={nota}
                      onChange={changeForm}
                    />
                    <span>{nota}</span>
                  </div>
                );
              })}

            </div>
            <div className={styles.input}>
              <button
                className={styles.button}
                onClick={save}>
                Enviar Opinião / Sugestão
            </button>
            </div>
          </div>
        </div>
      }

      {success &&
        <div className={styles.coupon}>
          <h1>Obrigado pela sua opinião / sugestão!</h1>
          <h2>Cupom:</h2>
          <div>{successReturn.Cupom}</div>
          <h2>Promoção:</h2>
          <p>{successReturn.Promo}</p>
        </div>
      }

    </div>
  );
};

export default Seach;