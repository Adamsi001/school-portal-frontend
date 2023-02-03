<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { computed } from "vue-demi";
import { useRoute } from "vue-router";
const { user } = useUserStore();

const route = useRoute();

const dashboard_links: { [key: string]: { title: string; href: string }[] } = {
  student: [
    { title: "dashboard", href: "/" },
    { title: "announcements", href: "/announcements" },
    { title: "course registration", href: "/courses/registrations" },
    { title: "results", href: "/results" },
  ],
  "level adviser": [
    { title: "dashboard", href: "/" },
    { title: "students", href: "/students" },
    { title: "announcements", href: "/announcements" },
    // { title: "course registration", href: "/courses/registrations" },
    // { title: "results", href: "/results" },
  ],
};
</script>

<template>
  <div
    class="sidebar h-full bg-slate-900 text-white p-4 rounded-xl flex flex-col justify-between shadow-md"
  >
    <h1 class="text-xl m-4 font-medium">Portal</h1>
    <nav class="flex-1 py-10">
      <ul class="flex flex-col gap-1">
        <li
          v-for="link in dashboard_links[user.type]"
          :key="link.href"
          class="capitalize"
        >
          <router-link
            :to="link.href"
            class="group p-4 rounded-md transition-default flex justify-between"
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
            <div class="w-4 overflow-clip">
              <span
                class="group-hover:opacity-100 group-hover:translate-x-0 -translate-x-10 opacity-0 transition-default"
              >
                &gt;
              </span>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="flex gap-4 items-center">
      <div class="w-[40px] h-[40px] rounded-full bg-white/60"></div>
      <div>
        <h2 class="text-lg text-ellipsis">Hi, {{ user.first_name }}</h2>
        <p class="opacity-80 text-sm">{{ user.type }}</p>
      </div>
    </div>
  </div>
</template>
