<template>
  <div class="ml-a">

<b-container class="bv-example-row mt-10 b-container container-links-menu">
  <b-row align-h="end">
  <router-link to="/"><b-button class="b-menu cl-g">Início</b-button></router-link>
  <b-button class="b-menu cl-g">Trabalhos</b-button>
  <b-button class="b-menu cl-g">Serviços</b-button>
  <b-button class="b-menu cl-g">Contato</b-button>

  <router-link to="/About"> <b-button class="b-menu cl-g">Sobre mim</b-button> </router-link>
  </b-row>
</b-container>


  </div>
</template>

<script>


export default {

  components: {},
  created() {},
  data: () => ({
    effect:true
  }),
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>
