<template>
  <p>
    <RouterLink to="/faculties" class="link">&lt; Back to faculties</RouterLink>
  </p>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Faculty Detail</h1>
      <p>These are the information available for this faculty.</p>
    </div>
    <RouterLink to="detail/edit" class="btn-primary"> Edit Faculty </RouterLink>
  </div>
  <div class="card space-y-4">
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
  </div>
</template>

<script setup lang="ts">
const faculty = {
  abbrevation: "SICT",
  title: "school of information and comminication technology",
};
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
