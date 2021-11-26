import { createRouter, createWebHashHistory } from 'vue-router'
import Recommend from '@/views/recommend';
import Search from '@/views/search'
import Singer from '@/views/singer'
import TopList from '@/views/top-list'

const routes = [
  { 
    redirect: '/recommend',
    path: '/',   //根路径
  }, 
  {
    component: Recommend,
    path: '/recommend',
  },
  {
    component: Singer,
    path: '/singer',
  },
  {
    component: TopList,
    path: '/top-list',
  },
  {
    component: Search,
    path: '/search',
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
