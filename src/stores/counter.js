import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        logged: false,
        token: ''
    },
    mutations: {
        login: (state, response) => {
            state.logged = true;
            state.token = response;
            console.log('state updated');
            console.log('state.logged flag is: '+state.logged);
            console.log('state.token: '+state.token);
        },
        logout: (state) => {
            state.logged = false;
            state.token = '';
        }
    }
});
