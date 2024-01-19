<!-- src/views/Home.vue -->
<template>
  <section class="sec">
     <div class="title container-fluid d-flex align-items-center justify-content-center flex-column">
         <h1 class="family text-center ">Benvenuti</h1>
          <p class="text-center welcome mt-5">Siamo lieti di darvi il benvenuto nel mondo dell'eleganza e della funzionalità con <strong>Gianluca&Luca Spalletta rappresentanze</strong>, il vostro partner ideale per trasformare la vostra casa in uno spazio accogliente e sicuro.</p>
     </div>    
    </section>
    <section class="sec_white ">
      <div class="container-fluid">
          <div class="row ">
              <div class="col-6">
                <h2>La Nostra Missione: Elevare il Tuo Ambiente</h2>
                <p class="description">Presso <strong>Gianluca&Luca Spalletta rappresentanze</strong>, crediamo che ogni dettaglio conti nella creazione di un ambiente domestico unico. Con una vasta selezione di porte interne, infissi, zanzariere, oscuranti e porte taglia fuoco, ci impegniamo a fornire soluzioni di alta qualità per soddisfare le vostre esigenze di design e sicurezza.</p>
              </div>
              <div class="col-6">
                    <h2 class="text-center">La Qualità al Primo Posto</h2>
                    <p class="description">Garantiamo la massima qualità in ogni prodotto che offriamo. Le nostre porte interne, realizzate con materiali pregiati, incarnano l'eleganza e la durata. Gli infissi sono progettati per massimizzare l'efficienza energetica e migliorare il comfort della vostra casa. Le zanzariere e gli oscuranti, invece, combinano stile e funzionalità per creare ambienti sempre perfetti.</p>
              </div>
              <div class="col-12">
                <h2 class="text-center">Scoprite il Mondo di "Gianluca&Luca Spalletta Rappresentanze" Oggi</h2>
                <p class="description text-center">Esplorate il nostro sito per scoprire la nostra vasta gamma di prodotti. Siamo certi che troverete ciò che fa al caso vostro.</p>
                <div class="text-center">
                  <ul class="list-unstyled d-flex justify-content-center">
                    <li class=" p-2">
                       <router-link class="btn btn-dark p-3 mb-2" to="/about">Chi siamo</router-link>
                    </li>
                    <li class=" p-2">
                      <router-link class="btn btn-dark p-3 mb-2" to="/partner">I nostri Partners</router-link>  
                    </li>
                  </ul>


                </div>
              </div>
          </div>
      </div>
    </section>
</template>

<script>

export default {
  name: 'Home',
};
</script>
<style>
.welcome{
  font-size: 2.5rem;
  color: white;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.family{
  font-size: 8.5rem;
  color: white;
  font-family: 'Times New Roman', Times, serif;
}
.description{
  font-size: 1.5rem;
  color: black;
  font-family:'Times New Roman', Times, serif
}
.sec{
  background-image: url(https://thumbs.dreamstime.com/b/sfondo-di-trama-monocromatica-grunge-astratta-foto-scorta-fotografia-stock-228171102.jpg);
}
</style>
