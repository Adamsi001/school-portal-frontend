<template>
  <p>
    <RouterLink to="/lecturers" class="link">&lt; Back to lecturers</RouterLink>
  </p>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Lecturer Detail</h1>
      <p>These are the information available for this lecturer.</p>
    </div>
    <RouterLink :to="`${route.params.id}/edit`" class="btn-primary">
      Edit Lecturer
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
            <p class="opacity-60">{{ lecturer.first_name }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Middle Name:</p>
          <div class="field">
            <p class="opacity-60">{{ lecturer.middle_name || "-" }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Last Name:</p>
          <div class="field">
            <p class="opacity-60">{{ lecturer.last_name }}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="font-semibold">Gender:</p>
          <div class="field">
            <p class="opacity-60">{{ lecturer.gender }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Email:</p>
          <div class="field">
            <p class="opacity-60">{{ lecturer.email }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Staff ID:</p>
          <div class="field">
            <p class="opacity-60">{{ lecturer.user_id }}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="font-semibold">Faculty:</p>
          <div class="field">
            <p class="opacity-60">{{ lecturer.faculty }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Department:</p>
          <div class="field">
            <p class="opacity-60">{{ lecturer.department }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { useFacultiesStore, useDepartmentsStore } from "@/stores/faculties";
import { useLecturersStore } from "@/stores/users";

const { getLecturer } = useLecturersStore();
const { getFaculty } = useFacultiesStore();
const { getDepartment } = useDepartmentsStore();

const lecturer = ref({});
const is_fetching = ref(true);

const route = useRoute();

onBeforeMount(async () => {
  await getLecturer(route.params.id).then((data) => {
    lecturer.value = data;
    is_fetching.value = false;
  });

  let department = await getDepartment(lecturer.value.department);
  let faculty = await getFaculty(lecturer.value.faculty);
  lecturer.value.department = department.abbrevation;
  lecturer.value.faculty = faculty.abbrevation;
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
