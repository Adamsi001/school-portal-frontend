<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Announcements</h1>
      <p>See what announcements are available for you.</p>
    </div>
    <RouterLink
      to="announcements/new"
      class="btn-primary"
      v-if="user.user_type !== 'student'"
    >
      Make new announcement
    </RouterLink>
  </div>
  <div v-if="fetching" class="card">
    <h2 class="text-2xl font-semibold opacity-30">loading...</h2>
  </div>
  <template v-else-if="announcements.length">
    <div class="grid grid-cols-3 gap-8">
      <template v-for="(announcement, index) in announcements" :key="index">
        <router-link
          :to="`announcements/${announcement.id}`"
          class="card space-y-8 hover:bg-opacity-60 transition-default"
        >
          <div class="space-y-4">
            <h2 class="text-2xl font-medium">
              {{ announcement.subject }}
            </h2>
            <p class="opacity-80">{{ announcement.body.slice(0, 100) }}...</p>
          </div>
          <div class="border-t pt-4 text-right">
            <p class="opacity-80">
              From:
              <span class="font-medium">
                {{ announcement.created_by.first_name }}
                {{ announcement.created_by.middle_name || "" }}
                {{ announcement.created_by.last_name }}
              </span>
            </p>

            <p class="text-sm opacity-60 italic">
              {{ new Date(announcement.date_created).toLocaleString() }}
            </p>
          </div>
        </router-link>
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
import { useUserStore } from "@/stores/user";
const { user } = useUserStore();
const { getAnnouncements } = useAnnouncementsStore();

const fetching = ref(true);
const announcements = ref([]);

onBeforeMount(async () => {
  await getAnnouncements().then((data) => (announcements.value = data));
  fetching.value = false;
});
</script>

<style scoped></style>
