<script setup lang="ts">
const year = () => new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    &copy; {{ year() }} José Miguel González Martín | Módulo 5 - Máster
    Lemoncode
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $bg-secondary;
  box-shadow: 0 -4px 6px 1px rgba(0, 0, 0, 0.3);
  padding: 1em;
  text-align: center;
}
</style>
