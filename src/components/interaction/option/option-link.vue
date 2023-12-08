<template>
  <span class="option">
    <slot></slot>
  </span>
  <slot name="icon"><i-mdi-open-in-new /></slot>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.option {
  cursor: pointer;
  &:hover {
    color: var(--el-color-primary);
  }
}
</style>
