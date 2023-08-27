import { createRouter, createWebHistory } from 'vue-router'
import LandingLayout from "../layouts/LandingLayout.vue"
import ExploreLayout from "../layouts/ExploreLayout.vue"

import RegisterView from "../views/Landing/RegisterView.vue"
import LoginView from "../views/Landing/LoginView.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingLayout,
    children:[
      {
        path: "register",
        name: "Register",
        component: RegisterView
      },
      {
        path: "login",
        name: "Login",
        component: LoginView
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
