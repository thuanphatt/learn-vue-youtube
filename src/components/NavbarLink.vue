<template lang="">
<div>
    <li>
        <router-link 
        :to="`/${index}`"
        class="nav-link" 
        active-class="active"
        aria-current="page"
        :title="`This link goes to the ${page.link.text} page`"
        >{{page.link.text}}</router-link>
    </li>
</div>
</template>

<script>
export default {
    props: ['page', 'index'],

}
</script>

