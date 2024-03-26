<!-- src/views/Home.vue -->
<template>
  <section class="sec  sec-margin">
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
      <div v-for="(item, index) in carouselItems" :key="index" :class="['carousel-item', { 'active': index === currentIndex }]">
        
        <div class="carousel-overlay fontHome  d-flex align-items-center justify-content-center">
          <h3>{{ item.title }}</h3>
        </div>
          <div class="over ">
        <img :src="item.imageUrl" class="d-block w-100 img-fluid   " :style="{ height: item.height }" alt="..."  >

          </div>
      </div>
    </div>
  </div>
    </section>
    <section class="sec_white">
      <div class="container-fluid">
          <div class="row  ">
            <div class=" col-sm-12 col-lg-6 welcome text-dark d-flex align-items-center justify-content-center mt-3">
              <h1>CHI SIAMO</h1>
            </div>
              <div class=" col-sm-12  col-lg-6 mt-4 text-dark descrizione">
               <strong> Spalletta rappresentanze offre consulenza tecnico commerciale  nel settore  chiusure tagliafuoco, infissi interni ed esterni, chiusure residenziale ed industriali dal 1999. <br> Grazie all'esperienza acquisita, l'agenzia è in grado di assistervi nella scelta di prodotti ideali per le vostre esigenze, garantendo la massima qualità in ogni prodotto che offriamo.</strong> 

              </div>
              <div class="text-center mt-5">
                  <ul class="list-unstyled d-flex justify-content-center">
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
  data() {
    return {
      carouselItems: [
        { imageUrl: '/speedy-4.jpg', title: 'Mantieni il tuo ambiente sicuro',height: '700px' },
        { imageUrl: '/5D4P0880.jpg', title: 'Il meglio per il tuo ambiente domestico', height: '700px' },
        { imageUrl: '/portfolio_arco_1.jpg', title: 'Selezioniamo i migliori prodotti',height: '700px' },
        { imageUrl: '/Imic23-11.jpg', title: 'Arreda con stile e praticità',height: '700px' },
        { imageUrl: '/portone-scorrevole-acciaio-inox-meverin-ce2019.png', title: ' A supporto della tua crescita',height: '700px' },
        { imageUrl: '/portone-girevole-magnum-meverin-ospedale.png', title: "Affidabilità professionalità innovazione",height: '700px' },



      ],
      currentIndex:0,
      intervalId: null,
      intervalDuration: 6000
    };
  },
  mounted() {
    // Avvia l'intervallo per scorrere automaticamente il carosello
    this.intervalId = setInterval(this.nextSlide, this.intervalDuration);
  },
  methods: {
    nextSlide() {
      // Avanza al prossimo elemento del carosello
      this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    }
  },
  beforeDestroy() {
    // Assicurati di cancellare l'intervallo quando il componente viene distrutto
    clearInterval(this.intervalId);
  }
};
</script>
<style scoped>
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
  position: relative;
}
.carousel-inner {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.carousel-item {
  position: relative;
  display: none;
  flex-direction: column;
  align-items: center;
}
.carousel-item.active {
  display: flex;
}
.carousel-image {
  position: relative;
}
.carousel-caption {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  height: 100%;
  width: 25%;
  border-radius: 5px;
}
.carousel-overlay {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 20px;
  border-radius: 5px;
  color: white;
  height: 100%;
  width: 25%;
}
.over{
  width: 100%;
  overflow: hidden;
  
}
.descrizione{
  font-size:1.5rem;
}

h3{
  font-size: 3.5rem;
}
@media (max-width: 576px) {
  .carousel .carousel-inner .carousel-item img {
    height: 100% !important; /* Altezza per dispositivi mobile */
    width: auto;
    
  }
  
  h3{
    font-size: 1.0rem;
  }
  .sec-margin{
    margin-top: 50px;
  }
}
@media (min-width: 577px) and (max-width: 768px) {
  .carousel .carousel-inner .carousel-item img {
    height: 100% !important; /* Altezza per dispositivi tablet */
    width: auto;
  }
  h3{
    font-size: 2.0rem;
  }

}

</style>
