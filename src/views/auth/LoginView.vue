<script setup lang="ts"></script>

<template>
  <main>
    <div class="container max-w-6xl grid grid-cols-2 items-center min-h-screen">
      <section class="">
        <h1 class="text-4xl font-medium">Login</h1>
        <p>Enter your login details to continue.</p>
      </section>
      <section>
        <form class="container max-w-sm space-y-4" @submit.prevent="submitForm">
          <div class="space-y-4">
            <div class="fieldset flex flex-col gap-2">
              <label> Email </label>
              <input
                type="email"
                placeholder="Enter email"
                required
                v-model="form.email"
              />
            </div>
            <div class="fieldset flex flex-col gap-2">
              <label> Password </label>
              <input
                type="password"
                placeholder="password"
                required
                v-model="form.password"
              />
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

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const { login } = useUserStore();

const form = ref({ email: "", password: "" });
const router = useRouter();

async function submitForm() {
  if (form.value.email && form.value.password) {
    await login(form.value).then(() => {
      router.push("/");
    });
  }
}
</script>
