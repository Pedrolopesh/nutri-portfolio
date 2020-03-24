<template>
  <div class="ml-a">

      <div class="container-sides container-info-section mt-15">

          <div class="containe-left">
              <img src="../../public/juliana-picture.jpeg" class="personal-img-1 ml-a">
          </div>


          <div class="containe-rigth ac">
            <div class="header-title ac">
              <h1 class="title-1">Nutrista Profissional</h1>
              <span class="separator-1 ac"></span>

              <p class="content-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minima at excepturi facere commodi vitae rem laboriosam vero, asperiores et earum. Fugiat, sit reiciendis! Velit, unde. Obcaecati iusto asperiores temporibus.</p>
            
            <div class="container-icons-subtitle mt-3">
              
              <div>
                <span class="size-icon-3 cl-y" v-html="svgSet.family_icon"></span> 
              </div>

              <div>
                <h2 class="subtitle-3 alg-txt-s">Nutrição Familiar</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita.</p>
              </div>
           
            </div>
            
            <div class="container-icons-subtitle mt-3">
              <div>
                <span class="size-icon-3 cl-y" v-html="svgSet.shield_icon"></span>
              </div>
  
              <div>
                <h2 class="subtitle-3 alg-txt-s">Nutrição esportiva</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita.</p>
              </div>
            </div>
            
            <div class="container-icons-subtitle mt-3">
              <div>
                <span class="size-icon-3 cl-y" v-html="svgSet.body_icon"></span>
              </div>
            
            <div>
              <h2 class="subtitle-3 alg-txt-s">Nutrição pessoal</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, expedita.</p>
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

  components: {},
  created() {},
  data: () => ({
    svgSet: svgSet,
    effect:true
  }),
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>

