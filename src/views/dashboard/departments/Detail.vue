<template>
  <p>
    <RouterLink to="/departments" class="link"
      >&lt; Back to departments</RouterLink
    >
  </p>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Department Detail</h1>
      <p>These are the information available for this department.</p>
    </div>
    <RouterLink to="detail/edit" class="btn-primary">
      Edit Department
    </RouterLink>
  </div>
  <div class="card space-y-4">
    <div>
      <p class="font-semibold">Title:</p>
      <div class="field">
        <p class="opacity-60">{{ department.title }}</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div>
        <p class="font-semibold">Abbrevation:</p>
        <div class="field">
          <p class="opacity-60">{{ department.abbrevation }}</p>
        </div>
      </div>
      <div>
        <p class="font-semibold">Short Code:</p>
        <div class="field">
          <p class="opacity-60">{{ department.short_code }}</p>
        </div>
      </div>
      <div>
        <p class="font-semibold">Faculty:</p>
        <div class="field">
          <p class="opacity-60">{{ department.faculty }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const department = {
  title: "water and fishery technology",
  abbrevation: "WAFT",
  faculty: "SAAT",
  short_code: "WF",
};
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
