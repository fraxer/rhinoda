import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const PageIndex = () => import('@/components/pages/index/PageIndex')
const PageProject = () => import('@/components/pages/project/PageProject')

export default new Router({
  mode: 'history',
  hashbang: false,
  history: true,
  routes: [
    {
      name: 'PageIndex',
      path: '/',
      component: PageIndex
    },
    {
      name: 'PageProject',
      path: '/:user/:repo',
      component: PageProject
    }
  ]
})
