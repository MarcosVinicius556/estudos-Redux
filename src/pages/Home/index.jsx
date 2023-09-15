import styles from './home.module.css'
import { Header } from '../../components/header'
import { Link } from 'react-router-dom'

/**
 * importamos o useSelector aqui, pois ele é quem 
 * vai acessar a nossa store, para chegar até
 *  o reducer desejado
 */
import { useSelector, useDispatch } from 'react-redux';
import { deleteAddress, fetchUsers, fetchUserById } from '../../redux/user/slice';

export function Home() {

  const dispatch = useDispatch();

  /**
   * Acessando o reducer do usuário, e extraindo os dados do usuário 
   */
  const { user, users, loading } = useSelector((rootReducer) => rootReducer.user);

  function handleDeleteAddress(){
    dispatch(deleteAddress());
    alert("Endereço deletado com sucesso!")
  }

  function handleFetchUsers() {
    dispatch(fetchUsers());
  }

  /**
   * Fazendo um dispatch passando uma variável por parâmetro para o saga
   */
  function handleFetchUserById() {
    const userId = 5;
    dispatch(fetchUserById(userId));
  }

  return (
    <>
    <Header/>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              { /**
                 * Verificando dentro do reducer, se possui algum usuário informado, 
                 * se houver mostra o nome, se não mostra um texto padrão 
                 **/ }
              Olá { user ? user.name : 'Visitante' }, bem vindo!
            </h1>

            { user && (<span>Email: {user.email}</span>) }


            { user && user.address && (
              <>
                <strong className={styles.addressLabel}>Endereço atual:</strong>
                <div className={styles.address}>
                  <p>{user.address.location}, n {user.address.number}</p>
                  
                  <button onClick={handleDeleteAddress}>Deletar endereço</button>
                </div>
              </>
            ) }

              <hr />
              <br />
              <h2>Lista de usuários</h2>
              <button onClick={handleFetchUsers}>Buscar Usuários</button>
              <button onClick={handleFetchUserById}>Buscar Usuário com ID</button>
              <br />
              {loading && <strong>Carregando Usuários...</strong>}
              {!loading && users.map((user) => (
                <div key={user.id}>
                  <p> ID: {user.id} | {user.name} </p>
                </div>
              ))}
          </div>

        </main>
      </div>
    </>
  )
}
