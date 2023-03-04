<template lang="">
<div>
    <nav :class="[`navbar-${theme}`,`bg-${theme}`,'navbar', 'navbar-expand-lg']">
        <a class="navbar-brand" href="index.html">My App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <navbar-link class="nav-item" v-for="(page, index) in publishedPages" :key="index" :page="page" :index="index">
                </navbar-link>
                <router-link to="/pages" class="nav-link" active-class="active" aria-current="page">Pages
                </router-link>
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
  inject: ['$pages', '$bus'],
  created() {
    this.getThemeSettings()

    this.pages = this.$pages.getAllPages()

    this.$bus.$on('page-updated', () => {
      this.pages = [...this.$pages.getAllPages()]
    })
  },
  computed: {
    publishedPages() {
      return this.pages.filter(p => p.published)
    }
  },

  data() {
    return {
      theme: 'light',
      data: []
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
