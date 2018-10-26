import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BecomeHost from '@/components/BecomeHost'
import ListingsPage from '@/components/ListingsPage'
import FullDetailsPage from '@/components/FullDetailsPage'
import UserProfile from '@/components/UserProfile'
import EditUserListing from '@/components/EditUserListing'
import Chat from '@/components/Chat'
import Notifications from '@/components/Notifications'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Router)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA2LmiHomsV8B4M4GXgPxqcTlk6hLSiT9E',
    libraries: 'places'
  }
})

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
    },
    {
      path: '/listings/:location',
      name: 'ListingsPage',
      component: ListingsPage,
      props: true
    },
    {
      path: '/full-details/:id',
      name: 'FullDetailsPage',
      component: FullDetailsPage,
      props: true
    },
    {
      path: '/user_profile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/edit_user_listing/:id',
      name: 'EditUserListing',
      component: EditUserListing
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: Notifications
    }
  ]
})
