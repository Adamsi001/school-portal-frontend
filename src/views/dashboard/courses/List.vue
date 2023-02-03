<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Courses</h1>
      <p>Below is a list of all available courses.</p>
    </div>
    <RouterLink to="courses/new" class="btn-primary">
      Add New Course
    </RouterLink>
  </div>
  <div class="card">
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
            <td>
              <router-link to="/courses/detail" class="link">
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
td,
th {
  padding: 8px;
}
</style>
