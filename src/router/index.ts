import { useUserStore } from "@/stores/user";
import { createRouter, createWebHistory } from "vue-router";

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
          path: "departments",
          name: "departments",
          component: () => import("../views/dashboard/departments/App.vue"),
          meta: {
            title: "Departments",
          },
          children: [
            {
              path: "",
              name: "departments-list",
              component: () =>
                import("../views/dashboard/departments/List.vue"),
              meta: {
                title: "Departments",
              },
            },
            {
              path: "new",
              name: "new department",
              component: () => import("../views/dashboard/departments/New.vue"),
              meta: {
                title: "New Department",
              },
            },
            {
              path: ":id",
              name: "department detail",
              component: () =>
                import("../views/dashboard/departments/Detail.vue"),
              meta: {
                title: "Department Detail",
              },
            },
            {
              path: ":id/edit",
              name: "edit department",
              component: () =>
                import("../views/dashboard/departments/Edit.vue"),
              meta: {
                title: "Edit Department",
              },
            },
          ],
        },
        {
          path: "faculties",
          name: "faculties",
          component: () => import("../views/dashboard/faculties/App.vue"),
          meta: {
            title: "Faculties",
          },
          children: [
            {
              path: "",
              name: "faculties-list",
              component: () => import("../views/dashboard/faculties/List.vue"),
              meta: {
                title: "Faculties",
              },
            },
            {
              path: "new",
              name: "new faculty",
              component: () => import("../views/dashboard/faculties/New.vue"),
              meta: {
                title: "New Faculty",
              },
            },
            {
              path: ":id",
              name: "faculty detail",
              component: () =>
                import("../views/dashboard/faculties/Detail.vue"),
              meta: {
                title: "Faculty Detail",
              },
            },
            {
              path: ":id/edit",
              name: "edit faculty",
              component: () => import("../views/dashboard/faculties/Edit.vue"),
              meta: {
                title: "Edit Faculty",
              },
            },
          ],
        },
        {
          path: "sessions",
          name: "sessions",
          component: () => import("../views/dashboard/sessions/App.vue"),
          meta: {
            title: "Sessions",
          },
          children: [
            {
              path: "",
              name: "sessions-list",
              component: () => import("../views/dashboard/sessions/List.vue"),
              meta: {
                title: "Sessions",
              },
            },
            {
              path: "new",
              name: "new session",
              component: () => import("../views/dashboard/sessions/New.vue"),
              meta: {
                title: "New Session",
              },
            },
            {
              path: ":id/edit",
              name: "edit session",
              component: () => import("../views/dashboard/sessions/Edit.vue"),
              meta: {
                title: "Edit Session",
              },
            },
          ],
        },
        {
          path: "levels",
          name: "levels",
          component: () => import("../views/dashboard/levels/App.vue"),
          meta: {
            title: "Levels",
          },
          children: [
            {
              path: "",
              name: "levels-list",
              component: () => import("../views/dashboard/levels/List.vue"),
              meta: {
                title: "Levels",
              },
            },
            {
              path: "new",
              name: "new level",
              component: () => import("../views/dashboard/levels/New.vue"),
              meta: {
                title: "New Level",
              },
            },
            {
              path: ":id/edit",
              name: "edit level",
              component: () => import("../views/dashboard/levels/Edit.vue"),
              meta: {
                title: "Edit Level",
              },
            },
          ],
        },

        {
          path: "courses",
          name: "courses",
          component: () => import("../views/dashboard/courses/App.vue"),
          children: [
            {
              path: "",
              name: "courses list",
              component: () => import("../views/dashboard/courses/List.vue"),
              meta: {
                title: "Courses",
              },
            },
            {
              path: "new",
              name: "new courses",
              component: () => import("../views/dashboard/courses/New.vue"),
              meta: {
                title: "New Course",
              },
            },
            {
              path: "detail",
              name: "Course detail",
              component: () => import("../views/dashboard/courses/Detail.vue"),
              meta: {
                title: "Course",
              },
            },
            {
              path: "detail/edit",
              name: "Edot course",
              component: () => import("../views/dashboard/courses/Edit.vue"),
              meta: {
                title: "Edit Course",
              },
            },
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
              path: ":id",
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
          path: "users",
          name: "users",
          component: () => import("../views/dashboard/users/App.vue"),
          meta: {
            title: "users",
          },
          children: [
            {
              path: "admins",
              name: "admins",
              component: () =>
                import("../views/dashboard/users/admins/App.vue"),
              meta: {
                title: "Admins",
              },
              children: [
                {
                  path: "",
                  name: "admins-list",
                  component: () =>
                    import("../views/dashboard/users/admins/List.vue"),
                  meta: {
                    title: "Admins",
                  },
                },
                {
                  path: "new",
                  name: "new admin",
                  component: () =>
                    import("../views/dashboard/users/admins/New.vue"),
                  meta: {
                    title: "New Admin",
                  },
                },
                {
                  path: ":id",
                  name: "admin detail",
                  component: () =>
                    import("../views/dashboard/users/admins/Detail.vue"),
                  meta: {
                    title: "Admin Detail",
                  },
                },
                {
                  path: ":id/edit",
                  name: "edit admin",
                  component: () =>
                    import("../views/dashboard/users/admins/Edit.vue"),
                  meta: {
                    title: "Edit Admin",
                  },
                },
              ],
            },
            {
              path: "lecturers",
              name: "lecturers",
              component: () =>
                import("../views/dashboard/users/lecturers/App.vue"),
              meta: {
                title: "Lecturers",
              },
              children: [
                {
                  path: "",
                  name: "lecturers-list",
                  component: () =>
                    import("../views/dashboard/users/lecturers/List.vue"),
                  meta: {
                    title: "Lecturers",
                  },
                },
                {
                  path: "new",
                  name: "new lecturer",
                  component: () =>
                    import("../views/dashboard/users/lecturers/New.vue"),
                  meta: {
                    title: "New Lecturer",
                  },
                },
                {
                  path: ":id",
                  name: "lecturer detail",
                  component: () =>
                    import("../views/dashboard/users/lecturers/Detail.vue"),
                  meta: {
                    title: "Lecturer Detail",
                  },
                },
                {
                  path: ":id/edit",
                  name: "edit lecturer",
                  component: () =>
                    import("../views/dashboard/users/lecturers/Edit.vue"),
                  meta: {
                    title: "Edit Lecturer",
                  },
                },
              ],
            },
            {
              path: "students",
              name: "Students",
              component: () =>
                import("../views/dashboard/users/students/App.vue"),
              meta: {
                title: "Students",
              },
              children: [
                {
                  path: "",
                  name: "students-list",
                  component: () =>
                    import("../views/dashboard/users/students/List.vue"),
                  meta: {
                    title: "Students",
                  },
                },
                {
                  path: "new",
                  name: "new student",
                  component: () =>
                    import("../views/dashboard/users/students/New.vue"),
                  meta: {
                    title: "New Student",
                  },
                },
                {
                  path: ":id",
                  name: "student detail",
                  component: () =>
                    import("../views/dashboard/users/students/Detail.vue"),
                  meta: {
                    title: "Student Detail",
                  },
                },
                {
                  path: ":id/edit",
                  name: "edit student",
                  component: () =>
                    import("../views/dashboard/users/students/Edit.vue"),
                  meta: {
                    title: "Edit Student",
                  },
                },
              ],
            },
            {
              path: "users",
              name: "users",
              component: () => import("../views/dashboard/users/users/App.vue"),
              meta: {
                title: "Users",
              },
              children: [
                {
                  path: "",
                  name: "users-list",
                  component: () =>
                    import("../views/dashboard/users/users/List.vue"),
                  meta: {
                    title: "Users",
                  },
                },
                {
                  path: "new",
                  name: "new user",
                  component: () =>
                    import("../views/dashboard/users/users/New.vue"),
                  meta: {
                    title: "New User",
                  },
                },
                {
                  path: ":id",
                  name: "user detail",
                  component: () =>
                    import("../views/dashboard/users/users/Detail.vue"),
                  meta: {
                    title: "User Detail",
                  },
                },
                {
                  path: ":id/edit",
                  name: "edit user",
                  component: () =>
                    import("../views/dashboard/users/users/Edit.vue"),
                  meta: {
                    title: "Edit User",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const { is_authenticated, logout } = useUserStore();

  if (!is_authenticated && to.name !== "login") {
    next({ name: "login", query: { redirect: to.path } });
    return;
  } else if (is_authenticated && to.name == "login") {
    await logout();
  }

  if (to.meta.title) {
    document.title = `${to.meta.title} | Portal`;
  } else {
    document.title = "Portal";
  }
  next();
});

export default router;
