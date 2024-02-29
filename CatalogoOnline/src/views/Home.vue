<!-- src/views/Home.vue -->
<template>
  <section class="sec">
     <div class="title container-fluid d-flex align-items-center justify-content-center flex-column">
         <h1 class="family text-center ">Benvenuti</h1>
          <p class="text-center welcome mt-5">Siamo lieti di darvi il benvenuto nel mondo dell'eleganza e della funzionalità con <strong>Gianluca&Luca Spalletta rappresentanze</strong>, il vostro partner ideale per trasformare la vostra casa in uno spazio accogliente e sicuro.</p>
     </div>    
    </section>
    <section class="sec_white">
      <div class="container-fluid">
          <div class="row  ">
              <div class="welcome text-center col-12 mt-4 text-dark">
                Spalletta rappresentanze è un 'agenzia di consulenza tecnico commerciale che opera nel settore degli infissi interni ed esterni per le chiusure residenziale ed industriali dal 1999. Grazie all'esperienza acquisita ,l'agenzia è in grado di assistervi nella scelta di prodotti ideali per le vostre esigenze ,garantendo la massima qualità in ogni prodotto che offriamo.

              </div>
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
