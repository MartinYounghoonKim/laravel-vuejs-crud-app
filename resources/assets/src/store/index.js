import Vue from 'vue';
import Vuex from 'vuex';

import { BoardStoreModule } from './module/Board';

Vue.use(Vuex);

const myPlugin = store => {
    store.subscribe((mutation, state) => {
        console.log('[Vue-Store]::mutaion type:' + mutation.type );
    })
  }

export const store = new Vuex.Store({
    plugins: [myPlugin],
    modules: {
        BoardStoreModule
    }
});