import Vue from 'vue';
import Vuex from 'vuex';

// import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

import BoardList from './module/BoardList.js';
import BoardWrite from './module/BoardWrite.js';
import BoardView from './module/BoardView.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    mutations,
    actions,
    modules: {
        BoardList,
        BoardWrite,
        BoardView
    }
});