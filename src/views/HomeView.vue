<script>
import { RouterLink } from "vue-router";
import LivrosApi from "@/api/livros.js";
import AutoresApi from "@/api/autores.js";
import CategoriasApi from "@/api/categorias.js";
import EditorasApi from "@/api/editoras.js";
const livrosApi = new LivrosApi();
const categoriasApi = new CategoriasApi();
const autoresApi = new AutoresApi();
const editorasApi = new EditorasApi();

export default {
  data() {
    return {
      livros: [],
      livro: {},
      categoria: {},
      categorias: [],
      autores: [],
      editoras: [],
    };
  },

  async created() {
    this.livros = await livrosApi.BuscarTodosOsLivros();
    this.categorias = await categoriasApi.BuscarTodasAsCategorias();
    this.autores = await autoresApi.BuscarTodosOsAutores();
    this.editoras = await editorasApi.BuscarTodasAsEditoras();
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
      this.editoras = await editorasApi.BuscarTodasAsEditoras();
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
        placeholder="ISBN"
        v-model="livro.ISBN"
        @keyup.enter="salvar"
      />

      <input
        class="FormInput"
        type="number"
        placeholder="Preco"
        v-model="livro.preco"
        @keyup.enter="salvar"
      />

      <p class="SelectText">Categoria:</p>
      <select class="FormInput" v-model="livro.categoria">
        <option
          v-for="categoria of categorias"
          :key="categoria.id"
          :value="categoria.id"
        >
          {{ categoria.descricao }}
        </option>
      </select>

      <p class="SelectText">Editora:</p>
      <select class="FormInput" v-model="livro.editora">
        <option
          v-for="editora of editoras"
          :key="editora.id"
          :value="editora.id"
        >
          {{ editora.nome }}
        </option>
      </select>

      <p class="SelectText">Autores:</p>
      <select multiple class="FormInput" v-model="livro.autores">
        <option v-for="autor of autores" :key="autor.id" :value="autor.id">
          {{ autor.nome }}
        </option>
      </select>

      <input
        class="FormInput"
        type="number"
        placeholder="Quantidade No Estoque"
        v-model="livro.quantidade"
        @keyup.enter="salvar"
      />

      <button @click="salvar" class="BtnSalvar">Adicionar</button>
    </div>
  </div>

  <div class="wrapper">
    <h3 class="Title">Livros:</h3>
    <div class="BoxInfo" v-for="livro in livros" :key="livro.id">
      <div>
        <p>id: {{ livro.id }}</p>
        <p>{{ livro.titulo }}</p>
        <p>{{ livro.autores.join(" ") }}</p>
        
        <button class="BtnEdit" @click="excluir(livro)">Excluir</button>
        <button class="BtnEdit" @click="editar(livro)">Editar</button>
      </div>
    </div>
    
  </div>
</template>

<style>
.wrapper{
  width: 76%;
  padding: 2vh;
  float: right;
}
.BoxInfo{
  width: 30%;
  float: left;
}

.FormInput, .BtnSalvar{
  width:90%;
  padding:10px;
  margin:10px 0;
  border: 2px solid rgb(192, 192, 192);
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  border-radius:10px;
  transition-duration: 200ms;
}
.BtnEdit{
  background-color: #5b223f;
  color: #EAEAEA;
  padding:0.5vh;
  width: 50%;
  border-radius: 10px;
  border: 2px solid rgb(192, 192, 192);
}
.BtnSalvar{ 
  background-color: #5b223f;
  color: #EAEAEA;
  padding:2vh;
}
.BtnSalvar:hover{
  background-color: #83305c;
  cursor: pointer;
}
.container{
  width: 20%;
  margin:10px 0;
  border-color: rgb(192, 192, 192);
  position: relative;
  float: left;
}
.SelectText{
  margin: 0.5vh 0 -0.5vh 0.5vh;
  font-size: small;
  color: rgb(59, 59, 59);;
}
</style>
