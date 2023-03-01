import { createRouter, createWebHashHistory } from "vue-router";
import CreatePageVue from "./components/CreatePage.vue";
import PageViewerVue from "./components/PageViewer.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/:index?", component: PageViewerVue, props: true },
    { path: "/create", component: CreatePageVue },
  ],
});
export default router;
