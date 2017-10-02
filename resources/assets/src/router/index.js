import Vue from 'vue';
import Router from 'vue-router';

import BoardView from '../spa/BoardView/BoardView';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'BoardView',
        component: BoardView
    }]
})