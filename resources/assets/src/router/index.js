import Vue from 'vue';
import Router from 'vue-router';

import StudentsBoardAppContainer from '../spa/StudentsBoard/AppContainer.vue';
import StudentsBoardList from '../spa/StudentsBoard/components/List.vue';
import StudentsBoardCreate from '../spa/StudentsBoard/components/Create.vue';
import StudentBoardView from '../spa/StudentsBoard/components/View.vue';
import StudentBoardEdit from '../spa/StudentsBoard/components/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/board/list',
    name: 'BoardList',
    components:{
      header: StudentsBoardAppContainer,
      contents: StudentsBoardList
    }
  },{
    path: '/board/create',
    name: 'BoardCreate',
    components:{
      contents: StudentsBoardCreate
    }
  },{
    path: '/board/view/:id',
    name: 'BoardView',
    components:{
      contents: StudentBoardView
    }
  },{
    path: '/board/edit/:id',
    name: 'BoardView',
    components:{
      header: StudentsBoardAppContainer,
      contents: StudentBoardEdit
    }
  }]
})