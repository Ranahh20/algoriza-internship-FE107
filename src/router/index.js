import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import searchPage from "../views/searchPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
      meta: {
        title: "Home",
      },
    },

    {
      path: "/searchPage",
      name: "search",
      component: searchPage,
      meta: {
        title: "Search",
      },


    },
    
  ],
});


export default router;
