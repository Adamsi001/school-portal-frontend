<template>
  <p>
    <RouterLink to="/users/admins" class="link">&lt; Back to admins</RouterLink>
  </p>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">Admin Detail</h1>
      <p>These are the information available for this admin.</p>
    </div>
    <RouterLink :to="`${route.params.id}/edit`" class="btn-primary">
      Edit Admin
    </RouterLink>
  </div>
  <div class="card space-y-4">
    <h2 class="text-2xl opacity-30 font-semibold" v-if="is_fetching">
      Loading...
    </h2>
    <template v-else>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="font-semibold">First Name:</p>
          <div class="field">
            <p class="opacity-60">{{ admin.first_name }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Middle Name:</p>
          <div class="field">
            <p class="opacity-60">{{ admin.middle_name || "-" }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Last Name:</p>
          <div class="field">
            <p class="opacity-60">{{ admin.last_name }}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="font-semibold">Gender:</p>
          <div class="field">
            <p class="opacity-60">{{ admin.gender }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Email:</p>
          <div class="field">
            <p class="opacity-60">{{ admin.email }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Staff ID:</p>
          <div class="field">
            <p class="opacity-60">{{ admin.user_id }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import { useAdminsStore } from "@/stores/users";

const { getAdmin } = useAdminsStore();

const admin = ref({});
const is_fetching = ref(true);

const route = useRoute();

onBeforeMount(async () => {
  await getAdmin(route.params.id).then((data) => {
    admin.value = data;
    is_fetching.value = false;
  });
});
</script>

<style scoped>
td,
th {
  padding: 8px;
}
</style>
