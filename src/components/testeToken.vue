<script>
import TokenApi from "@/api/token.js";
const tokenApi = new TokenApi();
const token = await tokenApi.GetToken()
</script>
<template>
    A
  {{ token }}
</template>