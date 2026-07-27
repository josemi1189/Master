<script setup lang="ts">
/* De Input:
  :checked="getIsReserve(houseID)"        
  v-on:change={handleReserve(houseID)}
*/
</script>
<template>
  <div>
    <label htmlFor="reserved" className="{style.label}"> Reservada </label>
    <input id="reserved" type="checkbox" value="Reservado" className="check" />
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
