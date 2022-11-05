<script>
import { RouterLink } from "vue-router";
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
  methods: {
      async salvar() {
        if (this.categoria.id) {
          await categoriasApi.AtualizarCategoria(this.categoria);
        } else {
          await categoriasApi.AdicionarCategoria(this.categoria);
        }
        this.categorias = await categoriasApi.BuscarTodasAsCategorias();
        this.categoria = {};
      },
      async excluir(categoria) {
        await categoriasApi.ExcluirCategoria(categoria.id);
        this.categorias = await categoriasApi.BuscarTodasAsCategorias();
      },
      editar(categoria) {
        Object.assign(this.categoria, categoria);
      },
    },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h2>Gerenciamento de categorias</h2>
    </div>
    <div class="FormBox">
      <input
        class="FormInput"
        type="text"
        placeholder="Descrição"
        v-model="categoria.descricao"
        @keyup.enter="salvar"
      />
      <button @click="salvar" class="BtnSalvar">Adicionar</button>
    </div>
  </div>
  <div class="wrapper">
    <h3 class="Title">Categorias:</h3>
    <div class="BoxInfo" v-for="categoria in categorias" :key="categoria.id">
      <div>{{ categoria.id }}
      <RouterLink to="">{{ categoria.descricao }}</RouterLink> <br>
      <button class="BtnEdit" @click="excluir(categoria)">Excluir</button> <br>
      <button class="BtnEdit" @click="editar(categoria)">Editar</button>
      </div>
    </div>
  </div>
</template>
<style>
.BoxInfo {
  float: left;
  height: fit-content;
  padding: 2vh;
  width: fit-content;
}
.wrapper{
  padding: 1vh;
}
.container{
  padding: 1vh;
}
</style>
