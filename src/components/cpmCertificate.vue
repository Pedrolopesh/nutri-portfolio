<template>
  <div class="ml-a">

<div class="section-certificate ac mt-9">

<div v-for="(index, i) in itens" :key="i" class="container-certificate">

  <div class="container-blocks" :class="[componentEffect ?'fadein-animation-'+(i+1) : 'pre-animation']">
      <div class="block-icon">
        <span class="size-certificate-icon mt-3" v-html="svgSet.certificate_icon"></span>
      </div>

      <div class="block-content mt-1 ml-3">
        <p class="content-4 mb-0 mt-1 cl-g">{{index.title}}</p>
        <p class="content-2 p10 mp0">{{index.content}}</p>
      </div>
  </div>
</div>


</div>
  
  </div>
</template>

<script>
import svgSet from '../assets/svgSet/svgSet'

export default {
  props:['componentEffect'],
  components: {},
  created() {},
  data: () => ({
    svgSet: svgSet,
    effect:true,
    itens:[
      {title:'Pós Graduação Estácio de Sá', content:'Nutrição Clinica: Metabolismo, prática e terapia nutricional.'},
      {title:'FMU - Faculdades Metropolitanas Unidas', content:'Graduação em Nutrição'},
      {title:'Nutriwork', content:'Marketing Digital para Nutricionista'},
      {title:'Quality Nutrition', content:'Black Skull Workshop: Bodybuilding e Military Science'},
      {title:'Quality Nutrition', content:'Microbiota e Saúde intestinal'},
      {title:'Estácio', content:'Princípios da Nutrição Esportiva'},
    ],
    sections:2
  }),
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>

