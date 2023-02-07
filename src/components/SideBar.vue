<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { computed } from "vue-demi";
import { useRoute } from "vue-router";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

interface Dashboard_link {
  title: string;
  href?: string;
  children?: { title: string; href: string }[];
}

const { user } = useUserStore();

const route = useRoute();

const dashboard_links = computed(() => {
  let links: Dashboard_link[] = [
    { title: "dashboard", href: "/" },
    { title: "announcements", href: "/announcements" },
  ];

  switch (user.user_type) {
    case "student":
      links.push(
        { title: "course registration", href: "/courses/registrations" },
        { title: "results", href: "/results" }
      );
      break;
    case "admin":
      links.push(
        // users
        {
          title: "Users",
          href: "/users",
          children: [
            { title: "students", href: "/students" },
            { title: "lecturers", href: "/lecturers" },
            { title: "level advisers", href: "/level-advisers" },
            { title: "admins", href: "/admins" },
          ],
        },
        // school structure
        { title: "sessions", href: "/sessions" },
        { title: "levels", href: "/levels" },
        { title: "faculties", href: "/faculties" },
        { title: "departments", href: "/departments" },
        // courses
        { title: "courses", href: "/courses" }
        // { title: "announcements", href: "/announcements" },
      );
      break;
    case "staff":
      if (user.is_lecturer) {
        links.push({ title: "courses", href: "/courses" });
      }
      if (user.is_student_adviser) {
        links.push({ title: "students", href: "/users/students" });
      }
  }
  return links;
});
</script>

<template>
  <div
    class="sidebar h-full bg-slate-900 text-white p-4 rounded-xl flex flex-col justify-between shadow-md"
  >
    <h1 class="text-xl m-4 font-medium">Portal</h1>
    <nav class="flex-1 py-10">
      <ul class="flex flex-col gap-1 capitalize">
        <li v-for="link in dashboard_links" :key="link.href" class="capitalize">
          <Menu
            as="div"
            class="relative text-left p-4 rounded-md transition-default"
            :class="
              route.path == link.href ||
              (link.href != '/' && route.path.startsWith(link.href))
                ? 'active-link'
                : 'hover:bg-slate-800'
            "
            v-if="link.children"
          >
            <div>
              <MenuButton class="flex justify-between group w-full">
                <p>
                  {{ link.title }}
                </p>
                <span
                  class="group-hover:opacity-100 group-hover:translate-x-0 -translate-x-10 opacity-0 transition-default"
                >
                  &gt;
                </span>
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 z-20 mr-2 translate-x-[100%] w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="px-1 py-1 space-y-1">
                  <MenuItem
                    v-slot="{ active }"
                    v-for="(child_link, index) in link.children"
                    :key="index"
                  >
                    <router-link
                      :to="`${link.href}${child_link.href}`"
                      :class="[
                        route.path == `${link.href}${child_link.href}` ||
                        (child_link.href != '/' &&
                          route.path.startsWith(
                            `${link.href}${child_link.href}`
                          ))
                          ? 'bg-slate-900 text-slate-100'
                          : active
                          ? 'bg-slate-800 text-white'
                          : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-4 text-sm capitalize',
                      ]"
                    >
                      <p>
                        {{ child_link.title }}
                      </p>
                    </router-link>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <router-link
            v-else
            :to="link.href"
            class="group p-4 rounded-md flex"
            :class="
              route.path == link.href ||
              (link.href != '/' && route.path.startsWith(link.href))
                ? 'active-link'
                : 'hover:bg-slate-800'
            "
          >
            <p>
              {{ link.title }}
            </p>
          </router-link>
        </li>
      </ul>
    </nav>
    <router-link to="/profile" class="flex gap-4 items-center">
      <div class="w-[40px] h-[40px] rounded-full bg-white/60"></div>
      <div>
        <h2 class="text-lg text-ellipsis">Hi, {{ user.first_name }}</h2>
        <p class="opacity-80 text-sm capitalize">
          {{
            user.is_student_adviser
              ? "students adviser"
              : user.is_lecturer
              ? "lecturer"
              : user.user_type
          }}
        </p>
      </div>
    </router-link>
  </div>
</template>
