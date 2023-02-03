<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Announcements</h1>
      <p>See what announcements are available for you.</p>
    </div>
    <RouterLink to="announcements/new" class="btn-primary">
      Make new announcement
    </RouterLink>
  </div>
  <template v-if="announcements.length">
    <div class="grid grid-cols-3 gap-8">
      <template v-for="(announcement, index) in announcements" :key="index">
        <div class="card">
          <p class="text-sm opacity-60">
            {{ announcement.date.toLocaleString("en-US") }}
          </p>
          <h2 class="text-2xl font-medium">
            {{ announcement.title }}
          </h2>
          <p class="opacity-80">{{ announcement.content.slice(0, 100) }}...</p>
          <p>
            <RouterLink to="announcements/detail" class="link"
              >See details</RouterLink
            >
          </p>
        </div>
      </template>
    </div>
  </template>
  <div v-else>
    <p class="text-xl font-semibold">You do not have any announcements yet.</p>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
const announcements = [
  {
    date: new Date(),
    title: "Make your registrations",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laborum impedit consequuntur excepturi veritatis blanditiis aliquid vitae ab, error ad est doloremque dolorem ipsam amet at corporis culpa. Enim, accusamus!",
  },
];
</script>

<style scoped></style>
