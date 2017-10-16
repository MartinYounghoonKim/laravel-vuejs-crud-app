import BOARD_STORE from '../../../constants/board.constants.js';
import getApi from '../../../api/api_core.js';

const mutations = {
  [BOARD_STORE.SET.DETAIL]: (state, payload) => {
    state.board = payload;
  },
  [BOARD_STORE.SET.LIST]: (state, payload) => {
    state.boardLists = payload;
  },
  [BOARD_STORE.DESTROY.DETAIL]: ( state, targetId ) => {
    const targetIndex = state.boardLists.findIndex (v => v.id === targetId);
    
    state.boardLists.splice(targetIndex, 1);
  }
}

export default mutations;