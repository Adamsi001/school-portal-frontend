import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    type: "student",
    first_name: "Ibrahim",
    last_name: "Abdulhameed",
  });

  return { user };
});
