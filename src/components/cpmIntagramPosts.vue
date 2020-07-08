<template>
    <div class="container display-flex ac mt-15">

        <div v-if="loading" class="mb-20">
            <b-spinner variant="success" label="Spinning"></b-spinner>
        </div>

        <vs-row class="display-block mb-3" vs-justify="end">
            <!-- <p>Current: {{ currentx }}</p> -->

                <div class="ac mt-8" v-if="noData">
                    <h1>Não há publicações disponiveis</h1>
                </div>

            <div class="container-cards-posts p15" v-for="(i, index) in itens" :key="index">

                <div v-if="!noData" class="display-flex brake-small">

                <vs-card actionable class="cardx post-cards mt-3">

                    <div slot="media" @click="sendPost(i)">
                        <img :src='i.imageURL' class="image-publication-size">
                    </div>

                    <!-- <div>
                        <span>{{ i.comments }}</span>
                    </div> -->

                    <div slot="footer">
                        <vs-row vs-justify="flex-end" class="mt-1">
                            <vs-button target="_blank" :href="i.facebookURL" class="p10 mr-1 height-5" color="primary" type="gradient" >
                                <span class="icon-size-3 clr-w" v-html="svgSet.facebook_icon"></span>
                            </vs-button>
                            <vs-button target="_blank" :href="i.instagramURL" class="p10 mr-1 height-5" color="danger" type="gradient">
                                <span class="icon-size-3 clr-w" v-html="svgSet.instagram_icon"></span>
                            </vs-button>
                        </vs-row>
                    </div>

                </vs-card>

                <div class="ac display-block content-side-posts p20 ml-2">
                    <vs-button color="success" class="p5 font-s2 alg-txt-s mr-a display-block mw-100 w-100" type="line" @click="sendPost(i)">{{ i.title }}</vs-button>
                    <p class="p5 mt-1 alg-txt-s">{{ i.content }}</p>
                    <!-- <p class="p5 mt-1 alg-txt-s" v-if="i.content.length <= 500">{{ i.content }}</p> -->
                </div>

                    <div class="container-ads" v-if="index == 0">
                        anúncio
                    </div>
                </div>
            </div>
        </vs-row>

            <div v-if="!loading" :class="[noData ?'mb-20' : 'mb-5']" class="p15 mb-5">
                <!-- <vs-button @click="currentx++">Increment</vs-button>
                <vs-button @click="currentx--">Decrement</vs-button> -->
                <br><br>
                <vs-pagination @click="getAllPublication()" class="pagination" color="#7ebf67" :total="perPage" v-model="currentx"></vs-pagination>
            </div>
    </div>
</template>
<script>
import svgSet from '../assets/svgSet/svgSet'
import { mapActions, mapGetters } from "vuex";


export default {
    data:() => ({
        svgSet:svgSet,

        // url:process.env.VUE_APP_LOCAL_URL,
        url:process.env.VUE_APP_PROD_URL,

        currentx: 1,
        perPage:1,
        noData:'',
        nextDatas:'',
        loading:false,
        itens:[]

        // itens:[
        //     {image:'card-0.png', title:'titulo da postagem', comments:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, eligendi.'},
        //     {image:'card-1.png', title:'titulo da postagem', comments:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, eligendi.'},
        //     {image:'card-3.png', title:'titulo da postagem', comments:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, eligendi.'},
        //     {image:'card-4.png', title:'titulo da postagem', comments:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, eligendi.'},
        // ]
    }),

    created(){
        this.getAllPublication()
    },

    methods:{
        ...mapActions({
            changePostData: 'changePostData',
            changePostStep: 'changePostStep'
        }),

        getAllPublication(){
            this.loading = true

            let limit = 5
            let page = this.currentx
            this.$http.get(this.url + `/pagination/publications?page=${page}&limit=${limit}`).then(response => {
                console.log(response.data)
                if(response.data.next){
                    this.nextDatas = response.data.next
                    this.makePagination()
                }  

                let resultArray = response.data.result
                // console.log(resultArray.length)

                if(resultArray.length == 0){

                    setTimeout( () =>{
                        this.noData = true
                        this.loading = false
                        // console.log(this.loading)
                    
                }, 2000);

                }else{
                    
                    this.noData = false
                    this.loading = false
                
                }
                this.itens = response.data.result
            })
        },

        makePagination(){
            if(this.nextDatas){
                this.perPage = this.nextDatas.page
                console.log("chegou")
                console.log(this.perPage)
            }
        },

        sendPost(param){
            this.changePostData(param)
            this.changePostStep(2)
        }
    },

    watch: {
        currentx: function (val) {
            this.getAllPublication()
        }
    },
}
</script>


