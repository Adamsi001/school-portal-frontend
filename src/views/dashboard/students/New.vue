<template>
  <p>
    <RouterLink to="/lecturers" class="link">&lt; Back to lecturers</RouterLink>
  </p>
  <div>
    <h1 class="text-4xl font-medium">New Lecturer</h1>
    <p>Add a new lecturer.</p>
  </div>
  <div class="card space-y-4">
    <form class="space-y-4" @submit.prevent="submitForm">
      <div class="space-y-4">
        <div class="grid grid-cols-3 gap-4">
          <div class="fieldset flex flex-col gap-2">
            <label> First Name </label>
            <input
              type="text"
              placeholder="Enter lecturer's first name"
              required
              v-model="form.first_name"
            />
          </div>
          <div class="fieldset flex flex-col gap-2">
            <label> Middle Name </label>
            <input
              type="text"
              placeholder="Enter lecturer's middle name"
              v-model="form.middle_name"
            />
          </div>

          <div class="fieldset flex flex-col gap-2">
            <label> Last Name </label>
            <input
              type="text"
              placeholder="Enter lecturer's last name"
              required
              v-model="form.last_name"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="fieldset flex flex-col gap-2">
            <label> Gender </label>
            <Listbox v-model="selectedGender">
              <div class="relative">
                <ListboxButton
                  class="relative w-full cursor-default rounded-lg input text-left shadow-md focus:outline-none focus-visible:border-slate-900 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:text-sm"
                >
                  <span class="block capitalize">
                    {{ selectedGender.title }}
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
                    class="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption
                      v-slot="{ active, selected }"
                      v-for="gender in genders"
                      :key="gender.title"
                      :value="gender"
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
                            'block capitalize',
                          ]"
                        >
                          {{ gender.title }}
                        </span>
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3"
                          :class="[active ? 'text-white' : 'text-slate-900']"
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
          <div class="fieldset flex flex-col gap-2">
            <label> Email </label>
            <input
              type="text"
              placeholder="Enter lecturer short code"
              required
              v-model="form.email"
            />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
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
                      @click="
                        () => {
                          if (filteredDepartments[0]) {
                            selectedDepartment = filteredDepartments[0];
                          } else {
                            selectedDepartment = {};
                          }
                        }
                      "
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
                          class="absolute inset-y-0 left-0 flex items-center pl-3"
                          :class="[active ? 'text-white' : 'text-slate-900']"
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
          <div class="fieldset flex flex-col gap-2">
            <label> Department </label>
            <Listbox v-model="selectedDepartment">
              <div class="relative mt-1">
                <ListboxButton
                  class="relative w-full cursor-default rounded-lg input text-left shadow-md focus:outline-none focus-visible:border-slate-900 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:text-sm"
                >
                  <span class="block uppercase">
                    {{ selectedDepartment.abbrevation }}
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
                      v-for="department in filteredDepartments"
                      :key="department.id"
                      :value="department"
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
                          {{ department.abbrevation }}
                        </span>
                        <span
                          v-if="selected"
                          class="absolute inset-y-0 left-0 flex items-center pl-3"
                          :class="[active ? 'text-white' : 'text-slate-900']"
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
        <button type="submit" class="btn-primary">Save Changes</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";
import { useDepartmentsStore, useFacultiesStore } from "@/stores/faculties";

import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { useLecturersStore } from "@/stores/users";

const selectedFaculty = ref({});
const selectedDepartment = ref({});

const genders = [{ title: "male" }, { title: "female" }];

const selectedGender = ref({});

const { addLecturer } = useLecturersStore();
const { getFaculties } = useFacultiesStore();
const { getDepartments } = useDepartmentsStore();

const faculties = ref([]);
const departments = ref([]);
const filteredDepartments = computed(() => {
  return departments.value.filter((department) => {
    return department.faculty == selectedFaculty.value.id;
  });
});
const form = ref({
  email: "",
  first_name: "",
  middle_name: "",
  last_name: "",
  gender: null,
  faculty: null,
  department: null,
});
const router = useRouter();

onBeforeMount(async () => {
  faculties.value = await getFaculties();
  departments.value = await getDepartments();

  selectedFaculty.value = faculties.value[0];
  selectedDepartment.value = departments.value[0];
  selectedGender.value = genders[0];
});

async function submitForm() {
  if (
    form.value.first_name &&
    form.value.last_name &&
    form.value.email &&
    selectedGender.value &&
    selectedFaculty.value &&
    selectedDepartment.value
  ) {
    form.value.gender = selectedGender.value.title;
    form.value.faculty = selectedFaculty.value.id;
    form.value.department = selectedDepartment.value.id;

    await addLecturer(form.value).then(() => {
      router.push("/lecturers");
    });
  }
}
</script>

<style scoped></style>
