<script setup lang="ts">
const students = [
  {
    first_name: "Ahmed",
    last_name: "musa",
    email: "student1@students.com",
    user_id: "SomeRandomStuff1",
    faculty: "SICT",
    department: "CPT",
    gender: "male",
    level: "100",
    matric_number: "1234/1234/S23rsf23",
  },
  {
    first_name: "Ibrahim",
    last_name: "Abdulhameed",
    email: "student@students.com",
    user_id: "SomeRandomStuff",
    faculty: "SICT",
    department: "CPT",
    gender: "male",
    level: "100",
    matric_number: "1234/1234/Srsf23",
  },
];
</script>

<template>
  <div>
    <h1 class="text-4xl font-medium">Students</h1>
    <p>Below are your students.</p>
  </div>
  <div class="card">
    <table class="w-full text-left capitalize">
      <thead>
        <tr>
          <th>S/N</th>
          <th>Name</th>
          <th>Matric</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="(student, index) in students" :key="student.email">
          <td>
            {{ index + 1 }}
          </td>
          <td>
            {{ student.first_name }} {{ student.middle_name || "" }}
            {{ student.last_name }}
          </td>
          <td>
            {{ student.matric_number }}
          </td>
          <td>
            {{ student.email }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
