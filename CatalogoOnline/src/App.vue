<!-- Aggiungi questo al tuo file src/App.vue -->
<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-light bg-dark ">
  <img src="/rygzctcg.png" class="spalletta text-center mx-auto" alt="">
     
        <div class="container-fluid d-flex align-items-center justify-content-center">
          
          
          <div class="row">

            <div class="  align-items-center justify-content-between text-center">
              <ul class="list-unstyled  d-flex">
                <li class="d-flex justify-content-between p-2 font">
                  <router-link class="router" to="/">Home</router-link>
                </li>
  
                <li class="d-flex justify-content-between p-2 font">
                  <router-link class="router" to="/about">About</router-link>
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
                <!-- <li class="d-flex justify-content-between p-2 font">
                  <router-link class="router" to="/tagliafuoco">Chiusure Tagliafuoco</router-link>
                </li> -->
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


                    
                  </ul>
                </li>
                <!-- <li class="d-flex justify-content-between p-2 font"> 
                  <router-link class="router" to="/porte">
                    Porte
                  </router-link>
                </li> -->
                <!-- <li class="d-flex justify-content-between p-2 font">
                    <router-link class="router" to="/infissi" >
                      Infissi
                    </router-link>
                </li>
                <li class="d-flex justify-content-between p-2 font">
                  <router-link class="router" to="/Zanzariere_Oscuranti">Zanzariere/Oscuranti</router-link>
                </li> -->
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
        <div class="container-fluid d-flex align-items-center justify-content-center">
    <div class="row">
        <!-- Pulsante di attivazione del menu per schermi piccoli -->
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasLabel">Menu</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Chiudi"></button>
            </div>
            <div class="offcanvas-body">
                <ul>
                    <!-- ... i tuoi elementi di menu esistenti vanno qui ... -->
                    <li>
                  <router-link class="router" to="/">Home</router-link>
                </li>
  
                <li >
                  <router-link class="router" to="/about">About</router-link>
                </li>
                <li>
                  <router-link class="router" to="/partner">Partners</router-link>
                </li>
                <li>
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
                <!-- <li class="d-flex justify-content-between p-2 font">
                  <router-link class="router" to="/tagliafuoco">Chiusure Tagliafuoco</router-link>
                </li> -->
                <li>
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


                    
                  </ul>
                </li>
                <!-- <li class="d-flex justify-content-between p-2 font"> 
                  <router-link class="router" to="/porte">
                    Porte
                  </router-link>
                </li> -->
                <!-- <li class="d-flex justify-content-between p-2 font">
                    <router-link class="router" to="/infissi" >
                      Infissi
                    </router-link>
                </li>
                <li class="d-flex justify-content-between p-2 font">
                  <router-link class="router" to="/Zanzariere_Oscuranti">Zanzariere/Oscuranti</router-link>
                </li> -->
                <li>
                  <a class="router dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Infissi
                  </a>
                  
                  <ul class="dropdown-menu bg-dark">
                    <li><a class="dropdown-item bg-dark" href="https://www.cosmetgroup.it/brand/30/cosmet">Cosmet</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.cosmetgroup.it/brand/31/fideal">Fideal</a></li>
                    <li><a class="dropdown-item bg-dark" href="https://www.cosmetgroup.it/brand/32/alwo">Alwo</a></li>
                  </ul>
                </li>
                <li>
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
                <li>
                  <a class="router" href="#footer">Contatti</a>
                </li>
                    
                </ul>
            </div>
        </div>

        <div class="align-items-center justify-content-between text-center">
            <!-- Il tuo codice di menu esistente va qui -->
        </div>
    </div>
</div>

        
        <!-- <div>
            
           <div class="text-center">
            <a class="text-center font" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                <span class="navbar-toggler-icon"></span> 
            </a>
           </div>


<div class="offcanvas offcanvas-top bg-dark" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasTopLabel">Menu</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
  <div class="offcanvas-body">
            <div>
                <ul>
                  <li>
                    <router-link class="router" to="/">Home</router-link>
                  </li>
    
                  <li>
                    <router-link class="router" to="/about">About</router-link>
                  </li>
                  <li>
                    <router-link class="router" to="/partner">Partners</router-link>
                  </li>
                  <li>
                    <router-link class="router" to="/tagliafuoco">Chiusure Tagliafuoco</router-link>
                  </li>
                  <li> 
                    <router-link class="router" to="/porte">
                      Porte
                    </router-link>
                  </li>
                  <li>
                      <router-link class="router" to="/infissi" >
                        Infissi
                      </router-link>
                  </li>
                  <li>
                    <router-link class="router" to="/Zanzariere_Oscuranti">Zanzariere/Oscuranti</router-link>
                  </li>
                  <li>
                    <a class="router" href="#footer">Contatti</a>
                  </li>
                </ul>
          </div>
  </div>
  </div> 
        </div>-->
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="bg-dark " id="footer">
      <div class="container-fluid footcontact">
            <div class="row ">
              <div class="col-sm-12 col-lg-12 col-xl-4 mt-3">
                <div class="d-flex align-items-center justify-content-center"><img src="/rygzctcg.png" class="spalletta text-center" alt=""></div>
                <div>
                          <i class="fab fa-whatsapp"></i>
                          <i class="fab fa-facebook"></i>
                          <i class="fab fa-instagram"></i>
                          <i class="fab fa-linkedin"></i>
                </div>
              </div>
              <div class=" col-sm-6 col-lg-6 col-xl-4 mt-3">
                <h4 class="">Contatti</h4>
                  <ul class=" list-unstyled" >
                    <li>Phone:<a href="tel:{{ contatti[0].fisso }}" class="router">{{ contatti[0].fisso }}</a></li>
                    <li>Mobile:<a href="tel:{{ contatti[0].mobile }}" class="router">{{ contatti[0].mobile }}</a></li>
                    <li>Email:<a href="mailto:info@spallettarappresentanze.it" class="router">{{ contatti[0].email }}</a></li>
                    <li>Address: <a href="https://www.google.com/maps/search/?api=1&query=Viale della Costituzione 19/M Catania,CT" target="_blank" class="router">{{ contatti[0].indirizzo }}</a></li>
                  </ul>
              </div>
              <div class=" col-sm-6 col-6-12 col-xl-4 mt-3">
                <h4>
                  Orari di apertura
                </h4>
                <ul class=" orari">
                    <li v-for="(orario, index) in orari" :key="index">{{ orario }}</li>
                </ul> 
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
      isDropdownVisible: false
      
    }
    
  },
  methods: {
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    }
  }
};
</script>

<style>
.router {
  text-decoration: none;
  color: white;
}
main{
  background-image: url(data:image/jpeg;base64,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);
  
  margin-top: 220px; 
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
    max-height: 100px;
  }
  /* .font{
    font-size: 1.5rem;
  } */
  .navbar-toggler-icon{
    color: white !important;
  }
  .dropdown-menu a.dropdown-item {
    color: white !important;
}
i{color: white;}

</style>
