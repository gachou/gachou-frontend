import Vue from 'vue'
import Router from 'vue-router'
import ImageList from '@/components/ImageList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/browse/'
    },

    {
      path: '/browse',
      name: 'Browse',
      meta: {
        basePath: '/browse/'
      },
      component: ImageList
    }
  ]
})
