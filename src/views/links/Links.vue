<template>
  <div class="home">
    <div class="gradient-bg"></div>
    <div class="main-page">
        <img class="main-photo ac mt-5" src="../../assets/juliana_photo.png" alt="Juliana Lopes">

        <div>
          <span class="instagramAt mt-4">@nutrijulianalopess</span>
        </div>

        <div class="d-block block-icons-links ac mt-5">
          <div class="d-flex container-icons">
              <a href="https://www.facebook.com/nutrijulianalopess" class="main-icon" v-html="svgSet.facebook_icon_white"></a>
              <a href="https://www.instagram.com/nutrijulianalopess/" class="main-icon" v-html="svgSet.instagram_icon_white"></a>
              <a href="https://vm.tiktok.com/ZM88owf2v/" class="main-icon" v-html="svgSet.tikTokIcon"></a>
          </div>
        </div>

        <div class="mt-6">
          <div v-for="i in itens" :key="i">
            <button class="button-main-link ac" > {{ i.value }} </button>
          </div>
        </div>

        <span class="instagramAt mt-20">© JulianaNutri</span>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '../../assets/juliana_photo.png'
// import sideMenu from '../components/cpmMenu.vue'
// import infoSection from '../components/infoSection.vue'
// import cpmCards from '../components/cpmCards.vue'
// import workSection from '../components/workSection.vue'
// import SocialMidia from '../components/SocialMidia.vue'
// import Cards from '@/components/cpmScroolCards.vue'
// import foot from '../components/footer.vue'
import svgSet from '../../assets/svgSet/svgSet'


// juliana-picture.jpeg
export default {
  name: 'Home',
  components: {},
  data: ()=>({
    svgSet: svgSet,
    itens: [
      {value: 'LINK DA PAGINA DO PROGRAMA DE EMAGRECIMENTO INTENSIVO ', link: 'http://wa.me/5511945500265/'},
      {value: 'CURSO ', link: ''}
    ]
  }),

  created(){},
  methods:{},

}
</script>


<style scoped lang="scss">
.gradient-bg {
  display: block;
  background: rgb(1,31,2);
  background: linear-gradient(90deg, rgba(1,31,2,1) 0%, rgba(0,122,5,1) 100%);
  position: absolute;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  z-index: 1;

}

.main-page{
  display: block;
  z-index: 2;
  position: absolute;
  width: 100%;
  max-width: 100%;
}

.main-photo{
  display: block;
  border-radius: 100px;
  max-width: 100%;
  width: 8%;
}

.instagramAt{
  color: white;
  display: block;
  font-family: Roboto;
  font-weight: 500;
  font-size: 22px;
}

.container-icons{
  justify-content: space-around;
}

.block-icons-links{
  max-width: 100%;
  width: 15%;
}

.main-icon{
  color: white;
  display: block;
  max-width: 100%;
  width: 50px;
  font-size: 50px;
}

.button-main-link{
  display: block;
  max-width: 100%;
  width: 30%;
  height: 45px;
  border: none;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 7px 8px 15px rgba(0, 0, 0, 0.5);
  transition: 1s;

  &:hover {
    transform: translateY(-7px);
  }

}

</style>
