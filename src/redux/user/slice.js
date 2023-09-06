/**
 * Aqui será configurado o "slice" do User
 */
import  { createSlice } from '@reduxjs/toolkit';

/**
 * Definimos um valor inicial para a nossa slice
 */
const initialState = {
    user: null
}

/**
 * E então criamos e exportamos o slice criado
 * para isso definimos algumas propriedades...
 */
export const userSlice = createSlice({
    name: 'user', //Nome do slice
    initialState: initialState, //Estado inicial
    //E reducers que ficarão responsáveis por manipular os estados do user
    reducers: { 

    }
});

/**
 * Agora podemos exportar o nosso reducer
 */

export default userSlice.reducer;
