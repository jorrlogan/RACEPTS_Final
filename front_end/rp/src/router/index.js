import Vue from "vue";
import VueRouter from "vue-router";
import AboutRP from "../views/AboutRP";
import Races from "../views/Races.vue"
import SignIn from "../views/SignIn"
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
//import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/AboutRP",
    name: "AboutRP",
    component: AboutRP,
  },
   {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  },
   {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
   {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Races",
    name: "Races",
    component: Races,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
