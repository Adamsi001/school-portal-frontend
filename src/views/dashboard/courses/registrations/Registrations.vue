<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Registrations</h1>
      <p>Below is a list of your registered courses.</p>
    </div>
    <RouterLink to="registrations/new" class="btn-primary">
      Register new courses
    </RouterLink>
  </div>
  <div class="card">
    <div class="text-center font-medium opacity-80">
      <h2 class="text-2xl">Session 2021/2022</h2>
      <p>1st semester</p>
    </div>
    <div>
      <table class="w-full text-left">
        <thead>
          <tr>
            <th>Course code</th>
            <th>Course title</th>
            <th>Unit</th>
            <th>Nature</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr v-for="course in courses" :key="course.code">
            <td>{{ course.code }}</td>
            <td>{{ course.title }}</td>
            <td>{{ course.unit }}</td>
            <td>core</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const courses = [
  {
    code: "CPT414",
    title: "Engineering Software the right way",
    unit: 3,
  },
  {
    code: "CPT412",
    title: "Principles of IT Culture",
    unit: 2,
  },
  {
    code: "CPT411",
    title: "Maintaining Software infrastructure",
    unit: 3,
  },
];
</script>

<style scoped>
td {
  padding: 8px;
}
</style>
