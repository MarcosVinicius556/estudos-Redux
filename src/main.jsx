import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'
import { RouterProvider } from 'react-router-dom'
import './index.css'

/**
 * Aqui, como no ContextAPI, também precisaremos "dizer"
 * para a aplicação quem que poderá acessar os dados da nossa store
 * por isso neste caso estamos definindo no arquivo raiz do nosso projeto
 * que todos os componentes terão acesso ao nosso store
 */
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/**Provendo a nossa store para a aplicação */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
