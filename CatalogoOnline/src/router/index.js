// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Partner from '../views/Partner.vue';






const routes = [
  { path: '/', component: Home },
  {path:'/spalletta_partner', component:Partner},



];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;