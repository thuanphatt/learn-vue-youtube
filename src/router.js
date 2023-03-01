import { createRouter, createWebHashHistory } from "vue-router";
import CreatePageVue from "./views/CreatePage.vue";
import PageViewerVue from "./views/PageViewer.vue";
import Pages from "./views/Pages.vue";
import PageList from "./views/PageList.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/:index?", component: PageViewerVue, props: true },
    {
      path: "/pages",
      component: Pages,
      children: [
        { path: "", component: PageList },
        { path: "create", component: CreatePageVue },
      ],
    },
  ],
});
export default router;
