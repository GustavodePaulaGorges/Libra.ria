axios.post('https://livrariacursodjang0.herokuapp.com/token/', {
    headers: {
      Accept: "application/json",
    },
    "username" : "gustavogorges",
    "password" : "132645978Aa"
  }, axiosConfig)
    .then(res => {
        console.log(res.data); // token
        this.$store.commit('login', res.data);
    })