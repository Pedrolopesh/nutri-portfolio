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
    <div class="text-container-home ac">
      <h1 class="tile-home mp0">Juliana Lopes</h1>
      <p class="subtile-home mp0">Nutricionista</p>
    </div>

    <!-- <div :class="[effect ?'fadein-animation' : 'pre-animation']" class="container text-container-home">
    </div> -->


    </div>
    </div>

    <span class="divider"></span>
    <span id="firstLocator" class="bg-green"></span>
    <span v-html="svgSet.greenTop"></span>
    <infoSection :effectData="effectData"></infoSection>
    <span v-html="svgSet.greenBottom"></span>

    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <span id="workSection"></span>

    <span id="secondLocator"></span>
    <div :class="[secondEffect ?'slide-fadein-animation-txt' : 'pre-animation']" class="container mt-8 ac">
      <h2 class="title-1">Tipos de Trabalhos</h2>
      <span class="separator-1 separator-1-green ac"></span>
      <p class="content-2 alg-txt-c">Veja a seguir alguns dos tipos de trabalho que realizo, para maiores especificações entre em contato</p>
    </div>
    
    <span id="thierdLocator" class="mt-8 display-block"></span>
    <!-- <cpmCards :slideEffect="slideEffect"></cpmCards> -->
    <Cards :slideEffect="slideEffect"/>

    <div :class="[txtEffect ?'slide-fadein-animation-txt' : 'pre-animation']" class="container ac mt-15">
      <span id="txtLocator"></span>
      <h2 class="title-1">Lugares de Atendimento</h2>
      <span class="separator-1 separator-1-green ac"></span>
      <p class="content-2 alg-txt-c">Veja a seguir alguns dos lugares que atendo na reagião de São Paulo</p>
    </div>

    <div class="mt-6">
      <workSection></workSection>
    </div>
    

    <div class="mt-12">
  
      <span id="txtLocator"></span>
      <h2 class="title-1">Redes Socíais</h2>
      <span class="separator-1 separator-1-green ac"></span>
      
      <SocialMidia/>
    </div>
    
    <span id="footer"></span>
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
import cpmCards from '../components/cpmCards.vue'
import workSection from '../components/workSection.vue'
import SocialMidia from '../components/SocialMidia.vue'
import Cards from '@/components/cpmScroolCards.vue'
import foot from '../components/footer.vue'
import svgSet from '../assets/svgSet/svgSet'


// juliana-picture.jpeg
export default {
  name: 'Home',
  components: {
    infoSection,
    foot,
    workSection,
    cpmCards,
    Cards,
    SocialMidia,
    sideMenu,
    HelloWorld
  },

  data: ()=>({
    effectData:false,
    secondEffect:false,
    slideEffect:false,
    txtEffect:false,

    svgSet:svgSet,

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

      if(window.pageYOffset > (this.locator.position) - (this.locator.height + 700 )){
        this.locator.checked = true
        this.effect()
      }

      if(window.pageYOffset > (this.locator2.position) - (this.locator2.height + 800 )){
        this.locator2.checked = true
        this.secondEffectFunction()
      }
      
      if(window.pageYOffset > (this.locator3.position) - (this.locator3.height + 900 )){
        this.locator3.checked = true
        this.slideEffectFunction()
      }
      
      if(window.pageYOffset > (this.locator4.position) - (this.locator4.height + 800 )){
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
