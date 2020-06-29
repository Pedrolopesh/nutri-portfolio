<template>
  <div class="home">

    <span id="indixLocator"></span>


    <b-col class="container-header brake-small">
      <secondSideMenu></secondSideMenu>
    </b-col>

  <sectionCV/>

    <div class="bg-image-parallax rellax p50 mt-15" data-rellax-speed="-4">
      <div class="custom-box-parralax ac">

      <span id="firstLocator"></span>
      <div  class="container mt-4">
        <h2 :class="[txtEffect ?'slide-fadein-animation-txt' : 'pre-animation']" class="title-1">Graduação e Cursos</h2>
        <span :class="[txtEffect ?'fadein-animation-3' : 'pre-animation']" class="separator-1 ac"></span>
        <p class="content-2 alg-txt-c">A seguir confira algumas especialização que obtive.</p>
      </div>
      
      <span id="secondLocator"></span>
      <certificate :componentEffect="componentEffect"></certificate>
    
      </div>
    </div>

    <span id="thirdLocator"></span>
    <div :class="[txtEffect ?'slide-fadein-animation-txt' : 'pre-animation']" class="container mt-15">
      <h2 class="title-1">Lugares que já trabalhei</h2>
      <span class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">A seguir, alguns dos lugares que trabalhei e obtive mais experiência no ramo da nutrição.</p>
    </div>
    <workedPlaces :secondComponentEffect="secondComponentEffect"></workedPlaces>


    <div class="container mt-15 ac">
      <h2 class="title-1">O que estão dizendo sobre as consultas</h2>
      <span class="separator-1 ac"></span>
      <p class="content-2 alg-txt-c">Veja alguns dos comentários que forma feitos na página do facebook por alguns clientes.</p>
    </div>
    <comemt></comemt>

    <div class="mt-15"></div>
    <foot/>

  </div>
</template>

<script>
// @ is an alias to /src
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
  },

   data:()=> ({
      txtEffect:true,
      componentEffect:false,
      secondComponentEffect:false,
      locator:{position:'',height:'',checked:''},
      locator2:{position:'',height:'',checked:''},
      locator3:{position:'',height:'',checked:''},
   }),

    created(){
      setTimeout( () => {this.getPositions()}, 1000);
    },

   methods:{
     
     getPositions(){
       let firstLocator = document.querySelector("#firstLocator");
      //  console.log("1) first= "+firstLocator.offsetTop)
       this.locator.position = firstLocator.offsetTop;

       let secondLocator = document.querySelector("#secondLocator");
      //  console.log("2) second= "+secondLocator.offsetTop)
       this.locator2.position = secondLocator.offsetTop;

        let thierdLocator = document.querySelector("#thirdLocator");
        console.log("3) thierd = "+secondLocator.offsetTop)
        this.locator3.position = thierdLocator.offsetTop;
   
       window.addEventListener("scroll", this.checkScroll);
    },
    checkScroll(){
      // console.log(window.pageYOffset)
      // alert("A")
      if(window.pageYOffset > (this.locator.position) - (this.locator.height + 400 )){
        this.locator.checked = true
        this.effect()
      }

      if(window.pageYOffset > (this.locator2.position) - (this.locator2.height + 760)){
        this.locator2.checked = true
        this.sendEffecttoComponet()
      }

      if(window.pageYOffset > (this.locator3.position) - (this.locator3.height + 450)){
        this.locator3.checked = true
        this.sendEffecttoSecondComponet()
      }
    },

    effect(){
      this.txtEffect = true
    },

    sendEffecttoComponet(){
      this.componentEffect = true
    },

    sendEffecttoSecondComponet(){
      this.secondComponentEffect = true
    }

   }
}
</script>
