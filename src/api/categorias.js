import axios from "axios";


export default class CategoriasApi {
  async BuscarTodasAsCategorias() {
    const response = await axios.get(
      "https://livrariacursodjang0.herokuapp.com/api/categorias/",
      {
        headers: {
          Accept: "application/json",
          Authorization: 
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODIxMTQ3LCJpYXQiOjE2Njg4MTAzNDcsImp0aSI6IjBhYzlmN2RhMWYxODQ0YWY5ODhmMGM1ZmI2Yjk2ZjQ4IiwidXNlcl9pZCI6MX0.KmVDy80XUFuFYYJUBcxttSEROQj-uSY49XL6rzv1N5Q",
        },
      },
      
    );
    return response.data;
  } 
    async BuscarCategoria(id) {
      const response = await axios.get(`https://livrariacursodjang0.herokuapp.com/api/categorias/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODIxMTQ3LCJpYXQiOjE2Njg4MTAzNDcsImp0aSI6IjBhYzlmN2RhMWYxODQ0YWY5ODhmMGM1ZmI2Yjk2ZjQ4IiwidXNlcl9pZCI6MX0.KmVDy80XUFuFYYJUBcxttSEROQj-uSY49XL6rzv1N5Q",
        },
      },

    );
      return response.data;
    }

    async AdicionarCategoria(categoria) {
      const response = await axios.post(
        "https://livrariacursodjang0.herokuapp.com/api/categorias/", 
        categoria,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODIxMTQ3LCJpYXQiOjE2Njg4MTAzNDcsImp0aSI6IjBhYzlmN2RhMWYxODQ0YWY5ODhmMGM1ZmI2Yjk2ZjQ4IiwidXNlcl9pZCI6MX0.KmVDy80XUFuFYYJUBcxttSEROQj-uSY49XL6rzv1N5Q",
          },
        },
      );
      return response.data;
    }

    async ExcluirCategoria(id) {
      try {
        const response = await axios.delete(`https://livrariacursodjang0.herokuapp.com/api/categorias/${id}`, {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODIxMTQ3LCJpYXQiOjE2Njg4MTAzNDcsImp0aSI6IjBhYzlmN2RhMWYxODQ0YWY5ODhmMGM1ZmI2Yjk2ZjQ4IiwidXNlcl9pZCI6MX0.KmVDy80XUFuFYYJUBcxttSEROQj-uSY49XL6rzv1N5Q",
            },
          },
        
        );
      return response.data;
      }
      catch {
        alert("A categoria está em pelo menos um livro então não pode ser deletada!")
      }  
      
    }

    async AtualizarCategoria(categoria) {
      const response = await axios.put(
        `https://livrariacursodjang0.herokuapp.com/api/categorias/${categoria.id}/`,
        categoria, 
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODIxMTQ3LCJpYXQiOjE2Njg4MTAzNDcsImp0aSI6IjBhYzlmN2RhMWYxODQ0YWY5ODhmMGM1ZmI2Yjk2ZjQ4IiwidXNlcl9pZCI6MX0.KmVDy80XUFuFYYJUBcxttSEROQj-uSY49XL6rzv1N5Q",
          },
        },
      );
      return response.data;
    }
}
