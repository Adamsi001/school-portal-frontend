<template>
  <div>
    <h1 class="text-4xl font-medium">New Announcement</h1>
    <p>Send a new announcement.</p>
  </div>
  <div class="card space-y-4">
    <form class="space-y-4">
      <div class="space-y-4">
        <div class="fieldset flex flex-col gap-2">
          <label> Subject </label>
          <input
            type="text"
            placeholder="Enter announcement subject here"
            required
          />
        </div>
        <div class="fieldset flex flex-col gap-2">
          <label>Body</label>
          <textarea
            name="body"
            placeholder="Enter announcement body here"
            class="min-h-[200px]"
          />
        </div>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn-primary">Send</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
