
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contacts.vue'
import Booking from '@/components/Booking.vue'
import Menu from '@/components/Menu.vue'
import Order from '@/components/Order.vue'
import RestaurantList from '@/components/Restaurantlist.vue'

const routes = [
  {
    path:'/',
    component: HomePage
  },
  {
    path:'/About',
    component: About
  },
  {
    path:'/Contact',
    component: Contact
  },
  {
    path:'/Booking',
    component:Booking
  },
  {
    path:'/Menu',
    component: Menu
  },
  {
    path:'/RestaurantList',
    component: RestaurantList
  },
  {
    path:'/Order',
    component: Order
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router