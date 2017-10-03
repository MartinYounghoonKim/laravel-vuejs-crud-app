import Vue from 'vue';
import Vuex from 'vuex';

const state = {
  editing: false,
  email: null,
  name: null,
  email: null
}

const actions = {
  writeUserName ({commit}, payload) {
    const userName = payload.userName;

    commit('writeUserName', userName);
  },
  writeUserBirthday ({commit}, payload) {
    const userBirthday = payload.userBirthday;

    commit('writeUserBirthday', userBirthday);
  },
  writeUserEmail ({commit}, payload) {
    const userEmail = payload.userEmail;

    commit('writeUserEmail', userEmail);
  },
  postBoard () {

  }
}

const mutations = {
  writeUserName (state, userName) {
    state.name = userName;
  },
  writeUserBirthday (state, userBirthday) {
    console.log("userBirthday : " + userBirthday);
    state.email = userBirthday;
  },
  writeUserEmail (state, userEmail) {
    console.log("userEmail : " + userEmail);
    state.email = userEmail;
  }
}

export default {
  state,
  actions,
  mutations
}