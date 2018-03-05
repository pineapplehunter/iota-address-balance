import Vue from 'vue'
import Router from 'vue-router'
import AddressBalances from '@/components/AddressBalances'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddressBalances',
      component: AddressBalances
    }
  ]
})
