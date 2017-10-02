import Vue from 'vue';
import Vuex from 'vuex';

import getApi from '../../api/api_core.js';

const state = {
    students: []
}

const getters = {
    getContentsData (state) {
        return state.students;
    }
}

const actions = {
    getContentsData ({commit}, payload){
        getApi.get('/students')
        .then( res=> {
            commit('setContentsData', res.data.students );
        })
    }
}

const mutations = {
    setContentsData (state, payload){
        state.students = payload;
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}