 <!-- src/views/Tagliafuoco.vue -->
 <template>
        <div class="container-fluid">
    <div id="carouselExampleFade" class="carousel slide carousel-fade mt-3" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item, index) in carouselItems" :key="index" :class="{ 'carousel-item': true, 'active': index === currentSlide }">
          <img :src="item.image" class=" interval mt-5 d-block " alt="...">
        </div>
      </div>
    </div>
  </div>
    <div class="container container-sm custom-background">
      <div class="row">
        <div v-for="(tagliafuoco, index) in tagliafuochi" :key="index" class="col-lg-6 col-sm-12">
          <div class="card custom-card">
            <a :href="tagliafuoco.link" target="_blank">
              <img :src="tagliafuoco.image" alt="tagliafuoco" class=" mt-3 card-img-top" />
            </a>
            <div class="card-body">
              
              <p class="card-text">{{ tagliafuoco.descrizione }}</p>
              
              <a :href="tagliafuoco.link" target="_blank" class="btn btn-dark p-2">Vai al sito</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </template>
    <script>
    
  
  
    export default {
      name: 'Tagliafuoco',
      name: 'CarouselExample',
    
      data(){
        return{
          tagliafuochi:[
          {
            image :'https://firio.com.cy/wp-content/uploads/2022/05/ninz-300x220-1.jpg',
            descrizione:"Ninz S.p.A. è leader in Italia nella produzione di porte tagliafuoco con il 70% del mercato. Esperienza consolidata nel settore, conoscenza delle normative e ottimo rapporto qualità-prezzo sono i tratti distintivi dell'azienda, che nel corso degli anni ha ampliato l'offerta produttiva fino a comprendere porte metalliche multiuso e una vasta gamma di accessori. Oltre che in Italia, la Ninz S.p.A. commercializza i propri prodotti anche in numerosi paesi europei come Francia, Grecia, Portogallo, Romania, Spagna, Slovenia... ed extraeuropei, tra cui Turchia, Russia, Panama.",
            link: 'https://www.componentbuilding.it/ninz-intro.html',
          },
          {
            image:'https://www.meverin.com/wp-content/uploads/2020/06/logo-meverin-400.png',
            descrizione:" I prodotti Meverin Fire Fixing® evolvono in modo perfettamente allineato alle normative di riferimento più recenti in materia di prevenzione e tutela dell'incolumità e salute umana e di preservazione del valore in tutte le sue declinazioni in caso di eventi particolarmente devastanti quali sono gli incendi.L'elevata flessibilità della capacità di progettazione aziendale rende Meverin particolarmente vocata anche alla protezione dell'esteso patrimonio storico, artistico e culturale che fa dell'Italia un luogo unico al mondo. Una ricchezza di tale importanza da essere obbligatoriamente, sia per morale che per norma, posta a riparo (il patrimonio culturale italiano, a causa di vicende storiche, politiche e amministrative è stato da sempre fortemente soggetto a rischio incendio).",
            link:'https://www.meverin.com/'
          },
          {
            image:'https://glassfire.it/wp-content/uploads/2022/09/logoNew_sito-1-e1679314150962.png',
            descrizione:"Affrontiamo con successo compiti di varia complessità, forniamo garanzie e padroneggiamo regolarmente le nuove tecnologie. Il nostro portafoglio comprende progetti completati con successo con finiture di alta qualità e assistenza costante.",
            link:'https://glassfire.it/'
          },
          {
            image:'https://www.coneglianoserramenti.it/public/images/news/BLACKFIRE_Logo.png',
            descrizione:"Blackfire® di Conegliano Group si pone l'obiettivo strategico di diventare uno dei principali fornitori di sistemi di protezione passiva al fuoco ed al fumo, in Italia ed in tutto il mercato europeo. La strategia consiste nel perfezionare il proprio modello di business, volto ad offrire servizi alla clientela ed un assortimento di prodotti rispondenti ad ogni esigenza",
            link:'https://blackfireitaly.it/'
          }
        ],
        carouselItems: [
        {
          image: 'https://www.proteggifire.it/files/acatalog1/category/PortaTagliafuoco_02.jpg',
        },
        {
          image: 'https://www.industrieluna.com/wp-content/uploads/2015/11/Banner_PorteTU_850x425b.jpg',
        },
        {
          image: 'https://i1.wp.com/www.imsasrl.it/wp-content/uploads/2020/09/1-1.png?fit=700%2C400&ssl=1',
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
    max-height: 200px;
    /* opacity: 1 !important; */
    opacity: 0.8 !important;
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
    max-width: 100%;
    width: 100%;
  }
  </style>
    
    