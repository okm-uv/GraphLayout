<template>
  <div class="card w-full h-full bg-gray-500">
    Card 1
    {{ item.i }}
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Card1Class } from '../../models/Item'

defineProps({
  item: {
    type: Object as PropType<Card1Class>,
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