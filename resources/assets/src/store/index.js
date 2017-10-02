import Vue from 'vue';
import Vuex from 'vuex';

// import getters from './getters.js';
// import mutations from './mutations.js';
// import actions from './actions.js';


import BoardView from './module/BoardView.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        BoardView
    }
});

// export const store = new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions
// });