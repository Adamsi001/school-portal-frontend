<template>
  <p>
    <RouterLink to="/departments/detail" class="link"
      >&lt; Back to department</RouterLink
    >
  </p>
  <div>
    <h1 class="text-4xl font-medium">Edit Department</h1>
    <p>Edit department information.</p>
  </div>
  <div class="card space-y-4">
    <form class="space-y-4">
      <div class="space-y-4">
        <div class="fieldset flex flex-col gap-2">
          <label> Title </label>
          <input type="text" placeholder="Enter department title" required />
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="fieldset flex flex-col gap-2">
            <label> Abbrevation </label>
            <input
              type="text"
              placeholder="Enter department abbrevation"
              required
            />
          </div>
          <div class="fieldset flex flex-col gap-2">
            <label> Short Code </label>
            <input
              type="text"
              placeholder="Enter department short code"
              required
            />
          </div>
          <div class="fieldset flex flex-col gap-2">
            <label> Faculty </label>
            <input
              type="text"
              placeholder="What faculty does the department belong to ?"
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
