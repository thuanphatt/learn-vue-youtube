<template lang="">
<div>
    <h4>Edit {{page.pageTitle}}</h4>
    <div class="container mb-3">
        <div class="row">
            <div class="col">
                <form action="">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Page Title
                        </label>
                        <input type="text" name="" id="" class="form-control" v-model="page.pageTitle">
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Content</label>
                        <textarea name="" id="" rows="5" class="form-control" v-model="page.content"></textarea>
                    </div>
                </form>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link Text
                    </label>
                    <input type="text" name="" id="" class="form-control" v-model="page.link.text">
                </div>
                <div class="mb-3">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" v-model="page.published">
                        <label class="form-check-label" for="gridCheck1">Published</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <button class="btn btn-primary me-2" @click.prevent="submit">Edit</button>
            <button class="btn btn-secondary me-2" @click.prevent="goToPageList">Cancel</button>
            <button class="btn btn-danger" @click.prevent="deletePage">Delete</button>
        </div>
    </div>
</div>
</template>

<script setup>
import {
    useRouter
} from 'vue-router';
import {
    inject
} from 'vue';

const router = useRouter()
const pages = inject('$pages')
const bus = inject('$bus')

const {
    index
} = defineProps(['index'])
let page = pages.getSinglePage(index)

function submit() {
    pages.editPage(index, page)
    bus.$emit('page-updated', {
        index,
        page
    })
    goToPageList()
}
function deletePage() {
    pages.removePage(index)
    bus.$emit('page-deleted', {
        index
    })
    goToPageList()
}
function goToPageList() {
    router.push({ path: '/pages' })
}
</script>
