import Vue from 'vue';
import Router from 'vue-router';

import BoardList from '../spa/BoardList/AppContainer';
import BoardWrite from '../spa/BoardWrite/AppContainer';
import BoardView from '../spa/BoardView/AppContainer';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'BoardList',
    component: BoardList
  },{
    path: '/write',
    name: 'BoardWrite',
    component: BoardWrite
  },{
    path: '/view/:id',
    name: 'BoardView',
    component: BoardView
  }]
})