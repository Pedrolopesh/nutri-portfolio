<template>
  <div class="mt-8">

<div class="container-scroll" data-simplebar id="scroll">

<div class="container-cards mt-9 mb-5">

  <div v-for="i in itens" :key="i" class="ml-5 services-card">
  
    <div class="container-card-image">
      <!-- src="../assets/logo.png" -->

      <img :src="'./'+i.img_src" class="image-card ac">
  
    </div>

    <div class="container-bottom-card">
      
      <!-- {{i.cardTitle}} -->
      <h3>{{i.cardTitle}}</h3>
      <p class="m0">{{i.contentCard}}</p>
      
    
    </div>
  </div>
</div>
</div>
    <!-- <button @click="animation()">click</button> -->
</div>
</template>

<script>
export default {
  name: 'Services',

  components: {},
  created() {
     
  },
  data: () => ({
    img:{
      first:'01.jpg'
    },

    card:'',
    positions: { 
      first:{positon:0, checked: false},
      second:{positon:0, checked: false},
      third:{positon:0, checked: false}
      },

      itens:[
        {cardTitle:"web Sites", contentCard:"Criação de websites",img_src:'01.jpg'},
        {cardTitle:"Artes digitais", contentCard:"Criação de artes digitais",img_src:'02.jpg'},
        {cardTitle:"Artes Visuais", contentCard:"Criação de artes para lojas",img_src:'03.jpg'},
        {cardTitle:"Banco de dados", contentCard:"Conhecimento em Banco de dados",img_src:'04.jpg'},
        {cardTitle:"Aplicações web", contentCard:"Construção de softwares",img_src:'05.jpg'}
      ]
  }),
  mounted() {
    this.getPositions();
    // this.animation()
  },
  methods: {

    getPositions(){
       var firstLocator = document.querySelector("#firstLocator");
       console.log("1) first= "+firstLocator.offsetTop)
       this.positions.first = firstLocator.offsetTop;

       var secondLocator = document.querySelector("#secondLocator");
       console.log("2) second= "+secondLocator.offsetTop)
       this.positions.second = secondLocator.offsetTop;


       var thirdLocator = document.querySelector("#thirdLocator");
       console.log("3) third= "+thirdLocator.offsetTop)
       this.positions.third = thirdLocator.offsetTop;

       window.addEventListener("scroll", this.checkScroll);
    },


    checkScroll(){
      // console.log(window.pageYOffset)
      if(window.pageYOffset > (this.positions.first - 1000)){
        this.animation()
      }

      // window.pageYOffset > this.positions.first
      
      if(window.pageYOffset > (this.positions.second - 800)){
        this.animation2()
      } 
      
      if(window.pageYOffset > (this.positions.third -800)){
        console.log("3")
        this.animation3()
      }
    },

      
      
      
      
      
      
      
      animation(){
        var first = document.querySelector('#first-card')
        first.classList.add('slide-animation-1')
  
        // var second = document.querySelector('#second-card')
        // second.classList.add('slide-animation-2')
  
        // var first = document.querySelector('#third-card')
        // first.classList.add('slide-animation-3')
  
        // setTimeout( () => {this.animation2()}, 1000);
        // setTimeout( () => {this.animation3()}, 2000);

        // if(window.pageYOffset > (this.positions.sencond)){
          // console.log("2")
          // this.animation2()
        // }
      },

    animation2(){
      var second = document.querySelector('#second-card')
      second.classList.add('slide-animation-2')
    },

    animation3(){
      var third = document.querySelector('#third-card')
      third.classList.add('slide-animation-3')
    },

      resetAnimation(){
        var first = document.querySelector('#first-card')
        first.classList.remove('slide-animation-1')
        
        var second = document.querySelector('#second-card')
        second.classList.remove('slide-animation-2')

        var third = document.querySelector('#third-card')
        third.classList.remove('slide-animation-3')
      },

  },
  computed: {},
  watch: {}
}
</script>