/**
 * Criando e configurando o arquivo de "saga" para o usuário
 * 
 * Basicamente o que esse middleWare irá fazer, 
 * é que quando for disparada uma action
 * se for uma que esle esteja configurado, ele irá
 * ser executado junto para poder fazer a requisição
 */

import { all, takeEvery } from 'redux-saga/effects';

function* fetchUsers() {
    console.log('chamou dentro do saga')
}

/**
 * Utilizamos o "all" pois pode ter mais de uma requisição para o mesmo reducer
 */
export default all([
    takeEvery( 
        "user/fetchUsers", //Nome da action (sempre será o nome do reducer/nomeDoReducer)
        fetchUsers //Função que será executada
        )
]);