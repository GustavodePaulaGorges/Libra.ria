import axios from "axios";

export default class TokenApi {
  async GetToken() {
    const response = await axios.post(
      "https://livrariacursodjang0.herokuapp.com/token/",
      {
        headers: {
          Accept: "application/json",
        },
        "username" : "gustavogorges",
        "password" : "132645978Aa"
      }
    );
    return JSON.stringify(response.data.access)
  }
}
/*
COMO EU PENSEI EM PEGAR O TOKEN DIRETO NA FUNÇÃO

export default class CategoriasApi {
  async GetToken() {
    const token = await axios.post(
      "https://livrariacursodjang0.herokuapp.com/token/",
      {
        headers: {
          Accept: "application/json",
        },
        "username" : "gustavogorges",
        "password" : "132645978Aa"
      }
    );
    return JSON.stringify(token.data.access)
  }
  async BuscarTodasAsCategorias() {
    const response = await axios.get(
      "https://livrariacursodjang0.herokuapp.com/api/categorias/",
      {
        headers: {
          Accept: "application/json",
          Authorization: 
             "Bearer ".concat(this.GetToken)
        },
      },
      
    );
    return console.log(response.data);
  }  
*/