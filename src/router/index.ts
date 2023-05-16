import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountryViewVue from '@/views/CountryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    } ,
    {
      path: '/country/:country',
      name: 'country info',
      component: CountryViewVue
    } 
  ]
})

export default router
