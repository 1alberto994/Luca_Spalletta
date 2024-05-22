<!-- Aggiungi questo al tuo file src/App.vue -->
<template>
  <div id="app">
    <header id="header">
      <nav class="navbar navbar-light ">
        
        <div class="  container-fluid d-flex ">
          
          <div class="d-none d-lg-block"><router-link class="router" to="/"><img src="/rygzctcg.png" class="spalletta text-center " alt="" @click="scrollToTop"></router-link></div>
          <div class="d-none d-lg-block">
            <a href="" id="header">portami su </a>
          </div>
          
          <div class="row d-none d-lg-block d-md-none">

            <div class="  align-items-center justify-content-between text-center">
              <ul class="list-unstyled  d-flex ">
                <li class="d-flex justify-content-between p-2 font">
                  <router-link class="router" to="/" @click="scrollToTop">Home</router-link>
                </li>
                <li class="d-flex justify-content-between p-2 font">
                  <router-link class="router" to="/spalletta_partner" @click="scrollToTop">Partners</router-link>
                </li>
                <li>
  <!-- Bottone per aprire/chiudere il dropdown -->
  <button @click="toggleDropdown" class="apertura" >Chiusure Tagliafuoco<i class="fas fa-chevron-down arrow-icon" :class="{ 'rotate': isOpen }"></i></button>

  <!-- Dropdown -->
  <ul v-if="isOpen" class="change" @click="selectOption">
    <li class="item"><a class="link" href="https://www.ninz.it/it/home">Ninz</a></li>
    <li class="item"><a class="link" href="https://www.meverin.com/">Meverin</a></li>
    <li class="item"><a class="link" href="https://glassfire.it/">Glassfire</a></li>
    <li class="item"><a class="link" href="https://blackfireitaly.it/">Blackfire</a></li>

  </ul>
</li>
  
<li>
  <button class="apertura" @click="togglePorteDropdown">
    Porte<i class="fas fa-chevron-down arrow-icon" :class="{ 'rotate': isPorteOpen }"></i>
  </button>
  <ul v-if="isPorteOpen" class="change" @click="selectPorteOption">
    <li class="item"><a class="link" href="https://www.ferwall.it/">Ferwall</a></li>
    <li class="item"><a class="link" href="https://www.porteimic.com/">Porte Imic</a></li>
    <li class="item"><a class="link" href="https://www.manuellodesign.it/it/">Manuello</a></li>
    <li class="item"><a class="link" href="https://www.barausse.com/it/">Barausse</a></li>
    <li class="item"><a class="link" href="https://www.chiusure-nec.it/">Nec-Chiusure</a></li>
    <li class="item"><a class="link" href="https://www.fgporte.it/">FGporte</a></li>
    <li class="item"><a class="link" href="https://www.arcoindustrie.it/">Arco industrie</a></li>
  </ul>
</li>
<li >
  <button class="apertura" @click="toggleInfissiDropdown">
    Infissi<i class="fas fa-chevron-down arrow-icon" :class="{ 'rotate': isInfissiOpen }"></i>
  </button>
  <ul v-if="isInfissiOpen" class="change" @click="selectInfissiOption">
                    <li class="item"><a class="link" href="https://www.cosmetgroup.it/brand/30/cosmet">Cosmet</a></li>
                    <li class="item"><a class="link" href="https://www.cosmetgroup.it/brand/31/fideal">Fideal</a></li>
                    <li class="item"><a class="link" href="https://www.cosmetgroup.it/brand/32/alwo">Alwo</a></li>
                  </ul>
</li>
<li >
  <button class="apertura" @click="toggleZanzarieraDropdown">
    Zanzariere/Oscuranti<i class="fas fa-chevron-down arrow-icon" :class="{ 'rotate': isZanzarieraOpen }"></i>
  </button>
  <ul v-if="isZanzarieraOpen" class="change" @click="selectZanzarieraOption">
                    <li class="item"><a class="link" href="https://zanzar.it/">Zanzar Sistem</a></li>
                    <li class="item"><a class="link" href="https://croci.com/">Croci</a></li>
                    <li class="item"><a class="link" href="https://suncover.com/">Suncover</a></li>
                    <li class="item"><a class="link" href="https://www.palagina.eu">Palagina</a></li>
                    <li class="item"><a class="link" href="https://suncover.com/frangisole-2/">Shenker Storen</a></li>
                    
                  </ul>
                </li>
               
                <li class="d-flex justify-content-between navList font">
                  <button class=" btn navList" href="#" @click="scrollToFooter">Contatti</button>
                </li>
              </ul>
            </div>
          

          </div>
        </div>
        <div class="container-fluid d-flex">
          <div class="d-lg-none"><router-link class="router" to="/"><img src="/rygzctcg.png" class="spalletta text-center " alt=""></router-link></div>
          <div class=" d-lg-none">
            <a href="" id="header">portami su </a>
          </div>

    <div class="row">
        <!-- Pulsante di attivazione del menu per schermi piccoli -->
        <button class="navbar-toggler d-lg-none btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas"  @click="toggleOffcanvas" style="color: white;">
    <!-- <span class="fas fa-bars text-white"></span> --> <i class="fa-solid fa-bars"></i>
</button>

<div class="offcanvas offcanvas-start " :class="{ 'show': isOffcanvasOpen }" id="offcanvas" aria-labelledby="offcanvasLabel" v-if="isOffcanvasOpen">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title text-white" id="offcanvasLabel">Menu</h5>
        
    </div>
            <div class="offcanvas-body">
                <ul class="list-unstyled">
                    
                    <li class="m-2 p-2">
                  <router-link class="router" to="/" @click.native="closeOffcanvas" >Home</router-link>
                </li>
                <li class="m-2 p-2">
                  <router-link class="router" to="/spalletta_partner" @click.native="closeOffcanvas" >Partners</router-link>
                </li>
                <li>
  <!-- Bottone per aprire/chiudere il dropdown -->
  <button @click="toggleDropdown" class="apertura" >Chiusure Tagliafuoco<i class="fas fa-chevron-down arrow-icon" :class="{ 'rotate': isOpen }"></i></button>

  <!-- Dropdown -->
  <ul v-if="isOpen" class="offcanvasChange " @click="selectOption">
    <li class="item"><a class="link" href="https://www.ninz.it/it/home">Ninz</a></li>
    <li class="item"><a class="link" href="https://www.meverin.com/">Meverin</a></li>
    <li class="item"><a class="link" href="https://glassfire.it/">Glassfire</a></li>
    <li class="item"><a class="link" href="https://blackfireitaly.it/">Blackfire</a></li>

  </ul>
</li>
<li>
  <button class="apertura" @click="togglePorteDropdown">
    Porte<i class="fas fa-chevron-down arrow-icon" :class="{ 'rotate': isPorteOpen }"></i>
  </button>
  <ul v-if="isPorteOpen" class="offcanvasChange" @click="selectPorteOption">
    <li class="item"><a class="link" href="https://www.ferwall.it/">Ferwall</a></li>
    <li class="item"><a class="link" href="https://www.porteimic.com/">Porte Imic</a></li>
    <li class="item"><a class="link" href="https://www.manuellodesign.it/it/">Manuello</a></li>
    <li class="item"><a class="link" href="https://www.barausse.com/it/">Barausse</a></li>
    <li class="item"><a class="link" href="https://www.chiusure-nec.it/">Nec-Chiusure</a></li>
    <li class="item"><a class="link" href="https://www.fgporte.it/">FGporte</a></li>
    <li class="item"><a class="link" href="https://www.arcoindustrie.it/">Arco industrie</a></li>
  </ul>
</li>
<li >
  <button class="apertura" @click="toggleInfissiDropdown">
    Infissi<i class="fas fa-chevron-down arrow-icon" :class="{ 'rotate': isInfissiOpen }"></i>
  </button>
  <ul v-if="isInfissiOpen" class="offcanvasChange" @click="selectInfissiOption">
                    <li class="item"><a class="link" href="https://www.cosmetgroup.it/brand/30/cosmet">Cosmet</a></li>
                    <li class="item"><a class="link" href="https://www.cosmetgroup.it/brand/31/fideal">Fideal</a></li>
                    <li class="item"><a class="link" href="https://www.cosmetgroup.it/brand/32/alwo">Alwo</a></li>
                  </ul>
</li>
<li >
  <button class="apertura" @click="toggleZanzarieraDropdown">
    Zanzariere/Oscuranti<i class="fas fa-chevron-down arrow-icon" :class="{ 'rotate': isZanzarieraOpen }"></i>
  </button>
  <ul v-if="isZanzarieraOpen" class="offcanvasChange" @click="selectZanzarieraOption">
                    <li class="item"><a class="link" href="https://zanzar.it/">Zanzar Sistem</a></li>
                    <li class="item"><a class="link" href="https://croci.com/">Croci</a></li>
                    <li class="item"><a class="link" href="https://suncover.com/">Suncover</a></li>
                    <li class="item"><a class="link" href="https://www.palagina.eu">Palagina</a></li>
                    <li class="item"><a class="link" href="https://suncover.com/frangisole-2/">Shenker Storen</a></li>
                    
                  </ul>
                </li>
               
                <li class="m-2 p-2">
                  <a class="router " href="#footer" @click="scrollToFooter($event)">Contatti</a>
                  
                </li>
                    
                </ul>
            </div>
            <div v-if="loadingOffcanvas" class="caricamento">
      <img src="/rygzctcg.png" alt="">
      <div class="spinning"></div>
    </div>
        </div>
    </div>
</div>
      </nav>
    </header>

    <main  >
      <div v-if="loading" class="caricamento"><img src="/rygzctcg.png" alt=""><br><div class="spinning"></div></div>
      <router-view v-else ></router-view>
      
    </main>

    <footer  id="footer"  >
      <div class="container-fluid footcontact">
            <div class="row text-center d-flex justify-content-around">
             
              <div class=" col-sm-12 col-lg-12 col-xl-4 mt-3">
                <h4>Contatti</h4>
                  <ul class=" list-unstyled" >
                    <li>Phone:<a href="tel:095335467" class="router">{{ contatti[0].fisso }}</a></li>
                    <li>Mobile:<a href="tel: +393408714768" class="router">{{ contatti[0].mobile }}</a></li>
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
              
              <div class="text-center">
                <p><i class="fa-regular fa-copyright"></i> Copyright Gianluca & Luca Spalletta Rappresentanze  P.IVA-04533750875</p>
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
      isOffcanvasOpen: false,
      loadingOffcanvas: false,
      isLoadingToFooter: false,
      isOpen: false, 
      isPorteOpen:false,
      isInfissiOpen:false,
      isZanzarieraOpen:false,
      loading: false
      
    }
    
  },
  created() {
    // Esegui il caricamento prima di ogni navigazione
    this.$router.beforeEach((to, from, next) => {
      this.startLoading(); // Inizia il caricamento
      setTimeout(() => {
        next(); // Continua la navigazione dopo un breve ritardo
        this.finishLoading(); // Completa il caricamento dopo aver navigato alla nuova pagina
      }, 500);
    });
  },
  watch: {
    '$route'() {
      // Chiudi l'offcanvas quando viene rilevato un cambio di route
      this.closeOffcanvas();
    }
  },
  methods: {
    closeDropdowns(event) {
  const dropdowns = document.querySelectorAll('.change'); // Selettore dei dropdown
  const trigger = document.querySelectorAll('.apertura'); // Selettore dei trigger dei dropdown

  // Verifica se il clic è avvenuto al di fuori di tutti i dropdown e dei loro trigger
  if (!this.isInsideElement(event.target, dropdowns) && !this.isInsideElement(event.target, trigger)) {
    // Chiudi i dropdown che sono aperti
    if (this.isOpen) {
      this.isOpen = false;
    }
    if (this.isPorteOpen) {
      this.isPorteOpen = false;
    }
    if (this.isInfissiOpen) {
      this.isInfissiOpen = false;
    }
    if (this.isZanzarieraOpen) {
      this.isZanzarieraOpen = false;
    }
  }
},

// Metodo per verificare se l'elemento target è contenuto in un array di elementi
isInsideElement(target, elements) {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].contains(target)) {
      return true;
    }
  }
  return false;
},
closeOtherDropdowns(currentDropdown) {
      // Chiudi tutti i dropdown tranne quello corrente
      if (currentDropdown !== 'isOpen') {
        this.isOpen = false;
      }
      if (currentDropdown !== 'isPorteOpen') {
        this.isPorteOpen = false;
      }
      if (currentDropdown !== 'isInfissiOpen') {
        this.isInfissiOpen = false;
      }
      if (currentDropdown !== 'isZanzarieraOpen') {
        this.isZanzarieraOpen = false;
      }
    },
    toggleDropdown() {
      this.closeOtherDropdowns('isOpen');
      // Inverti lo stato del dropdown
      this.isOpen = !this.isOpen;
    },
    selectOption(event) {
      // Ottieni il testo dell'opzione selezionata
      const selectedOption = event.target.innerText;
      // Esegui le azioni necessarie in base all'opzione selezionata
      console.log('Opzione selezionata:', selectedOption);
      // Chiudi il dropdown
      this.isOpen = false;
    },
    togglePorteDropdown() {
      this.closeOtherDropdowns('isPorteOpen');
      // Inverti lo stato del dropdown
      this.isPorteOpen = !this.isPorteOpen;
    },
    selectPorteOption(event) {
      // Ottieni il testo dell'opzione selezionata
      const selectedPorteOption = event.target.innerText;
      // Esegui le azioni necessarie in base all'opzione selezionata
      console.log('Opzione selezionata:', selectedPorteOption);
      // Chiudi il dropdown
      this.isPorteOpen = false;
    },
    toggleInfissiDropdown() {
      this.closeOtherDropdowns('isInfissiOpen');
      // Inverti lo stato del dropdown
      this.isInfissiOpen = !this.isInfissiOpen;
    },
    selectInfissiOption(event) {
      // Ottieni il testo dell'opzione selezionata
      const selectedInfissiOption = event.target.innerText;
      // Esegui le azioni necessarie in base all'opzione selezionata
      console.log('Opzione selezionata:', selectedInfissiOption);
      // Chiudi il dropdown
      this.isInfissiOpen = false;
    },
    toggleZanzarieraDropdown() {
      this.closeOtherDropdowns('isZanzarieraOpen');
      // Inverti lo stato del dropdown
      this.isZanzarieraOpen = !this.isZanzarieraOpen;
    },
    selectZanzarieraOption(event) {
      // Ottieni il testo dell'opzione selezionata
      const selectedZanzarieraOption = event.target.innerText;
      // Esegui le azioni necessarie in base all'opzione selezionata
      console.log('Opzione selezionata:', selectedZanzarieraOption);
      // Chiudi il dropdown
      this.isZanzarieraOpen = false;
    },
   
    scrollToTop() {
    window.scrollTo(0, 0); // Scorri la finestra del browser fino all'inizio della pagina
    console.log("funziona")
  },
  startLoading() {
  this.loading = true;
  this.loadingOffcanvas = true; // Aggiungi questa linea per avviare il caricamento nell'offcanvas
},
finishLoading() {
  this.loading = false;
  this.loadingOffcanvas = false; // Aggiungi questa linea per completare il caricamento nell'offcanvas
},
scrollToFooter(event) {
  event.preventDefault();
  this.isLoadingToFooter = true; // Avvia l'animazione di caricamento
        
        // Ritarda lo scorrimento al footer dopo un breve ritardo per simulare il caricamento
        setTimeout(() => {
            const footer = document.getElementById('footer');
            footer.scrollIntoView({ behavior: 'smooth' });
            this.closeOffcanvas(); // Chiudi l'offcanvas dopo lo scorrimento al footer
            this.isLoadingToFooter = false; // Ferma l'animazione di caricamento
        }, 500);
},

  delayedNavigation(to) {
    // Ritarda la navigazione alla nuova pagina di 1 secondo
    setTimeout(() => {
      this.$router.push(to); // Naviga alla nuova pagina
    }, 1000);
  },
  beforeRouteUpdate() {
    // Chiamiamo la funzione scrollToTop prima di passare alla nuova route
    this.scrollToTop();
    next();
  },
    toggleOffcanvas() {
      this.isOffcanvasOpen = !this.isOffcanvasOpen;
    },
    handleLinkClick() {
    // Chiudi l'offcanvas quando viene fatto clic su un link
    this.closeOffcanvas();
    console.log('Router link clicked!');
  },
  closeOffcanvas() {
  // Ritarda la chiusura dell'offcanvas per 100 millisecondi
  setTimeout(() => {
    this.isOffcanvasOpen = false;
  }, 500);
},

    emitCloseOffcanvasEvent() {
      this.$emit('close-offcanvas');
    },
  },
  
  // mounted() {
  //   const header = document.getElementById('header');
  // if (header) {
  //   header.addEventListener('click', () => {
  //     // Effettua lo scroll verso l'alto della pagina
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth'
  //     });
  //   });
  // }
  // },
  // beforeDestroy() {
  //   document.removeEventListener('click', this.closeDropdowns); // Rimuove l'event listener quando il componente viene distrutto
  
  // }
  mounted() {
    // Aggiungi un event listener al documento per rilevare i clic al di fuori del dropdown
    document.addEventListener('click', this.closeDropdowns);
  },

  beforeDestroy() {
    // Rimuovi l'event listener quando il componente viene distrutto per evitare memory leak
    document.removeEventListener('click', this.closeDropdowns);
  },
  
};
</script>

<style>
.change {
  list-style: none;
  padding: 0;
  margin: 0;
  border-color: white;
  background-color:black;
  position: absolute;
  color: white;
}
.offcanvasChange{
  list-style: none;
  padding: 0;
  margin: 0;
  /* background-color: rgba(11, 0, 0, 0.299); */
  background-color: black;
  color: white;
  border: none;
  
}

.item {
  padding: 10px;
  text-align: center;
  cursor: pointer;
  
}
.item:hover{
  background-color: black;
}
.link{
  text-decoration: none;
  color: white;
}

.apertura {
  padding: 8px 18px;
  cursor: pointer;
  background-color: rgba(52,58,64,255);
  color: white;
  border: none;
}
.arrow-icon {
  margin-left: 2px;
}

.rotate {
  transform: translateY(-50%) rotate(180deg); /* Ruota l'icona quando il dropdown è aperto */
}
.spinning {
  border: 4px solid #f3f3f3; /* Colore del bordo */
  border-top: 4px solid #3498db; /* Colore del bordo superiore */
  border-radius: 50%; /* Rende il bordo circolare */
  width: 40px; /* Larghezza dello spinner */
  height: 40px; /* Altezza dello spinner */
  animation: spin 1s linear infinite; /* Animazione di rotazione */
}

/* Animazione di rotazione dello spinner */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.caricamento {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(52,58,64,255);
  display: flex;
  justify-content: center;
  align-items: center;
}
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
.btn.navList.dropdown-toggle {
    color: white; /* Imposta il colore del testo su bianco */
    /* Aggiungi altri stili CSS desiderati per il pulsante qui */
  }
  .btn.navList{
    color: white;
  }
main{
  
  /* background-image: url(https://thumbs.dreamstime.com/b/sfondo-di-trama-monocromatica-grunge-astratta-foto-scorta-fotografia-stock-228171102.jpg); */
  background-image: url(https://static.vecteezy.com/ti/vettori-gratis/p3/2056905-elegante-sfondo-bianco-concetto-vettoriale.jpg);
  
  margin-top: 15px; 
}
 footer{
  min-height: 100px;
  background-color:rgba(52,58,64,255);
  
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
    background-color: rgba(52,58,64,255);
  }
  /* .font{
    font-size: 1.5rem;
  } */

  .dropdown-menu a.dropdown-item {
    color: white !important;
}
.navbar-toggler-icon {
        color: white !important;
    }
hr{
  border-color: white;
  font-size: medium;
}
.spalletta{
  height: 100px;
}
#header{
  text-decoration: none;
  color: rgba(52,58,64,255);
}
.offcanvas.offcanvas-start{
  background-color: rgba(52,58,64,255);
}


@media (max-width: 768px){
  .spalletta{
    height: 50px;
  }
 


}
</style>
