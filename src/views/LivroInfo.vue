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

    this.categorias = await categoriasApi.BuscarTodasAsCategorias();
    this.autores = await autoresApi.BuscarTodosOsAutores();
    this.editoras = await editorasApi.BuscarTodasAsEditoras();
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
        <button>Comprar!</button>
      </div>
    </div>
 </div>
</template>

<style>
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
</style>