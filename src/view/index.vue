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
            <el-text>value:&nbsp;{{ ainput }}</el-text>
            <el-text>input - 输入框 - with-border</el-text>
          </div>
        </template>
        <a-input v-model="ainput" label-bg-color="var(--el-card-bg-color)" />
      </el-card>

      <el-card class="component-card">
        <template #header>
          <div class="flex-between">
            <el-text>value:&nbsp;{{ binput }}</el-text>
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
            <el-text>
              <span :class="{ check: submit_emitted }"
                >{{ submit_emitted ? 'submit:' : 'value:' }}&nbsp;</span
              >
              {{ code }}
            </el-text>

            <el-text>input - 验证码输入组件</el-text>
          </div>
        </template>

        <verification-code-input
          v-model="code"
          :count="count"
          :cell-unit="unit"
          :auto-submit="autoSubmit"
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
        <div mt-4>
          自动提交：
          <el-switch v-model="autoSubmit" />
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
const autoSubmit = ref<boolean>(false)
const form = ref()

const testNumber = (str: string, callback: Function) => {
  callback(/^\d+$/.test(str))
}

const submit_emitted = ref(false)
const submit = () => {
  console.log('submit')
  submit_emitted.value = true
}
</script>

<style lang="scss" scoped>
.component-card {
  margin-top: 2em;

  .check {
    color: var(--el-color-success) !important;
  }
}
</style>
