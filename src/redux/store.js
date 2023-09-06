/**
 * Este arquivo ficará responsável por configurar as stores do projeto
 */

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

/**
 * Criamos o store da aplicação, e aqui estamos passando nosso root-reducer
 * com isso, nossa store terá acesso a todos os reducers da aplicação que
 * estiverem configurados também no root-reducer
 */
export const store = configureStore({
    reducer: rootReducer
});