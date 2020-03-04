import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Shopping from '@/components/Shopping'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    }
  ]
})
