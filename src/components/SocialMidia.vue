<template>
    <div class="mt-7">

        <vs-row vs-justify="center">

            <vs-col class="d-flex brake-small">
            <vs-card actionable v-for="(i,index) in itens" :key="index" class="cardx social-card ac">

                <div slot="media">
                    <img :src='i.imageSRC' class="image-card ac">
                </div>

                <div>
                <span>{{ i.content }}</span>
                </div>

                <div slot="footer">
                <vs-row vs-justify="flex-end">
                        <vs-button target="_blank" :href="i.facebookURL" class="p10 mr-1 height-5" color="primary" type="gradient" >
                            <span class="icon-size-3 clr-w" v-html="svgSet.facebook_icon"></span>
                        </vs-button>
                        <vs-button target="_blank" :href="i.instagramURL" class="p10 mr-1 height-5" color="danger" type="gradient">
                            <span class="icon-size-3 clr-w" v-html="svgSet.instagram_icon"></span>
                        </vs-button>
                </vs-row>
                </div>

            </vs-card>
            </vs-col>

        </vs-row>

    </div>
</template>


<!-- <img class="img-size-instagram" src="../../public/img/apple.jpeg"> -->



<!-- <b-icon-heart class="size-icon"/> -->
<!-- <b-icon-chat class="size-icon"/> -->
<!-- <b-icon-cursor class="size-icon"/> -->
<script>
import svgSet from '../assets/svgSet/svgSet'

export default {
    components:{
    },

    data:() => ({
        svgSet: svgSet,
        itens:[
            {
                imageSRC:'./vitamina-c.jpg', 
                content:'A vitamina C ou ácido ascórbico, é uma das principais fontes para a melhora da imunidade...',
                facebookURL:'https://www.facebook.com/nutrijulianalopess/photos/a.1506552056315304/2318618301775338/',
                instagramURL:'https://www.instagram.com/p/CBmLCGMg3a1/'
            },
            {
                imageSRC:'./purple.jpg', 
                content:'NOVE VERDADES SOBRE O TRANSTORNO ALIMENTAR. O que você precisa saber: O transtorno alimentar está...',
                facebookURL:'https://www.facebook.com/nutrijulianalopess/photos/a.1506552056315304/2307237182913450/',
                instagramURL:'https://www.instagram.com/p/CA-ijtXgrf-/'
            },
            {
                imageSRC:'./green.jpg', 
                content:'Sobre o funcionamento das consultas, consulta individualizada, avaliação física e alimentar...',
                facebookURL:'https://www.facebook.com/nutrijulianalopess/photos/a.1506552056315304/2201051303532039/',
                instagramURL:'https://www.instagram.com/p/B7D3AvFgXlq/'
            },

        ]
    })
    
}
</script>