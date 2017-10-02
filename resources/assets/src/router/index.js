import Vue from 'vue';
import Router from 'vue-router';

import BoardView from '../spa/BoardView/AppContainer';
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'BoardView',
    component: BoardView
  },{
    path: '/write',
    name: 'BoardView',
    component: BoardView
  }]
})