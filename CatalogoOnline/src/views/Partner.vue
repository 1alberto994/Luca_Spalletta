<!-- src/views/Partner.vue -->
<template>
    <section class="sec_white">
      <div class="container-fluid">
      
        <h1 class="size text-center partners">I nostri partners</h1>
             <ul class="list-unstyled  d-flex align-items-center justify-content-center">
              <li class="p-2">
                <a class="partners" href="#tagliafuoco"> Chiusure Tagliafuoco</a>
              </li>
              <li class="p-2">
                <a class="partners" href="#porte">Porte</a>
              </li>
              <li class="p-2">
                <a class="partners" href="#infissi">Infissi</a>
              </li>
              <li class="p-2">
                <a class="partners" href="#Oscuranti">Zanzariere e oscuranti</a>
              </li>
             </ul>                     
        
      </div>
    </section>
    <section>
        
      <div class="container-fluid title " id="tagliafuoco">
    <div class="row ">
        <div  class="  col-lg-6 col-sm-12 d-flex align-items-center justify-content-center  ">
            <h1 class="size ">Chiusure tagliafuoco</h1>
        </div>
      
        <div id="carouselExample" class="carousel slide  col-lg-6 col-sm-12  " data-bs-ride="carousel">
            <div class="carousel-inner">
                <div v-for="(item, index) in carouselItems" :key="index" :class="{ 'carousel-item': true, 'active': index === currentSlide }">
                    
                    
                        <img :src="item.image" class="d-block w-100" alt="..." style="max-width: 100%; height: 400px;">
                      
                    
                </div>
            </div>
        </div>
    </div>
</div>



    <div class="container container-sm custom-background">
      <div class="row">
        <div v-for="(tagliafuoco, index) in tagliafuochi" :key="index" class="col-lg-6 col-sm-12">
          <div class="card custom-card">
            <a :href="tagliafuoco.link" target="_blank">
              <img :src="tagliafuoco.image" alt="tagliafuoco" class=" mt-3 card-img-top img-fluid " />
            </a>
            <div class="card-body">
              
              <p class="card-text"><strong>{{ tagliafuoco.descrizione }}</strong></p>
              
              <a :href="tagliafuoco.link" target="_blank" class="btn btn-dark p-2">Vai al sito</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
     
    <section class="sec_white" id="porte">
      <div class="container-fluid title ">
        <div class="row ">
          <div id="carouselExampleFade" class="carousel slide carousel-fade col-lg-6 col-sm-12" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(item, index) in carouselItem" :key="index" :class="{ 'carousel-item': true, 'active': index === currentSlide }">
                <img :src="item.image" class="interval   w-100" alt="..." style="max-width: 100%; height: 500px;">
              </div>
            </div>
          </div>
            <div  class=" col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <h1 class="size ">Porte</h1>
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
            
            <p class="card-text"><strong>{{ porta.descrizione }}</strong></p>
            
            <a :href="porta.link" target="_blank" class="btn btn-dark p-2">Vai al sito</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
    <section > 
      <div class="container-fluid title">
        <div class="row ">
            <div id="infissi" class="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
                  <h1 class="size ">Infissi</h1>
            </div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade col-lg-6 col-sm-12" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div v-for="(item, index) in carouselIte" :key="index" :class="{ 'carousel-item': true, 'active': index === currentSlide }">
                  <img :src="item.image" class=" interval d-block w-100" alt="..." style="max-width: 100%; height: 500px;">
                </div>
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
                  <p class="card-text "><strong>{{ infisso.descrizione }}</strong></p>
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
                  <p class="card-text "><strong>{{ azienda.descrizione }}</strong></p>
                  <a :href="azienda.link" target="_blank" class="btn btn-dark p-2">Vai al sito</a>

              </div>
              </div>
              </div>
        
          </div>
          </div>
    </section>
    <section class="sec_white" id="Oscuranti">
      <div class="container-fluid title">
        <div class="row">
          <div id="carouselExampleFade" class="carousel slide carousel-fade col-lg-6 col-sm-12 " data-bs-ride="carousel">
            <div class="carousel-inner">
              <div v-for="(item, index) in carouselIt" :key="index" :class="{ 'carousel-item': true, 'active': index === currentSlide }">
                <img :src="item.image" class=" interval d-block w-100" alt="..." style="max-width: 100%; height: 500px;">
              </div>
            </div>
          </div>
          <div  class="  col-lg-6 col-sm-12 d-flex align-items-center justify-content-center">
              <h1 class="size ">Zanzariere <br> e Oscuranti</h1>
            </div>
          </div>
        </div>
        
  
      
      <div class="container  ">
          <div class="row">

            <div v-for="(zanzariera, index) in zanzariere" :key="index" class="col-xl-6 col-sm-12">
              <div class="card custom-card">
                <a :href="zanzariera.link" target="_blank">
                  <img :src="zanzariera.image" alt="Zanzariera e Oscuranti" class="card-img-top img-fluid" />
                </a>
                <div class="card-body">
                  <p><strong>{{ zanzariera.descrizione }}</strong></p>
                  <a :href="zanzariera.link" target="_blank" class="btn btn-dark p-2">Vai al sito</a>
                </div>
      
              </div>
          </div>
          </div>
      </div>
  
    </section>
  </template>
  
  <script>
  
  export default {
    name: 'Partner',
    name: 'CarouselExample',
    
    data(){
      return{
        tagliafuochi:[
        {
          image :'https://firio.com.cy/wp-content/uploads/2022/05/ninz-300x220-1.jpg',
          descrizione:"Ninz S.p.A. è leader in Italia nella produzione di porte tagliafuoco con il 70% del mercato. Esperienza consolidata nel settore, conoscenza delle normative e ottimo rapporto qualità-prezzo sono i tratti distintivi dell'azienda, che nel corso degli anni ha ampliato l'offerta produttiva fino a comprendere porte metalliche multiuso e una vasta gamma di accessori. Oltre che in Italia, la Ninz S.p.A. commercializza i propri prodotti anche in numerosi paesi europei come Francia, Grecia, Portogallo, Romania, Spagna, Slovenia... ed extraeuropei, tra cui Turchia, Russia, Panama.",
          link: 'https://www.ninz.it/it/home',
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
    porte:[
      {
        image:'https://www.mas-srl.net/wp-content/uploads/2018/11/imic-porte.png',
        descrizione:"Porte Imic è un' azienda specializzata nella lavorazione di porte in legno. Tradizione e innovazione sono i pilastri della filiera produttiva, gran parte della quale è completamente interna, garantendo velocità nella lavorazione, versatilità nelle rifiniture e nel design, qualità e ricercatezza attraverso un'attenzione costante delle materie prime e dei processi costruttivi.",
        link:'https://www.porteimic.com/'
      },
      {
        image:'https://porte.manuellodesign.it/wp-content/uploads/2022/04/logo-manuello-design.png',
        descrizione:"La nostra azienda, Manuello Design, si posiziona tra i leader di arredamento. Produciamo porte interne da oltre trent'anni. Nel tempo abbiamo aggiornato e sviluppato i nostri processi produttivi, integrando macchinari all'avanguardia e tecniche di verniciatura ecosostenibili.La qualità che ci contraddistingue è la combinazione tra la cura del dettaglio e la creatività.",
        link:'https://www.manuellodesign.it/it/'
      },
      {
        image:'data:image/png;base64,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',
        descrizione:"“Sublimare la vivibilità degli ambienti, plasmare un design che nobilita la funzionalità, porre le conoscenze e l'esperienza della nostra squadra al servizio del bello: perseguiamo l'imprescindibile obiettivo di creare un sistema di prodotti che migliora la qualità dell'abitare e aumenta il valore del progetto.”Tutto questo è per noi Cultura del Progetto.",
        link:'https://www.barausse.com/it/'
      },
      {
        image:'https://www.fgporte.it/images/FGPorte/loghi/logo-FG-50-orizz-400.png',
        descrizione:"L'azienda FG Porte S.R.L.,viene fondata Giorgio Dino,Guerrino,Riccardo e Settimio nel 1968.Tutto ebbe inizio in una piccola falegnameria dove i fratteli Giorgi si sono via via specializzati nella produzione di infissi in legno e dedicando una particolare attenzione alla realizzazione delle porte",
        link:'https://www.fgporte.it/'


      },
        {
          image :'https://www.ferwall.it/images/2022/10/21/logo.png',
          descrizione:'ciao',
          link: 'https://www.ferwall.it/',
        },
        {
          image:'/NEC CHIUSURE.png',
          descrizione:"NEC Chiusure srl  produce istallazioni efficienti garantendo il massimo livello di sicurezza operativa: ne sono un esempio eccellente le porte per ospedali e le porte per le scuole, pratiche veloci e certificate. ",
          link:'https://www.chiusure-nec.it/'
        }
      ],
      carouselItem: [
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
      carouselIte: [
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
      zanzariere:[
        {
          image :'/zanzar-sistem.png',
          descrizione:"Nata con l'obiettivo di arricchire il mercato del serramento di nuove soluzioni integrate per zanzariere e di migliorare la qualità della vita nelle nostre case.  Circa 3000 clienti tra produttori, distributori e installatori sono i partner che confermano quotidianamente il risultato del nostro successo. L'azienda è supportata da una forte struttura imprenditoriale, capace di affermarsi all'interno del mercato di riferimento proseguendo costantemente l'innovazione fatta a soddisfare i propri clienti.",
          link: 'https://zanzar.it/',
        },
        {
          image:'https://croci.com/wp-content/uploads/2019/07/croci-def.png',
          descrizione:"Con i suoi prodotti esclusivi e di successo, apprezzati in tutto il mondo, Croci offre un patrimonio di elevato valore aggiunto alla tua casa e alla tua attività.Leader nel settore delle tapparelle di sicurezza, l'azienda mette a disposizione dei propri partner numerose risorse per ottimizzare il lavoro e distinguersi sul mercato.Le Tapparelle Croci fungono da deterrente ai furti nelle abitazioni ed oppongono un'ottima resistenza ai tentativi d'intrusione.Questo è possibile grazie alle caratteristiche delle materie prime utilizzate, unite agli esclusivi accessori di sicurezza.",
          link:'https://croci.com/'
        },
        {
          image:'https://suncover.com/wp-content/uploads/2020/05/marchio-suncover.png',
          descrizione:"Suncover da oltre 50 anni risponde atutte le esigenze di protezione solare,schermatura e diffusione luminosa,sempre al fianco di professionisti dell'arredo,del restauro e delle costruzioni.Dal 1969 Suncover produce su misura e vende, tende avvolgibili di ogni dimensione e materiale, per interno ed esterno, frangisole, tende tecniche per l'arredo per ogni ambiente domestico, professionale, teatri, musei, hotels, padiglioni espositivi, e tante altre locations.Produce e vende anche zanzariere e sistemi antinsetto, di diverse tipologie e per ogni ambiente, sia domestico che professionale.",
          link:'https://suncover.com/'
        },
        {
          image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Logo_Schenker_Storen.svg/1200px-Logo_Schenker_Storen.svg.png',
          descrizione:"l frangisole che proponiamo sono versatili e quindi facilmente adattabili all'architettura ed alla situazione di cantiere in cui devono essere impiegati.Sono regolabili in qualsiasi posizione, sia verticale che orizzontale, garantendo pertanto un'illuminazione ottimale o un oscuramento praticamente totale. Ogni frangisole è disponibile con azionamento manuale o a motore e l'opzione supplementare di un comando elettronico. Con Suncover e Schenker Storen trovererete oltre al prodotto ideale, anche una consulenza esaustiva e un'assistenza rapida e competente.",
          link:'https://suncover.com/frangisole-2/'
        }
      ],
      carouselIt: [
        {
          image: 'https://www.serramenti82.it/wp-content/uploads/2018/08/zanzariere_4.jpg',
        },
        {
          image: 'https://www.ca-mia.it/wp-content/uploads/2020/09/sistemi-oscuranti-ca-mia-luxury-home.jpg',
        },
        {
          image: 'https://www.oknoplast.it/blog/wp-content/uploads/2019/09/vantaggi-oscuranti-per-finestre.jpg',
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
 /* opacity: 0.8 !important; */
  padding: 5px;
  border:none !important;
  /* color: #333; */
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
/* .interval{
  height: 250px;
  width: 100%;
} */
.carousel{
  width: 100%;
  height: auto;
}
.sec_white{
    background-image: url(https://i.pinimg.com/736x/a8/4b/00/a84b00aed02b505734b4326ac9a9d465.jpg);
    width: 100%;
    height: auto;
}
.title{
    min-height: 400px;
    width: 300px;
    background-color: black;
    /* opacity: 0.8 !important; */
}
.size{
  font-size: 4.5rem;
  color: white;
  
}
.partners{
  color: black;
}
.container{
  max-width: 100%;
}


</style>
  