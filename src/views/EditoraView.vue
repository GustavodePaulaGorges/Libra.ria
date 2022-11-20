<script>
import EditorasApi from "@/api/editoras.js";
const editorasApi = new EditorasApi();

export default {
  data() {
    return {
      editoras: [],
      editora: {},
    };
  },

  async created() {
    this.editoras = await editorasApi.BuscarTodasAsEditoras();
  },

  methods: {
      async salvar() {
        if (this.editora.id) {
          await editorasApi.AtualizarEditoras(this.editora);
        } else {
          await editorasApi.AdicionarEditora(this.editora);
        }

        this.editoras = await editorasApi.BuscarTodasAsEditoras();
        this.editora = {};
      },

      async excluir(editora) {
        await editorasApi.ExcluirEditora(editora.id);
        this.editora = await editorasApi.BuscarTodasAsEditoras();
      },

      editar(editora) {
        Object.assign(this.editora, editora);
      },
    },
};
</script>

<template>

  <div class="container">
    <div class="title">
      <h2>Gerenciamento de editoras</h2>
    </div>

    <div class="FormBox">
      <input
        class="FormInput"
        type="text"
        placeholder="Nome"
        v-model="editora.nome"
        @keyup.enter="salvar"
      />

      <input
        class="FormInput"
        type="url"
        placeholder="Site"
        v-model="editora.site"
        @keyup.enter="salvar"
      />

      <button @click="salvar" class="BtnSalvar">Adicionar</button>

    </div>
  </div>


  <div class="wrapper">
    <h2 class="Title">Editoras:</h2>
    <div class="BoxInfo" v-for="editora in editoras" :key="editora.id">
      <p class="livroinfo">
        {{editora.id}}
        <h1>{{editora.nome}}</h1>
        <h3>{{editora.site}}</h3>
      </p>
      <button class="BtnEdit" @click="excluir(editora)">Excluir</button> <br>
      <button class="BtnEdit" @click="editar(editora)">Editar</button>
      </div>
    </div>

</template>
<style>
</style>

