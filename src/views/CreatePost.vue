<template>
    <div>
        <h1>Pagina para criar um Publicação</h1>

        <div class="container">

        <!-- <input type="file" name="asa" @change="functionFile(e)">    -->

        <b-card
            header="Criar publicação"
        >

            <div class="container-post ac">
                <b-form-file v-model="photo" ref="file-input" class="mb-2" @change="onFileSelected"></b-form-file>

                <vs-input class="inputx mt-4 ac" placeholder="Titulo da publicação" v-model="title"/>
                <vs-textarea class="mt-3" label="Texto da publicação" v-model="content" />


                <div class="display-flex mt-4">
                    <vs-input class="inputx mt-1 ml-a" placeholder="Link da publicação" v-model="facebookURL"/>
                    <span class="mr-a input-link-icons" v-html="svgSet.facebook_icon"></span>
                </div>

                <div class="display-flex mt-4">
                    <vs-input class="inputx mt-1 ml-a" placeholder="Link da publicação" v-model="instagramURL"/>
                    <span class="mr-a input-link-icons" v-html="svgSet.instagram_icon"></span>
                </div>

                <div class="mw-50 ac display-block">
                    <b-btn class="mt-3" variant="outline-success" @click="createPublication()">Criar Publicação</b-btn>
                </div>
            </div>

        </b-card>

        </div>

    </div>
</template>

<script>
const fs = require('fs');
import svgSet from '../assets/svgSet/svgSet'

export default {
    data:() => ({
        selectedFile:null,
        title:'',
        content:'',
        facebookURL:'',
        instagramURL:'',

        svgSet: svgSet,

        url:process.env.VUE_APP_PROD_URL,
    }),

    methods: {

        onFileSelected(event){
            this.selectedFile = event.target.files[0]
        },

        createPublication(){
            const fd = new FormData();
            fd.append('photo', this.selectedFile)
            fd.append('title', this.title)
            fd.append('content', this.content)
            fd.append('facebookURL', this.facebookURL)
            fd.append('instagramURL', this.instagramURL)

            this.$http.post(this.url + '/create/publication',fd ).then(response => {
                console.log(response)
            })
        }
    },
}
</script>