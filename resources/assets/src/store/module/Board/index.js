import BoardState from './state';
import Actions from './actions';
import Getters from './getters';
import Mutations from './mutations';

export const BoardStoreModule = {
    state: BoardState,
    actions: Actions,
    getters: Getters,
    mutations: Mutations
};
