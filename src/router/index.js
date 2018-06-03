import Home from './../components/Home'
import Login from './../components/Login'
import Maint from './../components/Maint'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '*',
  //   name: 'Maint',
  //   component: Maint
  // }
];