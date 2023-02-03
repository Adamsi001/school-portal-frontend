<template>
  <p>
    <RouterLink to="/courses" class="link">&lt; Back to courses</RouterLink>
  </p>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Course Detail</h1>
      <p>These are the information available for this course.</p>
    </div>
    <RouterLink to="detail/edit" class="btn-primary"> Edit Course </RouterLink>
  </div>
  <div class="card">
    <div>
      <p class="font-semibold">Title:</p>
      <div class="flex gap-2 p-2 rounded-md bg-slate-900/10">
        <p class="opacity-60">{{ course.title }}</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div>
        <p class="font-semibold">Code:</p>
        <div class="flex gap-2 p-2 rounded-md bg-slate-900/10">
          <p class="opacity-60">{{ course.code }}</p>
        </div>
      </div>
      <div>
        <p class="font-semibold">Unit:</p>
        <div class="flex gap-2 p-2 rounded-md bg-slate-900/10">
          <p class="opacity-60">{{ course.unit }}</p>
        </div>
      </div>
      <div>
        <p class="font-semibold">Semester:</p>
        <div class="flex gap-2 p-2 rounded-md bg-slate-900/10">
          <p class="opacity-60">{{ course.semester }}</p>
        </div>
      </div>
    </div>
    <div>
      <p class="font-semibold">Description:</p>
      <div class="flex gap-2 p-2 rounded-md bg-slate-900/10">
        <p class="opacity-60">{{ course.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const course = {
  code: "CPT414",
  title: "Engineering Software the right way",
  semester: "2nd",
  unit: 3,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, explicabo voluptatem maiores commodi sint velit nisi harum. Exercitationem optio, porro necessitatibus veniam error officiis? Exercitationem iure ratione inventore! Quaerat, consequuntur!",
};
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
