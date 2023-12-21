<!-- src/views/Porte.vue -->
<template>
  <div>
    <h1>Porte</h1>
    <div v-for="(porta, index) in porte" :key="index" class="porta-item">
      <a :href="porta.link" target="_blank">
        <img :src="porta.image" alt="Porta" class="porta-image" />
      </a>
      <div class="porta-description">
        <h2>{{ porta.descrizione }}</h2>
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
          descrizione:"Porte Imic è un' azienda specializzata nella lavorazione di porte in legno. Tradizione e innovazione sono i pilastri della filiera produttiva, gran parte della quale è completamente interna, garantendo velocità nella lavorazione, versatilità nelle rifiniture e nel design, qualità e ricercatezza attraverso un'attenzione costante delle materie prime e dei processi costruttivi. Le fasi di lavorazione, dal taglio del legno alle finiture, sono svolte in azienda, supervisionate dai nostri superadvisor addetti al controllo qualità, per offrirti le porte che tu desideri al giusto prezzo.",
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
          descrizione:"NEC Chiusure srl  produce istallazioni efficienti garantendo il massimo livello di sicurezza operativa: ne sono un esempio eccellente le porte per ospedali e le porte per le scuole, pratiche veloci e certificate. L'azienda fornisce il suo telaio che meglio si adatta alla situazione esistente.Gli elementi predominanti nella produzione di NEC Chiusure srl sono l'alluminio, che rappresenta la struttura delle varie tipologie di porte tecniche, abbinate all'acciaio, al vetro, al laminato plastico ed al legno. Tutte materie prime selezionate per garantire qualità e sicurezza, rispondenti alle più innovative tecniche disponibili sul mercato.Le porte per ospedali, grazie alla loro praticità gestionale, risultano particolarmente adeguate alle esigenze del settore della salute. Un prodotto che ha le massime garanzie che vuole una installazione sanitaria. Lo stesso standard qualitativo è seguito per la produzione di porte per la scuole.Le porte per la scuola sono progettate in base alle normative di sicurezza, igiene, economicità e durata nel tempo. L'installazione è rapida e non invasiva. La loro semplicità e una vasta gamma di prototipi ne permettono l'inserimento in qualsiasi contesto architettonico.",
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
  .porta-item {
    margin-bottom: 20px;
  }
  
  .porta-image {
    max-width: 100%;
    height: auto;
  }
  
  .porta-description {
    margin-top: 10px;
  }
  </style>
  