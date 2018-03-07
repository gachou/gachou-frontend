import Vue from 'vue'
import Router from 'vue-router'
import ImageList from '@/components/ImageList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/browse/:directory',
      name: 'ImageList',
      component: ImageList
    }
  ]
})
