<template>
  <div class="ml-a">

      <div class="container-sides container-info-section mt-15">

          <div :class="[effectData ?'fadein-animation-2' : 'pre-animation']" class="container-left ac">
              <img src="../../public/juliana-picture.jpeg" class="personal-img-1 ml-a">
          </div>

          <span id="locator"></span>
          <div class="container-rigth ac">
            <div class="header-title ac">
              <h1 :class="[effectData ?'slide-fadein-animation-txt' : 'pre-animation']" class="title-1">Nutrista Profissional</h1>
              <span :class="[effectData ?'fadein-animation-3' : 'pre-animation']" class="separator-1 ac"></span>

            <div :class="[effectData ?'slide-fadein-animation-txt' : 'pre-animation']" class="pre-slide-animation-txt">
              <p class="content-2">Atuando na área de nutrição a 4 anos com cursos profisionalizantes, minha missão é fazer com que você tenha uma alimentação saudavel e balanceada sem precisar cortar suas comidas preferedias, veja nesse site mais sobre mim e saiba quem é Juliana Lopes</p>
            </div>
            
              <div v-for="(i,index) in datas" :key="index">
                <div :class="[effectData ?'fadein-animation-'+(index + 1) : 'pre-animation']" class="container-icons-subtitle mt-3">
                  <div>
                    <span class="size-icon-3 cl-y" v-html="i.icon"></span>
                    <!-- <span>{{index + 1}}</span> -->
                  </div>
                  <div>
                    <h2 class="subtitle-3 alg-txt-s">{{i.cardTitle}}</h2>
                    <p>{{i.contentCard}}</p>
                  </div>
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
  props:['effectData'],

  components: {},
  created() {},
  data: () => ({
    svgSet: svgSet,
      effect:true,

      datas:[
        {cardTitle:"Nutricionista Autônoma", contentCard:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita.",icon:svgSet.shield_icon},
        {cardTitle:"Nutrição esportiva", contentCard:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita.",icon:svgSet.family_icon},
        {cardTitle:"Planos Alimentares", contentCard:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita.",icon:svgSet.body_icon},
      ]
  }),
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>

