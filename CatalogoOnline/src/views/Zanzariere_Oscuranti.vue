<!-- src/views/Zanzariere.vue -->
<template>
    <div>
      <h1>Zanzariere e Oscuranti</h1>
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
                  <a :href="zanzariera.link" target="_blank" class="btn btn-primary">Vai al sito</a>
                </div>
      
              </div>
          </div>
          </div>
      </div>
  
     </div>
  </template>
  
  <script>
  
  export default {
    name: 'Zanzariere_Oscuranti',
    data(){
      return{
        zanzariere:[
        {
          image :'https://zanzar.it/wp-content/uploads/2019/06/marchio2.png',
          descrizione:"Nata con l'obiettivo di arricchire il mercato del serramento di nuove soluzioni integrate per zanzariere e di migliorare la qualità della vita nelle nostre case.  Circa 3000 clienti tra produttori, distributori e installatori sono i partner che confermano quotidianamente il risultato del nostro successo. L'azienda è supportata da una forte struttura imprenditoriale, capace di affermarsi all'interno del mercato di riferimento proseguendo costantemente l'innovazione fatta a soddisfare i propri clienti.",
          link: 'https://zanzar.it/',
        },
        {
          image:'https://croci.com/wp-content/uploads/2019/07/croci-def.png',
          descrizione:"Le Tapparelle Croci fungono da deterrente ai furti nelle abitazioni ed oppongono un'ottima resistenza ai tentativi d'intrusione.Questo è possibile grazie alle caratteristiche delle materie prime utilizzate, unite agli esclusivi accessori di sicurezza.",
          link:'https://croci.com/'
        },
        {
          image:'https://suncover.com/wp-content/uploads/2020/05/marchio-suncover.png',
          descrizione:"Dal 1969 Suncover produce su misura e vende, tende avvolgibili di ogni dimensione e materiale, per interno ed esterno, frangisole, tende tecniche per l'arredo per ogni ambiente domestico, professionale, teatri, musei, hotels, padiglioni espositivi, e tante altre locations.Produce e vende anche zanzariere e sistemi antinsetto, di diverse tipologie e per ogni ambiente, sia domestico che professionale.",
          link:'https://suncover.com/'
        },
        {
          image:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Logo_Schenker_Storen.svg/1200px-Logo_Schenker_Storen.svg.png',
          descrizione:"l frangisole che proponiamo sono versatili e quindi facilmente adattabili all'architettura ed alla situazione di cantiere in cui devono essere impiegati.Sono regolabili in qualsiasi posizione, sia verticale che orizzontale, garantendo pertanto un'illuminazione ottimale o un oscuramento praticamente totale. Ogni frangisole è disponibile con azionamento manuale o a motore e l'opzione supplementare di un comando elettronico. Con Suncover e Schenker Storen trovererete oltre al prodotto ideale, anche una consulenza esaustiva e un'assistenza rapida e competente.",
          link:'https://suncover.com/frangisole-2/'
        }
      ]
      }
    }
  };
  </script>
  <style>
  /* Aggiungi stili CSS per personalizzare l'aspetto delle zanzariere */
  /* .zanzariera-item {
    margin-bottom: 20px;
  }
  
  .zanzariera-image {
    max-width: 100%;
    height: auto;
  }
  
  .zanzariera-description {
    margin-top: 10px;
  } */
  .card{
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
  