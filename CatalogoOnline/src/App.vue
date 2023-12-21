<!-- src/App.vue -->
<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid">
          <div class="row ">
              <div  class="col-6 "> <h1 class="text-light">Logo</h1></div>
          
           
            <div class=" col-6  d-flex  align-items-center justify-coontent-between">
                <ul class="list-unstyled  m-3"  >
                  
                      <li class="d-flex justify-content-between">
                        <router-link class="router" to="/" >Home</router-link>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link class="router" to="/about">About</router-link>
                      </li>
                      <li class="d-flex justify-content-between">
                        <router-link class="router" to="/porte">Porte</router-link>
                      </li>
                  
                </ul>
            </div>
          </div>
              
        
        </div>
        
      </nav>
    </header>

    <main>
      <router-view>
        
      </router-view>
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
.router{
  text-decoration: none;
  color: white;
}
ul{
  display: flex;
  justify-content: space-between;
}
</style>
