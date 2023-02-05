<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Lecturers</h1>
      <p>Below is a list of all available lecturers.</p>
    </div>
    <RouterLink to="lecturers/new" class="btn-primary">
      Add New Lecturer
    </RouterLink>
  </div>
  <div class="card">
    <div v-if="fetching">
      <h2 class="text-2xl font-semibold opacity-30">loading...</h2>
    </div>
    <div v-else-if="lecturers.length < 1">
      <h2 class="text-2xl font-semibold opacity-30">No lecturers yet.</h2>
    </div>
    <div v-else>
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="opacity-30">s/n</th>
            <th>Name</th>
            <th>Email</th>
            <!-- <th>staff ID</th> -->
            <th>Faculty</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="(lecturer, index) in lecturers" :key="lecturer.user_id">
            <td>{{ index + 1 }}</td>
            <td class="capitalize">
              {{ lecturer.first_name }} {{ lecturer.middle_name }}
              {{ lecturer.last_name }}
            </td>
            <td>{{ lecturer.email }}</td>
            <!-- <td>{{ lecturer.user_id }}</td> -->
            <td class="uppercase">
              {{ faculties[lecturer.faculty].abbrevation }}
            </td>
            <td class="uppercase">
              {{ departments[lecturer.department].abbrevation }}
            </td>
            <td>
              <router-link :to="`/lecturers/${lecturer.id}`" class="link">
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
import { useLecturersStore } from "@/stores/users";

const { getLecturers } = useLecturersStore();
const { fetchDepartments, departments } = useDepartmentsStore();
const { fetchFaculties, faculties } = useFacultiesStore();

const fetching = ref(true);
const lecturers = ref([]);

onBeforeMount(async () => {
  await fetchFaculties();
  await fetchDepartments();
  await getLecturers().then((data) => (lecturers.value = data));
  fetching.value = false;
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
