
<template>
    <section class="sec-bot " id="pippo">
      <div class="container-fluid  special_section">
      
        <h1 class=" text-center  fontTitle ">I nostri partners</h1>
      </div>
      <div class="text-center">
        
    <strong><button class="linked" href="" @click="scrollToChiusure"> Chiusure Tagliafuoco</button></strong>
  
  
  <strong><button class="linked" href="" @click="scrollToPorte">Porte</button></strong>


  <strong><button class="linked" href="" @click="scrollToInfissi">Infissi</button></strong>


  <strong><button class="linked" href="" @click="scrollToOscuranti">Zanzariere e oscuranti</button></strong>
      </div>
    </section>
    
    <section class="sec-grey" id="tagliafuoco">
        
      <div class="">
    <div class="row  ">
        <div  class="  col-lg-6 d-flex align-items-center justify-content-center title  ">
            <h1 class="size ">Chiusure tagliafuoco</h1>
        </div>
        
      
        
        <div class="carousel prodotti col-lg-6">
    <img :src="currentSlide" class="imagine" alt="Slide">
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
              
              <p class="card-text text-dark"><strong>{{ tagliafuoco.descrizione }}</strong></p>
              
              <a :href="tagliafuoco.link" target="_blank" class="btn btn-dark p-2">Vai al sito</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
     
    <section class="sec_white" id="porte">
      <div class="">
    <div class="row  ">
      <div class="carousel prodotti col-lg-6">
    <img :src="currentSlide1" class="imagine" alt="Slide">
  </div>
    
        <div class="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center title">
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
            
            <p class="card-text text-dark"><strong>{{ porta.descrizione }}</strong></p>
            
            <a :href="porta.link" target="_blank" class="btn btn-dark p-2">Vai al sito</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
    <section  class="sec-grey " id="infissi"> 
      <div class=" ">
        <div class="row  ">
            <div class="col-lg-6 col-sm-12 d-flex align-items-center justify-content-center title">
                  <h1 class="size ">Infissi</h1>
            </div>
            <div class="carousel prodotti col-lg-6">
    <img :src="currentSlide2" class="imagine" alt="Slide">
  </div>
        </div>
  </div>
      <div class="container-fluid container-sm ">
          <div class="row ">

            <div v-for="(infisso, index) in infissi" :key="index" class="col-12 ">
              <div class="card custom-card">
                <a :href="infisso.link" target="_blank">
                  <img :src="infisso.image" alt="infissi" class="card-img-top" />
                </a>
                <div class="card-body ">
                  <p class="card-text text-dark"><strong>{{ infisso.descrizione }}</strong></p>
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
                  <p class="text-dark"><strong>{{ azienda.descrizione }}</strong></p>
                  <a :href="azienda.link" target="_blank" class="btn btn-dark p-2">Vai al sito</a>

              </div>
              </div>
              </div>
        
          </div>
          </div>
    </section>
    <section class="sec_white" id="Oscuranti">
      <div class=" ">
        <div class="row ">
          <div class="carousel prodotti col-lg-6">
    <img :src="currentSlide3" class="imagine" alt="Slide">
  </div>
          <div  class="  col-lg-6 col-sm-12 d-flex align-items-center justify-content-center title">
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
      slides: [
      
         'https://www.meverin.com/wp-content/uploads/2020/07/portone-girevole-magnum-meverin-ospedale.jpg',
      
      
         'https://glassfire.it/wp-content/uploads/2023/04/SEDE-INPS-ROMA-LINEA-ACCIAIO.jpg',
      
      
         '/BLOCKSHUTTER-EI-120-10-nera (1).jpeg',
      
      
         '/meverin-porte-pedonali-resistenti-al-fuoco-ce2019-2.png',
      
    ],
    porte:[
      {
        image:'https://www.mas-srl.net/wp-content/uploads/2018/11/imic-porte.png',
        descrizione:"Porte Imic è un' azienda specializzata nella lavorazione di porte in legno. Tradizione e innovazione sono i pilastri della filiera produttiva, gran parte della quale è completamente interna, garantendo velocità nella lavorazione, versatilità nelle rifiniture e nel design, qualità e ricercatezza attraverso un'attenzione costante delle materie prime e dei processi costruttivi.",
        link:'https://www.porteimic.com/'
      },
      {
        image:'/Logo FG 558 300.png',
        descrizione:"L'azienda FG Porte S.R.L.,viene fondata Giorgio Dino,Guerrino,Riccardo e Settimio nel 1968.Tutto ebbe inizio in una piccola falegnameria dove i fratteli Giorgi si sono via via specializzati nella produzione di infissi in legno e dedicando una particolare attenzione alla realizzazione delle porte",
        link:'https://www.fgporte.it/'


      },
      {
        image:'/BARAUSSE.svg',
        descrizione:"“Sublimare la vivibilità degli ambienti, plasmare un design che nobilita la funzionalità, porre le conoscenze e l'esperienza della nostra squadra al servizio del bello: perseguiamo l'imprescindibile obiettivo di creare un sistema di prodotti che migliora la qualità dell'abitare e aumenta il valore del progetto.”Tutto questo è per noi Cultura del Progetto.",
        link:'https://www.barausse.com/it/'
      },
      {
        image:'https://porte.manuellodesign.it/wp-content/uploads/2022/04/logo-manuello-design.png',
        descrizione:"La nostra azienda, Manuello Design, si posiziona tra i leader di arredamento. Produciamo porte interne da oltre trent'anni. Nel tempo abbiamo aggiornato e sviluppato i nostri processi produttivi, integrando macchinari all'avanguardia e tecniche di verniciatura ecosostenibili.La qualità che ci contraddistingue è la combinazione tra la cura del dettaglio e la creatività.",
        link:'https://www.manuellodesign.it/it/'
      },
        {
          image :'https://www.ferwall.it/images/2022/10/21/logo.png',
          descrizione:"L'azienda guidata da Domenico Arena nel 1995 ha voluto soddisfare  la crescente richiesta di porte blindate e serrande avvolgibili. Pur mantenendo ancora alcune delle lavorazioni a livello artigianale si è così riusciti, in questi anni, ad industrializzare e commercializzare a marchio Ferwall® un prodotto di qualità e ad entrare, a giusto titolo, tra i produttori leader in Italia nella realizzazione di porte blindate per esterno.",
          link: 'https://www.ferwall.it/',
        },
        {
          image:'/logo-arco-industrie-300x208.png',
          descrizione:"L'azienda, nata con il nome di Porte e Portoni srl nel 2000 per produrre rampe di carico e scarico e portoni sezionali, assume la attuale denominazione dopo aver acquisito, nel 2005, il ramo di azienda di una società storica, leader nel mercato delle chiusure industriali e civili.",
          link:'https://www.arcoindustrie.it/'
        },
        {
          image:'/logo-nec-chiusure.png',
          descrizione:"NEC Chiusure srl  produce istallazioni efficienti garantendo il massimo livello di sicurezza operativa: ne sono un esempio eccellente le porte per ospedali e le porte per le scuole, pratiche veloci e certificate. ",
          link:'https://www.chiusure-nec.it/'
        }
      ],
      slides1: [
        
           '/Porta 6_M.png',
        
        
           '/Porta 2_M.png',
        
        
           '/Ambientazione 6.png',
        
        
           '/AMB_16_FINALE.png',
        
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
      slides2: [
        
          '/sitohomelucemetalslim1000x600-318-1000x600.jpg',
        
        
           '/sitohomenatura1000x600-402-1000x600.jpg',
        
        
           '/sitohomeprestigio1000x600-236-1000x600.jpg',
        
        
           '/sitohomevistainterno11000x600-220-1000x600.jpg',
        
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
          image:'https://www.palagina.eu/wp-content/uploads/2023/12/logo-palagina-web.png',
          descrizione:"La nostra azienda, fondata nel 1981 grazie all'intraprendenza dei fondatori, Carlo e Marcello Francalanci, ha avuto inizio come una falegnameria a carattere strettamente famigliare a Ponte a Cappiano. Nel 1985, l'attività coinvolge l'intera famiglia, e si avvia la commercializzazione delle prime zanzariere, utilizzando prodotti in barra e semi-lavorati.Durante gli anni '90, l'azienda decide di dedicarsi definitivamente alla produzione di articoli propri. Attraverso una costante ricerca e sviluppo interna, si sono apportate migliorie significative ai prodotti, culminate nella registrazione di alcuni brevetti e sistemi PALAGINA.",
          link:'https://www.palagina.eu'
        },
        {
          image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Logo_Schenker_Storen.svg/1200px-Logo_Schenker_Storen.svg.png',
          descrizione:"l frangisole che proponiamo sono versatili e quindi facilmente adattabili all'architettura ed alla situazione di cantiere in cui devono essere impiegati.Sono regolabili in qualsiasi posizione, sia verticale che orizzontale, garantendo pertanto un'illuminazione ottimale o un oscuramento praticamente totale. Ogni frangisole è disponibile con azionamento manuale o a motore e l'opzione supplementare di un comando elettronico. Con Suncover e Schenker Storen trovererete oltre al prodotto ideale, anche una consulenza esaustiva e un'assistenza rapida e competente.",
          link:'https://suncover.com/frangisole-2/'
        }
      ],
      carouselIt: [
        
        '/MOTORIZADA-Oasis_2900_Retractable_Insect_Screen_Shade_41.jpg',
           '/IMG_2715-2-min.jpg',
         '/axiolux.jpg',
         'https://croci.com/wp-content/uploads/2020/01/girasole-def-1568x1082.jpg',
        
      ],
    currentIndex: 0,
    currentIndex1:0,
    currentIndex2:0,
    currentIndex3:0,
    intervalId: null,
    intervalId1: null,
    intervalId2:null,
    intervalId3:null,


      
      }
    },
    
    computed: {
    currentSlide() {
      return this.slides[this.currentIndex];
    },
    currentSlide1() {
      return this.slides1[this.currentIndex1];
    },
    currentSlide2() {
      return this.slides2[this.currentIndex2];
    },
    currentSlide3() {
      return this.carouselIt[this.currentIndex3];
    },
  },
  created() {
    this.startCarousel();
    this.startCarousel1();
    this.startCarousel2();
    this.startCarousel3();

  },
  destroyed() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalId1);
    clearInterval(this.intervalId2);
    clearInterval(this.intervalId3);



  },
methods: {
  startCarousel() {
      this.intervalId = setInterval(this.nextSlide, 3000);
    },
    startCarousel1() {
      this.intervalId1 = setInterval(this.nextSlide1, 3000);
    },
    startCarousel2() {
      this.intervalId2 = setInterval(this.nextSlide2, 3000);
    },
    startCarousel3() {
      this.intervalId3 = setInterval(this.nextSlide3, 3000);
    },
  nextSlide() {
    // Incrementa l'indice della slide corrente
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  },
  nextSlide1() {
    // Incrementa l'indice della slide corrente
    this.currentIndex1 = (this.currentIndex1 + 1) % this.slides1.length;
  },
  nextSlide2() {
    // Incrementa l'indice della slide corrente
    this.currentIndex2 = (this.currentIndex2 + 1) % this.slides2.length;
  },
  nextSlide3() {
    // Incrementa l'indice della slide corrente
    this.currentIndex3 = (this.currentIndex3 + 1) % this.carouselIt.length;
  },
  scrollToChiusure() {
    document.getElementById('tagliafuoco').scrollIntoView({ behavior: 'smooth' });
  },
  scrollToPorte() {
    document.getElementById('porte').scrollIntoView({ behavior: 'smooth' });
  },
  scrollToInfissi() {
    document.getElementById('infissi').scrollIntoView({ behavior: 'smooth' });
  },
  scrollToOscuranti() {
    document.getElementById('Oscuranti').scrollIntoView({ behavior: 'smooth' });
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
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e0e0e0;
  max-height: 200px;
  /* opacity: 1 !important; */
 /* opacity: 0.8 !important; */
  padding: 5px;
  border:none !important;
  object-fit: contain;
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

.sec_white{
    background-image: url(https://static.vecteezy.com/ti/vettori-gratis/p3/2056905-elegante-sfondo-bianco-concetto-vettoriale.jpg);
    width: 100%;
    margin: 0;
    
}
.title{
    min-height: 300px;
    width: 100%;
    background-color:#333;
    
}
.list-unstyled {
  margin: 0;
}
.size{
  font-size: 3.5rem;
  color: white;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 0;
  
}
.linked{
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
  border: none;
  /* text-decoration: none; */
  padding: 10px;
  font-size: 1.5rem;
  background-color: transparent;

}
.linked:hover{
  color: rgba(52,58,64,255);
}
.fontTitle{
  font-size: 3.5rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin-top: 100px;

}
.partners:hover{
  text-decoration: none;
  color:#333;
}
.container{
  max-width: 100%;
}
.bottone{
  font-size: 1.5rem;
  margin: 0;
}
.bottone a{
  margin: 0;
}
.carousel-inner{
  overflow: hidden;
}
.sec-grey{
  background-image: url(https://thumbs.dreamstime.com/b/sfondo-di-trama-monocromatica-grunge-astratta-foto-scorta-fotografia-stock-228171102.jpg);

}
.sec-bot{
  margin-bottom: 30px;
}

.carousel {
  width: 100%;
  margin: 0 auto;
}

.imagine {
  width: 100%;
  height: 500px;
}
@media(min-width: 769px){
  .imagine {
    width:100%; /* Imposta la larghezza dell'immagine al 100% */
    /* object-fit: contain; Imposta l'altezza dell'immagine al 100% dell'altezza dell'elemento padre */
    height: 500px;
   
    
  }
}
@media (max-width: 768px) {
 
  .size {
    font-size: 2rem; /* Riduci la dimensione del testo del titolo su dispositivi mobili */
    margin: 0;
  }
  .fontTitle{
    font-size: 2rem;
    margin-top: 50px;
  }

  .linked {
    /* margin-top: 50px;  */
    font-size: 0.5rem;
    text-decoration: none;
    
  }
  .bottone{
    font-size: 0.5rem;
    margin: 0;
  }
  .sec_white {
    margin-top: 0; /* Annulla i margini esterni della sezione */
  }

  .special_section {
    padding: 0; /* Annulla il padding interno della sezione */
  }

  /* Aggiungi queste regole CSS per rimuovere i margini dall'elenco degli elementi */
  .list-unstyled {
    margin: 0;
  }

  /* Aggiungi queste regole CSS per rimuovere i margini dalle ancore all'interno dei bottoni */
  .bottone a {
    margin: 0;
  }

  /* Aggiungi queste regole CSS per rimuovere i margini dai titoli */
  
  .prodotti {
    width: 100%; /* Imposta la larghezza dell'elemento del carosello al 100% */
    display: flex;
    align-items: center;
    height: 300px;
  }

  .imagine {
    width:100%; /* Imposta la larghezza dell'immagine al 100% */
  
    height: 200px;
    
    
  }

  .title {
    text-align: center; /* Centra il testo */
    min-height: 200px; /* Imposta un'altezza minima per il div title */
    width: 100%; /* Imposta la larghezza al 100% */
    background-color: #333; /* Imposta il colore di sfondo */
    margin: 0; /* Rimuovi i margini */
    padding: 0; /* Rimuovi il padding */
  }
  .prova{
    display: flex;
    justify-content: space-around;
  }
 

}


</style>
  