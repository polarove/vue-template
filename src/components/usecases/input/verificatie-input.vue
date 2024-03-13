<template>
  <el-card class="component-card">
    <template #header>
      <div class="flex-between">
        <el-text>
          <span :class="{ check: submit_emitted }"
            >{{ submit_emitted ? 'submit:' : 'value:' }}&nbsp;</span
          >
          {{ code }}
        </el-text>

        <el-text>验证码输入组件</el-text>
      </div>
    </template>

    <verification-code-input
      v-model="code"
      :count="count"
      :auto-focus="false"
      :cell-unit="unit"
      :auto-submit="autoSubmit"
      :size="size"
      @submit="submit"
      @check="test"
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
      Number Only：
      <el-switch v-model="numberOnly" />
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
</template>

<script setup lang="ts">
const code = ref<string>('')
const unit = ref<number>(1)
const count = ref<number>(6)
const autoSubmit = ref<boolean>(true)
const numberOnly = ref<boolean>(true)
const form = ref()
const size = ref<'default' | 'small' | 'large'>('default')

const test = (str: string, validator: Function) => {
  if (numberOnly.value) return validator(/^\d+$/.test(str))
  else return validator(/^\w+$/.test(str))
}

const submit_emitted = ref(false)
const submit = () => {
  console.log(code.value)

  console.log('submit')
  alert('submit!')
  submit_emitted.value = true
}
</script>
<style lang="scss" scoped></style>
