import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mhome from '@/components/Mhome'
import moreMain from '@/components/moreMain'
import movieDetail from '@/components/movieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mhome',
      component: Mhome
    },
    {
      path: '/more/:type',
      name: 'more',
      component: moreMain
    },
    {
      path: '/movie/:movieId',
      name: 'movieDetail',
      component: movieDetail
    },
  ]
})
