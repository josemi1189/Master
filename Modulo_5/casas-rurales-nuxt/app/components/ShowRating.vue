<script setup lang="ts">
const props = defineProps<{
  rating: number;
  totalReviews?: number;
}>();
const fullStars = Math.floor(props.rating);
const hasHalfStar = props.rating % 1 >= 0.5;
</script>

<template>
  <div
    role="img"
    :aria-label="`Calificación de ${rating} de 5 estrellas`"
    class="rating"
  >
    <span v-for="i in 5" :key="i">
      <IconsStarFill v-if="i <= fullStars" />
      <IconsStarHalf v-else-if="i === fullStars + 1 && hasHalfStar" />
      <IconsStarEmpty v-else />
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
