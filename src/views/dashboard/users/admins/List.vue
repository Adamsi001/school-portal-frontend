<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Admins</h1>
      <p>Below is a list of all available admins.</p>
    </div>
    <RouterLink to="admins/new" class="btn-primary"> Add New Admin </RouterLink>
  </div>
  <div class="card">
    <div v-if="fetching">
      <h2 class="text-2xl font-semibold opacity-30">loading...</h2>
    </div>
    <div v-else-if="admins.length < 1">
      <h2 class="text-2xl font-semibold opacity-30">No admins yet.</h2>
    </div>
    <div v-else>
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="opacity-30">s/n</th>
            <th>Name</th>
            <th>Email</th>
            <th>Staff ID</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="(admin, index) in admins" :key="admin.user_id">
            <td>{{ index + 1 }}</td>
            <td class="capitalize">
              {{ admin.first_name }} {{ admin.middle_name }}
              {{ admin.last_name }}
            </td>
            <td>{{ admin.email }}</td>
            <td>{{ admin.user_id }}</td>

            <td>
              <router-link :to="`/users/admins/${admin.id}`" class="link">
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
import { useAdminsStore } from "@/stores/users";

const { getAdmins } = useAdminsStore();

const fetching = ref(true);
const admins = ref([]);

onBeforeMount(async () => {
  await getAdmins().then((data) => (admins.value = data));
  fetching.value = false;
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
