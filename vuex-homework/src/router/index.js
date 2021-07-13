import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UserDetail from "../views/UserDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/user-detail/:id",
    name: "userDetail",
    component: UserDetail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
