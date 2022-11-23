import axios from "axios";


export default class LivrosApi {
  async BuscarTodosOsLivros() {
    const response = await axios.get(
      "https://livrariacursodjang0.herokuapp.com/api/livros/",
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
    async BuscarLivro(id) {
      const response = await axios.get(`https://livrariacursodjang0.herokuapp.com/api/livros/${id}/`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MjEyNTUzLCJpYXQiOjE2NjkyMDE3NTMsImp0aSI6IjQ0NjQ2NjE4NjE0ZTRlZmQ5NTQwN2U1MzIxMmI3MWUyIiwidXNlcl9pZCI6MX0.R6WXtHjwC7wyXxsV1sfMXgzhInWeBaGUZHk0rB5GjDc",
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MjEyNTUzLCJpYXQiOjE2NjkyMDE3NTMsImp0aSI6IjQ0NjQ2NjE4NjE0ZTRlZmQ5NTQwN2U1MzIxMmI3MWUyIiwidXNlcl9pZCI6MX0.R6WXtHjwC7wyXxsV1sfMXgzhInWeBaGUZHk0rB5GjDc",
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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5MjEyNTUzLCJpYXQiOjE2NjkyMDE3NTMsImp0aSI6IjQ0NjQ2NjE4NjE0ZTRlZmQ5NTQwN2U1MzIxMmI3MWUyIiwidXNlcl9pZCI6MX0.R6WXtHjwC7wyXxsV1sfMXgzhInWeBaGUZHk0rB5GjDc",
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
        `https://livrariacursodjang0.herokuapp.com/api/livros/${livro.id}/`,
        livro, 
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
