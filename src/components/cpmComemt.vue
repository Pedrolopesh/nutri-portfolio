<template>
<div class="mt-8">
    <div class="container-comentary">
        <div class="ml-5 card-comemt mt-10">
            <img src="../../public/images/user-icon-1.png" class="user-icon">

            <div class="container-stars mt-3 ml-3">
                <!-- full_star_icon -->
                <span class="size-star-icon cl-y" v-html="svgSet.full_star_icon"></span>
                <span class="size-star-icon cl-y" v-html="svgSet.full_star_icon"></span>
                <span class="size-star-icon cl-y" v-html="svgSet.full_star_icon"></span>
                <span class="size-star-icon cl-y" v-html="svgSet.full_star_icon"></span>
                <span class="size-star-icon cl-y" v-html="svgSet.full_star_icon"></span>
            </div>


            <p class="content-3 p15 ml-2">Acho que A XULIANA É DEMAIS VIADO SÒ AGRADEÇO NOTA UM MILHÃO</p>

            <i class="content-3 ml-2 p5">Fenanda Silva</i>
            <i class="content-3 ml-2 p5 cl-gra">Pirituba, SP</i>
        </div>
    </div>
</div>
</template>

<script>
import svgSet from '../assets/svgSet/svgSet'


export default {
  name: 'Services',

  components: {},
  created(){},
  data: () => ({
      svgSet: svgSet,
  }),
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>