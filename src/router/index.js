import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Portfolio from '@/components/Portfolio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {title: 'Home'}
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {title: 'About Me'}
    },
    {
      path: '/pricing',
      name: 'Pricing',
      component: Pricing,
      meta: {title: 'Pricing'}
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: {title: 'Contact Me'}
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio,
      meta: {title: 'Portfolio'}
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }

}
})
