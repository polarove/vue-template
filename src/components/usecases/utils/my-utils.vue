<template>
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
