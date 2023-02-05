<template>
  <p>
    <RouterLink to="/announcements" class="link"
      >&lt; Back to announcements</RouterLink
    >
  </p>
  <div class="card space-y-4">
    <div class="space-y-2">
      <h1 class="text-4xl font-medium">{{ announcement.subject }}</h1>
      <p class="opacity-60">
        {{ new Date(announcement.date_created).toLocaleString() }}
      </p>
    </div>
    <p>{{ announcement.body }}</p>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAnnouncementsStore } from "@/stores/announcements";

const { getAnnouncement } = useAnnouncementsStore();

const announcement = ref({});
const is_fetching = ref(true);

const router = useRouter();
const route = useRoute();

onBeforeMount(async () => {
  await getAnnouncement(route.params.id).then((data) => {
    announcement.value = data;
    is_fetching.value = false;
  });
});
</script>

<style lang="scss" scoped></style>
