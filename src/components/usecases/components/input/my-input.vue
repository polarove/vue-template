<template>
  <section class="flex-between items-center">
    <h1>compoenents - input</h1>
    <div>
      <social-icon
        url="https://github.com/polarove/toolcat"
        icon="i-mdi:github"
        class="hover-color-primary"
      />
      <wt-theme class="text-size-[2em]" />
    </div>
  </section>
  <section>
    <el-card class="component-card">
      <template #header>
        <div class="flex-between">
          <el-text>value:&nbsp;{{ inputResult }}</el-text>
          <el-text>input - 输入框 - no-border</el-text>
        </div>
      </template>

      <lq-input v-model="inputResult">
        <template #append> <div class="i-mdi:search"></div> </template>
      </lq-input>

      <el-switch v-model="withBorder" />
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
        :size="size"
        @submit="submit"
        @check="testNumber"
        font-color="0 0 0 #000"
        ref="form"
      />
      <div mt-4 flex items-center>
        单元格内字符个数：
        <el-input-number v-model="unit" :step="1" :min="1" step-strictly />
      </div>
      <div mt-4 flex items-center>
        单元格个数：
        <el-input-number v-model="count" :step="1" :min="1" step-strictly />
      </div>
      <div mt-4 flex items-center>
        自动提交：
        <el-switch v-model="autoSubmit" />
      </div>
      <div mt-4 flex items-center>
        大小：
        <el-radio-group v-model="size">
          <el-radio-button label="small" value="small" />
          <el-radio-button label="default" value="default" />
          <el-radio-button label="large" value="large" />
        </el-radio-group>
      </div>
    </el-card>
  </section>
</template>

<script setup lang="ts">
const withBorder = ref<boolean>(false)
const inputResult = ref<string>('')

const code = ref<string>('')
const unit = ref<number>(1)
const count = ref<number>(6)
const autoSubmit = ref<boolean>(true)
const form = ref()
const size = ref<string>('default')

const testNumber = (str: string, callback: Function) => {
  callback(/^\d+$/.test(str))
}

const submit_emitted = ref(false)
const submit = () => {
  console.log(code.value)

  console.log('submit')
  alert('submit!')
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
