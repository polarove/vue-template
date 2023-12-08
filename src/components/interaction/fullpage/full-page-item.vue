<template>
  <div class="full-page-item">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.full-page-item {
  width: 100%;
  height: 100%;
  scroll-snap-align: start;
}
</style>
