<!-- src/views/Infissi.vue -->
<template>
    
      <h1>Infissi</h1>
      <div class="container-fluid">
    <div id="carouselExampleFade" class="carousel slide carousel-fade mt-3" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item, index) in carouselItems" :key="index" :class="{ 'carousel-item': true, 'active': index === currentSlide }">
          <img :src="item.image" class=" interval d-block w-100" alt="...">
        </div>
      </div>
    </div>
  </div>
      <div class="container-fluid container-sm ">
          <div class="row">

            <div v-for="(infisso, index) in infissi" :key="index" class="col-12 ">
              <div class="card custom-card">
                <a :href="infisso.link" target="_blank">
                  <img :src="infisso.image" alt="infissi" class="card-img-top" />
                </a>
                <div class="card-body ">
                  <p class="card-text ">{{ infisso.descrizione }}</p>
                  <a :href="infisso.link" target="_blank" class="btn btn-dark p-2">Vai al sito</a>

                </div>

              </div>
            </div>
          </div>
      </div>
      <div class="container-fluid container-sm">
          <div class="row">

            <div  v-for="(azienda, index) in aziende" :key="index" class="col-xl-4 col-sm-12 ">
              <div class="card custom-card">
                <a :href="azienda.link" target="_blank">
                  <img :src="azienda.image" alt="infissi" class="card-img-top" />
              </a>
              <div class="card-body ">
                  <p class="card-text ">{{ azienda.descrizione }}</p>
                  <a :href="azienda.link" target="_blank" class="btn btn-dark p-2">Vai al sito</a>

              </div>
              </div>
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
      ],
      carouselItems: [
        {
          image:'https://www.ediltecnico.it/wp-content/uploads/2023/05/infissi-serramenti-finestre-definizioni-1024x683.jpg',
        },
        {
          image: 'https://www.dauniaserramenti.it/wp-content/uploads/2021/07/daunia-serramenti-infissi-finestre-portafinestre-pvc-anteprima.jpg',
        },
        {
          image: 'https://www.infissilombardia.it/wp-content/uploads/2017/07/infissi-in-pvc-milano.jpg',
        },
      ],
      currentSlide: 0,
      }
    },
    mounted() {
    // Imposta l'intervallo per cambiare la slide ogni 3 secondi
    setInterval(this.nextSlide, 3000);
  },
  methods: {
    nextSlide() {
      // Incrementa l'indice della slide corrente
      this.currentSlide = (this.currentSlide + 1) % this.carouselItems.length;
    },
  },
  };
  </script>
  <style>
  /* Aggiungi stili CSS per personalizzare l'aspetto delle zanzariere */
  .card {
  margin-bottom: 20px;
  border: none !important;
}


.card-text {
  margin-top: 10px;
}

.custom-card {
  margin-bottom: 20px;
  margin:20px ;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #f8f9fa58 !important;
}

.custom-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.card-img-top {
  max-width: 100%;
  height: auto;
  border-bottom: 1px solid #e0e0e0;
  max-height: 200px;
  opacity: 1 !important;
  padding: 5px;
  border:none !important;
}

.card-body {
  padding: 20px;
}



.card-text {
  margin-top: 10px;
  color: #666;
}

.btn-custom {
  background-color: #4caf50;
  color: #fff;
  border: none;
}

.btn-custom:hover {
  background-color: #45a049;
}
  </style>
  