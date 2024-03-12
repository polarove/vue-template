<template>
  <div class="text-center mt-1em">
    <div>
      This page was deployed through
      <a href="https://docs.github.com/en/actions" target="_self">
        Github Actions
      </a>
    </div>
    <div>
      A page that was deployed using a Dockerfile is available
      <a href="http://101.37.163.33:4856/" target="_self">
        here on my server
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: var(--el-color-primary);
}
</style>
