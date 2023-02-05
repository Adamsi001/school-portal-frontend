<template>
  <p>
    <RouterLink to="/announcements" class="link"
      >&lt; Back to announcements</RouterLink
    >
  </p>
  <div>
    <h1 class="text-4xl font-medium">New Announcement</h1>
    <p>Send a new announcement.</p>
  </div>
  <div class="card space-y-4">
    <form class="space-y-4" @submit.prevent="submitForm">
      <div class="space-y-4">
        <div class="fieldset flex flex-col gap-2">
          <label> Subject </label>
          <input
            type="text"
            placeholder="Enter announcement subject here"
            required
            v-model="form.subject"
          />
        </div>
        <div class="fieldset flex flex-col gap-2">
          <label>Body</label>
          <textarea
            name="body"
            placeholder="Enter announcement body here"
            class="min-h-[200px]"
            v-model="form.body"
          ></textarea>
        </div>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="btn-primary">Send</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAnnouncementsStore } from "@/stores/announcements";

const { addAnnouncement } = useAnnouncementsStore();

const form = ref({ subject: "", body: "" });
const router = useRouter();

async function submitForm() {
  if (form.value.subject && form.value.body) {
    await addAnnouncement(form.value).then(() => {
      router.push("/announcements");
    });
  }
}
</script>

<style scoped></style>
