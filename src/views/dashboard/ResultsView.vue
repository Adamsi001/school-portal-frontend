<template>
  <div>
    <h1 class="text-4xl font-medium">Results</h1>
    <p>Below are your results.</p>
  </div>
  <div class="card" v-for="(session, index) in results" :key="index">
    <div class="font-medium opacity-80 mb-10">
      <h2 class="text-2xl">Session: {{ session.title }}</h2>
    </div>
    <table class="w-full text-left capitalize">
      <thead>
        <tr>
          <th>code</th>
          <th>title</th>
          <th>unit</th>
          <th>semester</th>
          <th>grade</th>
          <th>gp</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="course in session.courses" :key="course.code">
          <td>
            {{ course.code }}
          </td>
          <td>
            {{ course.title }}
          </td>
          <td>
            {{ course.unit }}
          </td>
          <td>
            {{ course.semester }}
          </td>
          <td>
            {{ course.grade }}
          </td>
          <td>
            {{ course.gp }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const results = [
  {
    title: "2019/2020",
    courses: [
      {
        code: "CPT222",
        title: "Computers in 2022",
        unit: 2,
        semester: "2nd",
        grade: "A",
        gp: 8,
      },
      {
        code: "CPT422",
        title: "The future of computing",
        unit: 2,
        semester: "2nd",
        grade: "A",
        gp: 10,
      },
      {
        code: "CPT411",
        title: "Engineering and software",
        unit: 4,
        semester: "1st",
        grade: "A",
        gp: 12,
      },
    ],
  },
  {
    title: "2018/2019",
    courses: [
      {
        code: "CPT211",
        title: "Software development basics",
        unit: 2,
        semester: "1st",
        grade: "A",
        gp: 8,
      },
      {
        code: "MAT211",
        title: "Computing Mathematics",
        unit: 2,
        semester: "1st",
        grade: "A",
        gp: 10,
      },
      {
        code: "CPT223",
        title: "Software Languages",
        unit: 4,
        semester: "2nd",
        grade: "A",
        gp: 12,
      },
    ],
  },
];
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
