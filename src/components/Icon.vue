<script setup lang="ts">
defineProps({
  name: String,
  color: { type: String, default: "" },
  size: { type: String, default: '32px' },
  width: { type: String },
  height: { type: String },

  //xlink:href属性值的前缀
  prefix: { type: String, default: '#icon-' },
})
</script>

<template>
  <svg :style="{ width: width ?? size, height: height ?? size }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<style scoped></style>