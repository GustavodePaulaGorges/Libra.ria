<script setup>
import Navbar from '@/components/navbar.vue';
</script>

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
  <div>

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
          type="number"
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

        <input 
          class="FormInput"
          placeholder="Link da Capa"
          type="text"
          v-model="livro.imagem"
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
        <select multiple class="FormInput multi" v-model="livro.autores">
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

  </div>

  <Navbar class="NavHome" />

  
  

  <div class="wrapper">

    <div class="BoxInfo" v-for="livro in livros" :key="livro.id">
        <img v-bind:src="livro.imagem" class="BookCover">
        <p class="livroinfo">
          id: {{ livro.id }}
          <h1>
            <RouterLink :to="`/info/${livro.id}`">
              {{ livro.titulo }}
            </RouterLink>
          </h1>
          <h3>{{ livro.autores.join(" ") }}</h3>
          
        </p>
        
        
        
        
        <button class="BtnEdit" @click="excluir(livro)">Excluir</button>
        <button class="BtnEdit" @click="editar(livro)">Editar</button>
    </div>
    
  </div>

</template>

