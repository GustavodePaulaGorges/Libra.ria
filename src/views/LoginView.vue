<script>
import { mapStores, mapActions, mapState } from "pinia";
import { useAuthStore } from "@/stores/auth";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapStores(useAuthStore),
    ...mapState(useAuthStore, ["token"]),
  },
  methods: {
    ...mapActions(useAuthStore, ["login"]),
    async submitLogin(e) {
      try {
        await this.login(this.user);
        this.$router.push("/home");
      } catch {
        alert("Algo de errado não está certo!!!");
      }
    },
  },
};
</script>

<template>
  <div class="BackGround"></div>
  <div class="pa">
    <form @submit.prevent="submitLogin" class="AuthForm">
      <h1 class="Log">Login</h1>
      <input
        type="text"
        placeholder="username"
        v-model="user.username"
        class="AuthInput"
      />
      <input
        type="password"
        placeholder="senha"
        v-model="user.password"
        class="AuthInput"
      />
      <button type="submit" class="BtnAuth">Logar</button>
    </form>
  </div>
</template>

<style>

</style>
