import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'
import ChangeNode from '@/components/ChangeNode'
import FromSeed from '@/components/FromSeed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/changenode',
      name: 'Change Node',
      component: ChangeNode
    },
    {
      path: '/fromseed',
      name: 'From Seed',
      component: FromSeed
    }
  ]
})
