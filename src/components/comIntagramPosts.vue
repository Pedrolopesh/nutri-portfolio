<template>
    <div class="container display-flex ac mt-15">
        <vs-row class="display-block mb-3" vs-justify="end">
            <p>Current: {{ currentx }}</p>
            <div class="container-cards-posts p15" v-for="(i, index) in itens" :key="index">

                <div class="display-flex brake-small">

                <vs-card actionable class="cardx post-cards mt-3">

                    <div slot="media">
                        <img :src='"/"+ i.image'>
                    </div>

                    <!-- <div>
                        <span>{{ i.comments }}</span>
                    </div> -->

                    <div slot="footer">
                        <vs-row vs-justify="flex-end" class="mt-1">
                            <vs-button class="p10 mr-1 height-5" color="primary" type="gradient" >
                                <span class="icon-size-3 clr-w" v-html="svgSet.facebook_icon"></span>
                            </vs-button>
                            <vs-button class="p10 mr-1 height-5" color="danger" type="gradient">
                                <span class="icon-size-3 clr-w" v-html="svgSet.instagram_icon"></span>
                            </vs-button>
                        </vs-row>
                    </div>

                </vs-card>

                <div class="ac display-block content-side-posts p20 ml-2">
                    <vs-button color="success" class="p5 font-s2 alg-txt-s mr-a display-block mw-100 w-100" type="line">{{ i.title }}</vs-button>
                    <p class="p5 mt-1 alg-txt-s">{{ i.comments }}</p>
                </div>

                    <div class="container-ads" v-if="index == 0">
                        anúncio
                    </div>
                </div>
            </div>
        </vs-row>

            <div class="p15 mb-5">
                <!-- <vs-button @click="currentx++">Increment</vs-button>
                <vs-button @click="currentx--">Decrement</vs-button> -->
                <br><br>
                <vs-pagination class="pagination" color="#7ebf67" :total="2" v-model="currentx"></vs-pagination>
            </div>
    </div>
</template>
<script>
import svgSet from '../assets/svgSet/svgSet'

export default {
    data:() => ({
        svgSet:svgSet,

        currentx: 1,

        itens:[
            {image:'card-0.png', title:'titulo da postagem', comments:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, eligendi.'},
            {image:'card-1.png', title:'titulo da postagem', comments:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, eligendi.'},
            {image:'card-3.png', title:'titulo da postagem', comments:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, eligendi.'},
            {image:'card-4.png', title:'titulo da postagem', comments:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, eligendi.'},
        ]
    })
}
</script>