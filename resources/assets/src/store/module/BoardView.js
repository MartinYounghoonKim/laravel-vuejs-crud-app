import Vue from 'vue';
import Vuex from 'vuex';

import router from '../../router';

import getApi from '../../api/api_core.js';

const state = {
  student: {}
}

const getters = {
  getStudentData: state => state.student
}
const actions = {
  
}

const mutations = {
  setStudentData (state, payload) {
    state.student = payload;
  },
  deleteContent(state) {
    router.push('/');
  }
}

export default {
  state,
  actions,
  getters,
  mutations  
}