import axios from "axios";

export default class TokenApi {
  async GetToken() {
    const response = axios.post(
      "https://livrariacursodjang0.herokuapp.com/token/",
      {
        headers: {
          Accept: "application/json",
        },
        "username" : "admin1",
        "password" : "minhasenha1"
      }
    );
    return response.data
  }
}
