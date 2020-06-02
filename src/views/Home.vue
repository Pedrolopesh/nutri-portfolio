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
      <h1 class="tile-home mp0">Juliana Lopes</h1>
      <p class="subtile-home mp0">Nutricionista</p>
    </div>

    <!-- <div :class="[effect ?'fadein-animation' : 'pre-animation']" class="container text-container-home">
    </div> -->


    </div>
    </div>

    <span id="firstLocator"></span>
    <infoSection :effectData="effectData"></infoSection>

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <span id="secondLocator"></span>
    <div :class="[secondEffect ?'slide-fadein-animation-txt' : 'pre-animation']" class="container mt-8">
      <h2 class="title-1">Tipos de Trabalhos</h2>
      <span class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">Veja a seguir alguns dos tipos de trabalho que realizo, para maiores especificações entre em contato</p>
    </div>
    
    <span id="thierdLocator"></span>
    <cards :slideEffect="slideEffect"></cards>

    <div :class="[txtEffect ?'slide-fadein-animation-txt' : 'pre-animation']" class="container mt-15">
      <span id="txtLocator"></span>
      <h2 class="title-1">Lugares de Atendimento</h2>
      <span class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">Veja a seguir alguns dos lugares que atendo na reagião de São Paulo</p>
    </div>

    <div class="mt-6">
      <workSection></workSection>
    </div>
    
    <div class="mt-6">
      <SocialMidia/>
    </div>
    
    <div class="mt-8">
      <foot></foot>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import sideMenu from '../components/cpmMenu.vue'
import infoSection from '../components/infoSection.vue'
import cards from '../components/cpmCards.vue'
import workSection from '../components/workSection.vue'
import SocialMidia from '../components/SocialMidia.vue'
import foot from '../components/footer.vue'

// juliana-picture.jpeg
export default {
  name: 'Home',
  components: {
    infoSection,
    foot,
    workSection,
    cards,
    SocialMidia,
    sideMenu,
    HelloWorld
  },

  data: ()=>({
    effectData:false,
    secondEffect:false,
    slideEffect:false,
    txtEffect:false,

    locator:{position:'',height:'',checked:''},
    locator2:{position:'',height:'',checked:''},
    locator3:{position:'',height:'',checked:''},
    locator4:{position:'',height:'',checked:''},
  }),

  created(){
    setTimeout( () => {this.getPositions()}, 1000);
  },

  methods:{
    getPositions(){
       let firstLocator = document.querySelector("#firstLocator");
       console.log("1) first= "+firstLocator.offsetTop)
       this.locator.position = firstLocator.offsetTop;

       let secondLocator = document.querySelector("#secondLocator");
       this.locator2.position = secondLocator.offsetTop

       let thierdLocator = document.querySelector("#thierdLocator");
       this.locator3.position = thierdLocator.offsetTop

       let secondTxtLocator = document.querySelector("#txtLocator");
       this.locator4.position = secondTxtLocator.offsetTop
       

       window.addEventListener("scroll", this.checkScroll);
    },

    checkScroll(){
      // console.log(window.pageYOffset)

      if(window.pageYOffset > (this.locator.position) - (this.locator.height + 400 )){
        this.locator.checked = true
        this.effect()
      }

      if(window.pageYOffset > (this.locator2.position) - (this.locator2.height + 550 )){
        this.locator2.checked = true
        this.secondEffectFunction()
      }
      
      if(window.pageYOffset > (this.locator3.position) - (this.locator3.height + 800 )){
        this.locator3.checked = true
        this.slideEffectFunction()
      }
      
      if(window.pageYOffset > (this.locator4.position) - (this.locator4.height + 400 )){
        this.locator4.checked = true
        this.slideEffectTxtFunction()
      }
    },

    effect(){
      this.effectData = true
    },

    secondEffectFunction(){
      this.secondEffect = true
    },
    slideEffectFunction(){
      this.slideEffect = true
    },
    slideEffectTxtFunction(){
      this.txtEffect = true
    },
  }
}
</script>
