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
<script setup>
import { ref, inject, computed, watch } from 'vue'
import { useRouter } from 'vue-router'

const bus = inject('$bus')
const pages = inject('$pages')
const router = useRouter()

let pageTitle = ref('')
let content = ref('')
let linkText = ref('')
let published = ref(true)

function submitForm() {
    if (!pageTitle || !content || !linkText) {
        alert('Please fill the form')
    }
    let newPage = {
        pageTitle: pageTitle.value,
        content: content.value,
        link: {
            text: linkText.value,
        },
        published: published.value
    }
    pages.addPage(newPage)
    bus.$emit('page-created', newPage);
    router.push({ path: '\pages' })
}

const isValidForm = computed(() => {
    !pageTitle || !content || !linkText
})
watch(pageTitle, (newTitle, oldTitle) => {
    if (linkText.value === oldTitle) {
        linkText.value = newTitle
    }
})
</script>
<style lang="">
    
</style>
