<script setup lang="ts">
import { useUserStore } from "@/stores/user";

const { user } = useUserStore();
</script>

<template>
  <div
    class="p-4 rounded-md shadow-md bg-gradient-to-br from-purple-800 to-blue-600 text-white py-20 px-10"
  >
    <div>
      <h1 class="text-4xl font-medium capitalize">
        Welcome {{ user.first_name }}
      </h1>
      <p>Education is the passport to a better future.</p>
    </div>
  </div>
  <div class="grid grid-cols-4 gap-6">
    <div class="card" v-if="user.user_type == 'student'">
      <h2 class="card-title">Courses</h2>
      <p class="card-subtitle">See your registered courses</p>
      <p>
        <router-link to="courses/registrations" class="link"
          >See More</router-link
        >
      </p>
    </div>
    <div class="card" v-if="user.is_lecturer">
      <h2 class="card-title">Courses</h2>
      <p class="card-subtitle">See the courses you're assigned to.</p>
      <p>
        <router-link to="courses" class="link">See More</router-link>
      </p>
    </div>
    <div class="card">
      <h2 class="card-title">Messages</h2>
      <p class="card-subtitle">See what messages you have</p>
      <p>
        <router-link to="/announcements" class="link">See More</router-link>
      </p>
    </div>
    <div class="card">
      <h2 class="card-title">News</h2>
      <p class="card-subtitle">Check out the current happenings</p>
      <p>
        <router-link to="#" class="link">See More</router-link>
      </p>
    </div>
    <div class="card" v-if="user.user_type == 'student'">
      <h2 class="card-title">Results</h2>
      <p class="card-subtitle">See your results</p>
      <p>
        <router-link to="/results" class="link">See More</router-link>
      </p>
    </div>
    <div class="card" v-if="user.is_student_adviser">
      <h2 class="card-title">Students</h2>
      <p class="card-subtitle">See the students under your guidance</p>
      <p>
        <router-link to="/students" class="link">See More</router-link>
      </p>
    </div>
    <div class="col-span-2 card">
      <h2 class="card-title">Profile</h2>
      <p class="card-subtitle">View and edit your profile</p>
      <p>
        <router-link to="/profile" class="link">See More</router-link>
      </p>
    </div>
  </div>
</template>
