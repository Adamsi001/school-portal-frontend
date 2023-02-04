<template>
  <p>
    <RouterLink to="/levels" class="link">&lt; Back to levels</RouterLink>
  </p>
  <div>
    <h1 class="text-4xl font-medium">New Level</h1>
    <p>Provide new level information.</p>
  </div>
  <div class="card space-y-4">
    <form class="space-y-4" @submit.prevent="submitForm">
      <div class="space-y-4">
        <div class="fieldset flex flex-col gap-2">
          <label> Title </label>
          <input
            type="text"
            placeholder="Enter level title"
            required
            v-model="form.title"
          />
        </div>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn-primary">Add Level</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useLevelsStore } from "@/stores/core";

const { addLevel } = useLevelsStore();

const form = ref({ title: "" });
const router = useRouter();

async function submitForm() {
  if (form.value.title) {
    await addLevel(form.value).then(() => {
      router.push("/levels");
    });
  }
}
</script>

<style scoped></style>
