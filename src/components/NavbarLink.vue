<template lang="">
<div>
    <li>
        <router-link 
        :to="`/${index}`"
        class="nav-link" 
        :class="activeClass" 
        :title="`This link goes to the ${page.link.text} page`"
        >{{page.link.text}}</router-link>
    </li>
</div>
</template>

<script>
export default {
    props: ['page', 'index', 'isActive'],
    computed: {
        activeClass() {
            return {
                active: this.isActive,
                emphasize: this.isActive
            }
        }
    }

}
</script>

<style scoped>
.emphasize {
    text-decoration: underline !important;
}
</style>
