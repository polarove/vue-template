<template>
  <div class="footer">
    <el-text>
      Github@<a href="https://github.com/polarove" class="name">polarove</a>
    </el-text>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer {
  height: 3em;
  text-align: center;
  .name {
    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
