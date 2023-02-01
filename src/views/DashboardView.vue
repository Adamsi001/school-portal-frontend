<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
</script>

<template>
  <main>
    <section
      class="container max-w-7xl grid grid-cols-5 gap-6 min-h-screen py-4"
    >
      <SideBar />
      <div class="col-span-4 space-y-6">
        <div
          class="p-4 rounded-md shadow-md bg-gradient-to-br from-purple-800 to-blue-600 text-white py-20 px-10"
        >
          <div>
            <h1 class="text-4xl font-medium">Welcome Ibrahim</h1>
            <p>Education is the passport to a better future.</p>
          </div>
        </div>
        <div class="grid grid-cols-4 gap-6">
          <div class="card">
            <h2 class="card-title">courses</h2>
            <p class="card-subtitle">See your registered courses</p>
            <p>
              <a href="#" class="link">See More</a>
            </p>
          </div>
          <div class="card">
            <h2 class="card-title">Messages</h2>
            <p class="card-subtitle">See what messages you have</p>
            <p>
              <a href="#" class="link">See More</a>
            </p>
          </div>
          <div class="card">
            <h2 class="card-title">News</h2>
            <p class="card-subtitle">Check out the current happenings</p>
            <p>
              <a href="#" class="link">See More</a>
            </p>
          </div>
          <div class="card">
            <h2 class="card-title">Results</h2>
            <p class="card-subtitle">See your results</p>
            <p>
              <a href="#" class="link">See More</a>
            </p>
          </div>
          <div class="col-span-2 card">
            <h2 class="card-title">Profile</h2>
            <p class="card-subtitle">View and edit your profile</p>
            <p>
              <a href="#" class="link">See More</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
