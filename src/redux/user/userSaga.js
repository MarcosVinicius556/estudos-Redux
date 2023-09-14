/**
 * Criando e configurando o arquivo de "saga" para o usuário
 * 
 * Basicamente o que esse middleWare irá fazer, 
 * é que quando for disparada uma action
 * se for uma que esle esteja configurado, ele irá
 * ser executado junto para poder fazer a requisição
 * 
 * Sendo assim, a parte de se conectar a um API por exemplo,
 * seria feito por esta SAGA
 */

import { all, //Utilizado para exportar mais de um saga
         takeEvery, //Função que irá interceptar nossa action e acionar uma função
         call, //Utilizado para chamar uma requisição
         put, //Utilizado para manipudados de um slice
         delay
        } from 'redux-saga/effects';

/**
 * Importando nossas reducers para utilizar com o redux-saga
 */
import { fetchUsersFailure, fetchUsersSuccess } from './slice';

import axios from 'axios';
//API usuários --> https://jsonplaceholder.typicode.com/users/

/**
 * Utilizando a "function*" aqui pois precisamos de uma função geradora
 * Já que iremos trabalhar com uma requisição assíncrona aqui
 */
function* fetchUsers() {
    try {
        /**
         * Delay colocado propositalmente para simular uma requisição demorada
         * Aqui simplesmente paramos a execução deste código por 2 segundos
         */

        yield delay(2000);

        /**
         * Irá fazer uma requisição http aqui
         * o yield é uma função que foi introduzido junto das funções geradoras
         * ele é utilizado para pausar a execusão da função e retornar algo, além 
         * de permitir que a função seja continuada a partir de onde parou da última vez
         */
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/");

        /**
         * Acionamos o reducer do usuário mandando o retorno 
         * da requisição através do payload
         * 
         * Utilizamos o yield pois precisamos esperar essa 
         * função ser executada
         */
        yield put(fetchUsersSuccess(response.data))
    } catch (error) {

        yield put(fetchUsersFailure(error.message));
    }
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