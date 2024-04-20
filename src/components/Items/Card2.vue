<template>
  <div class="card w-full h-full bg-gray-800 text-gray-200">
    Card 2
    {{ item.i }}
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Card2Class } from '../../models/Item'

defineProps({
  item: {
    type: Object as PropType<Card2Class>,
      required: true
  }
});
</script>

<style lang="css" scoped>
.card {
  word-break: break-word;
  white-space: wrap;
}
</style>