import HomePage from "@/views/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import FavoritesPage from "@/views/FavoritesPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.home,
      name: "home",
      component: HomePage,
    },
    {
      path: routes.favorites,
      name: "favorites",
      component: FavoritesPage,
    },
  ],
});

export default router;
