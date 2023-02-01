<template>
  <p>
    <RouterLink to="/dashboard/announcements" class="link"
      >&lt; Back to Announcements</RouterLink
    >
  </p>
  <div class="card space-y-4">
    <div class="space-y-2">
      <h1 class="text-4xl font-medium">{{ announcement.title }}</h1>
      <p class="opacity-60">{{ announcement.date.toLocaleString() }}</p>
    </div>
    <p>{{ announcement.content }}</p>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
const announcement = {
  date: new Date(),
  title: "Make your registrations",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laborum impedit consequuntur excepturi veritatis blanditiis aliquid vitae ab, error ad est doloremque dolorem ipsam amet at corporis culpa. Enim, accusamus!",
};
</script>

<style lang="scss" scoped></style>
