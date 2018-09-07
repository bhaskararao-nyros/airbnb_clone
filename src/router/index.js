import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BecomeHost from '@/components/BecomeHost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/become_host',
      name: 'BecomeHost',
      component: BecomeHost
    }
  ]
})
