import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
/* import Admin from '@/pages/Admin'
import ComingSoon from '@/pages/ComingSoon' */

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        layout: 'landing'
      }
    },
/*     {
      path: '/x-admin',
      name: 'Admin',
      component: Admin,
      meta: {
        layout: 'admin'
      }
    },
    {
      path: '/soon',
      name: 'ComingSoon',
      component: ComingSoon
    } */
  ]
})
