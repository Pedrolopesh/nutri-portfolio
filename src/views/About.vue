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

    <span id="firstLocator"></span>
    <div class="container mt-9">
      <h2 :class="[txtEffect ?'slide-fadein-animation-txt' : 'pre-animation']" class="title-1">Graduação e Cursos</h2>
      <span :class="[effectData ?'fadein-animation-3' : 'pre-animation']" class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">A seguir confira algumas especialização que obtive.</p>
    </div>
    <certificate></certificate>

    <div class="container mt-15">
      <h2 class="title-1">Lugares que já trabalhei</h2>
      <span class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">A seguir, alguns dos lugares que trabalhei e obtive mais experiência no ramo da nutrição.</p>
    </div>
    <workedPlaces></workedPlaces>


    <div class="container mt-15">
      <h2 class="title-1">O que estão dizendo sobre as consultas</h2>
      <span class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">Veja alguns dos comentários que forma feitos na página do facebook por alguns clientes.</p>
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
  },

   data:()=> ({
      txtEffect:true,
      locator:{position:'',height:'',checked:''},
   }),

   methods:{
     
     getPositions(){
       let firstLocator = document.querySelector("#firstLocator");
       console.log("1) first= "+firstLocator.offsetTop)
       this.locator.position = firstLocator.offsetTop;
   
       window.addEventListener("scroll", this.checkScroll);
    },
    checkScroll(){
      // console.log(window.pageYOffset)

      if(window.pageYOffset > (this.locator.position) - (this.locator.height + 400 )){
        this.locator.checked = true
        this.effect()
      }
    },

    effect(){
      this.txtEffect = true
    },

   }
}
</script>
