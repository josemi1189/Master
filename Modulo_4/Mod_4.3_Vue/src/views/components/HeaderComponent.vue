<script setup lang="ts">
import { RouterLink } from "vue-router";
import { routes } from "@/router/routes";
import ConfigIcon from "@/assets/commons/icons/ConfigIcon.vue";
</script>

<template>
  <div
    class="flex flex-row justify-between items-center p-3 bg-dark-primaryColor"
  >
    <h1 class="font-black text-2xl sm:text-3xl text-dark-textLight">
      Meal Planner
    </h1>
    <div class="flex gap-2">
      <RouterLink
        :to="routes.home"
        class="shadow-md p-2 rounded-md bg-amber-100 hover:bg-dark-accent hover:text-white"
        active-class="active-link"
      >
        Planning
      </RouterLink>
      <RouterLink
        :to="routes.favorites"
        class="shadow-md p-2 rounded-md bg-amber-100 hover:bg-dark-accent hover:text-white"
        active-class="active-link"
      >
        Favoritos
      </RouterLink>
      <RouterLink
        :to="routes.config"
        class="shadow-md p-2 rounded-md bg-amber-100 hover:bg-dark-accent hover:text-white"
        active-class="active-link"
      >
        <ConfigIcon />
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
.active-link {
  background-color: theme("colors.dark.accent");
  color: white;
  font-weight: bold;
}
</style>
