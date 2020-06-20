<template>
    <div>
        <b-col class="container-header brake-small">
            <SecondSideMenu/>
        </b-col>

        <div class="">
            <IntagramPosts/>
        </div>

        <Foot/>
    </div>
</template>

<script>
import SecondSideMenu from '../components/cpmSecondMenu.vue'
import IntagramPosts from '../components/comIntagramPosts.vue'
import Foot from '../components/footer.vue'
export default {
    data:() => ({

    }),

    components:{
        SecondSideMenu,
        Foot,
        IntagramPosts
    }
}
</script>