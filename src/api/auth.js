import axios from "axios";

export default class AuthApi {
  async login(user) {
    const { data } = await axios.post(
      "https://livrariacursodjang0.herokuapp.com/token/",
      user
    );
    return data;
  }
}
