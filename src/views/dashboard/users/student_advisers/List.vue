<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Student Advisers</h1>
      <p>Below is a list of all available student advisers.</p>
    </div>
    <RouterLink to="students/new" class="btn-primary">
      Add Student Advisers
    </RouterLink>
  </div>
  <div class="card">
    <div v-if="fetching">
      <h2 class="text-2xl font-semibold opacity-30">loading...</h2>
    </div>
    <div v-else-if="students.length < 1">
      <h2 class="text-2xl font-semibold opacity-30">
        No student advisers yet.
      </h2>
    </div>
    <div v-else>
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="opacity-30">s/n</th>
            <th>Name</th>
            <th>Email</th>
            <th>Faculty</th>
            <th>Department</th>
            <th>staff ID</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="(adviser, index) in advisers" :key="adviser.user_id">
            <td>{{ index + 1 }}</td>
            <td class="capitalize">
              {{ adviser.first_name }} {{ adviser.middle_name }}
              {{ adviser.last_name }}
            </td>
            <td>{{ adviser.email }}</td>
            <!-- <td>{{ adviser.user_id }}</td> -->
            <td class="uppercase">
              {{ faculties[adviser.faculty].abbrevation }}
            </td>
            <td class="uppercase">
              {{ departments[adviser.department].abbrevation }}
            </td>
            <td>
              <router-link :to="`/student-advisers/${adviser.id}`" class="link">
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
import { useStudentAdvisersStore } from "@/stores/users";
import { useUserStore } from "@/stores/user";

const { user } = useUserStore();

const { getAdvisers } = useStudentAdvisersStore();
const { fetchDepartments, departments } = useDepartmentsStore();
const { fetchFaculties, faculties } = useFacultiesStore();

const fetching = ref(true);
const advisers = ref([]);

onBeforeMount(async () => {
  await fetchFaculties();
  await fetchDepartments();
  await getAdvisers().then((data) => (advisers.value = data));
  fetching.value = false;
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
