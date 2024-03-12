<template>
  <a :href="url" :target="target">
    <div :class="icon" :style="{ fontSize: size }"></div>
  </a>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    icon?: string
    url?: string
    target?: '_blank' | '_self'
    size?: string
  }>(),
  {
    target: '_blank',
    size: '2rem'
  }
)
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--el-text-color-primary);
}
</style>
