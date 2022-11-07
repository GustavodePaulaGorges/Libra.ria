<script>
import { RouterLink } from "vue-router";
import LivrosApi from "@/api/livros.js";
import AutoresApi from "@/api/autores.js";
import CategoriasApi from "@/api/categorias.js";
const livrosApi = new LivrosApi();
const categoriasApi = new CategoriasApi();
const autoresApi = new AutoresApi();

export default {
  data() {
    return {
      livros: [],
      livro: {},
      categoria: {},
      categorias: [],
      autor: {},
      autores: [],
    };
  },

  async created() {
    this.livros = await livrosApi.BuscarTodosOsLivros();
    this.categorias = await categoriasApi.BuscarTodasAsCategorias();
    this.autores = await autoresApi.BuscarTodosOsAutores();
  },

  methods: {
      async salvar() {
        if (this.livro.id) {
          await livrosApi.AtualizarLivro(this.livro);
        } else {
          await livrosApi.AdicionarLivro(this.livro);
        }
        this.categorias = await categoriasApi.BuscarTodasAsCategorias();
        this.autores = await autoresApi.BuscarTodosOsAutores();
        this.livros = await livrosApi.BuscarTodosOsLivros();
        this.livro = {};
      },

      async excluir(livro) {
        await livrosApi.ExcluirLivro(livro.id);
        this.livros = await livrosApi.BuscarTodosOsLivros();
      },

      editar(livro) {
        Object.assign(this.livro, livro);
      },
    },
};
</script>

<template>

  <div class="container">
    <div class="title">
      <h2>Gerenciar Livros</h2> 
    </div>

    <div class="FormBox">
      <input
        class="FormInput"
        type="text"
        placeholder="Titulo"
        v-model="livro.titulo"
        @keyup.enter="salvar"
      />

      <input
        class="FormInput"
        type="text"
        placeholder="Titulo"
        v-model="livro.ISBN"
        @keyup.enter="salvar"
      />

      <input
        class="FormInput"
        type="text"
        placeholder="Titulo"
        v-model="livro.preco"
        @keyup.enter="salvar"
      />

      <select class="FormInput" v-model="livro.categoria">
        <option 
          v-for="categoria of categorias"
          :key="categoria.id"
          :value="categoria.descricao"
        >
          {{ categoria.descricao }}
        </option>
      </select>
      <select class="FormInput" v-model="livro.autor">
        <option 
          v-for="autor of autores"
          :key="autor.id"
          :value="autor.nome"
        >
          {{ autor.nome}}
        </option>
      </select>


      <button @click="salvar" class="BtnSalvar">Adicionar</button>
    </div>
  </div>


  <div class="wrapper">
    <h3 class="Title">Livros:</h3>
    <div class="BoxInfo" v-for="livro in livros" :key="livro.id">
      <div>
        {{ livro.id }} , {{ livro.titulo}} <br>
      <button class="BtnEdit" @click="excluir(livro)">Excluir</button> <br>
      <button class="BtnEdit" @click="editar(livro)">Editar</button>
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
