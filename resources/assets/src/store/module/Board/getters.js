import BOARD_STORE from '../../../constants/board.constants.js';

const getters = {
  [BOARD_STORE.GET.DETAIL]: state => state.board,
  [BOARD_STORE.GET.LIST]: state => state.boardLists
};

export default getters;