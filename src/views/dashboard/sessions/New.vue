<template>
  <p>
    <RouterLink to="/sessions" class="link">&lt; Back to sessions</RouterLink>
  </p>
  <div>
    <h1 class="text-4xl font-medium">New Session</h1>
    <p>Provide new session information.</p>
  </div>
  <div class="card space-y-4">
    <form class="space-y-4">
      <div class="space-y-4">
        <div class="fieldset flex flex-col gap-2">
          <label> Title </label>
          <input type="text" placeholder="Enter sessions title" required />
        </div>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn-primary">Add Session</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
