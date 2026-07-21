<script setup lang="ts">
defineProps<{
  rating: number;
  totalReviews?: number;
}>();
</script>

<template>
  <div
    role="img"
    :aria-label="`Calificación de ${rating} de 5 estrellas`"
    class="rating"
  >
    <span v-for="i in 5" :key="i">
      {{ i <= Math.floor(rating) ? "★" : "☆" }}
    </span>
    <span v-if="totalReviews">({{ totalReviews }})</span>
  </div>
</template>

<style lang="scss" scoped>
.rating {
  display: flex;
  justify-content: center;
  font-size: 1.2em;
}
</style>
