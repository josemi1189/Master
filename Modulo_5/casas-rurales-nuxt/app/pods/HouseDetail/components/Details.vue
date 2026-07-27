<script setup lang="ts">
import type { HouseDetails } from "~/types/houseDetails";

defineProps<{
  house: HouseDetails;
}>();
</script>

<template>
  <div class="details">
    <div class="groupColumn">
      <dt class="termTitle">Descripción</dt>
      <dd class="termDescription">{{ house.description }}</dd>
    </div>
    <div class="groupRow">
      <dt class="termTitle">Dirección:</dt>
      <dd class="termDescription">
        {{ `${house.address}, ${house.city} (${house.country})` }}
      </dd>
    </div>
    <div class="groupRow">
      <dt class="termTitle">Habitaciones:</dt>
      <dd class="termDescription">{{ house.bedrooms }}</dd>
    </div>
    <div class="groupRow">
      <dt class="termTitle">Camas:</dt>
      <dd class="termDescription">{{ house.beds }}</dd>
    </div>
    <div class="groupRow">
      <dt class="termTitle">Baños:</dt>
      <dd class="termDescription">{{ house.bathrooms }}</dd>
    </div>
  </div>
</template>

<style lang="scss">
.details {
  display: flex;
  flex-direction: column;
  gap: 2em;
  .groupColumn {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
  }
  .groupRow {
    display: flex;
    flex-direction: row;
  }
  .termTitle {
    font-weight: bold;
  }
  .termDescription {
    margin: 0;
    padding-left: 0.4em;
  }
}
</style>
