import axios from "axios";


export default class CategoriasApi {
  async BuscarTodasAsCategorias() {
    const response = await axios.get(
      "https://livrariacursodjang0.herokuapp.com/api/categorias/",
      {
        headers: {
          Accept: "application/json",
          Authorization: 
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3ODU1NjMwLCJpYXQiOjE2Njc4NDQ4MzAsImp0aSI6IjAyY2FlNjQwYjExNzRhYWY4YWM2Njc3NDVjOWQwM2VkIiwidXNlcl9pZCI6MX0.Tq0qz0kWw4WnKkxE_AbqQxOq93HyeVGn_zCeuTRc9WE",
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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3ODU1NjMwLCJpYXQiOjE2Njc4NDQ4MzAsImp0aSI6IjAyY2FlNjQwYjExNzRhYWY4YWM2Njc3NDVjOWQwM2VkIiwidXNlcl9pZCI6MX0.Tq0qz0kWw4WnKkxE_AbqQxOq93HyeVGn_zCeuTRc9WE",
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3ODU1NjMwLCJpYXQiOjE2Njc4NDQ4MzAsImp0aSI6IjAyY2FlNjQwYjExNzRhYWY4YWM2Njc3NDVjOWQwM2VkIiwidXNlcl9pZCI6MX0.Tq0qz0kWw4WnKkxE_AbqQxOq93HyeVGn_zCeuTRc9WE",
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3ODU1NjMwLCJpYXQiOjE2Njc4NDQ4MzAsImp0aSI6IjAyY2FlNjQwYjExNzRhYWY4YWM2Njc3NDVjOWQwM2VkIiwidXNlcl9pZCI6MX0.Tq0qz0kWw4WnKkxE_AbqQxOq93HyeVGn_zCeuTRc9WE",
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3ODU1NjMwLCJpYXQiOjE2Njc4NDQ4MzAsImp0aSI6IjAyY2FlNjQwYjExNzRhYWY4YWM2Njc3NDVjOWQwM2VkIiwidXNlcl9pZCI6MX0.Tq0qz0kWw4WnKkxE_AbqQxOq93HyeVGn_zCeuTRc9WE",
          },
        },
      );
      return response.data;
    }
}
