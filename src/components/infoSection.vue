<template>
  <div class="ml-a bg-green">
      <div class="container-informations container-info-section brake-small p60 mt_1">

          <div :class="[effectData ?'fadein-animation-2' : 'pre-animation']" class="container-info-left ac">
              <img src="../../public/juliana-picture.jpeg" class="personal-img-1 ml-a mt-9">
          </div>

          <span id="locator"></span>
          <div class="container-info-rigth mt-15">
            <div class="header-title ac">
              <h1 :class="[effectData ?'slide-fadein-animation-txt' : 'pre-animation']" class="title-1">Nutrista Profissional</h1>
              <span :class="[effectData ?'fadein-animation-3' : 'pre-animation']" class="separator-1 separator-1-white clr-whi ac"></span>

            <div :class="[effectData ?'slide-fadein-animation-txt' : 'pre-animation']" class="pre-slide-animation-txt mw-100 mt-3">
              <p class="info-content">
                Atuando na área de nutrição a 4 anos com cursos profisionalizantes, 
                minha missão é fazer com que você tenha uma alimentação saudavel e balanceada sem precisar cortar suas comidas preferedias, 
                veja nesse site mais sobre mim e saiba quem é Juliana Lopes
              </p>
            </div>
            
              <div v-for="(i,index) in datas" :key="index" class="mt-5">
                <div :class="[effectData ?'fadein-animation-'+(index + 1) : 'pre-animation']" class="container-icons-subtitle mt-3">
                  <div>
                    <span class="size-icon-3 cl-y" v-html="i.icon"></span>
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
        {cardTitle:"Nutricionista Autônoma", contentCard:"Nutricionista autônoma com foco em qualidade de vida e alimentação saudavel",icon:svgSet.bag_icon},
        {cardTitle:"Nutrição esportiva", contentCard:"Nutrição focada em resultados para atletas que procuram aumentar seu desempenho. ",icon:svgSet.esports},
        {cardTitle:"Planos Alimentares", contentCard:"Planos indivisuais ou para toda familia, a melhor dieta e mais a mais adequada.",icon:svgSet.todoList},
      ]
  }),
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>

