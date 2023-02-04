<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Levels</h1>
      <p>Below is a list of all available levels.</p>
    </div>
    <RouterLink to="levels/new" class="btn-primary"> Add New Level </RouterLink>
  </div>
  <div class="card">
    <div v-if="fetching">
      <h2 class="text-2xl font-semibold opacity-30">loading...</h2>
    </div>
    <div v-else-if="levels.length < 1">
      <h2 class="text-2xl font-semibold opacity-30">No levels yet.</h2>
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
          <tr v-for="(level, index) in levels" :key="level.title">
            <td>{{ index + 1 }}</td>
            <td class="capitalize">{{ level.title }}</td>
            <td>
              <router-link :to="`/levels/${level.id}/edit`" class="link">
                Edit level
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
import { useLevelsStore } from "@/stores/core";
const { getLevels } = useLevelsStore();

const fetching = ref(true);
const levels = ref([]);

onBeforeMount(async () => {
  await getLevels().then((data) => (levels.value = data));
  fetching.value = false;
});
</script>
<style scoped>
td,
th {
  padding: 8px;
}
</style>
