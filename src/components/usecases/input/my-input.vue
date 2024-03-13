<template>
  <section class="flex-between items-center">
    <h1>{{ $t('components') }} - input</h1>
  </section>
  <verificatie-input />
  <border-input />
</template>

<script setup lang="ts"></script>
<style lang="scss">
.component-card {
  margin-top: 2em;

  .check {
    color: var(--el-color-success) !important;
  }
}
</style>
