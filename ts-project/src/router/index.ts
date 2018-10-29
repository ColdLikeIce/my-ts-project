import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

const Index: AsyncComponent = (): any => import('@/components/index.vue')
const Login: AsyncComponent = (): any => import('@/page/Login.vue')

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    meta: {
      title: '首页'
    }
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
