<script setup lang="ts">
import { ref } from "vue-demi";

const headerLinks = ref([
  { title: "home", href: "/" },
  { title: "about", href: "/about" },
  { title: "contact us", href: "/contact-us" },
]);
</script>

<template>
  <header>
    <div class="container max-w-6xl py-4 flex justify-between items-center">
      <h2 class="text-xl font-semibold">Portal</h2>
      <nav>
        <ul class="flex items-center gap-4">
          <li v-for="link in headerLinks" :key="link.href" class="capitalize">
            <router-link :to="link.href">{{ link.title }}</router-link>
          </li>
        </ul>
      </nav>
      <router-link v-if="false" to="/login" class="btn-primary">
        Login
      </router-link>
      <div v-else class="flex gap-2 items-center">
        <button class="w-6 h-6 rounded-full bg-slate-900"></button>
        <router-link to="/dashboard" class="btn-primary">
          Dashboard
        </router-link>
      </div>
    </div>
  </header>
</template>
