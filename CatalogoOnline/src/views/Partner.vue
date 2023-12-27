<!-- src/views/Partner.vue -->
<template>
    <section>
        <div>
    <h1>Chiusure Tagliafuoco</h1>
  </div>
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
    </section>
    <section class="sec_white">
        <div>
    <h1>Porte</h1>
  </div>
      <div class="container-fluid">
    <div id="carouselExampleFade" class="carousel slide carousel-fade mt-3" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item, index) in carouselItem" :key="index" :class="{ 'carousel-item': true, 'active': index === currentSlide }">
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
    </section>
    <section >
        <h1>Infissi</h1>
      <div class="container-fluid">
    <div id="carouselExampleFade" class="carousel slide carousel-fade mt-3" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item, index) in carouselIte" :key="index" :class="{ 'carousel-item': true, 'active': index === currentSlide }">
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
    </section>
    <section class="sec_white">
        <div>
      <div>
        <h1>Zanzariere e Oscuranti</h1>
      </div>
      <div class="container-fluid">
    <div id="carouselExampleFade" class="carousel slide carousel-fade mt-3 " data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item, index) in carouselIt" :key="index" :class="{ 'carousel-item': true, 'active': index === currentSlide }">
          <img :src="item.image" class=" interval d-block w-100" alt="...">
        </div>
      </div>
    </div>
  </div>
      <!-- <router-link to="/about"><button class="btn btn-primary">Click me</button></router-link> -->
      <div class="container cointainer-sm ">
          <div class="row">

            <div v-for="(zanzariera, index) in zanzariere" :key="index" class="col-xl-6 col-sm-12">
              <div class="card custom-card">
                <a :href="zanzariera.link" target="_blank">
                  <img :src="zanzariera.image" alt="Zanzariera e Oscuranti" class="card-img-top" />
                </a>
                <div class="card-body">
                  <p>{{ zanzariera.descrizione }}</p>
                  <a :href="zanzariera.link" target="_blank" class="btn btn-dark p-2">Vai al sito</a>
                </div>
      
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
          image :'https://zanzar.it/wp-content/uploads/2019/06/marchio2.png',
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
  opacity: 0.8 !important;
  padding: 5px;
  border:none !important;
  color: #333;
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
.sec_white{
    background-image: url(https://i.pinimg.com/736x/a8/4b/00/a84b00aed02b505734b4326ac9a9d465.jpg);
    width: 100%;
    height: auto;
}
</style>
  