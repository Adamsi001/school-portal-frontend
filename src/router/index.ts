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
      component: () => import("../views/auth/LoginView.vue"),
      meta: {
        title: "Login",
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("../views/dashboard/App.vue"),
      meta: {
        title: "Dashboard",
      },
      children: [
        {
          path: "",
          name: "dashboard-index",
          component: () => import("../views/dashboard/DashboardView.vue"),
        },
        {
          path: "announcements",
          name: "announcements",
          component: () => import("../views/dashboard/announcements/App.vue"),
          children: [
            {
              path: "",
              name: "announcements-list",
              component: () =>
                import("../views/dashboard/announcements/List.vue"),
            },
            {
              path: "detail",
              name: "announcement-detail",
              component: () =>
                import("../views/dashboard/announcements/Detail.vue"),
            },
          ],
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | Portal`;
  } else {
    document.title = "Portal";
  }
  next();
});

export default router;
