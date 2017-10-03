import Vue from 'vue';
import Vuex from 'vuex';

import router from '../../router';


import getApi from '../../api/api_core.js';

const state = {
  editing: false,
  email: null,
  name: null,
  birthday: null
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
  completedWrite ({commit}) {
    const {
      birthday,
      email,
      name
    } = state;

    getApi.post('/students', {
      birthday,
      email,
      name
    })
    .then( res=>{
      if(res.status === 201) {

        //Success create board data
        alert("Success create your data.");
        router.push('/');
        //this.$router.push('/');
      }
      //commit('completedWrite');
    });
  }
}

const mutations = {
  writeUserName (state, userName) {
    state.name = userName;
  },
  writeUserBirthday (state, userBirthday) {
    state.birthday = userBirthday;
  },
  writeUserEmail (state, userEmail) {
    state.email = userEmail;
  },
  completedWrite (state) {
    console.log(state)
  }
}

export default {
  state,
  actions,
  mutations
}