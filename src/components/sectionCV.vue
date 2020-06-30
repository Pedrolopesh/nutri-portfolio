<template>
  <div class="mt-15">

      <div class="container-side-2 container-info-section">



          <div class="container-rigth ac">
            <div class="header-title ac">
                <h1 :class="[effect ?'slide-fadein-animation-txt' : 'pre-animation']" class="title-1 alg-txt-s-media">Juliana Lopes!</h1>
                <span :class="[effect ?'slide-fadein-animation-txt' : 'pre-animation']" class="separator-2"></span>
                
                <div :class="[effect ?'fadein-animation-2' : 'pre-animation']">
                  <p class="content-4">Conheça mais sobre meu trabalho neste site, caso tenha interesse em ver de forma mais detalhada as especificações do meu perfil profissional, fique a vontade para fazer dowload de meu curriculo, me acompanhar nas redes sociais ou entrar em contato.</p>
                </div>
                
                <div :class="[effect ?'fadein-animation-2' : 'pre-animation']" class="button-cv">
                    <button class="b-dowloadCV">Dowload CV</button> <button class="b-dowloadCV-s">↓</button>
                </div>
            </div>
          </div>
      
          <div class="container-left mt-3">
              <img :class="[effect ?'fadein-animation-2' : 'pre-animation']" src="../../public/picture-about.png" class="personal-img-2 mr-6">
          </div>

      </div>

  </div>
</template>

<script>
import svgSet from '../assets/svgSet/svgSet'

export default {

  components: {},
  created() {},
  data: () => ({
    svgSet: svgSet,
    effect:true
  }),
  mounted(){

  },
  methods: {},
  computed: {},
  watch: {}
}
</script>

