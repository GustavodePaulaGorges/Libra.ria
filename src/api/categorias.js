import axios from "axios";

export default class CategoriasApi {
  async BuscarTodasAsCategorias() {
    const response = await axios.get(
      "https://livrariacursodjang0.herokuapp.com/api/categorias/",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NTkxMDQwLCJpYXQiOjE2Njc1ODAyNDAsImp0aSI6ImU1MjI2MTFlNWMxODRjZjNhMTU1YjMxMTEzNDJiYTU4IiwidXNlcl9pZCI6MX0.pTQzFQ4LmqhEzUyzUvQt1fO5lVbaT4ojg8CnFF8hDf8 ",
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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NTkxMDQwLCJpYXQiOjE2Njc1ODAyNDAsImp0aSI6ImU1MjI2MTFlNWMxODRjZjNhMTU1YjMxMTEzNDJiYTU4IiwidXNlcl9pZCI6MX0.pTQzFQ4LmqhEzUyzUvQt1fO5lVbaT4ojg8CnFF8hDf8 ",
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NTkxMDQwLCJpYXQiOjE2Njc1ODAyNDAsImp0aSI6ImU1MjI2MTFlNWMxODRjZjNhMTU1YjMxMTEzNDJiYTU4IiwidXNlcl9pZCI6MX0.pTQzFQ4LmqhEzUyzUvQt1fO5lVbaT4ojg8CnFF8hDf8 ",
          },
        },
      );
      return response.data;
    }

    async ExcluirCategoria(id) {
      const response = await axios.delete(`https://livrariacursodjang0.herokuapp.com/api/categorias/${id}`, {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NTkxMDQwLCJpYXQiOjE2Njc1ODAyNDAsImp0aSI6ImU1MjI2MTFlNWMxODRjZjNhMTU1YjMxMTEzNDJiYTU4IiwidXNlcl9pZCI6MX0.pTQzFQ4LmqhEzUyzUvQt1fO5lVbaT4ojg8CnFF8hDf8 ",
          },
        },
      
      );
      return response.data;
    }

    async AtualizarCategoria(categoria) {
      const response = await axios.put(
        `https://livrariacursodjang0.herokuapp.com/api/categorias/${categoria.id}`,
        categoria, 
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NTkxMDQwLCJpYXQiOjE2Njc1ODAyNDAsImp0aSI6ImU1MjI2MTFlNWMxODRjZjNhMTU1YjMxMTEzNDJiYTU4IiwidXNlcl9pZCI6MX0.pTQzFQ4LmqhEzUyzUvQt1fO5lVbaT4ojg8CnFF8hDf8 ",
          },
        },
      );
      return response.data;
    }
}
