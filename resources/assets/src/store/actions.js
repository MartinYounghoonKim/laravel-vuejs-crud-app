import getApi from '../api/api_core.js';

const actions = {
  deleteContent ( {commit}, payload){
    const targetId = payload.targetId;

    getApi.delete(`/students/${targetId}`)
    .then( res=> {
      commit('deleteContent', targetId );
    })
  }
}

export default actions;