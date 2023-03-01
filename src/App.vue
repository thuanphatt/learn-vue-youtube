<template lang="">
    <div>
        <navbar ></navbar>
        <router-view></router-view>
       
    </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
export default {
    components: {
        Navbar,
    },
    methods: {
        pageCreated(pageObj) {
            this.pages.push(pageObj)
        }
    }

}
</script>
<style lang="">
    
</style>