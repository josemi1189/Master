<script setup lang="ts">
const route = useRoute();

useSeoMeta({
  title: "Casas rurales - Nuxt",
  description: `Encuentra casa rural en alquiler de casas rurales ideales para familias y grupos.
    Jardín, barbacoa y todas las comodidades. Consulta disponibilidad y precios.`,
});
</script>

<template>PÁGINA DE DETALLE {{ route.params.id }}</template>
