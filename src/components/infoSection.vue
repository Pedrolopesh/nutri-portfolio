<template>
  <div class="ml-a">

      <div class="container-sides container-info-section mt-15">

          <div class="container-left ac">
              <img src="../../public/juliana-picture.jpeg" class="personal-img-1 ml-a">
          </div>

          <span id="locator"></span>
          <div class="container-rigth ac">
            <div class="header-title ac">
              <h1 class="title-1">Nutrista Profissional</h1>
              <span class="separator-1 ac"></span>

              <p class="content-2">Atuando na área de nutrição a 4 anos com cursos profisionalizantes, minha missão é fazer com que você tenha uma alimentação saudavel e balanceada sem precisar cortar suas comidas preferedias, veja nesse site mais sobre mim e saiba quem é Juliana Lopes</p>
            
            <div :class="[locator.checked ?'fadein-animation-3' : 'pre-animation']" class="container-icons-subtitle mt-3">
              
              <div>
                <span class="size-icon-3 cl-y" v-html="svgSet.family_icon"></span> 
              </div>

              <div>
                <h2 class="subtitle-3 alg-txt-s">Nutricionista Autônoma</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita.</p>
              </div>
           
            </div>
            
            <div class="container-icons-subtitle mt-3">
              <div>
                <span class="size-icon-3 cl-y" v-html="svgSet.shield_icon"></span>
              </div>
  
              <div>
                <h2 class="subtitle-3 alg-txt-s">Nutrição esportiva</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita.</p>
              </div>
            </div>
            
            <div class="container-icons-subtitle mt-3">
              <div>
                <span class="size-icon-3 cl-y" v-html="svgSet.body_icon"></span>
              </div>
            
            <div>
              <h2 class="subtitle-3 alg-txt-s">Planos Alimentares</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita.</p>
            </div>
            
            </div>
            
            </div>
          </div>
      
      </div>

  </div>
</template>

<script>
import svgSet from '../assets/svgSet/svgSet'

export default {

  components: {},
  created() {
    this.getPositions()
  },
  data: () => ({
    svgSet: svgSet,
    effect:true,

    locator:{position:'',height:'',checked:''},
  }),
  mounted() {},
  methods: {
    getPositions(){
      // alert("FOIE")
       var firstLocator = document.querySelector("#locator").offsetTop;
      this.locator.position = firstLocator;
      //  console.log(firstLocator.getBoundingClientRect().height)

      //  var secondLocator = document.querySelector("#locator2");
      //  this.locator2.position = secondLocator.offsetTop



      // this.locator2.position = secondlocator.offsetTop;

      window.addEventListener("scroll", this.checkScroll);
      this.checkScroll()
    },

    checkScroll(){
      console.log(window.pageYOffset)
      console.log(this.locator.position)
      
    if(window.pageYOffset > (this.locator.position) - (this.locator.height + 600 )){
      this.locator.checked = true
    }

    if(window.pageYOffset > (this.locator2.position) - (this.locator2.height + 600 )){
      this.locator2.checked = true
    }

    },

    effect(){
      // var firstLocator = document.querySelector("#indexLocator");
      
      this.effect = true
    }
  },
  computed: {},
  watch: {}
}
</script>

