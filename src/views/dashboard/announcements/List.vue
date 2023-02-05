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
  <div v-if="fetching" class="card">
    <h2 class="text-2xl font-semibold opacity-30">loading...</h2>
  </div>
  <template v-else-if="announcements.length">
    <div class="grid grid-cols-3 gap-8">
      <template v-for="(announcement, index) in announcements" :key="index">
        <div class="card">
          <p class="text-sm opacity-60">
            {{ new Date(announcement.date_created).toLocaleString() }}
          </p>
          <h2 class="text-2xl font-medium">
            {{ announcement.body }}
          </h2>
          <p class="opacity-80">{{ announcement.body.slice(0, 100) }}...</p>
          <p>
            <RouterLink :to="`announcements/${announcement.id}`" class="link">
              See details
            </RouterLink>
          </p>
        </div>
      </template>
    </div>
  </template>
  <div v-else class="card">
    <p class="text-xl font-semibold">You do not have any announcements yet.</p>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue-demi";
import { useAnnouncementsStore } from "@/stores/announcements";
const { getAnnouncements } = useAnnouncementsStore();

const fetching = ref(true);
const announcements = ref([]);

onBeforeMount(async () => {
  await getAnnouncements().then((data) => (announcements.value = data));
  fetching.value = false;
});
</script>

<style scoped></style>
