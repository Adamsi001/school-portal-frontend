<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Faculties</h1>
      <p>Below is a list of all available faculties.</p>
    </div>
    <RouterLink to="faculties/new" class="btn-primary">
      Add New Faculty
    </RouterLink>
  </div>
  <div class="card">
    <div>
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="opacity-30">s/n</th>
            <th>Abbrevation</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="(faculty, index) in faculties" :key="faculty.abbrevation">
            <td>{{ index + 1 }}</td>
            <td class="uppercase">{{ faculty.abbrevation }}</td>
            <td class="capitalize">{{ faculty.title }}</td>
            <td>
              <router-link to="/faculties/detail" class="link">
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
const faculties = [
  {
    abbrevation: "SICT",
    title: "school of information and comminication technology",
  },
  {
    title: "School of agriculture and agricultural technology",
    abbrevation: "SAAT",
  },
  {
    title: "School of engineering and engineering technology",
    abbrevation: "SEET",
  },
];
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
