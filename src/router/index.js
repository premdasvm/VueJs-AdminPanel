import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/users",
    name: "Users",
    component: () =>
      import("../views/Users.vue")
  },
  {
    path: "/questions",
    name: "Questions",
    component: () =>
      import("../views/Questions.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
