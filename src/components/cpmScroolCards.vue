<template>
    <vs-row>
    <vs-col type="flex" class="container-cards p15" data-simplebar vs-w="6" id="scroll">
        <div class="d-flex heigth-container">
      <vs-card :class="[slideEffect ?'slide-fadein-animation-cards' : 'pre-animation']" v-for="i in itens" :key="i" actionable class="ml-7 cardx component-card">
        <div slot="header">
          <h3>
            {{ i.cardTitle }}
          </h3>
        </div>
        <div slot="media">
          <img :src="'./'+i.img_src" class="image-card ac">
        </div>
        <div>
          <h2>{{ i.contentCard }}</h2>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <!-- <vs-button color="primary" type="gradient" >View</vs-button> -->
            <vs-button color="danger" class="ml-3" type="gradient" icon="favorite"></vs-button>
          </vs-row>
        </div>
      </vs-card>
        </div>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  props:["slideEffect"],

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
        {cardTitle:"Atendimentos Home Care", contentCard:"",img_src:'card-0.png'},
        
        {cardTitle:"Atendimentos em clinica", contentCard:"",img_src:'card-1.png'},
        {cardTitle:"Avaliação antropométrica", contentCard:"",img_src:'card-2.png'},
        {cardTitle:"elaboração de planos alimentares", contentCard:"",img_src:'card-3.png'},
        {cardTitle:"acompanhamento nutricional", contentCard:"",img_src:'card-4.png'}
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