<!-- Aggiungi questo al tuo file src/App.vue -->
<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-light bg-dark">
        
        <div class="  container-fluid d-flex ">
          
          <div class="d-none d-lg-block"><img src="/rygzctcg.png" class="spalletta text-center " alt=""></div>
          
          <div class="row d-none d-lg-block d-md-none">

            <div class="  align-items-center justify-content-between text-center">
              <ul class="list-unstyled  d-flex ">
                <li class="d-flex justify-content-between p-2 font">
                  <router-link class="router" to="/">Home</router-link>
                </li>
                <li class="d-flex justify-content-between p-2 font">
                  <router-link class="router" to="/partner">Partners</router-link>
                </li>
                <li class="dropdown d-flex justify-content-between p-2 font">
                  <a class="router dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Chiusure Tagliafuoco
                  </a>
                  
                  <ul class="dropdown-menu bg-dark">
                    <li><a class="dropdown-item bg-dark" href="https://www.ninz.it/it/home">Ninz</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.meverin.com/">Meverin</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://glassfire.it/">Glassfire</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://blackfireitaly.it/">Blackfire</a></li>
                    
                  </ul>
                </li>
                <li class="dropdown d-flex justify-content-between p-2 font">
                  <a class="router dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Porte
                  </a>
                  
                  <ul class="dropdown-menu bg-dark">
                    <li><a class="dropdown-item bg-dark" href="https://www.porteimic.com/">Porte Imic</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.manuellodesign.it/it/">Manuello</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.barausse.com/it/">Barausse</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.fgporte.it/">FG Porte</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.ferwall.it/">Ferwall</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.chiusure-nec.it/">Nec-Chiusure</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.arcoindustrie.it/">Arco industrie</a></li>



                    
                  </ul>
                </li>
                <li class="dropdown d-flex justify-content-between p-2 font">
                  <a class="router dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Infissi
                  </a>
                  
                  <ul class="dropdown-menu bg-dark">
                    <li><a class="dropdown-item bg-dark" href="https://www.cosmetgroup.it/brand/30/cosmet">Cosmet</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.cosmetgroup.it/brand/31/fideal">Fideal</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.cosmetgroup.it/brand/32/alwo">Alwo</a></li>
                  </ul>
                </li>
                <li class="dropdown d-flex justify-content-between p-2 font">
                  <a class="router dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Zanzariere/Oscuranti
                  </a>
                  
                  <ul class="dropdown-menu bg-dark">
                    <li><a class="dropdown-item bg-dark" href="https://zanzar.it/">Zanzar Sistem</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://croci.com/">Croci</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://suncover.com/">Suncover</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://suncover.com/frangisole-2/">Shenker Storen</a></li>
                    
                  </ul>
                </li>
                <li class="d-flex justify-content-between p-2 font">
                  <a class="router" href="#footer">Contatti</a>
                </li>
              </ul>
            </div>
          

          </div>
        </div>
        <div class="container-fluid d-flex">
          <div class="d-lg-none"><img src="/rygzctcg.png" class="spalletta text-center mx-auto" alt=""></div>

    <div class="row">
        <!-- Pulsante di attivazione del menu per schermi piccoli -->
        <button class="navbar-toggler d-lg-none btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">
            <span class="navbar-toggler-icon text-light icon"></span>
        </button>

        <div class="offcanvas offcanvas-start bg-dark" :class="{ 'show': isOffcanvasOpen }" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title text-white" id="offcanvasLabel">Menu</h5>
                <button type="button" class="btn-close text-reset text-white"  @click="toggleOffcanvas" data-bs-dismiss="offcanvas" aria-label="Chiudi"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="list-unstyled">
                    
                    <li class="m-2 p-2">
                  <router-link class="router" to="/" @click.native="handleLinkClick" >Home</router-link>
                </li>
                <li class="m-2 p-2">
                  <router-link class="router" to="/partner" @click.native="handleLinkClick" >Partners</router-link>
                </li>
                <li class="dropdown m-2 p-2">
                  <a class="router dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Chiusure Tagliafuoco
                  </a>
                  
                  <ul class="dropdown-menu bg-dark">
                    <li><a class="dropdown-item router" href="https://www.ninz.it/it/home">Ninz</a></li>
                    <li><a class="dropdown-item " href="https://www.meverin.com/">Meverin</a></li>
                    <li><a class="dropdown-item " href="https://glassfire.it/">Glassfire</a></li>
                    <li><a class="dropdown-item " href="https://blackfireitaly.it/">Blackfire</a></li>
                    
                  </ul>
                </li>
                <li class="dropdown m-2 p-2">
                  <a class="router dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Porte
                  </a>
                  
                  <ul class="dropdown-menu bg-dark">
                    <li><a class="dropdown-item bg-dark" href="https://www.ferwall.it/">Ferwall</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.porteimic.com/">Porte Imic</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.manuellodesign.it/it/">Manuello</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.barausse.com/it/">Barausse</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.chiusure-nec.it/">Nec-Chiusure</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.fgporte.it/">FGporte</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.arcoindustrie.it/">Arco industrie</a></li>



                    
                  </ul>
                </li>
                <li class="dropdown m-2 p-2">
                  <a class="router dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Infissi
                  </a>
                  
                  <ul class="dropdown-menu bg-dark">
                    <li><a class="dropdown-item bg-dark" href="https://www.cosmetgroup.it/brand/30/cosmet">Cosmet</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.cosmetgroup.it/brand/31/fideal">Fideal</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.cosmetgroup.it/brand/32/alwo">Alwo</a></li>
                  </ul>
                </li>
                <li class="dropdown m-2 p-2">
                  <a class="router dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Zanzariere/Oscuranti
                  </a>
                  
                  <ul class="dropdown-menu bg-dark">
                    <li><a class="dropdown-item bg-dark" href="https://zanzar.it/">Zanzar System</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://croci.com/">Croci</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://suncover.com/">Suncover</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://suncover.com/frangisole-2/">Shenker Storen(frangisole)</a></li>
                    
                  </ul>
                </li>
                <li class="m-2 p-2">
                  <a class="router " href="#footer">Contatti</a>
                </li>
                    
                </ul>
            </div>
        </div>
    </div>
</div>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="bg-dark " id="footer">
      <div class="container-fluid footcontact">
            <div class="row text-center d-flex justify-content-around">
             
              <div class=" col-sm-12 col-lg-12 col-xl-4 mt-3">
                <h4>Contatti</h4>
                  <ul class=" list-unstyled" >
                    <li>Phone:<a href="tel:{{ contatti[0].fisso }}" class="router">{{ contatti[0].fisso }}</a></li>
                    <li>Mobile:<a href="tel:{{ contatti[0].mobile }}" class="router">{{ contatti[0].mobile }}</a></li>
                    <li>Email:<a href="mailto:info@spallettarappresentanze.it" class="router">{{ contatti[0].email }}</a></li>
                    <li>Address: <a href="https://www.google.com/maps/search/?api=1&query=Viale della Costituzione 19/M Catania,CT" target="_blank" class="router">{{ contatti[0].indirizzo }}</a></li>
                  </ul>
              </div>
              <div class=" col-sm-12 col-lg-12 col-xl-4 mt-3">
                <h4>
                  Orari di apertura
                </h4>
                <ul class="list-unstyled orari ">
                    <li v-for="(orario, index) in orari" :key="index">{{ orario }}</li>
                </ul> 
              </div>
              <hr>
              <div class="text-center">
                <p><i class="fa-regular fa-copyright"></i> Copyright Gianluca&Luca Spalletta Rappresentanze  P.IVA-04533750875</p>
              </div>

            </div>
      </div>
    </footer>
  </div>
</template>

<script>



export default {
  name: 'App',
  data(){
    return{
      contatti:[
        {
          fisso:'095335467',
          mobile:'+393408714768',
          email:'info@spallettarappresentanze.it',
          indirizzo:'Viale della Costituzione,19/M - 95125 Catania'
        }
      ],
      orari:['Lun. 9:00-18:00','Mar. 9:00-18:00','Mer. 9:00-18:00','Gio. 9:00-18:00','Ven. 9:00-18:00','Sab.   Chiuso','Dom.   Chiuso'],
      isDropdownVisible: false,
      isOffcanvasOpen: false
      
    }
    
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    toggleOffcanvas() {
      this.isOffcanvasOpen = !this.isOffcanvasOpen;
    },
    closeOffcanvas() {
      this.isOffcanvasOpen = false;
    },
    handleLinkClick() {
      // Chiudi l'offcanvas quando viene fatto clic su un link del menu
      this.closeOffcanvas();
    }
  
  }
};
</script>

<style>
/* Stile per il contenitore principale dell'applicazione */
#app {
  width: 100%;
  min-height: 100vh; /* Altezza minima del 100% del viewport */
  display: flex;
  flex-direction: column;
}

/* Imposta il corpo e l'html per coprire completamente lo schermo */
html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Nasconde lo scorrimento orizzontale */
}

.router {
  text-decoration: none;
  color: white;
}
.router:hover{
  color: white;
  text-decoration: none;
}
main{
  
  /* background-image: url(https://thumbs.dreamstime.com/b/sfondo-di-trama-monocromatica-grunge-astratta-foto-scorta-fotografia-stock-228171102.jpg); */
  background-image: url(https://i.pinimg.com/736x/a8/4b/00/a84b00aed02b505734b4326ac9a9d465.jpg);
  
  margin-top: 15px; 
}
 footer{
  min-height: 100px;
  
}

/* .orari{
  list-style-position: inherit;
} */
.footcontact {
  color: white;
}
.dropdown-item{
  color: white;
}

header {
    position: fixed;
    width: 100%;
    z-index: 2000;
    top: 0;
    min-height: 50px;
  }
  /* .font{
    font-size: 1.5rem;
  } */

  .dropdown-menu a.dropdown-item {
    color: white !important;
}
.icon{color: white;}
.navbar-toggler{
  color: white;
}
hr{
  border-color: white;
  font-size: medium;
}
.spalletta{
  height: 100px;
}
.offcanvas {
  visibility: hidden; /* Nasconde l'offcanvas inizialmente */
  transition: visibility 0s, opacity 0.5s ease-in-out;
  opacity: 0;
}

.offcanvas.show {
  visibility: visible; /* Mostra l'offcanvas quando è aperto */
  opacity: 1;
}
@media (max-width: 768px){
  .spalletta{
    height: 50px;
  }
  
}
</style>
