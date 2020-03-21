<template>
  <div class="home">

    <span id="indixLocator"></span>
    <div class="bg-img-home bg-full-screen bv-example-row container-header">
    <div class="bg-mask">


    <b-col class="container-header brake-small">
      <!-- <cpmLogo></cpmLogo> -->
      <sideMenu></sideMenu>
    </b-col>
      
    <!-- {{effect}} -->
    <div class="text-container-home">
      <h1 class="tile-home">Juliana Lopes</h1>
      <p class="subtile-home">Nutricionista</p>
    </div>

    <!-- <div :class="[effect ?'fadein-animation' : 'pre-animation']" class="container text-container-home">
    </div> -->

    </div>
    </div>

    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import sideMenu from '../components/cpmMenu.vue'

export default {
  name: 'Home',
  components: {
    sideMenu,
    HelloWorld
  }
}
</script>
