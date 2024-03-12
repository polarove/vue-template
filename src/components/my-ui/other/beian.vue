<template>
  <div class="vm text-center h-40px">
    <img
      src="@img/beian.png"
      style="width: 1em; margin-right: 5px"
      alt="beian"
    />
    <span class="text-size-[0.88em]">{{ code }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  code: string
}>()
</script>

<style lang="scss" scoped></style>
