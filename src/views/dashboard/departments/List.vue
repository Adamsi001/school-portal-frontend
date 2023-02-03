<template>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Departments</h1>
      <p>Below is a list of all available departments.</p>
    </div>
    <RouterLink to="departments/new" class="btn-primary">
      Add New Department
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
            <th>Faculty</th>
          </tr>
        </thead>
        <tbody class="divide-y">
          <tr
            v-for="(department, index) in departments"
            :key="department.abbrevation"
          >
            <td>{{ index + 1 }}</td>
            <td class="uppercase">{{ department.abbrevation }}</td>
            <td class="capitalize">{{ department.title }}</td>
            <td class="uppercase">{{ department.faculty }}</td>
            <td>
              <router-link to="/departments/detail" class="link">
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
const departments = [
  {
    title: "computer science",
    abbrevation: "CPT",
    faculty: "SICT",
  },
  {
    title: "Cyber security",
    abbrevation: "CSS",
    faculty: "SICT",
  },
  {
    title: "water and fishery technology",
    abbrevation: "WAFT",
    faculty: "SAAT",
  },
];
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
