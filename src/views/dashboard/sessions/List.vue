<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Sessions</h1>
      <p>Below is a list of all available sessions.</p>
    </div>
    <RouterLink to="sessions/new" class="btn-primary">
      Add New Session
    </RouterLink>
  </div>
  <div class="card">
    <div v-if="fetching">
      <h2 class="text-2xl font-semibold opacity-30">loading...</h2>
    </div>
    <div v-else-if="sessions.length < 1">
      <h2 class="text-2xl font-semibold opacity-30">No sessions yet.</h2>
    </div>
    <div v-else>
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="opacity-30">s/n</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="(session, index) in sessions" :key="session.id">
            <td>{{ index + 1 }}</td>
            <td class="capitalize">{{ session.title }}</td>
            <td>
              <router-link :to="`/sessions/${session.id}/edit`" class="link">
                Edit session
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue-demi";
import { useSessionsStore } from "@/stores/core";
const { getSessions } = useSessionsStore();

const fetching = ref(true);
const sessions = ref([]);

onBeforeMount(async () => {
  await getSessions().then((data) => (sessions.value = data));
  fetching.value = false;
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
