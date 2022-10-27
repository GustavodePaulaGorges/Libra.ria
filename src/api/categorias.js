import axios from "axios";

export default class CategoriasApi {
  async BuscarTodasAsCategorias() {
    const response = await axios.get(
      "https://livrariacursodjang0.herokuapp.com/api/categorias/",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2ODQ2MjE2LCJpYXQiOjE2NjY4MzU0MTYsImp0aSI6ImUzZjk4OGY2ODRjNDQzMGNiNmE0NzhhOTAxMWU0MzY0IiwidXNlcl9pZCI6Mn0.7deGhvKRihvmqz6K0gf_WyfQlasjJZGLJwYOzGsLrn8",
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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2ODQ2MjE2LCJpYXQiOjE2NjY4MzU0MTYsImp0aSI6ImUzZjk4OGY2ODRjNDQzMGNiNmE0NzhhOTAxMWU0MzY0IiwidXNlcl9pZCI6Mn0.7deGhvKRihvmqz6K0gf_WyfQlasjJZGLJwYOzGsLrn8",
        },
      },

    );
      return response.data;
    }

    async AdicionarCategoria(categoria) {
      const response = await axios.post(
        "https://livrariacursodjang0.herokuapp.com/api/categorias/", {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2ODQ2MjE2LCJpYXQiOjE2NjY4MzU0MTYsImp0aSI6ImUzZjk4OGY2ODRjNDQzMGNiNmE0NzhhOTAxMWU0MzY0IiwidXNlcl9pZCI6Mn0.7deGhvKRihvmqz6K0gf_WyfQlasjJZGLJwYOzGsLrn8",
          },
        },
        categoria
      );
      return response.data;
    }

    async ExcluirCategoria(id) {
      const response = await axios.delete(`https://livrariacursodjang0.herokuapp.com/api/categorias/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2ODQ2MjE2LCJpYXQiOjE2NjY4MzU0MTYsImp0aSI6ImUzZjk4OGY2ODRjNDQzMGNiNmE0NzhhOTAxMWU0MzY0IiwidXNlcl9pZCI6Mn0.7deGhvKRihvmqz6K0gf_WyfQlasjJZGLJwYOzGsLrn8",
          },
        },
      
      );
      return response.data;
    }

    async AtualizarCategoria(categoria) {
      const response = await axios.put(
        `https://livrariacursodjang0.herokuapp.com/api/categorias/${categoria.id}`, {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2ODQ2MjE2LCJpYXQiOjE2NjY4MzU0MTYsImp0aSI6ImUzZjk4OGY2ODRjNDQzMGNiNmE0NzhhOTAxMWU0MzY0IiwidXNlcl9pZCI6Mn0.7deGhvKRihvmqz6K0gf_WyfQlasjJZGLJwYOzGsLrn8",
          },
        },
        categoria
      );
      return response.data;
    }
}
