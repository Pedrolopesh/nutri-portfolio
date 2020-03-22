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

    <infoSection></infoSection>

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->


    <div class="container">
      <h2 class="title-1">Trabalhos Realizados</h2>
      <span class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, asperiores?</p>
    </div>
    <cards></cards>

    <div class="container mt-15">
      <h2 class="title-1">Trabalhos Realizados</h2>
      <span class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, asperiores?</p>
    </div>

    <div class="mt-6">
      <workSection></workSection>
    </div>

    <div class="mt-8">
    <div class="container">
      <h2 class="title-1">Trabalhos Realizados</h2>
      <span class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, asperiores?</p>
    </div>

    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import sideMenu from '../components/cpmMenu.vue'
import infoSection from '../components/infoSection.vue'
import cards from '../components/jobCards.vue'
import workSection from '../components/workSection.vue'

// juliana-picture.jpeg
export default {
  name: 'Home',
  components: {
    infoSection,
    workSection,
    cards,
    sideMenu,
    HelloWorld
  }
}
</script>
