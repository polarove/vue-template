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
  <el-card style="font-family: system-ui">
    <template #header> Hutool 风格的工具类，由 typescript 编写而成 </template>
    <div class="mb-2em">
      <p class="mt-0.67em">- StrUtil.isEmpty(''): {{ StrUtil.isEmpty(str) }}</p>
      <lq-input v-model="str" label="输入任意字符串"></lq-input>
    </div>
    <div class="mb-2em">
      <p class="mt-0.67em">- StrUtil.isBlank(''): {{ StrUtil.isBlank(ef) }}</p>
      <lq-input v-model="ef" label="输入任意字符串"></lq-input>
    </div>
    <p class="mt-0.67em">- ObjUtil.isEmpty({}): {{ ObjUtil.isEmpty({}) }}</p>
  </el-card>
</template>

<script lang="ts" setup>
import { StrUtil, ObjUtil } from '@polaris_liu/toolcat'
const str = ref('')
const ef = ref('')
</script>

<style lang="scss" scoped></style>
