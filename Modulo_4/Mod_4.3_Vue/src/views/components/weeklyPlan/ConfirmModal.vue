<template>
  <div class="fixed inset-0 flex items-center justify-center p-4">
    <div
      class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm"
      aria-hidden="true"
    ></div>
    <div
      class="w-96 min-w-fit p-6 flex flex-col shadow-xl rounded-lg justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-dark-bgdark"
    >
      <div class="text-lg text-center">
        ¿Está seguro de querer borrar todos los platos añadidos?
      </div>
      <div class="flex flex-row gap-6 pt-8">
        <button
          @click="accept()"
          class="border border-green-900 bg-green-700 text-white rounded-md px-8 py-1.5"
        >
          SI
        </button>
        <button
          @click="close()"
          class="border border-red-900 bg-red-700 text-white rounded-md px-8 py-1.5"
        >
          NO
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const emit = defineEmits({
  close: () => true,
  confirm: () => true,
});

const close = () => {
  emit("close");
};
const accept = () => {
  emit("confirm");
};
</script>
