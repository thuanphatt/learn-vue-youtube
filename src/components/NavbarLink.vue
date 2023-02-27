<template lang="">
    <div>
        <a class="nav-link" :class="activeClass" :href="page.link.url"
            :title="`This link goes to the ${page.link.text} page`"
            >{{page.link.text}}</a>
    </div>
</template>
<script>
export default {
    props: ['page', 'isActive'],
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