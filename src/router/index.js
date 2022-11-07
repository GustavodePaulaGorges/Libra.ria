import { createRouter, createWebHistory } from 'vue-router'
import CategoriaView from '../views/CategoriaView.vue'
import AutoresView from '../views/AutoresView.vue'

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
  ]
})

export default router
