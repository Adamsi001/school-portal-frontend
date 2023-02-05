<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Students</h1>
      <p>Below is a list of all available students.</p>
    </div>
    <RouterLink to="students/new" class="btn-primary">
      Add New Student
    </RouterLink>
  </div>
  <div class="card">
    <div v-if="fetching">
      <h2 class="text-2xl font-semibold opacity-30">loading...</h2>
    </div>
    <div v-else-if="students.length < 1">
      <h2 class="text-2xl font-semibold opacity-30">No students yet.</h2>
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
            <!-- <th>staff ID</th> -->
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="(student, index) in students" :key="student.user_id">
            <td>{{ index + 1 }}</td>
            <td class="capitalize">
              {{ student.first_name }} {{ student.middle_name }}
              {{ student.last_name }}
            </td>
            <td>{{ student.email }}</td>
            <!-- <td>{{ student.user_id }}</td> -->
            <td class="uppercase">
              {{ faculties[student.faculty].abbrevation }}
            </td>
            <td class="uppercase">
              {{ departments[student.department].abbrevation }}
            </td>
            <td>
              <router-link :to="`/students/${student.id}`" class="link">
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
import { useStudentsStore } from "@/stores/users";

const { getStudents } = useStudentsStore();
const { fetchDepartments, departments } = useDepartmentsStore();
const { fetchFaculties, faculties } = useFacultiesStore();

const fetching = ref(true);
const students = ref([]);

onBeforeMount(async () => {
  await fetchFaculties();
  await fetchDepartments();
  await getStudents().then((data) => (students.value = data));
  fetching.value = false;
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
