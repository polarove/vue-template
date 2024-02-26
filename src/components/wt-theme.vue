<template>
  <div
    @click="toggleDark()"
    class="gy-theme"
    :class="isDark ? 'i-mdi:weather-night' : 'i-mdi:white-balance-sunny'"
  ></div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@composables/theme'
</script>

<style lang="scss" scoped>
.gy-theme {
  &:hover {
    cursor: pointer;
    color: var(--el-color-primary);
  }
}
</style>
