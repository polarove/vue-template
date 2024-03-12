<template>
  <section class="flex-between items-center">
    <h1>toolcat - utils</h1>
    <div>
      <social-icon
        url="https://www.npmjs.com/package/@polaris_liu/toolcat"
        icon="i-mdi:npm"
        class="hover-color-primary"
        size="3.5rem"
      />
      <social-icon
        url="https://github.com/polarove/toolcat"
        icon="i-mdi:github"
        class="hover-color-primary"
      />
      <wt-theme class="text-size-[2em]" />
    </div>
  </section>
  <section style="font-family: system-ui">
    <div>Hutool 风格的工具类，由 typescript 编写而成</div>
    <div class="mt-0.67em">
      - StrUtil.isEmpty(''): {{ StrUtil.isEmpty('') }}
    </div>
    <div class="mt-0.67em">
      - ObjUtil.isEmpty({}): {{ ObjUtil.isEmpty({}) }}
    </div>
  </section>
</template>

<script lang="ts" setup>
import { StrUtil, ObjUtil } from '@polaris_liu/toolcat'
</script>

<style lang="scss" scoped></style>
