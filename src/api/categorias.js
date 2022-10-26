import axios from "axios";

export default class CategoriasApi {
  async BuscarTodasAsCategorias() {
    const response = await axios.get(
      "https://livrariacursodjang0.herokuapp.com/api/categorias/",
      {
        headers: {
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2Nzk2Mzg5LCJpYXQiOjE2NjY3ODU1ODksImp0aSI6ImJhZDFiYTg4NjVlODQ1NzFhOTg3NDIwN2E3ZGYxMGYxIiwidXNlcl9pZCI6Mn0.75-cs0JZaat8xH0LzGjLOHgDgTkmbeOEvXB5Ek3LzqE",
        },
      },
    );
    return response.data;
  }
}
