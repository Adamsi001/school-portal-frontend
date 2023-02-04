<template>
  <p>
    <RouterLink to="/departments" class="link"
      >&lt; Back to departments</RouterLink
    >
  </p>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Department Detail</h1>
      <p>These are the information available for this department.</p>
    </div>
    <RouterLink :to="`${route.params.id}/edit`" class="btn-primary">
      Edit Department
    </RouterLink>
  </div>
  <div class="card space-y-4">
    <h2 class="text-2xl opacity-30 font-semibold" v-if="is_fetching">
      Loading...
    </h2>
    <template v-else>
      <div>
        <p class="font-semibold">Title:</p>
        <div class="field">
          <p class="opacity-60">{{ department.title }}</p>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="font-semibold">Abbrevation:</p>
          <div class="field">
            <p class="opacity-60">{{ department.abbrevation }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Short Code:</p>
          <div class="field">
            <p class="opacity-60">{{ department.short_code }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Faculty:</p>
          <div class="field">
            <p class="opacity-60">{{ department.faculty }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFacultiesStore, useDepartmentsStore } from "@/stores/faculties";

const { getFaculty } = useFacultiesStore();
const { getDepartment } = useDepartmentsStore();

const department = ref({});
const is_fetching = ref(true);

const router = useRouter();
const route = useRoute();

onBeforeMount(async () => {
  await getDepartment(route.params.id).then((data) => {
    department.value = data;
    is_fetching.value = false;
  });
  let faculty = await getFaculty(department.value.faculty);
  department.value.faculty = faculty.abbrevation;
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
