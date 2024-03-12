<template>
  <div class="w-80% ma-auto">
    <announcement />
    <my-input />
    <my-card />
    <my-utils />
    <my-footer />
  </div>
</template>

<style lang="scss" scoped>
.component-card {
  margin-top: 2em;

  .check {
    color: var(--el-color-success) !important;
  }
}

.my-github {
  font-size: 2em;
  &:hover {
    color: var(--el-color-primary);
    cursor: pointer;
  }
}
</style>
