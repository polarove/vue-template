<template>
  <div class="tab-underline" :style="{ width: width + 'px' }"></div>
</template>

<script setup lang="ts">
defineProps<{
  width: number
}>()
</script>

<style lang="scss" scoped>
.tab-container {
  .tab-underline {
    display: block;
    height: 2px;
    background-color: var(--el-color-primary);
    margin: auto;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(-50%);
    transition: all 0.2s ease-in-out;
  }
}
</style>
