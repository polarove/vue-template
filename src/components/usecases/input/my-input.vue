<template>
  <section class="flex-between items-center">
    <h1>{{ $t('components') }} - input</h1>
    <div>
      <social-icon
        url="https://github.com/polarove/toolcat"
        icon="i-mdi:github"
        class="hover-color-primary"
      />
      <wt-locale size="2.4em" class="mr-1em ml-1em" />
      <wt-theme class="text-size-[2em]" />
    </div>
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
