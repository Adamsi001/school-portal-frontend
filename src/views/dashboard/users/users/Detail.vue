<template>
  <p>
    <RouterLink to="/users" class="link">&lt; Back to users</RouterLink>
  </p>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Users Detail</h1>
      <p>These are the information available for this user.</p>
    </div>
    <RouterLink :to="`${route.params.id}/edit`" class="btn-primary">
      Edit User
    </RouterLink>
  </div>
  <div class="card space-y-4">
    <h2 class="text-2xl opacity-30 font-semibold" v-if="is_fetching">
      Loading...
    </h2>
    <template v-else>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="font-semibold">First Name:</p>
          <div class="field">
            <p class="opacity-60">{{ user.first_name }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Middle Name:</p>
          <div class="field">
            <p class="opacity-60">{{ user.middle_name || "-" }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Last Name:</p>
          <div class="field">
            <p class="opacity-60">{{ user.last_name }}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="font-semibold">Gender:</p>
          <div class="field">
            <p class="opacity-60">{{ user.gender }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Email:</p>
          <div class="field">
            <p class="opacity-60">{{ user.email }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">ID:</p>
          <div class="field">
            <p class="opacity-60">{{ user.user_id }}</p>
          </div>
        </div>
      </div>
      <!-- <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="font-semibold">Faculty:</p>
          <div class="field">
            <p class="opacity-60">{{ user.faculty }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Department:</p>
          <div class="field">
            <p class="opacity-60">{{ user.department }}</p>
          </div>
        </div>
      </div> -->
    </template>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
// import { useFacultiesStore, useDepartmentsStore } from "@/stores/faculties";
import { useUsersStore } from "@/stores/users";

const { getUser } = useUsersStore();
// const { getFaculty } = useFacultiesStore();
// const { getDepartment } = useDepartmentsStore();

const user = ref({});
const is_fetching = ref(true);

const route = useRoute();

onBeforeMount(async () => {
  await getUser(route.params.id).then((data) => {
    user.value = data;
    is_fetching.value = false;
  });

  // let department = await getDepartment(user.value.department);
  // let faculty = await getFaculty(user.value.faculty);
  // user.value.department = department.abbrevation;
  // user.value.faculty = faculty.abbrevation;
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
