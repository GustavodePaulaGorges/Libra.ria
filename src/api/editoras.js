import axios from "axios";


export default class EditorasApi {
  async BuscarTodasAsEditoras() {
    const response = await axios.get(
      "https://livrariacursodjango-production.up.railway.app/api/editoras/",
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
    async BuscarEditora(id) {
      const response = await axios.get(`https://livrariacursodjango-production.up.railway.app/api/editoras/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MjEyNTUzLCJpYXQiOjE2NjkyMDE3NTMsImp0aSI6IjQ0NjQ2NjE4NjE0ZTRlZmQ5NTQwN2U1MzIxMmI3MWUyIiwidXNlcl9pZCI6MX0.R6WXtHjwC7wyXxsV1sfMXgzhInWeBaGUZHk0rB5GjDc",
        },
      },

    );
      return response.data;
    }

    async AdicionarEditora(editora) {
      const response = await axios.post(
        "https://livrariacursodjango-production.up.railway.app/api/editoras/", 
        editora,
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

    async ExcluirEditora(id) {
      try {
        const response = await axios.delete(`https://livrariacursodjango-production.up.railway.app/api/editora/${id}`, {
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
        alert("A Editora está em pelo menos um livro então não pode ser deletada!")
      }  
      
    }

    async AtualizarEditora(editora) {
      const response = await axios.put(
        `https://livrariacursodjango-production.up.railway.app/api/editoras/${editora.id}/`,
        editora, 
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
