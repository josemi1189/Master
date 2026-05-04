import HomePage from "@/views/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: routes.home,
      name: "home",
      component: HomePage,
    },
  ],
});

export default router;
