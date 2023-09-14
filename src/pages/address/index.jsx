import { useState } from 'react'
import styles from './address.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { addAdress } from '../../redux/user/slice'

export function Address() {
  //Para disparar os eventos
  const dispatch = useDispatch();
  
  //Consumindo os dados do userSlice
  const{ user } = useSelector((rootReducer) => rootReducer.user);

  /**
   * Utiliza-se os "?" quando queremos utilizar um objeto, mas ele pode vir nulo
   */
  const [addressName, setAddressName] = useState(user?.adress?.location ?? "")
  const [addressNumber, setAddressNumber] = useState(user?.adress?.number ?? "")

  function handleRegisterAddress(){
    dispatch(addAdress({
      //Passando as propriedades através do payload
      location: addressName,
      number: addressNumber,
    }));
  }

  return (
    <>
    <Header/>
      <div className={styles.container}>

        <main className={styles.content}>
          <div>
            <Link to="/painel">
              Voltar para o painel
            </Link>
          </div>

          <section className={styles.address}>
           <h2>Meu endereço:</h2>

          <input 
            type="text" 
            className={styles.input}
            placeholder="Ex: Rua centro, x"
            value={addressName}
            onChange={ (e) => setAddressName(e.target.value) }
          />
          <input 
            type="text" 
            className={styles.input}
            placeholder="Numero"
            value={addressNumber}
            onChange={ (e) => setAddressNumber(e.target.value) }
          />

          <button className={styles.button} onClick={handleRegisterAddress}>
            Salvar Alteração
          </button>

          </section>
        </main>
      </div>
    </>
  )
}
