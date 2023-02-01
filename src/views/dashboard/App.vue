<template>
  <main>
    <section
      class="container max-w-7xl grid grid-cols-5 gap-6 min-h-screen py-4"
    >
      <SideBar />
      <div class="col-span-4 space-y-6">
        <RouterView />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "../../components/SideBar.vue";
</script>

<style scoped></style>
