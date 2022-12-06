import axios from "axios";

export default class AuthApi {
  async login(user) {
    const { data } = await axios.post(
      "https://livrariacursodjango-production.up.railway.app/token/",
      user
    );
    return data;
  }
}
