import axios from "axios";


export default class AutoresApi {
  async BuscarTodosOsAutores() {
    const response = await axios.get(
      "https://livrariacursodjango-production.up.railway.app/api/autores/",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MjEyNTUzLCJpYXQiOjE2NjkyMDE3NTMsImp0aSI6IjQ0NjQ2NjE4NjE0ZTRlZmQ5NTQwN2U1MzIxMmI3MWUyIiwidXNlcl9pZCI6MX0.R6WXtHjwC7wyXxsV1sfMXgzhInWeBaGUZHk0rB5GjDc",
        },
      },
      
    );
    return response.data;
  } 
    async BuscarAutor(id) {
      const response = await axios.get(`https://livrariacursodjango-production.up.railway.app/api/autores/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MjEyNTUzLCJpYXQiOjE2NjkyMDE3NTMsImp0aSI6IjQ0NjQ2NjE4NjE0ZTRlZmQ5NTQwN2U1MzIxMmI3MWUyIiwidXNlcl9pZCI6MX0.R6WXtHjwC7wyXxsV1sfMXgzhInWeBaGUZHk0rB5GjDc",
        },
      },

    );
      return response.data;
    }

    async AdicionarAutor(autor) {
      const response = await axios.post(
        "https://livrariacursodjango-production.up.railway.app/api/autores/", 
        autor,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MjEyNTUzLCJpYXQiOjE2NjkyMDE3NTMsImp0aSI6IjQ0NjQ2NjE4NjE0ZTRlZmQ5NTQwN2U1MzIxMmI3MWUyIiwidXNlcl9pZCI6MX0.R6WXtHjwC7wyXxsV1sfMXgzhInWeBaGUZHk0rB5GjDc",
          },
        },
      );
      return response.data;
    }

    async ExcluirAutor(id) {
      try {
        const response = await axios.delete(`https://livrariacursodjango-production.up.railway.app/api/autores/${id}`, {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MjEyNTUzLCJpYXQiOjE2NjkyMDE3NTMsImp0aSI6IjQ0NjQ2NjE4NjE0ZTRlZmQ5NTQwN2U1MzIxMmI3MWUyIiwidXNlcl9pZCI6MX0.R6WXtHjwC7wyXxsV1sfMXgzhInWeBaGUZHk0rB5GjDc",
            },
          },
        
        );
      return response.data;
      }
      catch {
        alert("O Autor est?? vinculado a pelo menos um livro ent??o n??o pode ser deletado!")
      }  
      
    }

    async AtualizarAutor(autor) {
      const response = await axios.put(
        `https://livrariacursodjango-production.up.railway.app/api/autores/${autor.id}/`,
        autor, 
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MjEyNTUzLCJpYXQiOjE2NjkyMDE3NTMsImp0aSI6IjQ0NjQ2NjE4NjE0ZTRlZmQ5NTQwN2U1MzIxMmI3MWUyIiwidXNlcl9pZCI6MX0.R6WXtHjwC7wyXxsV1sfMXgzhInWeBaGUZHk0rB5GjDc",
          },
        },
      );
      return response.data;
    }
}
