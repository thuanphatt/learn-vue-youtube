<template lang="">
<div>
    <nav :class="[`navbar-${theme}`,`bg-${theme}`,'navbar', 'navbar-expand-lg']">
        <a class="navbar-brand" href="index.html">My App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <navbar-link class="nav-item" v-for="(page, index) in publishedPages" :key="index" :page="page" :isActive="activePage === index"
                :index= "index"
                @actived = "$emit('actived')"
                >
                </navbar-link>
            </ul>
            <div class="btn btn-primary" @click.prevent="changeTheme()">
                Toggle
            </div>
        </div>
    </nav>
</div>
</template>

<script>
import NavbarLink from './NavbarLink.vue'
export default {
  components: {
    NavbarLink
  },
  created() {
    this.getThemeSettings()
  },
  computed: {
    publishedPages() {
      return this.pages.filter(p => p.published)
    }
  },
  props: ['pages', 'activePage'],
  data() {
    return {
      theme: 'light',
    }
  },
  methods: {
    changeTheme() {
      let theme = 'light'
      if (this.theme == 'light') {
        theme = 'dark'
      }
      this.theme = theme
      this.storeThemeSettings()
    },
    storeThemeSettings() {
      localStorage.setItem('theme', this.theme)
    },
    getThemeSettings() {
      let theme = localStorage.getItem('theme')
      if (theme) {
        this.theme = theme
      }
    }

  },

}
</script>

<style lang="">

</style>
