<script setup lang="ts">
import vueDebounce from "vue-debounce";
const vDebounce = vueDebounce({ lock: true });

const props = defineProps<{
  filter: string;
  setFilter: (text: string) => void;
}>();

const text = ref("");

const resetFilter = () => {
  props.setFilter("");
  text.value = "";
};

const handleDebounceFilter = (text: string) => {
  props.setFilter(text);
};
</script>

<template>
  <div class="searchContainer">
    <label for="filter" class="sr-only"> Filtro por nombre </label>
    <input
      type="text"
      id="filter"
      name="filter"
      v-model="text"
      v-debounce="handleDebounceFilter"
      class="searchInput"
      placeholder="Buscar..."
      aria-label="Buscar casas"
    />
    <button
      type="button"
      class="clearBtn"
      @click="resetFilter"
      aria-label="Limpiar búsqueda"
      :disabled="!text"
    >
      <IconsClose />
    </button>
  </div>
</template>
<style lang="scss" scoped>
.searchContainer {
  position: relative;
  display: inline-block;
  max-width: 300px;

  .searchInput {
    width: 100%;
    padding: 12px 12px 12px 35px;
    border: none;
    border-radius: $radius;
    box-shadow: $box-shadow;
  }

  .clearBtn {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-40%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    padding: 0;
    color: #999;

    &:disabled {
      cursor: auto;
    }
  }
}
</style>
