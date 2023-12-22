 <!-- src/views/Porte.vue -->
<template>
  <div class="container container-sm custom-background">
    <div class="row">
      <div v-for="(porta, index) in porte" :key="index" class="col-lg-4 col-sm-12">
        <div class="card custom-card">
          <a :href="porta.link" target="_blank">
            <img :src="porta.image" alt="Porta" class="card-img-top" />
          </a>
          <div class="card-body">
            
            <p class="card-text">{{ porta.descrizione }}</p>
            
            <a :href="porta.link" target="_blank" class="btn btn-primary">Vai al sito</a>
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
          image:'https://unionearchitetti.com/wp-content/uploads/2019/03/Porte_imic_made_in_italy_logotype.jpg',
          descrizione:"Porte Imic è un' azienda specializzata nella lavorazione di porte in legno. Tradizione e innovazione sono i pilastri della filiera produttiva, gran parte della quale è completamente interna, garantendo velocità nella lavorazione, versatilità nelle rifiniture e nel design, qualità e ricercatezza attraverso un'attenzione costante delle materie prime e dei processi costruttivi.",
          link:'https://www.porteimic.com/'
        },
        {
          image:'https://porte.manuellodesign.it/wp-content/uploads/2022/04/logo-manuello-design.png',
          descrizione:"La nostra azienda, Manuello Design, si posiziona tra i leader di arredamento. Produciamo porte interne da oltre trent'anni. Nel tempo abbiamo aggiornato e sviluppato i nostri processi produttivi, integrando macchinari all'avanguardia e tecniche di verniciatura ecosostenibili.La qualità che ci contraddistingue è la combinazione tra la cura del dettaglio e la creatività.",
          link:'https://www.manuellodesign.it/it/'
        },
        {
          image:'https://cdn.archilovers.com/people/thumb2_BARAUSSE-fed3452d-log1.gif',
          descrizione:"“Sublimare la vivibilità degli ambienti, plasmare un design che nobilita la funzionalità, porre le conoscenze e l'esperienza della nostra squadra al servizio del bello: perseguiamo l'imprescindibile obiettivo di creare un sistema di prodotti che migliora la qualità dell'abitare e aumenta il valore del progetto.”Tutto questo è per noi Cultura del Progetto.",
          link:'https://www.barausse.com/it/'
        },
        {
          image:'https://pbs.twimg.com/profile_images/3320113913/5717b5960ce15f5e7ac7501ae25bd067_400x400.png',
          descrizione:"NEC Chiusure srl  produce istallazioni efficienti garantendo il massimo livello di sicurezza operativa: ne sono un esempio eccellente le porte per ospedali e le porte per le scuole, pratiche veloci e certificate. ",
          link:'https://www.chiusure-nec.it/'
        },
        {
          image:'https://www.fgporte.it/images/FGPorte/loghi/logo-FG-50-orizz-400.png',
          descrizione:"L'azienda FG Porte S.R.L.,viene fondata Giorgio Dino,Guerrino,Riccardo e Settimio nel 1968.Tutto ebbe inizio in una piccola falegnameria dove i fratteli Giorgi si sono via via specializzati nella produzione di infissi in legno e dedicando una particolare attenzione alla realizzazione delle porte",
          link:'https://www.fgporte.it/'


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
  
  