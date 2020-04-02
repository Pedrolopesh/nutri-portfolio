<template>
  <div class="home">

    <span id="indixLocator"></span>


    <b-col class="container-header brake-small">
      <!-- <cpmLogo></cpmLogo> -->
      <secondSideMenu></secondSideMenu>
    </b-col>
    <!-- {{effect}} -->
  <sectionCV></sectionCV>

    <!-- <div :class="[effect ?'fadein-animation' : 'pre-animation']" class="container text-container-home">
    </div> -->

    <div class="container mt-9">
      <h2 class="title-1">Graduação e Cursos</h2>
      <span class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">A seguir confira algumas especialização que obtive.</p>
    </div>
    <certificate></certificate>

    <div class="container mt-15">
      <h2 class="title-1">Lugares que já trabalhei</h2>
      <span class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, asperiores?</p>
    </div>
    <workedPlaces></workedPlaces>


    <div class="container mt-15">
      <h2 class="title-1">O que estão dizendo sobre as consultas</h2>
      <span class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, asperiores?</p>
    </div>
    <comemt></comemt>

    <div class="mt-15"></div>
    <foot></foot>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import secondSideMenu from '../components/cpmSecondMenu.vue'
import sectionCV from '../components/sectionCV.vue'
import certificate from '../components/cpmCertificate.vue'
import workedPlaces from '../components/workedPlaces.vue'
import comemt from '../components/cpmComemt.vue'
import foot from '../components/footer.vue'


export default {
  name: 'Home',
  components: {
    certificate,
    sectionCV,
    secondSideMenu,
    workedPlaces,
    foot,
    comemt,
    HelloWorld
  }
}
</script>
