<template>
<div class="mt-8">

    <!-- <div class="container-scroll-1" data-simplebar id="scroll"> -->
    <div class="container-scroll-1" data-simplebar>

        <div class="container-comentary mt-3 mb-5">

            <div v-for="i in itens" :key="i" class="ml-3 mr-3 card-comemt mt-10">
                <img :src="'./'+i.img_src" class="user-icon">

                <div class="container-stars mt-3 ml-3">
                    <span v-for="i in i.starts" :key="i" class="size-star-icon cl-y" v-html="svgSet.full_star_icon"></span>
                </div>


                <p class="content-3 w-300px p15 ml-2">{{i.content}}</p>
                

                <i class="content-3 ml-2 p5">{{i.name}}</i>
                <i class="content-3 ml-2 p5 cl-gra">{{i.city}}</i>
            </div>

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
      itens:[
          {img_src:"user-icon-0.png",starts:5, content: "Gostei muito das consultas da Xuliana, muito profissional e atensiona", name:"Fenanda Silva", city:"Pirituba, SP"},
          {img_src:"user-icon-1.png",starts:5, content: "Achei muito massa a consulta dessa Nutri maravilhos", name:"Pedro Lopes", city:"Florinanópolis, SC"},
          {img_src:"user-icon-1.png",starts:4, content: "Achei muito massa a consulta dessa Nutri maravilhos", name:"Pedro Lopes", city:"Florinanópolis, SC"},
          {img_src:"user-icon-1.png",starts:5, content: "Achei muito massa a consulta dessa Nutri maravilhos", name:"Pedro Lopes", city:"Florinanópolis, SC"},
      ]
  }),
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
}

// https://www.facebook.com/nutrijulianalopess/?ref=profile_intro_card
// https://www.facebook.com/pg/nutrijulianalopess/reviews/?referrer=page_recommendations_see_all&ref=page_internal
</script>