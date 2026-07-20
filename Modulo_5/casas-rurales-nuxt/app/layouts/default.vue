<script setup lang="ts">
import AppFooter from "./footer/AppFooter.vue";
import AppHeaderMain from "./header/AppHeaderMain.vue";
</script>

<template>
  <AppHeaderMain />
  <main>
    <slot />
  </main>
  <AppFooter />
</template>
;
