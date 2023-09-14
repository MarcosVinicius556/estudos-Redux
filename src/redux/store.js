/**
 * Este arquivo ficará responsável por configurar as stores do projeto
 */

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

/**
 * Configurando redux-saga na aplicação
 */
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";

/**
 * Criando o middleware que utilizaremos na aplicação
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Criamos o store da aplicação, e aqui estamos passando nosso root-reducer
 * com isso, nossa store terá acesso a todos os reducers da aplicação que
 * estiverem configurados também no root-reducer
 */
export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware] //Passando o saga para nossa store
});

/**
 * Rodando nosso middleware
 */
sagaMiddleware.run(rootSaga);