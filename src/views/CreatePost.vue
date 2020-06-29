<template>
    <div>
        <h1>Pagina para criar um post</h1>

        <div class="container">

        <!-- <input type="file" name="asa" @change="functionFile(e)">    -->
            <div class="mw-50 ac">
                <b-form-file v-model="photo" ref="file-input" class="mb-2" @change="onFileSelected"></b-form-file>

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

        // urlBase64ToUint8Array(base64String) {

        // const padding = '='.repeat((4 - base64String.length % 4) % 4);
        // const base64 = (base64String + padding)
        //     .replace(/-/g, '+')
        //     .replace(/_/g, '/');

        // const rawData = window.atob(base64);
        // const outputArray = new Uint8Array(rawData.length);

        // for (let i = 0; i < rawData.length; ++i) {
        //     outputArray[i] = rawData.charCodeAt(i);
        // }

        // return outputArray;
        // },

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

        //     let body = {
        //         photo:this.selectedFile,
        //         title:this.title,
        //         content:this.content,
        //         facebookURL:this.facebookURL,
        //         instagramURL:this.instagramURL
        //     }
        //     console.log(body)

        
        // let headers= {
        //     "Content-Type": "multipart/form-data"
        // }

            this.$http.post(this.url + '/create/publication',fd ).then(response => {
                console.log(response)
            })
        }
    },
}
</script>