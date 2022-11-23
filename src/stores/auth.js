import { defineStore } from "pinia";
import { ref } from "vue";
import AuthApi from "../api/auth";
const authApi = new AuthApi();

export const useAuthStore = defineStore("auth", () => {
  const token = ref("");
  async function login(user) {
    const data = await authApi.login(user);
    token.value = data.access;
  }

  return { token, login };
});
