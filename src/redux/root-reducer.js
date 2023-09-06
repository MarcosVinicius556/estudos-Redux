/**
 * Este arquivo ficará responsável por chamar todos o reducer do projeto
 */
import { combineReducers } from 'redux';
import userSlice from './user/slice';

/**
 * Aqui estamos definindo os reducers da aplicação, 
 * neste caso estaremos utilizando apenas 1 reducer, que será o do
 * usuário, mas poderiamos ter vários aqui, como cartReducer, gameReducer, etc....
 * desta forma conseguimos agrupar os reducers em um só local de forma organizada
 */
export default combineReducers({
    user: userSlice
});