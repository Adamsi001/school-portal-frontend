<template>
  <p>
    <RouterLink to="/departments" class="link"
      >&lt; Back to departments</RouterLink
    >
  </p>
  <div>
    <h1 class="text-4xl font-medium">New Department</h1>
    <p>Add a new department.</p>
  </div>
  <div class="card space-y-4">
    <form class="space-y-4" @submit.prevent="submitForm">
      <div class="space-y-4">
        <div class="fieldset flex flex-col gap-2">
          <label> Title </label>
          <input
            type="text"
            placeholder="Enter department title"
            required
            v-model="form.title"
          />
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="fieldset flex flex-col gap-2">
            <label> Abbrevation </label>
            <input
              type="text"
              placeholder="Enter department abbrevation"
              required
              v-model="form.abbrevation"
            />
          </div>
          <div class="fieldset flex flex-col gap-2">
            <label> Short Code </label>
            <input
              type="text"
              placeholder="Enter department short code"
              required
              v-model="form.short_code"
            />
          </div>

          <div class="fieldset flex flex-col gap-2">
            <label> Faculty </label>
            <Listbox v-model="selectedFaculty">
              <div class="relative mt-1">
                <ListboxButton
                  class="relative w-full cursor-default rounded-lg input text-left shadow-md focus:outline-none focus-visible:border-slate-900 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:text-sm"
                >
                  <span class="block uppercase">
                    {{ selectedFaculty.abbrevation }}
                  </span>
                  <span
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                  >
                    <span
                      class="rotate-90 text-lg text-gray-400"
                      aria-hidden="true"
                    >
                      &gt;
                    </span>
                  </span>
                </ListboxButton>

                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      v-slot="{ active, selected }"
                      v-for="faculty in faculties"
                      :key="faculty.id"
                      :value="faculty"
                      as="template"
                    >
                      <li
                        :class="[
                          active ? 'bg-slate-900 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-10 pr-4',
                        ]"
                      >
                        <span
                          :class="[
                            selected ? 'font-medium' : 'font-normal',
                            'block uppercase',
                          ]"
                        >
                          {{ faculty.abbrevation }}
                        </span>
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3 text-white"
                        >
                          <span class="h-5 w-5" aria-hidden="true">
                            &#x2713;
                          </span>
                        </span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
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
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useDepartmentsStore, useFacultiesStore } from "@/stores/faculties";

import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

const selectedFaculty = ref({});

const { getFaculties } = useFacultiesStore();
const { addDepartment } = useDepartmentsStore();

const faculties = ref([]);
const form = ref({ title: "", abbrevation: "", short_code: "", faculty: "" });
const router = useRouter();

onBeforeMount(async () => {
  faculties.value = await getFaculties();
  selectedFaculty.value = faculties.value[0];
});

async function submitForm() {
  if (
    form.value.title &&
    form.value.abbrevation &&
    form.value.short_code &&
    selectedFaculty.value
  ) {
    form.value.faculty = selectedFaculty.value.id;
    await addDepartment(form.value).then(() => {
      router.push("/departments");
    });
  }
}
</script>

<style scoped></style>
