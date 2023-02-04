<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Levels</h1>
      <p>Below is a list of all available levels.</p>
    </div>
    <RouterLink to="levels/new" class="btn-primary"> Add New Level </RouterLink>
  </div>
  <div class="card">
    <div>
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="opacity-30">s/n</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="(level, index) in levels" :key="level.title">
            <td>{{ index + 1 }}</td>
            <td class="capitalize">{{ level.title }}</td>
            <td>
              <router-link to="/levels/detail/edit" class="link">
                Edit level
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const levels = [
  {
    title: 100,
  },
  {
    title: 200,
  },
  {
    title: 300,
  },
];
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
