/**
 * Aqui será configurado o "slice" do User
 */
import  { createSlice } from '@reduxjs/toolkit';

/**
 * Definimos um valor inicial para a nossa slice
 */
const initialState = {
    user: null,
    users: [],
    loading: false
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
        /**
         * Aqui é onde criaremos nossas 'funções puras',
         * elas são também chamadas de actions, e correspondem
         * ás ações que um reducer pode fazer, como 
         * criar um novo usuário, buscar uma informação,
         * deletar uma informação e por ai vai...
         * 
         * Essas funções sempre receberão 2 parâmetros,a state,
         * que se refere ao estado do nosso slice e a action, que seria a 
         * ação que deseja ser realizada além do payload, que seria os itens 
         * que mandamos para esta função
         * 
         * 
         */
        createUser: (state, action) => {
            /**
             * Criando validação dentro de um reducer
             */
            if(action.payload.name <= 4){
                alert('PREENCHA UM NOME COM MAIS DE 4 LETRAS!')
                return { ...state }
            }
            
            return { 
                ...state, //Mantemos o estado anterior
                /**E aqui faremos as alterações desejadas */
                user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    address: null,

                }
             };
        },
        /* 
         * Por ser uma função de logout, não é necessário
         * pegar o action, já que não será enviado nada para cá
         */
        logoutUser: (state) => {
            /**
             * Zera o estado do usuário
             */
            return{
                ...state, 
                user: null,
            }
        },
        addAddress: (state, action) => {
            /**
             * Verificando se está sendo enviado algo
             */
            if(action.payload.location === '' || action.payload.number === '') {
                alert('Preencha todos os campos!');
                return { ...state }
            }

            if(state.user === null) {
                alert('É necessário fazer login para cadastrar um endereço!');
                return { ...state }
            }

            alert('Dados atualizados!');
            return{
                ...state,
                user:{
                    ...state.user, //Mantendo os dados do usuário
                    address: { //E alterando somente o endereço
                        location: action.payload.location,
                        number: action.payload.number
                    }
                }
            }
        },
        deleteAddress: (state) => {
            return { 
                ...state,
                user: { 
                    ...state.user,
                    address: null,
                }
            }
        },
        fetchUsers: (state) => {
            /**
             * Não se deve fazer requisições neste ponto da aplicação, 
             * não é recomendo e deve ser evitado ao máximo, pois por ser assíncrono
             * devemos tratar isto de forma correta. Então para fugirmos
             * disto vamos trabalhar com SideEffects (Efeitos colaterais), alguns populares
             * são: Redux Saga, Redux Thunks, entre outros disponíveis no site do Redux
             */
            state.loading = true
        },
        /**
         * Irá receber os dados da requisição feita pelo saga caso ocorra tudo bem
         */
        fetchUsersSuccess: (state, action) => {
            state.users = action.payload;
            state.loading = false;

        },
        /**
         * Irá receber os dados da requisição feita pelo saga caso ocorra algum erro
         */
        fetchUsersFailure: (state, action) => {
            console.log(action.payload);
            state.loading = false;
        }
    }
});

/**
 * Aqui exportamos as nossas actions para poder utilizar na aplicação
 */
export const { createUser, 
               logoutUser, 
               addAddress, 
               deleteAddress, 
               fetchUsers,
               fetchUsersSuccess,
               fetchUsersFailure  } = userSlice.actions;

/**
 * Agora podemos exportar o nosso reducer
 */
export default userSlice.reducer;
