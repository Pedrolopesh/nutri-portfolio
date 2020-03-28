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
            // https://www.youtube.com/watch?v=C9EWifQ5xqA
            console.log(e.pageX)
        })
        slider.addEventListener('mouseleave', () => {
            isDowm = false;
            slider.classList.remove('active');
        })
        slider.addEventListener('mouseup', () => {
            isDowm = false;
            slider.classList.remove('active');
            
        })
        slider.addEventListener('mousemove', () => {

            if(!isDowm) return
            console.count(isDowm)   
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