<script>
import CategoriasApi from "@/api/categorias.js";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return {
      categoria: {},
      categorias: [],
    };
  },
  async created() {
    this.categorias = await categoriasApi.BuscarTodasAsCategorias();
  },
};
</script>

<template>
  <div class="BoxInfo" v-for="categoria in categorias" :key="categoria.id">
    <div>ID: {{ categoria.id }}</div>
    <div>Descrição: {{ categoria.descricao }}</div>
  </div>
</template>
<style>
.BoxInfo {
  height: 10vh;
}
</style>
