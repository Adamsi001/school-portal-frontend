<script setup lang="ts">
const profile = {
  first_name: "Ibrahim",
  last_name: "Abdulhameed",
  email: "student@students.com",
  user_id: "SomeRandomStuff",
  faculty: "SICT",
  department: "CPT",
  gender: "male",
  level: "100",
  matric_number: "1234/1234/Srsf23",
};
</script>

<template>
  <div class="card space-y-4">
    <div class="space-y-8">
      <h1 class="text-4xl font-medium">
        {{ profile.first_name }} {{ profile.last_name }}
      </h1>
      <div class="space-y-4">
        <div class="grid grid-cols-3 gap-4">
          <div>
            <p class="font-semibold">First Name:</p>
            <div class="field">
              <p class="opacity-60">{{ profile.first_name }}</p>
            </div>
          </div>
          <div>
            <p class="font-semibold">Middle Name:</p>
            <div class="field">
              <p class="opacity-60">
                {{ profile.middle_name || "-" }}
              </p>
            </div>
          </div>
          <div>
            <p class="font-semibold">Last Name:</p>
            <div class="field">
              <p class="opacity-60">{{ profile.last_name }}</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="font-semibold">Gender:</p>
            <div class="field">
              <p class="opacity-60">{{ profile.gender }}</p>
            </div>
          </div>
          <div>
            <p class="font-semibold">User ID:</p>
            <div class="field">
              <p class="opacity-60">{{ profile.user_id }}</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div>
            <p class="font-semibold">Faculty:</p>
            <div class="field">
              <p class="opacity-60">{{ profile.faculty }}</p>
            </div>
          </div>
          <div>
            <p class="font-semibold">Department:</p>
            <div class="field">
              <p class="opacity-60">{{ profile.department }}</p>
            </div>
          </div>
          <div>
            <p class="font-semibold">Level:</p>
            <div class="field">
              <p class="opacity-60">{{ profile.level }}</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="font-semibold">Email:</p>
            <div class="field">
              <p class="opacity-60">{{ profile.email }}</p>
            </div>
          </div>
          <div>
            <p class="font-semibold">Matric Number:</p>
            <div class="field">
              <p class="opacity-60">{{ profile.matric_number }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- email, user_id, gender, faculty, department, level, matric_number, user_type -->
  </div>
</template>

<style lang="scss" scoped></style>
