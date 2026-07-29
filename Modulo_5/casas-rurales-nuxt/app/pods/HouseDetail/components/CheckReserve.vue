<script setup lang="ts">
import { useReservedStore } from "~/stores/reservedStore.ts";

defineProps<{
  houseId: string;
}>();
const { getIsReserve, handleReserves } = useReservedStore();
</script>
<template>
  <div>
    <label htmlFor="reserved" className="{style.label}"> Reservada </label>
    <input
      id="reserved"
      type="checkbox"
      value="Reservado"
      class="check"
      :checked="getIsReserve(houseId)"
      @change="handleReserves(houseId)"
    />
  </div>
</template>
<style lang="scss" scoped>
.label {
  font-size: 1.2em;
  font-weight: 600;
  padding: 0 0.2em;
}
.check {
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 4px 1px #000;
}
</style>
