import axios from "axios";


export default class AutoresApi {
  async BuscarTodosOsAutores() {
    const response = await axios.get(
      "https://livrariacursodjang0.herokuapp.com/api/autores/",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MDQxMDU0LCJpYXQiOjE2NjkwMzAyNTQsImp0aSI6ImY1YmEzZTRlYjRiZDQ0NmY4N2UyNzA1YjI0MjU4NmRiIiwidXNlcl9pZCI6MX0.mZDxL1lb8XxWU4GuSgb-w1n1BEkU2Jz-KjGM67c5s-s",
        },
      },
      
    );
    return response.data;
  } 
    async BuscarAutor(id) {
      const response = await axios.get(`https://livrariacursodjang0.herokuapp.com/api/autores/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MDQxMDU0LCJpYXQiOjE2NjkwMzAyNTQsImp0aSI6ImY1YmEzZTRlYjRiZDQ0NmY4N2UyNzA1YjI0MjU4NmRiIiwidXNlcl9pZCI6MX0.mZDxL1lb8XxWU4GuSgb-w1n1BEkU2Jz-KjGM67c5s-s",
        },
      },

    );
      return response.data;
    }

    async AdicionarAutor(autor) {
      const response = await axios.post(
        "https://livrariacursodjang0.herokuapp.com/api/autores/", 
        autor,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MDQxMDU0LCJpYXQiOjE2NjkwMzAyNTQsImp0aSI6ImY1YmEzZTRlYjRiZDQ0NmY4N2UyNzA1YjI0MjU4NmRiIiwidXNlcl9pZCI6MX0.mZDxL1lb8XxWU4GuSgb-w1n1BEkU2Jz-KjGM67c5s-s",
          },
        },
      );
      return response.data;
    }

    async ExcluirAutor(id) {
      try {
        const response = await axios.delete(`https://livrariacursodjang0.herokuapp.com/api/autores/${id}`, {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MDQxMDU0LCJpYXQiOjE2NjkwMzAyNTQsImp0aSI6ImY1YmEzZTRlYjRiZDQ0NmY4N2UyNzA1YjI0MjU4NmRiIiwidXNlcl9pZCI6MX0.mZDxL1lb8XxWU4GuSgb-w1n1BEkU2Jz-KjGM67c5s-s",
            },
          },
        
        );
      return response.data;
      }
      catch {
        alert("O Autor está vinculado a pelo menos um livro então não pode ser deletado!")
      }  
      
    }

    async AtualizarAutor(autor) {
      const response = await axios.put(
        `https://livrariacursodjang0.herokuapp.com/api/autores/${autor.id}/`,
        autor, 
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MDQxMDU0LCJpYXQiOjE2NjkwMzAyNTQsImp0aSI6ImY1YmEzZTRlYjRiZDQ0NmY4N2UyNzA1YjI0MjU4NmRiIiwidXNlcl9pZCI6MX0.mZDxL1lb8XxWU4GuSgb-w1n1BEkU2Jz-KjGM67c5s-s",
          },
        },
      );
      return response.data;
    }
}
