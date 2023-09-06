import { useState } from 'react'; 
import styles from './login.module.css'

import { Link, useNavigate } from 'react-router-dom'

/**
 * Aqui utilizaremos o useDispatch,
 * um hook que faz a função de chamar uma action
 * funciona de forma parecida com o dispatch do useReducer
 */
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/user/slice';

export function Login() {

  /**
   * Declaramos o useDispatch para utilizar neste arquivo
   */
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  function handleLogin(e){
    e.preventDefault()
    
    /**
     * Aqui estamos diparando uma action para o reducer do usuário
     * 
     * Dentro da action podemos passar um payload,
     * que será os dados que queremos passar para
     * a nossa state dentro do reducer
     */

    if(name === '' || email === '') {
      alert('Todos os dados devem ser preenchidos');
      return;
    }

    dispatch(createUser({
      name: name,
      email: email,
    }));

    navigate('/painel');
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
          <Link to="/painel">
            <h1 className={styles.title}>Dev Login</h1>
          </Link>

          <form onSubmit={handleLogin} className={styles.form}>
            <input 
              type="text" 
              className={styles.input}
              value={name}
              onChange={ event => setName(event.target.value)}
              placeholder='Digite seu nome....'
            />
            <input 
              type="text" 
              className={styles.input}
              value={email}
              onChange={ event => setEmail(event.target.value)}
              placeholder='Digite seu email...'
            />

            <button type="submit">Acessar</button>
          </form>
      </main>
    </div>
  )
}
