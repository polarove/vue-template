<template>
  <el-card class="component-card">
    <template #header>
      <div class="flex-between">
        <el-text>value:&nbsp;{{ inputResult }}</el-text>
        <el-text>input - 输入框</el-text>
      </div>
    </template>

    <lq-input
      class="pb-2em"
      v-model="inputResult"
      :border="withBorder ? 'border' : 'underline'"
    >
      <template #affix>{{ affix }}</template>
      <template #suffix>{{ suffix }}</template>
      <template #message>{{ message }}</template>
    </lq-input>

    <div class="pb-2em">是否全边框：<el-switch v-model="withBorder" /></div>
    <lq-input
      label="前置内容"
      class="pb-2em"
      v-model="affix"
      :border="withBorder ? 'border' : 'underline'"
    >
    </lq-input>
    <lq-input
      label="后置内容"
      class="pb-2em"
      v-model="suffix"
      :border="withBorder ? 'border' : 'underline'"
    >
    </lq-input>
    <lq-input
      label="底部信息"
      class="pb-2em"
      v-model="message"
      :border="withBorder ? 'border' : 'underline'"
    >
    </lq-input>
  </el-card>
</template>

<script setup lang="ts">
const withBorder = ref<boolean>(false)
const inputResult = ref<string>('')
const affix = ref<string>('')
const suffix = ref<string>('')
const message = ref<string>('')
</script>
<style lang="scss" scoped></style>
