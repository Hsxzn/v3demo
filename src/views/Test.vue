<template>
  <van-field
    v-model="result"
    is-link
    readonly
    label="城市"
    placeholder="选择城市"
    @click="showPicker = true"
  />
  <van-popup v-model:show="showPicker" round position="bottom">
    <van-picker
      :columns="columns"
      @cancel="showPicker = false"
      @confirm="onConfirm"
    />
  </van-popup>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let narray = Array.from({ length: 12 }, (x, k) => k).map((value) => {
  let children = Array.from({ length: 12 - value }, (x, k) => {
    return {
      text: 12 - k,
    };
  }).reverse();
  return {
    text: value + 1,
    children,
  };
});
const columns = ref(narray);
const result = ref<string>("");
const showPicker = ref(false);
const onConfirm = (value) => {
  result.value = `${value[0].text}/${value[1].text}`;
  showPicker.value = false;
};
</script>
