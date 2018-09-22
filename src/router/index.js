import Vue from 'vue'
import Router from 'vue-router'
import Search from 'components/search/search'
import Details from 'components/details/details'

import List from 'components/list/list'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/search'
    },
    {
      path: '/search',
      component: Search
    },
    {
      path:'list',
      component: List
    },
    {
      path:'details',
      component:Details
    }
  
  ]
})
