<template>
  <div class="mt-15">

      <div class="container-side-2 container-info-section">



          <div class="container-rigth ac">
            <div class="header-title ac">
                <h1 :class="[effect ?'slide-fadein-animation-txt' : 'pre-animation']" class="title-1 alg-txt-s-media ac">Juliana Lopes!</h1>
                <span :class="[effect ?'slide-fadein-animation-txt' : 'pre-animation']" class="separator-2"></span>
                
                <div :class="[effect ?'fadein-animation-2' : 'pre-animation']">
                  <p class="content-4 ac">
                    <!-- Conheça mais sobre meu trabalho neste site, caso tenha interesse em ver de forma 
                    mais detalhada as especificações do meu perfil profissional, fique a vontade para 
                    fazer dowload de meu curriculo, me acompanhar nas redes sociais ou entrar em contato.

                    Conheça mais sobre quem é Juliana Lopes e do que se trata meu site pessoal, 
                    além de te mostrar os benéficios da nutrição e também mostrar tudo que eu já fiz autalmente -->

                    Atualmente estou realizando atendimento em clinicas e atendimentos personalizados com a a necessidade de cada um,
                    atuo na área de nutrição a mais de 10 anos, e minha missão é ajudar todos aqueles que sempre tiveram aquela dificuldade de ter um bons habitos alimentáres,
                     e transformar de vez a realidade das pessoas.

                     <br>
                     <br>
                     Apaixonada pelo meu cachorro, Graduada em Nutrição pela FMU. Técnico em Princípios de Nutrição Esportiva pela Universidade Estácio
                    </p>
                </div>
                
                <!-- <div :class="[effect ?'fadein-animation-2' : 'pre-animation']" class="button-cv">
                    <button class="b-dowloadCV">Dowload CV</button> <button class="b-dowloadCV-s">↓</button>
                </div> -->
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

