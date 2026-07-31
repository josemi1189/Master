<!-- error.vue -->
<template>
  <NuxtLayout :name="details">
    <div class="not-found-layout">
      <!-- Verificamos si el error capturado es un 404 -->
      <div v-if="error?.statusCode === 404" class="content">
        <h1>{{ error.statusMessage }}</h1>
        <h2>Error 404</h2>

        <!-- Usamos clearError para limpiar el estado de fallo y redirigir con seguridad -->
        <button @click="handleError" class="btn">
          Volver a la página principal
        </button>
      </div>

      <!-- Captura de seguridad para otros tipos de errores (ej. 500) -->
      <div v-else class="content">
        <h1>Error {{ error?.statusCode }}</h1>
        <p>Algo ha salido mal</p>
        <button @click="handleError" class="btn">Reintentar</button>
      </div>
    </div></NuxtLayout
  >
</template>

<script setup>
defineProps({
  error: Object,
});

const handleError = () => {
  clearError({ redirect: "/" });
};
</script>

<style lang="scss" scoped>
.not-found-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  background-color: $background;
}
.content {
  padding: 2em;
}
h1 {
  font-size: $fs-3xl;
  color: rgb(168, 4, 4);
  font-family: $ff-title;
  text-wrap: balance;
}
h2 {
  font-size: $fs-xl;
  color: $text;
  font-family: $ff-body;
  padding: 1em 0;
}

.btn {
  padding: 12px 24px;
  background-color: $primary-color;
  color: #fff;
  border: none;
  border-radius: $radius;
  cursor: pointer;
  font-weight: bold;
}
.btn:hover {
  background-color: #333;
}
</style>
