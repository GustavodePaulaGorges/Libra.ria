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
        alert("DEU CERTO E AGORA VER O QUE FAZER");
      } catch {
        alert("Algo de errado não está certo!!!");
      }
    },
  },
};
</script>

<template>
  <div>
    <form @submit.prevent="submitLogin">
      <input type="text" placeholder="username" v-model="user.username" />
      <input type="password" placeholder="senha" v-model="user.password" />
      <button type="submit">Logar</button>
    </form>
  </div>
</template>
