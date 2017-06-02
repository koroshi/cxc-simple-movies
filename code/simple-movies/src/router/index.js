import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mhome from '@/components/Mhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mhome',
      component: Mhome
    }
  ]
})
