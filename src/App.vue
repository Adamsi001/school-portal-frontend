<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col justify-between min-h-screen">
    <!-- <Header /> -->
    <div class="flex-1">
      <RouterView />
    </div>
    <!-- <Footer /> -->
  </div>
</template>
