<script setup lang="ts">
import { ref } from "vue-demi";

const dashboard_links = ref([
  { title: "dashboard", href: "/" },
  { title: "announcements", href: "/announcements" },
  { title: "course registration", href: "/course-registration" },
  { title: "results", href: "/results" },
]);
</script>

<template>
  <main>
    <section
      class="container max-w-7xl grid grid-cols-5 gap-4 min-h-screen py-4"
    >
      <div
        class="h-full bg-slate-900 text-white p-4 rounded-xl flex flex-col justify-between shadow-md"
      >
        <h1 class="text-xl my-4 font-medium">Portal</h1>
        <nav>
          <ul class="flex flex-col gap-1">
            <li
              v-for="link in dashboard_links"
              :key="link.href"
              class="capitalize"
            >
              <router-link
                :to="`/dashboard${link.href}`"
                class="group p-4 rounded-md hover:bg-slate-800 transition-default flex justify-between"
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
        <h2>Some Name</h2>
      </div>
      <h1 class="text-4xl my-4 font-medium">Dashboard</h1>
    </section>
  </main>
</template>
