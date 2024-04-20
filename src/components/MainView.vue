<template>
  <div class="h-full w-full overflow-x-scroll">
    <div class="m-1 flex space-x-5">
      <button @click="addCard1">Card1</button>
      <button @click="addCard2">Card2</button>
      <button @click="addImage">Image</button>
      <button @click="addDialog">Dialog</button>
    </div>
    <GridLayout
      class="border border-gray-200"
      v-model:layout="layout"
      :is-draggable="true"
      :col-num="8"
      :row-height="30"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <GridItem
        v-for="item in layout"
        :key="item.i"
        class="item"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <component
          :is="components[item.component]"
          :item="item"
        ></component>
      </GridItem>
    </GridLayout>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineAsyncComponent } from "vue"
import { GridLayout, GridItem } from "vue3-grid-layout-next"

import { ItemClass, Card1Class, Card2Class, DialogClass, ImageClass } from "../models/Item"
import { nanoid } from 'nanoid';

const components: { [key: string]: any } = {};
const layout = ref<ItemClass[]>([]);

const registerComponents = (item: ItemClass) => {
  // 登録済みだったら何もしない
  if (components[item.component]) {
    return;
  }

  // item.component の型を string にするとこの制限に引っかかるので注意
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations 
  const component = defineAsyncComponent({
    loader: () => import(`./Items/${item.component}.vue`)
  })
  // forEach は非同期に実行するのでもういちど存在確認をする
  if (components[item.component]) {
    return;
  }
  components[item.component] = component;
};

const addItem = (item: ItemClass) => {
  console.log('add', item.i);
  layout.value.push(item);
  registerComponents(item);
} 

const addCard1 = () => {
  const card = new Card1Class(nanoid());
  addItem(card);
}

const addCard2 = () => {
  const card = new Card2Class(nanoid());
  addItem(card);
}

const addDialog = () => {
  const card = new DialogClass(nanoid());
  addItem(card);
}

const addImage = () => {
  const card = new ImageClass(nanoid());
  addItem(card);
}

onMounted(() => {
  const initialItems: ItemClass[] = [
    new Card1Class(nanoid()),
    new Card1Class(nanoid()),
    new Card1Class(nanoid()),
  ];

  initialItems.forEach(item => addItem(item));
});
</script>

<style lang="css" scoped>
.item {
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  border-radius: 10px;
  border: 1px solid #F5F5F5;
  background-color: #ccc;
}
</style>
