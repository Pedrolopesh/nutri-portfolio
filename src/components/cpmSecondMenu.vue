<template>
  <div class="ml-a">

<b-container class="bv-example-row mt-10 b-container container-links-menu">
  <b-row align-h="end">
  <router-link to="/">
  <b-button :class="[effect ?'fadein-animation-1' : 'pre-animation']" class="b-menu b-second cl-g cp">Início</b-button></router-link>
  <b-button :class="[effect ?'fadein-animation-2' : 'pre-animation']" class="b-menu b-second cl-g cp" @click="worksSection">Trabalhos</b-button>
  <b-button :class="[effect ?'fadein-animation-3' : 'pre-animation']" class="b-menu b-second cl-g cp" @click="graduateSection">Experiência</b-button>
  
  <router-link to="/Posts"> 
    <b-button :class="[effect ?'fadein-animation-4' : 'pre-animation']" class="b-menu b-second cl-g cp">Publicações</b-button> 
  </router-link>
  
  <b-button :class="[effect ?'fadein-animation-5' : 'pre-animation']" class="b-menu b-second cl-g cp" @click="goToFooter">Contato</b-button>
  <router-link to="/About">
  <b-button :class="[effect ?'fadein-animation-6' : 'pre-animation']" class="b-menu b-second cl-g cp">Sobre mim</b-button> 
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
  methods: {
        worksSection(){
      // this.$router.push('/#thierdLocator')
      if(this.$router.currentRoute.fullPath != '/'){
        this.$router.push('/')
          setTimeout(() => {
            window.location.href = "#workSection";
          }, 1000)
      }

    },

    graduateSection(){
      if(this.$router.currentRoute.fullPath != '/About'){
        this.$router.push('/About')
        setTimeout(() => {
          window.location.href = "#graduateSection";
        }, 1500)
      }else{
        window.location.href = "#graduateSection";
      }
    },

    goToFooter(){
      window.location.href = "#footer";
    }
  },
  computed: {},
  watch: {}
}
</script>
