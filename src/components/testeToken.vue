<script>
import TokenApi from "@/api/token.js";
const tokenApi = new TokenApi
export default {
  data() {
    return {
      token: {}
    }
  },
  async created() {
    this.token = await tokenApi.GetToken();
  },
}
</script>
<template>
  {{ token }}
</template>