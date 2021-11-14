import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/Posts',
    name: 'Posts',

    component: function () {
      return import(/* webpackChunkName: "Post" */ '../views/Posts.vue')
    }
  },
  {
    path: '/CreatePost',
    name: 'CreatePost',

    component: function () {
      return import(/* webpackChunkName: "Post" */ '../views/CreatePost.vue')
    }
  },
  {
    path: '/links',
    name: 'links',

    component: function () {
      return import(/* webpackChunkName: "Post" */ '../views/links/Links.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
