<template>
  <div class="mt-8">

    <div class="container-sides w-70 ac">

      <div class="container-left p50">
        <img src="../../public/images/bg-consultorio-1.jpeg" class="image-size-1">
      </div>

      <div class="container-rigth mt-5">
        <h3 class="title-3 cl-g alg-txt-s p10">Consultório 1</h3>
        <i class="content-2">Av. Paulista - 123</i>
        <p class="content-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, atque?</p>

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
  }),
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}
</script>