<script setup lang="ts"></script>

<template>
  <main>
    <section
      class="container max-w-5xl min-h-[90vh] text-center flex justify-center items-center"
    >
      <div class="text-lg">
        <h1 class="text-4xl my-4 font-medium text-red-500">
          Oops! Something went wrong.
        </h1>
        <p>The requested page was not found.</p>
        <p>
          Return to <router-link to="/" class="link">home page</router-link>.
        </p>
      </div>
    </section>
  </main>
</template>
