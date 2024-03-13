<template>
  <section class="flex-between items-center">
    <h1>{{ $t('components') }} - Tab</h1>
  </section>
  <el-card>
    <template #header>
      <div class="flex-between">
        <el-text>current tab: {{ currentTab }}</el-text>
        <el-text>标签页</el-text>
      </div>
    </template>
    <div mb-4 flex items-center>
      <el-switch
        v-model="isVertical"
        active-text="vertical"
        inactive-text="horizontal"
      ></el-switch>
    </div>
    <lq-tab v-model="currentTab" :tabs="tabs" :direction="direction" />
  </el-card>
</template>

<script lang="ts" setup>
import { Tab } from '@/components/my-ui/tab/lq-tab.vue'

const currentTab = ref()
const tabs = reactive<Tab[]>([])
const isVertical = ref(true)
const direction = computed(() => (isVertical.value ? 'vertical' : 'horizontal'))

const generateTab = () => {
  for (let index = 0; index < 10; index++) {
    const newTab = {
      name: `tab_${index}`,
      value: `tab_value_${index}`,
      disabled: index % 2 === 1
    }
    tabs.push(newTab)
  }
}
generateTab()
</script>

<style lang="scss" scoped></style>
