<script>
import { RouterLink } from "vue-router";
import AutoresApi from "@/api/autores.js";
const autoresApi = new AutoresApi();

export default {
  data() {
    return {
      autores: [],
      autor: {},
    };
  },

  async created() {
    this.autores = await autoresApi.BuscarTodosOsAutores();
  },

  methods: {
      async salvar() {
        if (this.autor.id) {
          await autoresApi.AtualizarAutor(this.autor);
        } else {
          await autoresApi.AdicionarAutor(this.autor);
        }

        this.autores = await autoresApi.BuscarTodosOsAutores();
        this.autor = {};
      },

      async excluir(autor) {
        await autoresApi.ExcluirAutor(autor.id);
        this.autores = await autoresApi.BuscarTodosOsAutores();
      },

      editar(autor) {
        Object.assign(this.autor, autor);
      },
    },
};
</script>

<template>

  <div class="container">
    <div class="title">
      <h2>Gerenciamento de autores</h2> 
    </div>
    <div class="FormBox">
      <input
        class="FormInput"
        type="text"
        placeholder="Nome"
        v-model="autor.nome"
        @keyup.enter="salvar"
      />
      <button @click="salvar" class="BtnSalvar">Adicionar</button>
    </div>
  </div>


  <div class="wrapper">
    <h3 class="Title">Autores:</h3>
    <div class="BoxInfo" v-for="autor in autores" :key="autor.id">
      <div>
        {{ autor.id }} , {{ autor.nome}} <br>
      <button class="BtnEdit" @click="excluir(autor)">Excluir</button> <br>
      <button class="BtnEdit" @click="editar(autor)">Editar</button>
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
