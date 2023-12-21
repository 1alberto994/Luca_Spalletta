 <!-- src/views/Tagliafuoco.vue -->
 <template>
    <div class="container-fluid">
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.proteggifire.it/files/acatalog1/category/PortaTagliafuoco_02.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://www.industrieluna.com/wp-content/uploads/2015/11/Banner_PorteTU_850x425b.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="https://i1.wp.com/www.imsasrl.it/wp-content/uploads/2020/09/1-1.png?fit=700%2C400&ssl=1" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div class="container container-sm custom-background">
      <div class="row">
        <div v-for="(tagliafuoco, index) in tagliafuochi" :key="index" class="col-lg-6 col-sm-12">
          <div class="card custom-card">
            <a :href="tagliafuoco.link" target="_blank">
              <img :src="tagliafuoco.image" alt="tagliafuoco" class="card-img-top" />
            </a>
            <div class="card-body">
              
              <p class="card-text">{{ tagliafuoco.descrizione }}</p>
              
              <a :href="tagliafuoco.link" target="_blank" class="btn btn-primary">Vai al sito</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </template>
    <script>
    
  
  
    export default {
      name: 'Tagliafuoco',
    
      data(){
        return{
          tagliafuochi:[
          {
            image :'https://gilardiedilizia.bigmat.it/export/sites/default/gilardiedilizia/NINZ.png',
            descrizione:"Ninz S.p.A. è leader in Italia nella produzione di porte tagliafuoco con il 70% del mercato. Esperienza consolidata nel settore, conoscenza delle normative e ottimo rapporto qualità-prezzo sono i tratti distintivi dell'azienda, che nel corso degli anni ha ampliato l'offerta produttiva fino a comprendere porte metalliche multiuso e una vasta gamma di accessori. Oltre che in Italia, la Ninz S.p.A. commercializza i propri prodotti anche in numerosi paesi europei come Francia, Grecia, Portogallo, Romania, Spagna, Slovenia... ed extraeuropei, tra cui Turchia, Russia, Panama.",
            link: 'https://www.componentbuilding.it/ninz-intro.html',
          },
          {
            image:'https://www.meverin.com/wp-content/uploads/2020/07/logo-meverin-video-2.jpg',
            descrizione:"I Portoni tagliafuoco Meverin sono realizzati esclusivamente su misura (zero % standard) con tempi di consegna equiparabili ad una produzione di serie.",
            link:'https://www.meverin.com/'
          },
          {
            image:'https://glassfire.it/wp-content/uploads/2022/09/logoNew_sito-1-e1679314150962.png',
            descrizione:"Affrontiamo con successo compiti di varia complessità, forniamo garanzie e padroneggiamo regolarmente le nuove tecnologie. Il nostro portafoglio comprende progetti completati con successo con finiture di alta qualità e assistenza costante.",
            link:'https://glassfire.it/'
          },
          {
            image:'https://www.coneglianoserramenti.it/public/images/news/BLACKFIRE_Logo.png',
            descrizione:"Blackfire® di Conegliano Group si pone l’obiettivo strategico di diventare uno dei principali fornitori di sistemi di protezione passiva al fuoco ed al fumo, in Italia ed in tutto il mercato europeo. La strategia consiste nel perfezionare il proprio modello di business, volto ad offrire servizi alla clientela ed un assortimento di prodotti rispondenti ad ogni esigenza",
            link:'https://blackfireitaly.it/'
          }
        ]
        
        }
      }
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
    
    