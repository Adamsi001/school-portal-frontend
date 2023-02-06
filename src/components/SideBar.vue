<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { computed } from "vue-demi";
import { useRoute } from "vue-router";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

const { user } = useUserStore();

const user_profile_link = computed(() => {
  let user_type;

  switch (`${user.user_type}`.toLowerCase()) {
    case "admin":
      user_type = "users";
      break;
    case "lecturer":
      user_type = "users";
      break;
    case "level adviser":
      user_type = "lecturers";
      break;
    case "students":
      user_type = "students";
      break;
    default:
      user_type = "users";
  }
  return `/users/${user_type}/${user.id}`;
});

const route = useRoute();

const dashboard_links: {
  [key: string]: {
    title: string;
    href?: string;
    children?: { title: string; href: string }[];
  }[];
} = {
  student: [
    { title: "dashboard", href: "/" },
    { title: "announcements", href: "/announcements" },
    { title: "course registration", href: "/courses/registrations" },
    { title: "results", href: "/results" },
  ],
  "level adviser": [
    { title: "dashboard", href: "/" },
    { title: "students", href: "/users/students" },
    { title: "announcements", href: "/announcements" },
  ],
  admin: [
    { title: "dashboard", href: "/" },
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
    { title: "courses", href: "/courses" },
    // { title: "announcements", href: "/announcements" },
  ],
};
</script>

<template>
  <div
    class="sidebar h-full bg-slate-900 text-white p-4 rounded-xl flex flex-col justify-between shadow-md"
  >
    <h1 class="text-xl m-4 font-medium">Portal</h1>
    <nav class="flex-1 py-10">
      <ul class="flex flex-col gap-1 capitalize">
        <li
          v-for="link in dashboard_links[user.user_type]"
          :key="link.href"
          class="capitalize"
        >
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
                          : 'hover:bg-slate-80',
                        active ? 'bg-slate-900 text-white' : 'text-gray-900',
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
    <router-link to="profile" class="flex gap-4 items-center">
      <div class="w-[40px] h-[40px] rounded-full bg-white/60"></div>
      <div>
        <h2 class="text-lg text-ellipsis">Hi, {{ user.first_name }}</h2>
        <p class="opacity-80 text-sm capitalize">{{ user.user_type }}</p>
      </div>
    </router-link>
  </div>
</template>
