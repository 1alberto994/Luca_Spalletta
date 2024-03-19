// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
// import About from '../views/About.vue';
import Porte from '../views/Porte.vue';
// import Zanzariere_Oscuranti from '../views/Zanzariere_Oscuranti.vue';
// import Infissi from '../views/Infissi.vue';
// import Tagliafuoco from '../views/Tagliafuoco.vue';
import Partner from '../views/Partner.vue';






const routes = [
  { path: '/', component: Home },
  // { path: '/about', component: About },
  {path:'/porte',component:Porte},
  // {path:'/Zanzariere_Oscuranti',component:Zanzariere_Oscuranti},
  // {path:'/infissi',component:Infissi},
  // {path:'/tagliafuoco',component:Tagliafuoco},
  {path:'/partner',component:Partner},



];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
