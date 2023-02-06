<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import { useUserStore } from "./stores/user";
import { onMounted } from "vue";

const { setCurrentUser } = useUserStore();
onMounted(async () => {
  await setCurrentUser();
});
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen">
    <!-- <Header /> -->
    <div class="flex-1 bg-slate-200">
      <RouterView />
    </div>
    <!-- <Footer /> -->
  </div>
</template>
