import BOARD_STORE from '../../../constants/board.constants.js';
import getApi from '../../../api/api_core.js';
import router from '../../../router';


const actions = {
  [BOARD_STORE.SET.DETAIL]: ({commit}, targetId ) => {
    return new Promise( (resolve, reject) => {
      getApi.get(`/students/${targetId}`)
      .then( res=> {
        commit(BOARD_STORE.SET.DETAIL, res.data);
        resolve(res.data);
      })
    })
  },
  [BOARD_STORE.SET.LIST]: ({commit}) => {
    getApi.get('/students')
    .then( res=> {
      commit(BOARD_STORE.SET.LIST, res.data.students );
    })
  },
  [BOARD_STORE.DESTROY.DETAIL]: ({commit}, targetId ) => {
    return new Promise( (resolve, reject)=> {
      getApi.delete(`/students/${targetId}`)
      .then( res => {
        commit(BOARD_STORE.DESTROY.DETAIL, targetId );
        resolve('Delete completed!');
      })
    })
  },
  [BOARD_STORE.UPDATE.DETAIL]: ( {commit}, payload ) => {
    return new Promise( (resolve, reject) => {
      const targetId = payload.id;
      const { birth_date, email, name } = payload;

      getApi.put(`/students/${targetId}`, {
        birth_date,
        email,
        name
      })
      .then( res=> {
        if(res.status === 201) {
          resolve(res);
        }
      })
    });
  },
  [BOARD_STORE.CREATE.DETAIL]: ( {commit}, payload ) => {
    console.log(payload);
    getApi.post('/students', payload )
      .then( res=>{
        if(res.status === 201) {

          //Success create board data
          alert("Success create your data.");
          router.push('/board/list');
        }
      });
  }
}

export default actions;