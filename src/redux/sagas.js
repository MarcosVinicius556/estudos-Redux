/**
 * Este arquivo pode ser visto como o local onde todas
 * as sagas da nossa aplicação serão configuradas
 */

import { all } from 'redux-saga/effects';
import user from './user/userSaga';

/**
 * Exportando nossas sagas para utilizar na aplicação
 * 
 * "function*" seria como se fosse uma função com async
 * 
 */
export default function* rootSaga(){
    return yield all([
        user,
    ]);
}