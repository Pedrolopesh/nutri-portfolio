<template>
    <div>
        <b-col class="container-header brake-small">
            <SecondSideMenu/>
        </b-col>

        <div v-if="postStep == 1">
            <IntagramPosts/>
        </div>

        <div v-else-if="postStep == 2">
            <SelectedPost/>
        </div>

        <Foot/>
    </div>
</template>

<script>
import SecondSideMenu from '../components/cpmSecondMenu.vue'
import IntagramPosts from '../components/cpmIntagramPosts.vue'
import SelectedPost from '../components/SelectedPost.vue'
import Foot from '../components/footer.vue'
import { mapActions, mapGetters } from "vuex";

export default {
    data:() => ({
        // post:2
    }),

    computed:{
        ...mapGetters({
            postStep: 'postStep'
        })
    },

    components:{
        SecondSideMenu,
        Foot,
        SelectedPost,
        IntagramPosts
    },

}
</script>