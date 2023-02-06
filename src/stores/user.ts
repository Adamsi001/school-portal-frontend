import { ref } from "vue";
import { defineStore } from "pinia";
import { useFetch } from "@/utils/utils";

const defaultUser = {
  user_type: "student",
  first_name: "user",
  last_name: "user",
};

export const useUserStore = defineStore("user", () => {
  const is_authenticated = ref(localStorage.getItem("token") || false);
  const user = ref(defaultUser);
  const setCurrentUser = async () => {
    if (is_authenticated.value) {
      await useFetch("auth/users/me").then((data) => (user.value = data));
    }
  };
  const clearCurrentUser = async () => {
    user.value = defaultUser;
  };
  const login = async (form) => {
    return await useFetch(`auth/token/login/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(async (data) => {
      is_authenticated.value = true;
      localStorage.setItem("token", data["auth_token"]);
      await setCurrentUser();
    });
  };
  const logout = async () => {
    return await useFetch(`auth/token/logout/`, {
      method: "POST",
    }).then(async () => {
      is_authenticated.value = false;
      localStorage.removeItem("token");
      clearCurrentUser();
    });
  };

  return { is_authenticated, user, login, logout, setCurrentUser };
});
