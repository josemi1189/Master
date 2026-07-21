<script setup lang="ts">
import ShowRating from "~/components/ShowRating.vue";
import type { House } from "../../types/house";

/*
  const { getIsReserve } = useContextReserved();
  */
const isReserve = ref<boolean>(false); // getIsReserve(house.id);

defineProps<{
  house: House;
}>();
</script>
<template>
  <article class="card">
    <NuxtLink
      :href="`/detalle/${house.id}`"
      aria-label="Ir a página de detalle de {{house.name}}"
    >
      <div class="image">
        <NuxtImg
          :src="house.image"
          width="340"
          height="340"
          class="isReserve"
          style="object-fit: cover"
          :alt="`${house.name}. Ubicada en ${house.address}, ${house.city}.`"
        />
        <!--<MarkReserved v-if="isReserve" />-->
        <div class="rating">
          <ShowRating
            :rating="house.rating"
            :totalReviews="house.totalReviews"
          />
        </div>
      </div>
      <footer class="content">
        <span class="name">{{ house.name }}</span>
        <span class="address">{{ `${house.address} (${house.city})` }}</span>
        <div class="details">
          <div
            aria-label="Número de habitaciones"
            :title="`${house.bedrooms} habitaciones`"
          >
            <IconsBedrooms />
            <span>{{ house.bedrooms }}</span>
          </div>
          <div aria-label="Número de baños" :title="`${house.bathrooms} baños`">
            <IconsBathrooms />
            <span>{{ house.bathrooms }}</span>
          </div>
          <div aria-label="Número de camas" :title="`${house.beds} camas`">
            <IconsBed /> <span>{{ house.beds }}</span>
          </div>
        </div>
        <div>
          <span class="price">{{ `${house.price}€` }}</span>
          <span class="labelNight">/noche</span>
        </div>
      </footer>
    </NuxtLink>
  </article>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  .image {
    position: relative;
    img {
      border-radius: $radius;
      mask-image: linear-gradient(to bottom, $background 60%, transparent 100%);
      -webkit-mask-image: linear-gradient(
        to bottom,
        $background 60%,
        transparent 100%
      );
    }
    .rating {
      position: absolute;
      bottom: 15px;
      right: 15px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 0.6em 0.4em;
    font-size: $fs-sm;
    row-gap: 0.4em;

    .name {
      font-size: 1.1em;
      font-weight: 500;
    }
    .address {
      font-size: 0.7em;
      color: $color-700;
    }
    .price {
      font-weight: 600;
      color: $text;
    }
    .labelNight {
      font-size: 0.7em;
      color: $text;
    }

    .details {
      display: flex;
      flex-direction: row;
      gap: 1em;
      //color: #d1d1d1;
      color: $primary-color;

      span {
        padding-left: 5px;
      }
    }
  }
}

.isReserved {
  opacity: 0.5;
}
</style>
