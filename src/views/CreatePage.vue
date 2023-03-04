<template lang="">
    <div class="container mb-3">
       <div class="row">
        <div class="col">
            <form action="">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <input type="text" name="" id="" class="form-control"
                v-model="pageTitle"
                    >
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Content</label>
                    <textarea name="" id=""  rows="5" class="form-control"
                    v-model="content"
                    ></textarea>
                </div>
             </form>
        </div>
        <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                    Link Text
                    </label>
                    <input type="text" name="" id="" class="form-control"
                    v-model="linkText"
                    >
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">
                    Link URL
                    </label>
                    <input type="text" name="" id="" class="form-control"
                    v-model="linkUrl"
                    />
                </div>
              <div class="mb-3">
             <div class="form-check">
                <input  class="form-check-input" type="checkbox"
                v-model="published"
                >
                <label  class="form-check-label" for="gridCheck1">Published</label>
             </div>
              </div>
            </div>
       </div>
       <div class="mb-3">
              <button class="btn btn-primary"
              @click.prevent="submitForm"
              :disabled="isValidForm"
              >Created Page</button>
            </div> 
    </div>
</template>
<script>

export default {
    emits: {
        pageCreated(pageObj) {
            return false
        }
    },
    props: ['pageCreated'],
    computed:
    {
        isValidForm() {
            return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl
        }
    }
    ,
    data() {
        return {
            pageTitle: '',
            content: '',
            linkText: '',
            linkUrl: '',
            published: true
        }
    },
    methods: {
        submitForm() {
            if (!this.pageTitle || !this.content || !this.linkText || !this.linkUrl) {
                alert('Please fill the form')
            }
            this.$emit('pageCreated', {
                pageTitle: this.pageTitle,
                content: this.content,
                link: {
                    text: this.linkText,
                    url: this.linkUrl
                },
                published: this.published
            });
        }
    },
    watch: {
        pageTitle(newTitle, oldTitle) {
            if (this.linkText === oldTitle) {
                this.linkText = newTitle
            }
        }
    }
}
</script>
<style lang="">
    
</style>
