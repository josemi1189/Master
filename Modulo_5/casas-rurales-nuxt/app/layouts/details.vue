<script setup lang="ts">
import LogoImage from "~/components/HeaderLogo.vue";
import AppFooter from "./footer/AppFooter.vue";
</script>

<template>
  <header class="header">
    <LogoImage />
    <NuxtLink to="/" aria-label="Página principal" class="link">
      Inicio
    </NuxtLink>
  </header>
  <main><slot /></main>
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
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  .link {
    background: #ffffff;
    color: $primary-color;
    padding: 0.6em 1em;
    border-radius: $radius;
    box-shadow: $box-shadow;
    font-weight: 700;
    font-size: $fs-sm;

    &:hover {
      background: $primary-color;
      color: #fff;
    }
  }
}
</style>
