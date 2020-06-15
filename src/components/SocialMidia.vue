<template>
    <div class="mt-7">

        <vs-row vs-justify="center">

            <vs-col class="d-flex brake-small">
            <vs-card v-for="(i,index) in 3" :key="index" class="cardx social-card ac">

                <div slot="media">
                <img src="../../public/card-0.png" class="image-card ac">
                </div>

                <div>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, consectetur.</span>
                </div>

                <div slot="footer">
                <vs-row vs-justify="flex-end">
                    <vs-button type="gradient" color="danger">A</vs-button>
                    <vs-button color="primary">A</vs-button>
                    <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)">A</vs-button>
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


export default {
    components:{
    },

    data:() => ({
    })
    
}
</script>