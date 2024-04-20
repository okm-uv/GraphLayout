<template>
  <div class="w-full h-full bg-red-400 object-fill">
    <img class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1713453321322-28ef26986cc0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image-200-200">
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ImageClass } from '../../models/Item'

defineProps({
  item: {
    type: Object as PropType<ImageClass>,
      required: true
  }
});
</script>

<style lang="css" scoped>
</style>