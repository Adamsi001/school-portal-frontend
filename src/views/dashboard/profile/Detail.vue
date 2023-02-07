<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

import { useUserStore } from "@/stores/user";
import { useFacultiesStore, useDepartmentsStore } from "@/stores/faculties";

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const router = useRouter();

const { user, logout } = useUserStore();

const is_modal_open = ref(false);

function closeModal() {
  is_modal_open.value = false;
}
function openModal() {
  is_modal_open.value = true;
}

async function logUserOut() {
  await logout().then(() => {
    router.push("/login");
    closeModal();
  });
}

const { getFaculty } = useFacultiesStore();
const { getDepartment } = useDepartmentsStore();

const user_faculty = ref(null);
const user_department = ref(null);

const is_fetching = ref(true);

onBeforeMount(async () => {
  if (
    user.user_type == "student" ||
    (user.user_type == "staff" && user.is_lecturer)
  ) {
    let _department = await getDepartment(user.department);
    let _faculty = await getFaculty(user.faculty);

    user_faculty.value = _faculty.abbrevation;
    user_department.value = _department.abbrevation;
  }
});
</script>

<template>
  <TransitionRoot appear :show="is_modal_open" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-90">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Confirm Log Out
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Are you sure you want to log out?
                </p>
              </div>

              <div class="mt-4 flex justify-end gap-4">
                <button class="btn-primary" @click="logUserOut">Yes</button>
                <button class="btn-secondary" @click="closeModal">No</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-4xl font-medium">My Profile</h1>
      <p>Here is your profile.</p>
    </div>
    <button class="btn-secondary" @click="openModal">Log Out</button>
  </div>
  <div class="card space-y-4">
    <div class="space-y-4">
      <div class="grid grid-cols-3 gap-4">
        <div>
          <p class="font-semibold">First Name:</p>
          <div class="field">
            <p class="opacity-60 capitalize">{{ user.first_name }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Middle Name:</p>
          <div class="field">
            <p class="opacity-60 capitalize">
              {{ user.middle_name || "-" }}
            </p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Last Name:</p>
          <div class="field">
            <p class="opacity-60 capitalize">{{ user.last_name }}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="font-semibold">Gender:</p>
          <div class="field">
            <p class="opacity-60 capitalize">{{ user.gender || "-" }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">
            {{ user.user_type == "student" ? "Student" : "Staff" }} ID:
          </p>
          <div class="field">
            <p class="opacity-60">{{ user.user_id }}</p>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-3 gap-4"
        v-if="user.user_type == 'student' || user.is_lecturer"
      >
        <div>
          <p class="font-semibold">Faculty:</p>
          <div class="field">
            <p class="opacity-60">{{ user_faculty }}</p>
          </div>
        </div>
        <div>
          <p class="font-semibold">Department:</p>
          <div class="field">
            <p class="opacity-60">{{ user_department }}</p>
          </div>
        </div>
        <div v-if="user.user_type == 'student' || user.is_student_adviser">
          <p class="font-semibold">Level:</p>
          <div class="field">
            <p class="opacity-60">{{ user.level }}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p class="font-semibold">Email:</p>
          <div class="field">
            <p class="opacity-60">{{ user.email }}</p>
          </div>
        </div>
        <div v-if="user.user_type == 'student?'">
          <p class="font-semibold">Matric Number:</p>
          <div class="field">
            <!-- <p class="opacity-60">{{ user.matric_number }}</p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
