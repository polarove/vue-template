<template>
  <div class="footer">
    <div>
      <el-text>
        Github@<a href="https://github.com/polarove" class="name">polarove</a>
      </el-text>
    </div>

    <div class="mt-0.525em">
      <el-text>From 2023 - Present</el-text>
      <span class="opacity-50">&ensp;&ensp;|&ensp;&ensp;</span>
      <el-text>
        <span :class="isD ? 'color-red' : ''">❤</span>
        <span>&nbsp;MIT LICENSE&nbsp;</span>
        <span :class="isD ? 'color-red' : ''">❤</span>
      </el-text>
    </div>
  </div>
</template>

<script lang="ts" setup>
const isD = computed(() => Math.random() > 0.5)
</script>

<style lang="scss" scoped>
.footer {
  height: 4em;
  text-align: center;
  .name {
    &:hover {
      color: var(--el-color-primary);
    }
  }
  a {
    color: var(--el-text-color-primary);
  }
}
</style>
