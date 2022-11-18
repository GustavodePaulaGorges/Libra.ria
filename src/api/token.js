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
