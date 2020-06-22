<template>
    <div>
        <h1>Pagina para criar um post</h1>

        <div class="container">

        <!-- <input type="file" name="asa" @change="functionFile(e)">    -->
        <b-form-file
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        ></b-form-file>

        <vs-button color="danger" type="gradient" icon="favorite" @click="createPublication()">favorite</vs-button>
        </div>

    </div>
</template>

<script>
export default {
    data:() => ({
        file:null,
    }),

    methods: {
        functionFile(param){
            console.log(param)
        },

        createPublication(){
            console.log(this.file)
        }
    },
}
</script>