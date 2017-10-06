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
  getContentsData ( {commit} ){
    getApi.get('/students')
    .then( res=> {
      commit('setContentsData', res.data.students );
    })
  }
}

const mutations = {
  setContentsData (state, payload){
    state.students = payload;
  },
  deleteContent( state, targetId ){
    const targetIndex = state.students.findIndex (v => v.id === targetId);

    state.students.splice(targetIndex, 1);
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}