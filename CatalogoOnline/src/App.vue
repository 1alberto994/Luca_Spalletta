<!-- Aggiungi questo al tuo file src/App.vue -->
<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-light bg-dark ">
        <div class="container-fluid d-flex align-items-center justify-content-center"><h1 class="text-light text-center">Gianluca e Luca Spalletta rappresentanze</h1></div>
        <div class="container-fluid d-flex align-items-center justify-content-center">
          
          
          <div class="row">

            <div class="  align-items-center justify-content-between text-center">
              <ul class="list-unstyled m-3 d-flex">
                <li class="d-flex justify-content-between p-2">
                  <router-link class="router" to="/">Home</router-link>
                </li>
                <li class="d-flex justify-content-between p-2">
                  <router-link class="router" to="/about">About</router-link>
                </li>
                <li class="d-flex justify-content-between p-2">
                  <router-link class="router" to="/tagliafuoco">Chiusure Tagliafuoco</router-link>
                </li>
                <li class="d-flex justify-content-between p-2"> <!-- Aggiunto dropdown qui -->
                  <router-link class="router" to="/porte">
                    Porte
                  </router-link>
                </li>
                <li class="d-flex justify-content-between p-2">
                    <router-link class="router" to="/infissi" >
                      Infissi
                    </router-link>
                </li>
                <li class="d-flex justify-content-between p-2">
                  <router-link class="router" to="/Zanzariere_Oscuranti">Zanzariere_Oscuranti</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer class="bg-dark ">
      <div class="container-fluid footcontact">
            <div class="row ">
              <div class="col-4 mt-3">
                  <h2>Gianluca e Luca rappresentanze</h2>
              </div>
              <div class="col-4 mt-3">
                <h4 class="">Contatti</h4>
                  <ul class=" list-unstyled" >
                    <li>Phone:{{ contatti[0].fisso }}</li>
                    <li>Mobile:{{ contatti[0].mobile }}</li>
                    <li>Email:{{ contatti[0].email }}</li>
                    <li>Address:{{ contatti[0].indirizzo }}</li>
                  </ul>
              </div>
              <div class="col-4 mt-3">
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
      orari:['Lun. 9:00-18:00','Mar. 9:00-18:00','Mer. 9:00-18:00','Gio. 9:00-18:00','Ven. 9:00-18:00','Sab.   Chiuso','Dom.   Chiuso']
      
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
  min-height: auto;
}
header footer{
  max-height: 100px;
}
.orari{
  list-style-position: inherit;
}
.footcontact{
  color: white;
}
h2{
  font-size: x-large;
}



</style>
