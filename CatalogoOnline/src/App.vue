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
                    <router-link class="router" to="/infissi" data-bs-toggle="dropdown">
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

    <footer>
      Alberto Giardina
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.router {
  text-decoration: none;
  color: white;
}


</style>
