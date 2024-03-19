<!-- src/views/Home.vue -->
<template>
  <section class="sec">
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <div class="carousel-inner">
      <div v-for="(item, index) in carouselItems" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
        
        <div class="carousel-overlay size">
          <h3>{{ item.title }}</h3>
        </div>
          <div class="over ">
        <img :src="item.imageUrl" class="d-block w-100 imgHome " alt="...">

          </div>
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
        // { imageUrl: 'https://www.meverin.com/wp-content/uploads/2020/07/portone-girevole-magnum-meverin-ospedale.jpg', title: 'Titolo 1' },
        { imageUrl: '/speedy-4.jpg', title: 'Mantieni il tuo ambiente sicuro' },
        { imageUrl: '/5D4P0880.jpg', title: 'Il meglio per il tuo ambiente domestico' },
        { imageUrl: '/portfolio_arco_1.jpg', title: 'Selezioniamo i migliori prodotti' },
        { imageUrl: '/Imic23-11.jpg', title: 'Arreda con stile e praticità' },
        { imageUrl: '/portone-scorrevole-acciaio-inox-meverin-ce2019.png', title: ' A supporto della tua crescita' },
        { imageUrl: '/portone-girevole-magnum-meverin-ospedale.png', title: "Affidabilità professionalità innovazione" },



      ]
    };
  }
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
  left: 15%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5); /* Opaco */
  padding: 20px;
  border-radius: 5px;
  color: white;
  height: 100%;
  width: 25%;
}
.over{
  width: 100%;
  overflow: hidden;
  /* height: 400px; */
}
.descrizione{
  font-size:1.5rem;
}
.imgHome{
  height: 100%;
  overflow: visible;
}

</style>
