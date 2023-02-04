<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Departments</h1>
      <p>Below is a list of all available departments.</p>
    </div>
    <RouterLink to="departments/new" class="btn-primary">
      Add New Department
    </RouterLink>
  </div>
  <div class="card">
    <div v-if="fetching">
      <h2 class="text-2xl font-semibold opacity-30">loading...</h2>
    </div>
    <div v-else-if="departments.length < 1">
      <h2 class="text-2xl font-semibold opacity-30">No departments yet.</h2>
    </div>
    <div v-else>
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="opacity-30">s/n</th>
            <th>Abbrevation</th>
            <th>Title</th>
            <th>Faculty</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr
            v-for="(department, index) in departments"
            :key="department.abbrevation"
          >
            <td>{{ index + 1 }}</td>
            <td class="uppercase">{{ department.abbrevation }}</td>
            <td class="capitalize">{{ department.title }}</td>
            <td class="uppercase">
              {{ faculties[department.faculty].abbrevation }}
            </td>
            <td>
              <router-link :to="`/departments/${department.id}`" class="link">
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
import { useDepartmentsStore, useFacultiesStore } from "@/stores/faculties";

const { getDepartments } = useDepartmentsStore();
const { fetchFaculties, faculties } = useFacultiesStore();

const fetching = ref(true);
const departments = ref([]);

onBeforeMount(async () => {
  await fetchFaculties();
  await getDepartments().then((data) => (departments.value = data));
  fetching.value = false;
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
