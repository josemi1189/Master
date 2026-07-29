<script setup lang="ts">
import AppFooter from "./footer/AppFooter.vue";
import LogoImage from "~/components/HeaderLogo.vue";
</script>

<template>
  <header class="header">
    <div class="head">
      <LogoImage />
      <h1 class="title">Encuentra tu casa rural</h1>
    </div>
  </header>
  <main>
    <slot />
  </main>
  <AppFooter />
</template>

<style lang="scss" scoped>
.header {
  height: $heightHeader;
  background-color: $background;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;

  .head {
    display: flex;
    flex-direction: row;
    gap: 1em;
    .title {
      font-size: $fs-xl;
      font-weight: 900;
    }
  }
}
</style>
