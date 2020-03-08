import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Shopping from '@/components/Shopping'
import EditShopping from '@/components/EditShopping'

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
    },
    {
      path: '/edit-shopping/:shopping_slug',
      name: 'EditShopping',
      component: EditShopping
    }
  ]
})
