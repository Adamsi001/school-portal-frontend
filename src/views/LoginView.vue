<script setup lang="ts"></script>

<template>
  <main>
    <div class="container max-w-6xl grid grid-cols-2 items-center min-h-[80vh]">
      <section class="">
        <h1 class="text-4xl font-medium">Login</h1>
        <p>Enter your login details to continue.</p>
      </section>
      <section>
        <form class="container max-w-sm space-y-4">
          <div class="space-y-4">
            <div class="fieldset flex flex-col gap-2">
              <label>
                Username
                <span class="text-red-500 font-semibold italic">- error</span>
              </label>
              <input type="text" placeholder="username" required />
            </div>
            <div class="fieldset flex flex-col gap-2">
              <label> Password </label>
              <input type="password" placeholder="password" required />
            </div>
          </div>
          <div class="text-center space-y-4">
            <button type="submit" class="btn-primary">Submit</button>
            <p>
              Forgot your password?
              <router-link to="reset-password" class="link">
                click here.
              </router-link>
            </p>
          </div>
        </form>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
