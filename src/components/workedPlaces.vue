<template>
  <div class="mt-8">

    <div v-for="i in itens" :key="i" class="container-sides w-70 ac">

      <div class="container-left p50">
        <img :src="'./' + i.image" class="image-size-1">
      </div>

      <div class="container-rigth mt-5">
        <h3 class="title-3 cl-g alg-txt-s p10">{{i.title}}</h3>

      <div class="container-flex">
        <span class="icon-size-6 clr-b mt-3 ml-2" v-html="svgSet.location_icon"></span>
        <i class="content-5 mt-2">{{i.address}}</i>
      </div>


        <p class="content-3">{{i.content}}</p>

        <!-- <div class="display-flex">
          <span class="icon-size-5 clr-b mt-3 ml-2" v-html="svgSet.location_icon"></span>
        </div> -->
      </div>

    </div>

    <!-- <button @click="animation()">click</button> -->
</div>
</template>

<script>
import svgSet from '../assets/svgSet/svgSet'

export default {
  name: 'Services',

  components: {},
  created() {
     
  },
  data: () => ({
    svgSet: svgSet,
    itens:[
      { icons:'', image:'place-0.png', title:'Massabki e Birindelli Cirurgiões Associados', address:'R Maestro Cardim, 592, Conjunto 101, São Paulo - SP', content:'A atividade médica ambulatorial com recursos para realização de procedimentos cirúrgicos compreende os serviços de consulta e tratamento, desde que aptos à realização de procedimentos cirúrgicos, Atendimentos nutricionais e adiministrativos.'},
      //Imagem de DanielCubas por Pixabay 
      {icons:'', image:'place-1.png', title:'FisioQualy Home Care', address:'Rua Taváres Bastos, 329 3º Andar - Perdizes - São Paulo - SP', content:'Atendimento Home Care para pacientes em sua maioria acamados, com restrição alimentar, com uso de sonda enteral. Publico de crianças, adolescentes, adultos e idosos. Realizava avaliação nutricional, física, prescrição terapêutica de dietas via oral ou enteral, suplementos alimentares e polivitamínicos.'},
      
      {icons:'', image:'place-2.jpg', title:'Hospital Ipiranga (Clinica) Estágio Curricular', address:'Av. Nazaré, 28 - Vila Monumento, São Paulo - SP', content: 'Conferência de pacientes em seus leitos, visitas para verificação de adesão da dieta, triagem nutricional de entrada e acompanhamento de estado nutricional, acompanhamento de café da manhã, acompanhamento do almoço e atualização de mapa de leitos.'}
    ]
  }),
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>
