 <!-- src/views/Porte.vue -->
<template>
      <div class="container-fluid">
    <div id="carouselExampleFade" class="carousel slide carousel-fade mt-3" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item, index) in carouselItems" :key="index" :class="{ 'carousel-item': true, 'active': index === currentSlide }">
          <img :src="item.image" class="interval mt-5 d-block  w-100" alt="...">
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid container-sm custom-background">
    <div class="row">
      <div v-for="(porta, index) in porte" :key="index" class="col-lg-6 col-sm-12">
        <div class="card custom-card">
          <a :href="porta.link" target="_blank">
            <img :src="porta.image" alt="Porta" class="mt-3 card-img-top" />
          </a>
          <div class="card-body">
            
            <p class="card-text">{{ porta.descrizione }}</p>
            
            <a :href="porta.link" target="_blank" class="btn btn-dark p-2">Vai al sito</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
  <script>
  


  export default {
    name: 'Porte',
  
    data(){
      return{
        porte:[
        {
          image :'https://www.ferwall.it/images/2022/10/21/logo.png',
          descrizione:'ciao',
          link: 'https://www.ferwall.it/',
        },
        {
          image:'https://www.porteimic.com/assets/images/porte-imic-made-in-italy-logotypes.png',
          descrizione:"Porte Imic è un' azienda specializzata nella lavorazione di porte in legno. Tradizione e innovazione sono i pilastri della filiera produttiva, gran parte della quale è completamente interna, garantendo velocità nella lavorazione, versatilità nelle rifiniture e nel design, qualità e ricercatezza attraverso un'attenzione costante delle materie prime e dei processi costruttivi.",
          link:'https://www.porteimic.com/'
        },
        {
          image:'https://porte.manuellodesign.it/wp-content/uploads/2022/04/logo-manuello-design.png',
          descrizione:"La nostra azienda, Manuello Design, si posiziona tra i leader di arredamento. Produciamo porte interne da oltre trent'anni. Nel tempo abbiamo aggiornato e sviluppato i nostri processi produttivi, integrando macchinari all'avanguardia e tecniche di verniciatura ecosostenibili.La qualità che ci contraddistingue è la combinazione tra la cura del dettaglio e la creatività.",
          link:'https://www.manuellodesign.it/it/'
        },
        {
          image:'https://www.barausse.com/app/themes/barausse/dist/images/barausse-logo-white_7f43f2aa.svg',
          descrizione:"“Sublimare la vivibilità degli ambienti, plasmare un design che nobilita la funzionalità, porre le conoscenze e l'esperienza della nostra squadra al servizio del bello: perseguiamo l'imprescindibile obiettivo di creare un sistema di prodotti che migliora la qualità dell'abitare e aumenta il valore del progetto.”Tutto questo è per noi Cultura del Progetto.",
          link:'https://www.barausse.com/it/'
        },
        {
          image:'https://www.chiusure-nec.it/nec/wp-content/uploads/2016/02/logo-bianco.png',
          descrizione:"NEC Chiusure srl  produce istallazioni efficienti garantendo il massimo livello di sicurezza operativa: ne sono un esempio eccellente le porte per ospedali e le porte per le scuole, pratiche veloci e certificate. ",
          link:'https://www.chiusure-nec.it/'
        },
        {
          image:'https://www.fgporte.it/images/FGPorte/loghi/logo-FG-50-orizz-400.png',
          descrizione:"L'azienda FG Porte S.R.L.,viene fondata Giorgio Dino,Guerrino,Riccardo e Settimio nel 1968.Tutto ebbe inizio in una piccola falegnameria dove i fratteli Giorgi si sono via via specializzati nella produzione di infissi in legno e dedicando una particolare attenzione alla realizzazione delle porte",
          link:'https://www.fgporte.it/'


        }
      ],
      carouselItems: [
        {
          image: 'https://www.relupisa.it/wp-content/uploads/2019/05/4.jpg',
        },
        {
          image: 'https://www.fracaros.it/DB_files/sottocategorie/Schermata_08-2456513_alle_10.44.26.png',
        },
        {
          image: 'https://www.garofoli.com/wp-content/uploads/2018/02/Garofoli_No-Limits_Olmo-Grigio_filetti-forati-6-mm-e1545059658122.jpg',
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
  /* Aggiungi stili CSS per personalizzare l'aspetto delle porte */
  /* .porta-item {
    margin-bottom: 20px;
    
  }
  
  .porta-image {
    max-width: 100%;
    height: 50%;
  }
  
  .porta-description {
    margin-top: 10px;
    
  } */
  .custom-background {
    background-color: #e0e0e01e; /* Cambia il colore di sfondo a tuo piacimento */
    color: #333; /* Cambia il colore del testo a tuo piacimento */
  }
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
.interval{
  max-height: 500px;
}
</style>
  
  