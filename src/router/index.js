import { createRouter, createWebHistory } from "vue-router";
import CategoriaView from "../views/CategoriaView.vue";
import AutoresView from "../views/AutoresView.vue";
import HomeView from "../views/HomeView.vue";
import EditoraView from "../views/EditoraView.vue";
import LoginView from "../views/LoginView.vue";
import LivroInfo from "../views/LivroInfo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/categorias",
      name: "categorias",
      component: CategoriaView,
    },
    {
      path: "/autores",
      name: "autores",
      component: AutoresView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/info/:id",
      name: "info",
      component: LivroInfo,
      props: true,
    },
    {
      path: "/editoras",
      name: "editoras",
      component: EditoraView,
    },
    {
      path: "/",
      name: "Login",
      component: LoginView,
    },
  ],
});

export default router;
