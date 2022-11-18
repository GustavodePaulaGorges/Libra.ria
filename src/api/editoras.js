import axios from "axios";


export default class EditorasApi {
  async BuscarTodasAsEditoras() {
    const response = await axios.get(
      "https://livrariacursodjang0.herokuapp.com/api/editoras/",
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
    async BuscarEditora(id) {
      const response = await axios.get(`https://livrariacursodjang0.herokuapp.com/api/editoras/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4ODIxMTQ3LCJpYXQiOjE2Njg4MTAzNDcsImp0aSI6IjBhYzlmN2RhMWYxODQ0YWY5ODhmMGM1ZmI2Yjk2ZjQ4IiwidXNlcl9pZCI6MX0.KmVDy80XUFuFYYJUBcxttSEROQj-uSY49XL6rzv1N5Q",
        },
      },

    );
      return response.data;
    }

    async AdicionarEditora(editora) {
      const response = await axios.post(
        "https://livrariacursodjang0.herokuapp.com/api/editoras/", 
        editora,
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

    async ExcluirEditora(id) {
      try {
        const response = await axios.delete(`https://livrariacursodjang0.herokuapp.com/api/editora/${id}`, {
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
        alert("A Editora está em pelo menos um livro então não pode ser deletada!")
      }  
      
    }

    async AtualizarEditora(editora) {
      const response = await axios.put(
        `https://livrariacursodjang0.herokuapp.com/api/editoras/${editora.id}/`,
        editora, 
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
