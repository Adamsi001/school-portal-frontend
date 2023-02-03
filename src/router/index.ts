import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/LoginView.vue"),
      meta: {
        title: "Login",
      },
    },
    {
      path: "/",
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
          path: "courses",
          name: "courses",
          component: () => import("../views/dashboard/courses/App.vue"),
          children: [
            {
              path: "registrations",
              name: "course-registration",
              component: () =>
                import("../views/dashboard/courses/registrations/App.vue"),
              meta: {
                title: "Course",
              },
              children: [
                {
                  path: "",
                  name: "course-registration",
                  component: () =>
                    import(
                      "../views/dashboard/courses/registrations/Registrations.vue"
                    ),
                  meta: {
                    title: "Course Registration",
                  },
                },
                {
                  path: "new",
                  name: "new-course-registration",
                  component: () =>
                    import("../views/dashboard/courses/registrations/New.vue"),
                  meta: {
                    title: "New Course Registration",
                  },
                },
              ],
            },
          ],
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
              meta: {
                title: "Announcements",
              },
            },
            {
              path: "new",
              name: "announcement-new",
              component: () =>
                import("../views/dashboard/announcements/New.vue"),
              meta: {
                title: "New Announcement",
              },
            },
            {
              path: "detail",
              name: "announcement-detail",
              component: () =>
                import("../views/dashboard/announcements/Detail.vue"),
            },
          ],
        },
        {
          path: "results",
          name: "results",
          component: () => import("../views/dashboard/ResultsView.vue"),
          meta: {
            title: "Results",
          },
        },
        {
          path: "profile",
          name: "Profile",
          component: () => import("../views/dashboard/profile/Detail.vue"),
          meta: {
            title: "Profile",
          },
        },
        {
          path: "students",
          name: "Students",
          component: () => import("../views/dashboard/students/List.vue"),
          meta: {
            title: "Students",
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = true;
  if (!isAuthenticated && to.name !== "login") {
    next({ name: "login", query: { redirect: to.path } });
    return;
  }

  if (to.meta.title) {
    document.title = `${to.meta.title} | Portal`;
  } else {
    document.title = "Portal";
  }
  next();
});

export default router;
