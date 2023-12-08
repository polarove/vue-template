<template>
  <div class="h-100vh w-80% ma-auto">
    <section class="flex-between items-center">
      <h1>src/components - 模板自带的组件</h1>
      <wt-theme class="text-size-[2em]" />
    </section>
    <section>
      <el-card class="component-card">
        <template #header>
          <div class="flex-between">
            <div>value:{{ ainput }}</div>
            <el-text>input - 输入框 - with-border</el-text>
          </div>
        </template>
        <a-input v-model="ainput" />
      </el-card>

      <el-card class="component-card">
        <template #header>
          <div class="flex-between">
            <div>value: {{ binput }}</div>
            <el-text>input - 输入框 - no-border</el-text>
          </div>
        </template>

        <b-input v-model="binput">
          <template #append> <div class="i-mdi:search"></div> </template>
        </b-input>
      </el-card>
      <el-card class="component-card">
        <template #header>
          <div class="flex-between">
            <div>value: {{ code }}</div>
            <el-text>input - 验证码输入组件</el-text>
          </div>
        </template>

        <verification-code-input
          v-model="code"
          :count="count"
          :cell-unit="unit"
          @submit="submit"
          @check="testNumber"
          font-color="0 0 0 #000"
          ref="form"
        />
        <div mt-4>
          单元格内字符个数：
          <el-input-number v-model="unit" :step="1" :min="1" step-strictly />
        </div>
        <div mt-4>
          单元格个数：
          <el-input-number v-model="count" :step="1" :min="1" step-strictly />
        </div>
      </el-card>
    </section>
  </div>
</template>

<script setup lang="ts">
const ainput = ref<string>('')
const binput = ref<string>('')

const code = ref<string>('')
const unit = ref<number>(2)
const count = ref<number>(10)
const form = ref()

const testNumber = (str: string, callback: Function) => {
  callback(/^\d+$/.test(str))
}

const submit = () => {
  console.log('submit')
}
</script>

<style lang="scss" scoped>
.component-card {
  margin-top: 2em;
}
</style>
