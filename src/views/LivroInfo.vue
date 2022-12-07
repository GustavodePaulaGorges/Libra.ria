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
  <div>
  <img v-bind:src="livro.imagem"> 
  {{ livro.titulo }} 
  {{ livro.id }}
  {{ livro.ISBN }}
  {{ livro.autores.join(" ") }}
  {{ livro.editora.nome }}
  {{ livro.categoria }}
  {{ livro.preco }}
  {{ livro.quantidade }}
  </div>

 <div>

 </div>
</template>

