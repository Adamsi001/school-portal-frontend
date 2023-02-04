<template>
  <p>
    <RouterLink to="/faculties/detail" class="link"
      >&lt; Back to faculty</RouterLink
    >
  </p>
  <div>
    <h1 class="text-4xl font-medium">Edit Faculty</h1>
    <p>Edit faculty information.</p>
  </div>
  <div class="card space-y-4">
    <form class="space-y-4">
      <div class="space-y-4">
        <div class="fieldset flex flex-col gap-2">
          <label> Title </label>
          <input type="text" placeholder="Enter faculty title" required />
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="fieldset flex flex-col gap-2">
            <label> Abbrevation </label>
            <input
              type="text"
              placeholder="Enter faculty abbrevation"
              required
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn-primary">Save Changes</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
