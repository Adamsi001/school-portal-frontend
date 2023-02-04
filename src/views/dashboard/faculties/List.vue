<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Faculties</h1>
      <p>Below is a list of all available faculties.</p>
    </div>
    <RouterLink to="faculties/new" class="btn-primary">
      Add New Faculty
    </RouterLink>
  </div>
  <div class="card">
    <div v-if="fetching">
      <h2 class="text-2xl font-semibold opacity-30">loading...</h2>
    </div>
    <div v-else-if="faculties.length < 1">
      <h2 class="text-2xl font-semibold opacity-30">No faculty yet.</h2>
    </div>
    <div v-else>
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="opacity-30">s/n</th>
            <th>Abbrevation</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="(faculty, index) in faculties" :key="faculty.abbrevation">
            <td>{{ index + 1 }}</td>
            <td class="uppercase">{{ faculty.abbrevation }}</td>
            <td class="capitalize">{{ faculty.title }}</td>
            <td>
              <router-link :to="`/faculties/${faculty.id}`" class="link">
                See Details
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
import { useFacultiesStore } from "@/stores/faculties";
const { getFaculties } = useFacultiesStore();

const fetching = ref(true);
const faculties = ref([]);

onBeforeMount(async () => {
  await getFaculties().then((data) => (faculties.value = data));
  fetching.value = false;
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
