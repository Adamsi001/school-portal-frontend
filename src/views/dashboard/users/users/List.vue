<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Users</h1>
      <p>Below is a list of all available users.</p>
    </div>
    <RouterLink to="users/new" class="btn-primary"> Add New User </RouterLink>
  </div>
  <div class="card">
    <div v-if="fetching">
      <h2 class="text-2xl font-semibold opacity-30">loading...</h2>
    </div>
    <div v-else-if="users.length < 1">
      <h2 class="text-2xl font-semibold opacity-30">No users yet.</h2>
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
          <tr v-for="(user, index) in users" :key="user.user_id">
            <td>{{ index + 1 }}</td>
            <td class="capitalize">
              {{ user.first_name }} {{ user.middle_name }}
              {{ user.last_name }}
            </td>
            <td>{{ user.email }}</td>
            <!-- <td>{{ user.user_id }}</td> -->
            <td class="uppercase">
              {{ faculties[user.faculty].abbrevation }}
            </td>
            <td class="uppercase">
              {{ departments[user.department].abbrevation }}
            </td>
            <td>
              <router-link :to="`/users/${user.id}`" class="link">
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
import { useUsersStore } from "@/stores/users";

const { getUsers } = useUsersStore();
const { fetchDepartments, departments } = useDepartmentsStore();
const { fetchFaculties, faculties } = useFacultiesStore();

const fetching = ref(true);
const users = ref([]);

onBeforeMount(async () => {
  await fetchFaculties();
  await fetchDepartments();
  await getUsers().then((data) => (users.value = data));
  fetching.value = false;
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
