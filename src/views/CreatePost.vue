<template>
    <div>
        <h1>Pagina para criar um post</h1>

        <div class="container">

        <!-- <input type="file" name="asa" @change="functionFile(e)">    -->
            <div class="mw-50 ac">
                <b-form-file v-model="photo" ref="file-input" class="mb-2" @change="functionFile"></b-form-file>

                <vs-input class="inputx mt-3 ac" placeholder="Titulo da publicação" v-model="title"/>
                <vs-textarea class="mt-1" label="Texto da publicação" v-model="content" />


                <div class="display-flex">
                    <vs-input class="inputx mt-1 ml-a" placeholder="Link da publicação" v-model="facebookURL"/>
                    <span class="mr-a input-link-icons" v-html="svgSet.facebook_icon"></span>
                </div>

                <div class="display-flex">
                    <vs-input class="inputx mt-1 ml-a" placeholder="Link da publicação" v-model="instagramURL"/>
                    <span class="mr-a input-link-icons" v-html="svgSet.instagram_icon"></span>
                </div>

                <div class="mw-50 ac display-block">
                    <vs-button color="danger" type="gradient" icon="add" class="mt-3" @click="createPublication()">favorite</vs-button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import svgSet from '../assets/svgSet/svgSet'

export default {
    data:() => ({
        photo:null,
        title:'',
        content:'',
        facebookURL:'',
        instagramURL:'',

        svgSet: svgSet,
    }),

    methods: {
        functionFile(){
            console.log(this.file)
        },

        // createPublication(){
        //     let body = {
        //         photo:
        //     }
        // }
    },
}
</script>