<template>
    <div>

        <div class="container display-flex ac mt-15">

        <!-- <b-spinner variant="success" label="Spinning"></b-spinner> -->
        <vs-row class="display-block mb-3" vs-justify="end">


            <div class="container-cards-posts p15">

            <div>
                <button class="button-return" @click="returnStep">
                    <b-icon-arrow-left />
                    Voltar
                </button>
            </div>

                <div class="display-flex brake-small">

                <vs-card actionable class="cardx post-cards mt-3">

                    <div slot="media">
                        <img :src='localItens.imageURL' class="image-publication-size">
                    </div>


                    <div slot="footer">
                        <vs-row vs-justify="flex-end" class="mt-1">
                            <vs-button target="_blank" :href="localItens.facebookURL" class="p10 mr-1 height-5" color="primary" type="gradient" >
                                <span class="icon-size-3 clr-w" v-html="svgSet.facebook_icon"></span>
                            </vs-button>
                            <vs-button target="_blank" :href="localItens.instagramURL" class="p10 mr-1 height-5" color="danger" type="gradient">
                                <span class="icon-size-3 clr-w" v-html="svgSet.instagram_icon"></span>
                            </vs-button>
                        </vs-row>
                    </div>

                </vs-card>

                <div class="ac display-block content-side-posts p20 ml-2">
                    <vs-button color="success" class="p5 font-s2 alg-txt-s mr-a display-block mw-100 w-100" type="line">{{ localItens.title }}</vs-button>
                    <p class="p5 mt-1 alg-txt-s">{{ localItens.content }}</p>
                </div>

                    <div class="container-ads">
                        anúncio
                    </div>
                </div>
            </div>
        </vs-row>

    </div>

    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import svgSet from '../assets/svgSet/svgSet'

export default {
    data:() => ({
        svgSet: svgSet,

        localItens:'',

    }),
    computed:{
        ...mapGetters({
            postStep: 'postStep'
        })
    },

    created(){
        this.renderData()
    },

    methods:{
        ...mapActions({
            changePostStep: 'changePostStep'
        }),
        returnStep(){
            this.changePostStep(1)
            localStorage.removeItem('postData');
        },

        renderData(){
            this.localItens = JSON.parse(localStorage.getItem('postData'));
        }
    }
}
</script>