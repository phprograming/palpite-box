import React, { useState } from 'react';
import PageTitle from '../components/pageTitle';

const Seach = () => {

  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  });

  const notas = [0, 1, 2, 3, 4, 5];

  const [sucess, setSucess] = useState(false);

  const [returnSucess, setReturnSucess] = useState({});

  const save = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })

      const data = await response.json();
      setSucess(true);
      setReturnSucess(data);
    } catch (err) {

    }
  }

  const onChange = evt => {
    const value = evt.target.value;
    const key = evt.target.name;
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <div className='pt-6'>
      <PageTitle title='Pesquisa' />
      <h1 className='text-center font-bold my-6 text-3xl'>Críticas e sugestões</h1>
      <p className='text-center mb-6'>
        O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
      </p>
      {!sucess &&
        <div className='w-1/5 mx-auto'>

          <label className='font-bold'>Seu nome:</label>
          <input type='text'
            className='p-4 block shadow border my-2 border-pink-600 rounded-lg bg-pink-100'
            placeholder='Nome'
            name='Nome'
            onChange={onChange}
            value={form.Nome}
          />

          <label className='font-bold'>E-mail:</label>
          <input type='text'
            className='p-4 block shadow border my-2 border-pink-600 rounded-lg bg-pink-100'
            placeholder='Email'
            name='Email'
            onChange={onChange}
            value={form.Email}
          />

          <label className='font-bold'>Whatsapp:</label>
          <input type='text'
            className='p-4 block shadow border my-2 border-pink-600 rounded-lg bg-pink-100'
            placeholder='Whatsapp'
            name='Whatsapp'
            onChange={onChange}
            value={form.Whatsapp}
          />

          <label className='font-bold'>Nota:</label>
          <div className='flex py-6'>
            {notas.map(nota => {
              return (
                <label className='block w-1/6 text-center'>
                  {nota}<br />
                  <input type='radio'
                    name='Nota'
                    value={nota}
                    onChange={onChange}
                  />
                </label>
              )
            })
            }
          </div>

          <button className='bg-pink-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'
            onClick={save}>Salvar
        </button>
        </div>
      }
      {sucess &&
        <div className='w-3/5 mx-auto'>
          <p className="mb-6 text-center bg-pink-100 border-t border-b border-pink-500 text-pink-700 px-4 py-3" role="alert">Obrigado por contribuir com sua sugestão ou crítica.</p>
          {
            returnSucess.showCoupom &&
            <div className='text-center border p-4 mb-4'>
              Seu cupom: <br />
              <span className='font-bold text-2xl'>{returnSucess.Cupom}</span>
            </div>
          }
          {
            returnSucess.showCoupom &&
            <div className='text-center border p-4 mb-4'>
              <span className='font-bold block mb-2'>{returnSucess.Promo}</span>
              <br />
              <span className='italic'>Tire um print ou foto desta tela e apresente em nossa loja.</span>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Seach;