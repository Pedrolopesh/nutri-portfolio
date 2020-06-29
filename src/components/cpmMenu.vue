<template>
  <div class="ml-a">

<b-container class="bv-example-row mt-10 b-container container-links-menu">
  <b-row align-h="end">
  <router-link to="/">
  <b-button :class="[effect ?'fadein-animation-1' : 'pre-animation']" class="b-menu cw">Início</b-button></router-link>
  <b-button :class="[effect ?'fadein-animation-2' : 'pre-animation']" class="b-menu cw">Trabalhos</b-button>
  <b-button :class="[effect ?'fadein-animation-3' : 'pre-animation']" class="b-menu cw">Serviços</b-button>

  <router-link to="/Posts"> 
    <b-button :class="[effect ?'fadein-animation-4' : 'pre-animation']" class="b-menu cw">Publicações</b-button> 
  </router-link>

  <b-button :class="[effect ?'fadein-animation-5' : 'pre-animation']" class="b-menu cw">Contato</b-button>

  <router-link to="/About">
  <b-button :class="[effect ?'fadein-animation-6' : 'pre-animation']" class="b-menu cw">Sobre mim</b-button> 
</router-link>


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
