import axios from "axios";


export default class LivrosApi {
  async BuscarTodosOsLivros() {
    const response = await axios.get(
      "https://livrariacursodjang0.herokuapp.com/api/livros/",
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
    async BuscarLivro(id) {
      const response = await axios.get(`https://livrariacursodjang0.herokuapp.com/api/livros/${id}/`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODIxMTQ3LCJpYXQiOjE2Njg4MTAzNDcsImp0aSI6IjBhYzlmN2RhMWYxODQ0YWY5ODhmMGM1ZmI2Yjk2ZjQ4IiwidXNlcl9pZCI6MX0.KmVDy80XUFuFYYJUBcxttSEROQj-uSY49XL6rzv1N5Q",
        },
      },

    );
      return response.data;
    }

    async AdicionarLivro(livro) {
      const response = await axios.post(
        "https://livrariacursodjang0.herokuapp.com/api/livros/", 
        livro,
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

    async ExcluirLivro(id) {
        try {
          const response = await axios.delete(`https://livrariacursodjang0.herokuapp.com/api/livros/${id}`, {
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
          alert("O Livro está em pelo menos um carrinho, então não pode ser deletado")
        }  
        
      }

    async AtualizarLivro(livro) {
      const response = await axios.put(
        `https://livrariacursodjang0.herokuapp.com/api/livros/${livro.id}`,
        livro, 
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
