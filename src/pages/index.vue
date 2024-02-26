<template>
  <div class="w-80% ma-auto pb-200px pt-100px">
    <section class="flex-between items-center">
      <h1>compoenents - input</h1>
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
            <el-radio-button label="small" />
            <el-radio-button label="default" />
            <el-radio-button label="large" />
          </el-radio-group>
        </div>
      </el-card>
    </section>
    <el-divider />
    <section class="flex-between items-center">
      <h1>toolcat - utils</h1>
      <wt-theme class="text-size-[2em]" />
    </section>
    <section style="font-family: system-ui">
      StrUtil.isEmpty(''): {{ StrUtil.isEmpty('') }}
    </section>
    <el-divider />
    <section class="flex-between items-center">
      <h1>compoenents - card</h1>
      <wt-theme class="text-size-[2em]" />
    </section>
    <section flex-center-col>
      <rotate-card c-p @click="profile()" type="square">
        <el-image
          src="https://avatars.githubusercontent.com/u/95893742?v=4"
          alt="polarove"
          fit="cover"
        />
      </rotate-card>
    </section>
  </div>
  <div class="footer">
    <el-text>
      Github@<a href="https://github.com/polarove" class="name">polarove</a>
    </el-text>
  </div>
</template>

<script setup lang="ts">
import { StrUtil } from '@polaris_liu/toolcat'
const ainput = ref<string>('')
const binput = ref<string>('')

const code = ref<string>('')
const unit = ref<number>(2)
const count = ref<number>(10)
const autoSubmit = ref<boolean>(false)
const form = ref()
const size = ref<string>('default')

const testNumber = (str: string, callback: Function) => {
  callback(/^\d+$/.test(str))
}

const submit_emitted = ref(false)
const submit = () => {
  console.log('submit')
  submit_emitted.value = true
}

const profile = () => {
  window.open('https://github.com/polarove')
}
</script>

<style lang="scss" scoped>
.component-card {
  margin-top: 2em;

  .check {
    color: var(--el-color-success) !important;
  }
}
.footer {
  height: 3em;
  text-align: center;
  .name {
    &:hover {
      color: var(--el-color-primary);
    }
  }
}
</style>
