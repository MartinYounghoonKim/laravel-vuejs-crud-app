import Vue from 'vue';
import Vuex from 'vuex';

// import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

import BoardList from './module/BoardList.js';
import Write from './module/Write.js';
import BoardView from './module/BoardView.js';

Vue.use(Vuex);

const myPlugin = store => {
    store.subscribe((mutation, state) => {
        console.log('[Vue-Store]::mutaion type:' + mutation.type );
    })
  }

export const store = new Vuex.Store({
    plugins: [myPlugin],
    mutations,
    actions,
    modules: {
        BoardList,
        Write,
        BoardView
    }
});