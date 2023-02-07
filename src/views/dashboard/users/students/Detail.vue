<template>
  <p>
    <RouterLink to="/students" class="link">&lt; Back to students</RouterLink>
  </p>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Student Detail</h1>
      <p>These are the information available for this student.</p>
    </div>
    <RouterLink
      :to="`${route.params.id}/edit`"
      class="btn-primary"
      v-if="user.user_type == 'admin'"
    >
      Edit Student
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
            <p class="opacity-60">{{ student.first_name }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Middle Name:</p>
          <div class="field">
            <p class="opacity-60">{{ student.middle_name || "-" }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Last Name:</p>
          <div class="field">
            <p class="opacity-60">{{ student.last_name }}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="font-semibold">Gender:</p>
          <div class="field">
            <p class="opacity-60">{{ student.gender }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Email:</p>
          <div class="field">
            <p class="opacity-60">{{ student.email }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Student ID:</p>
          <div class="field">
            <p class="opacity-60">{{ student.user_id }}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="font-semibold">Level:</p>
          <div class="field">
            <p class="opacity-60">{{ student.level }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Faculty:</p>
          <div class="field">
            <p class="opacity-60">{{ student.faculty }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Department:</p>
          <div class="field">
            <p class="opacity-60">{{ student.department }}</p>
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
import { useStudentsStore, useLecturersStore } from "@/stores/users";
import { useUserStore } from "@/stores/user";

const { user } = useUserStore();

const { getStudent } = useStudentsStore();
const { getFaculty } = useFacultiesStore();
const { getDepartment } = useDepartmentsStore();

const student = ref({});
const is_fetching = ref(true);

const route = useRoute();

onBeforeMount(async () => {
  await getStudent(route.params.id).then((data) => {
    student.value = data;
    is_fetching.value = false;
  });

  let department = await getDepartment(student.value.department);
  let faculty = await getFaculty(student.value.faculty);
  student.value.department = department.abbrevation;
  student.value.faculty = faculty.abbrevation;
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
