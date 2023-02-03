<template>
  <p>
    <RouterLink to="/courses" class="link">&lt; Back to Course</RouterLink>
  </p>
  <div>
    <h1 class="text-4xl font-medium">Edit Course</h1>
    <p>Edit course information.</p>
  </div>
  <div class="card space-y-4">
    <form class="space-y-4">
      <div class="space-y-4">
        <div class="fieldset flex flex-col gap-2">
          <label> Title </label>
          <input type="text" placeholder="Enter course title" required />
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="fieldset flex flex-col gap-2">
            <label> Code </label>
            <input type="text" placeholder="Enter course code" required />
          </div>
          <div class="fieldset flex flex-col gap-2">
            <label> Unit </label>
            <input
              type="number"
              placeholder="How many units for this course"
              required
            />
          </div>
          <div class="fieldset flex flex-col gap-2">
            <label> Semester </label>
            <input
              type="text"
              placeholder="What semseter is the course to be taken"
              required
            />
          </div>
        </div>
        <div class="fieldset flex flex-col gap-2">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Enter a description of the course"
            class="min-h-[200px]"
            required
          />
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
