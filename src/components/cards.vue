<template>
<div class="mt-8">

    <div class="container-card-teste" id="cards">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
    </div>

</div>
</template>

<script>
export default {
  name: 'Services',

  components: {},
  created() {},
  data: () => ({}),
  mounted() {
      this.slider()
  },
  methods: {
    slider(){
        const slider = document.querySelector('.container-card-teste');
        let isDowm = false;
        let startX;
        let scrollLeft;


        slider.addEventListener('mousedown' , (e) => {
            isDowm = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft

            console.log(startX)
        })
        slider.addEventListener('mouseleave', () => {
            isDowm = false;
            slider.classList.remove('active');
        })
        slider.addEventListener('mouseup', () => {
            isDowm = false;
            slider.classList.remove('active');
            
        })
        slider.addEventListener('mousemove', (e) => {
            if(!isDowm) return
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft
            // console.log({x, startX})
            const walk = x - startX;
            slider.scrollLeft = walk
            console.count(walk)   
        })
    }
  },
  computed: {},
  watch: {}
}
</script>

<style>

.container-card-teste{
    display: flex;
}
    .card{
        display: inline-block;
        min-height: 400px;
        width: 300px;
        margin-left: 50px;
        background-color: red;
    }

.active{
    background: rgb(255, 255, 255);
    cursor: grabbing;
    transform: scale(1);
}
</style>