import axios from "axios";


export default class CategoriasApi {
  async BuscarTodasAsCategorias() {
    const response = await axios.get(
      "https://livrariacursodjango-production.up.railway.app/api/categorias/",
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
    async BuscarCategoria(id) {
      const response = await axios.get(`https://livrariacursodjango-production.up.railway.app/api/categorias/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MjEyNTUzLCJpYXQiOjE2NjkyMDE3NTMsImp0aSI6IjQ0NjQ2NjE4NjE0ZTRlZmQ5NTQwN2U1MzIxMmI3MWUyIiwidXNlcl9pZCI6MX0.R6WXtHjwC7wyXxsV1sfMXgzhInWeBaGUZHk0rB5GjDc",
        },
      },

    );
      return response.data;
    }

    async AdicionarCategoria(categoria) {
      const response = await axios.post(
        "https://livrariacursodjango-production.up.railway.app/api/categorias/", 
        categoria,
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

    async ExcluirCategoria(id) {
      try {
        const response = await axios.delete(`https://livrariacursodjango-production.up.railway.app/api/categorias/${id}`, {
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
        alert("A categoria está em pelo menos um livro então não pode ser deletada!")
      }  
      
    }

    async AtualizarCategoria(categoria) {
      const response = await axios.put(
        `https://livrariacursodjango-production.up.railway.app/api/categorias/${categoria.id}/`,
        categoria, 
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
