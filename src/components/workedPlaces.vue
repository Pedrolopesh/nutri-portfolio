<template>
  <div class="mt-8">

    <div v-for="i in itens" :key="i" class="container-sides w-70 ac">

      <div class="container-left p50">
        <img src="../../public/images/bg-consultorio-1.jpeg" class="image-size-1">
      </div>

      <div class="container-rigth mt-5">
        <h3 class="title-3 cl-g alg-txt-s p10">{{i.title}}</h3>
        <i class="content-2">{{i.address}}</i>
        <p class="content-3">{{i.content}}</p>

        <div class="display-flex">
          <span class="icon-size-5 clr-b mt-3 ml-2" v-html="svgSet.facebook_icon"></span>
          <span class="icon-size-5 clr-b mt-3 ml-2" v-html="svgSet.instagram_icon"></span>
          <span class="icon-size-5 clr-b mt-3 ml-2" v-html="svgSet.email_icon"></span>
          <span class="icon-size-5 clr-b mt-3 ml-2" v-html="svgSet.whatsapp_icon"></span>
        </div>
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
      { icons:'', image:'', title:'Massabki e Birindelli Cirurgiões Associados', address:'R Maestro Cardim, 592, Conjunto 101, São Paulo - SP', content:'Atendimento Home Care para pacientes em sua maioria acamados, com restrição alimentar, com uso de sonda enteral. Publico de crianças, adolescentes, adultos e idosos. Realizava avaliação nutricional, física, prescrição terapêutica de dietas via oral ou enteral, suplementos alimentares e polivitamínicos.'},
      // http://cnpj.info/MASSABKI-BIRINDELLI-CIRURGIOES-ASSOCIADOS-LTDA-EPP-R-Maestro-Cardim-592-Conjunto-101-Sao-Paulo-SP-01323001;
      {icons:'', image:'', title:'FisioQualy Home Care', address:'Rua Taváres Bastos, 329 3º Andar - Perdizes - São Paulo - SP', content:'Atendimento Home Care para pacientes em sua maioria acamados, com restrição alimentar, com uso de sonda enteral. Publico de crianças, adolescentes, adultos e idosos. Realizava avaliação nutricional, física, prescrição terapêutica de dietas via oral ou enteral, suplementos alimentares e polivitamínicos.'},
      {icons:'', image:'', title:'Hospital Ipiranga (Clinica) Estágio Curricular', address:'Av. Nazaré, 28 - Vila Monumento, São Paulo - SP', content: 'Conferência de pacientes em seus leitos, visitas para verificação de adesão da dieta, triagem nutricional de entrada e acompanhamento de estado nutricional, acompanhamento de café da manhã, acompanhamento do almoço e atualização de mapa de leitos.'}
    ]
  }),
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>
