import { createRouter, createWebHistory } from 'vue-router'
import CategoriaView from '../views/CategoriaView.vue'
import AutoresView from '../views/AutoresView.vue'
import HomeView from '../views/HomeView.vue'
import EditoraView from '../views/EditoraView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/categorias',
      name: 'categorias',
      component: CategoriaView
    },
    {
      path: '/autores',
      name: 'autores',
      component: AutoresView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/editoras',
      name: 'editoras',
      component: EditoraView
    },
  ]
})

export default router
