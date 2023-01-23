import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta: {
        title: "Login",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | Portal`;
  }
  next();
});

export default router;
