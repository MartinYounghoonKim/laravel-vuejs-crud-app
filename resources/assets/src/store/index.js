import Vue from 'vue';
import Vuex from 'vuex';

import BoardView from './module/BoardView.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        BoardView
    }
})




// import Vue from 'vue';
// import Vuex from 'vuex';

// import getters from './getters.js';
// import mutations from './mutations.js';
// import actions from './actions.js';

// Vue.use(Vuex);

// const state = {
//     todos: []
// };

// export const store = new Vuex.Store({
//     state,
//     getters,
//     mutations,
//     actions
// });