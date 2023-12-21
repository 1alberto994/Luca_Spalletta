// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import About from '../views/Porte.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {path:'/porte',component:Porte},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
