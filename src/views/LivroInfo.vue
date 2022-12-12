<script setup>
import Navbar from '@/components/navbar.vue';
</script>

<script>
import LivrosApi from "@/api/livros.js";
import AutoresApi from "@/api/autores.js";
import CategoriasApi from "@/api/categorias.js";
import EditorasApi from "@/api/editoras.js";
const livrosApi = new LivrosApi();
const categoriasApi = new CategoriasApi();
const autoresApi = new AutoresApi();
const editorasApi = new EditorasApi();

export default {
  props: ["id"],
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
    this.livro = await livrosApi.BuscarLivro(this.id);
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

  <Navbar />

  <div class="Expanded">
    <div>
      <img class="CoverExpanded" v-bind:src="livro.imagem">
      <div class="ExpandedInfo">
        <h1>{{ livro.id}}. {{ livro.titulo }}</h1>
        <h3> ISBN: {{ livro.ISBN}}</h3>
        <h2>Categoria: {{ livro.categoria}}</h2>

        <h2 v-if="livro.autores.length > 1">
          Autores: {{livro.autores.join(", ")}}
        </h2>
        <h2 v-else>
          Autor: {{livro.autores.join(", ")}}
        </h2>
        
        <h2>Editora: {{ livro.editora.nome}}</h2>
      </div>

      <div class="BookBuy">
        <h3>Quantidade no estoque: {{livro.quantidade}}</h3>
        <h1 class="price"> R${{livro.preco}}</h1>
        <button class="BuyBTN">Comprar!</button>
      </div>
    </div>
 </div>
 
 <!-- <div>
  <h2  class="RelatedTitle">Outros livros da categoria {{livro.categoria}}!</h2>
  <div class="RelatedList">

    <div v-for="book in livros" :key="book.id" class="BoxInfo a">
        <div v-if="book.categoria = livro.categoria">
          <img v-bind:src="book.imagem" class="RelatedIMG">
        </div>
    </div>
 </div>
 </div>

<div>
  <div class="RelatedList">
  <h2>Dos mesmos autores {{livro.autores.join(" ")}}!</h2>
    <div v-for="book in livros" :key="book.id" class="BoxInfo">
        <div v-if="book.categoria = livro.categoria">
          <img v-bind:src="book.imagem" class="RelatedIMG">
        </div>
    </div>
</div>
</div> -->
</template>

<style>

.RelatedTitle{
  text-align: center;
}
.RelatedList{
  width: 100%;
  margin-top: 5vh;
  padding: 2vh;
  outline: 1px black solid;
  display: flex;
}
.RelatedIMG{
  height: 20vh;
}
.ExpandedInfo{
  float: left;
  padding-left: 1vh;
  padding-right: 3vh;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  margin-bottom: 10vh;
  
}
.CoverExpanded{
  float: left;
  margin-right: 2vh;
  height: 50vh;
  border-radius: 2px;
}

.Expanded{
  margin: 2vh;
  padding: 2vh;
  outline: 2px solid rgb(134, 134, 134);
  display: flex;
  width: 50%;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.308);
  margin-left: 25%;
  margin-right: 25%
  

}
.price{
  color: brown;
  font-family: 'Fazeta-BoldItalicCaption';

}
.BuyBTN{
  width: 9vh;
  height: 3vh;
  background-color: #5b223f;
  color: white;
  font-weight: bold;
  border-radius: 4vh;
  border: none;
  transition-duration: 0.2s;
  outline: 2px solid rgb(134, 134, 134);
}
.BuyBTN:hover{
  width: 10vh;
  box-shadow: inset 0 0 10px #000000a2;
  outline: 2px solid rgb(63, 63, 63);
  cursor: pointer;
}

</style>