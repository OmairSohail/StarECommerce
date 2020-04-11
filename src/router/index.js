import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import admin from '../views/admin.vue'
import overview from '../components/Overview.vue'
import profile from '../components/Profile.vue'
import products from '../components/Products.vue'
import orders from '../components/Orders.vue'
import firebase from '../firebase'    

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin,
    meta: { requiresAuth: true },
    children:[
      {
        path:'overview',
        name:'overview',
        component:overview
      },
      {
        path:'profile',
        name:'profile',
        component:profile
      },
      {
        path:'products',
        name:'products',
        component:products
      },
      {
        path:'orders',
        name:'orders',
        component:orders
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;

  if(requiresAuth && !currentUser)
  {
    next('/')
  } else if(requiresAuth && currentUser){
    next()
  } else{
    next()
  }
})


export default router
