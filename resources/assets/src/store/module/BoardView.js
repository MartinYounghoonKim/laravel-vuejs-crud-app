import Vue from 'vue';
import Vuex from 'vuex';

import getApi from '../../api/api_core.js';

const state = {
  student: {}
}

const getters = {
  getStudentData (state) {
    return state.student;
  }
}
const actions = {
  getStudentData ({ commit }, targetId) {
    getApi.get(`/students/${targetId}`)
    .then( res => {
      commit('setStudentData', res.data);
    })
  }
}

const mutations = {
  setStudentData (state, payload) {
    state.student = payload;
  }
}

export default {
  state,
  actions,
  getters,
  mutations  
}