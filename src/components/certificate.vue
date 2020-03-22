<template>
  <div class="ml-a">

<div class="container-certificate">
    <span class="size-certificate-icon mt-3 ac" v-html="svgSet.certificate_icon"></span>
    <p class="content-4 ml-3">Graduação na Universidade de Hard no curso de nutrição.</p>
</div>

<div class="container-certificate ac">
    <span class="size-certificate-icon mt-3 ac" v-html="svgSet.certificate_icon"></span>
    <p class="content-4 ml-3">Pós graduação em nutrição  na universidade estadual de Toronto.</p>
</div>

<div class="container-certificate ml-a">
    <span class="size-certificate-icon mt-3 ac" v-html="svgSet.certificate_icon"></span>
    <p class="content-4 ml-3">Curso técnico de administração na Universidade Brasil.</p>
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

