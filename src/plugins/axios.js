import axios from "axios";
import { useAuthStore } from "@/stores/auth";

axios.interceptors.request.use(
  function (config) {
    const authStore = useAuthStore();
    const token = authStore.token;
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.Accept = "application/json";

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
