<template>
  <section class="flex-between items-center">
    <h1>{{ $t('components') }} - Tab</h1>
  </section>
  <el-card>
    <template #header>
      <div class="flex-between">
        <el-text>current tab: {{ currentTab }}</el-text>
        <el-text>标签页（半成品）</el-text>
      </div>
    </template>
    <div mb-4 flex items-center>
      <el-switch
        v-model="isVertical"
        active-text="vertical"
        inactive-text="horizontal"
        class="mr-4em"
      ></el-switch>
      <el-switch
        v-model="fasf"
        active-text="禁用偶数"
        inactive-text="禁用奇数"
      ></el-switch>
    </div>
    <div mb-4 flex items-center>
      <lq-input style="width: 200px" v-model="currentTab" label="当前tab" />
      <span class="i-mdi:alert color-red text-size-[1.4rem]"></span
      >警告，本组件还有 1/3
      个错误没有处理，205936个bug没有解决，29349警告不知道从哪里蹦出来的。
    </div>
    <lq-tab
      v-model="currentTab"
      :tabs="tabs"
      :direction="direction"
      class="mt-2rem"
    >
      <img
        alt="polarove"
        src="https://avatars.githubusercontent.com/u/95893742?v=4"
        class="el-image__inner"
        style="object-fit: cover"
      />
    </lq-tab>
  </el-card>
</template>

<script lang="ts" setup>
import { Tab } from '@/components/my-ui/tab/lq-tab.vue'

const currentTab = ref<number>(5)
const tabs = reactive<Tab[]>([])
const isVertical = ref(true)
const fasf = ref(true)
const direction = computed(() => (isVertical.value ? 'vertical' : 'horizontal'))
const generateTab = (of: number) => {
  for (let index = 0; index < 10; index++) {
    const newTab = {
      name: `tab_${index}`,
      value: index,
      disabled: index % 2 === of
    }
    tabs.push(newTab)
  }
}
generateTab(1)

watchEffect(() => {
  if (fasf.value) {
    tabs.splice(0, tabs.length)
    generateTab(1)
  } else {
    tabs.splice(0, tabs.length)
    generateTab(0)
  }
})
</script>

<style lang="scss" scoped></style>
