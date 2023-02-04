<template>
  <p>
    <RouterLink to="/faculties" class="link">&lt; Back to faculties</RouterLink>
  </p>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Faculty Detail</h1>
      <p>These are the information available for this faculty.</p>
    </div>
    <RouterLink :to="`${faculty.id}/edit`" class="btn-primary">
      Edit Faculty
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
          <p class="opacity-60 capitalize">{{ faculty.title }}</p>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="font-semibold">Abbrevation:</p>
          <div class="field">
            <p class="opacity-60">{{ faculty.abbrevation }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFacultiesStore } from "@/stores/faculties";

const { getFaculty } = useFacultiesStore();

const faculty = ref({});
const is_fetching = ref(true);

const router = useRouter();
const route = useRoute();

onBeforeMount(async () => {
  await getFaculty(route.params.id).then((data) => {
    faculty.value = data;
    is_fetching.value = false;
  });
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
