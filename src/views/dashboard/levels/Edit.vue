<template>
  <p>
    <RouterLink to="/levels" class="link">&lt; Back to levels</RouterLink>
  </p>
  <div>
    <h1 class="text-4xl font-medium">Edit Level</h1>
    <p>Edit level information.</p>
  </div>
  <div class="card space-y-4">
    <h2 class="text-2xl opacity-30 font-semibold" v-if="is_fetching">
      Loading...
    </h2>
    <form class="space-y-4" @submit.prevent="submitForm" v-else>
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
        <button type="submit" class="btn-primary">Save Changes</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLevelsStore } from "@/stores/core";

const { getLevel, editLevel } = useLevelsStore();

const form = ref({});
const is_fetching = ref(true);

const router = useRouter();
const route = useRoute();

onBeforeMount(async () => {
  await getLevel(route.params.id).then((data) => {
    form.value = data;
    is_fetching.value = false;
  });
});

async function submitForm() {
  if (form.value.title) {
    await editLevel(form.value).then(() => {
      router.push("/levels");
    });
  }
}
</script>

<style scoped></style>
