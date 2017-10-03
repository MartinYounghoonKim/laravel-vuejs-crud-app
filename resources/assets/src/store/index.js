import Vue from 'vue';
import Vuex from 'vuex';

// import getters from './getters.js';
// import mutations from './mutations.js';
// import actions from './actions.js';


import BoardView from './module/BoardView.js';
import BoardWrite from './module/BoardWrite.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        BoardView,
        BoardWrite
    }
});

// export const store = new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions
// });