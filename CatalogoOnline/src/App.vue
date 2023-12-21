<!-- Aggiungi questo al tuo file src/App.vue -->
<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid">
          <div class="row">
            <div class="col-6"><h1 class="text-light">Logo</h1></div>

            <div class="col-6 d-flex align-items-center justify-content-between">
              <ul class="list-unstyled m-3">
                <li class="d-flex justify-content-between">
                  <router-link class="router" to="/">Home</router-link>
                </li>
                <li class="d-flex justify-content-between">
                  <router-link class="router" to="/about">About</router-link>
                </li>
                <li class="d-flex justify-content-between dropdown"> <!-- Aggiunto dropdown qui -->
                  <router-link class="router" to="/porte" data-bs-toggle="dropdown">
                    Porte
                  </router-link>
                  <!-- <ul class="dropdown-menu">  Aggiunto dropdown-menu qui 
                    <li><router-link class="dropdown-item" to="/porte/ferwall">Ferwall</router-link></li>
                    <li><router-link class="dropdown-item" to="/porte/porte-imic">Porte Imic</router-link></li>
                    <li><router-link class="dropdown-item" to="/porte/manuello">Manuello</router-link></li>
                    <li><router-link class="dropdown-item" to="/porte/barausse">Barausse</router-link></li>
                    <li><router-link class="dropdown-item" to="/porte/fg-porte">FG Porte</router-link></li>
                    <li><router-link class="dropdown-item" to="/porte/nec">NEC</router-link></li>
                  </ul> -->
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

ul {
  display: flex;
  justify-content: space-between;
}

/* Aggiungi uno stile per la dropdown */
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
