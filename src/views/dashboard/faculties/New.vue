<template>
  <p>
    <RouterLink to="/faculties" class="link">&lt; Back to faculties</RouterLink>
  </p>
  <div>
    <h1 class="text-4xl font-medium">New Faculty</h1>
    <p>Add a new faculty.</p>
  </div>
  <div class="card space-y-4">
    <form class="space-y-4" @submit.prevent="submitForm">
      <div class="space-y-4">
        <div class="fieldset flex flex-col gap-2">
          <label> Title </label>
          <input
            type="text"
            placeholder="Enter faculty title"
            required
            v-model="form.title"
          />
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="fieldset flex flex-col gap-2">
            <label> Abbrevation </label>
            <input
              type="text"
              placeholder="Enter faculty abbrevation"
              required
              v-model="form.abbrevation"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn-primary">Add Faculty</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useFacultiesStore } from "@/stores/faculties";

const { addFaculty } = useFacultiesStore();

const form = ref({ title: "", abbrevation: "" });
const router = useRouter();

async function submitForm() {
  if (form.value.title && form.value.abbrevation) {
    await addFaculty(form.value).then(() => {
      router.push("/faculties");
    });
  }
}
</script>

<style scoped></style>
