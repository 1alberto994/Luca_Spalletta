<!-- src/views/Infissi.vue -->
<template>
    <div>
      <h1>Infissi</h1>
      <!-- <router-link to="/about"><button class="btn btn-primary">Click me</button></router-link> -->
      <div v-for="(infisso, index) in infissi" :key="index" class="infisso-item bg-dark">
      <a :href="infisso.link" target="_blank">
        <img :src="infisso.image" alt="infissi" class="infisso-image" />
      </a>
      <div class="infisso-description text-light">
        <h2>{{ infisso.descrizione }}</h2>
      </div>
      </div>
      <div  v-for="(azienda, index) in aziende" :key="index" class="infisso-item bg-dark">
        <a :href="azienda.link" target="_blank">
            <img :src="azienda.image" alt="infissi" class="infisso-image" />
        </a>
        <div class="infisso-description text-light">
            <h2>{{ azienda.descrizione }}</h2>
        </div>
        </div>
  
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Infissi',
    data(){
      return{
        infissi:[
        {
          image :'https://www.cosmetgroup.it/img/cm-group-logo.svg',
          descrizione:"Tre aziende,un'unica cornice.Nata negli anni '60 come bottega artigiana, oggi Cosmet Group è una holding che raggruppa 3 aziende.Il nostro è un racconto attraverso PVC, Legno e Alluminio che, abilmente plasmati e trasformati in pezzi unici di arredamento, si distinguono nel settore come modelli innovativi.",
          link: 'https://www.cosmetgroup.it/',
        }],
        aziende:[
        {
          image:'https://www.cosmetgroup.it/upload/cosmetlogo2-7.svg',
          descrizione:"Abbiamo visto nel PVC di alta qualità - un materiale moderno, altamente performante e riciclabile al 100% - la risposta più efficace ai cambiamenti del lifestyle e delle abitudini quotidiane nelle case delle persone.",
          link:'https://www.cosmetgroup.it/brand/30/cosmet'
        },
        {
          image:'https://www.cosmetgroup.it/upload/fideallogo2-9.svg',
          descrizione:"FIDEAL nasce all'interno di Cosmet Group esclusivamente per il mondo delle finestre in legno e legno - alluminio.",
          link:'https://www.cosmetgroup.it/brand/31/fideal'
        },
        {
          image:'https://www.cosmetgroup.it/upload/alwologo2-11.svg',
          descrizione:"Scegliere una finestra in alluminio ALWO è una scelta di stile ma non solo. È la soluzione migliore per la tua casa grazie al design moderno ed essenziale, alla completa riciclabilità e alle elevate prestazioni.",
          link:'https://www.cosmetgroup.it/brand/32/alwo'
        }
      ]
      }
    }
  };
  </script>
  <style>
  /* Aggiungi stili CSS per personalizzare l'aspetto delle zanzariere */
  .infisso-item {
    margin-bottom: 20px;
  }
  
  .infisso-image {
    max-width: 100%;
    height: auto;
  }
  
  .infisso-description {
    margin-top: 10px;
  }
  </style>
  