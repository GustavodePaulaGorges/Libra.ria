<script setup>
import Navbar from '@/components/navbar.vue';
</script>

<script>
import { RouterLink } from "vue-router";
import CategoriasApi from "@/api/categorias.js";
const categoriasApi = new CategoriasApi();

export default {
  data() {
    return {
      categorias: [],
      categoria: {},
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

  <Navbar />

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
    <h2 class="Title">Categorias:</h2>
    <div class="BoxInfo" v-for="categoria in categorias" :key="categoria.id">
      <p class="livroinfo">
        {{categoria.id}}
        <h1>{{categoria.descricao}}</h1>
      </p>
      <button class="BtnEdit" @click="excluir(categoria)">Excluir</button> <br>
      <button class="BtnEdit" @click="editar(categoria)">Editar</button>
      </div>
    </div>


</template>
<style>
</style>

