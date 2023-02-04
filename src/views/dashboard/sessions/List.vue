<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Sessions</h1>
      <p>Below is a list of all available sessions.</p>
    </div>
    <RouterLink to="sessions/new" class="btn-primary">
      Add New Session
    </RouterLink>
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
          <tr v-for="(session, index) in sessions" :key="session.title">
            <td>{{ index + 1 }}</td>
            <td class="capitalize">{{ session.title }}</td>
            <td>
              <router-link to="/sessions/detail/edit" class="link">
                Edit session
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const sessions = [
  {
    title: "2015/2016",
  },
  {
    title: "2016/2017",
  },
  {
    title: "2017/2018",
  },
];
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
