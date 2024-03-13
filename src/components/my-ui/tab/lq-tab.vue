<template>
  <div class="lq-tab__container" :class="direction">
    <div class="lq-tab__tabs">
      <div
        v-for="(tab, index) in tabs"
        :class="{ active: currentTab?.index === index }"
        :key="index"
        class="lq-tab__tab"
        :disabled="tab.disabled"
        :ref="(el: Element | ComponentPublicInstance | null) => setupRef(index, el)"
        @click="handleTabClick(tab, index)"
      >
        {{ tab.name }}
      </div>
      <div class="lq-tab__underline" ref="underlineRef"></div>
    </div>
    <div class="lq-tab__view">fasf</div>
  </div>
</template>

<script lang="ts" setup>
import { ComponentPublicInstance } from 'vue'
export interface Tab {
  name: string
  value: string
  disabled: boolean
}

interface CurrentTab extends Tab {
  index: number
}

type direction = 'vertical' | 'horizontal'

const props = withDefaults(
  defineProps<{
    modelValue: Tab | undefined
    tabs: Array<Tab>
    direction?: direction
    underlineLength?: number
  }>(),
  {
    direction: 'vertical',
    underlineLength: 30
  }
)

const currentTab = ref<CurrentTab>()
const mark = ref(true)
const underlineRef = shallowRef()
const emit = defineEmits(['update:modelValue'])
const refs: Record<number, HTMLDivElement> = {}

const setupFirstTab = () => {
  const firstAvailableTab = props.tabs.find((item) => !item.disabled)
  if (firstAvailableTab) {
    const index = props.tabs.indexOf(firstAvailableTab)
    currentTab.value = { ...firstAvailableTab, index }
  }
}

const setupRef = (
  index: number,
  el: Element | ComponentPublicInstance | null
) => {
  nextTick(() => {
    refs[index] = el as HTMLDivElement
    if (mark.value) {
      const firstEl = refs[currentTab.value!.index]
      move(underlineRef.value!, caculateDistance(firstEl!))
      emit('update:modelValue', currentTab.value)
      mark.value = false
    }
  })
}

const handleTabClick = (tab: Tab, index: number) => {
  if (tab.disabled) return
  else {
    saveTab({ ...tab, index })
    move(underlineRef.value!, caculateDistance(refs[index]))
  }
}

const caculateDistance = (targetTab: HTMLDivElement) => {
  switch (props.direction) {
    case 'vertical':
      const distanceX =
        targetTab.offsetLeft +
        (targetTab.clientWidth - props.underlineLength) / 2
      return distanceX
    case 'horizontal':
      const distanceY = targetTab.offsetTop + targetTab.clientHeight
      console.log(distanceY)

      return distanceY
  }
}

const saveTab = (tab: CurrentTab) => {
  currentTab.value = tab
  emit('update:modelValue', currentTab.value)
}

const move = (el: HTMLElement, distance: number) => {
  switch (props.direction) {
    case 'vertical':
      el.style.transform = `translateX(${distance}px)`
      break
    case 'horizontal':
      el.style.transform = `translateY(${distance}px)`
      break
    default:
      break
  }
}

watch(
  () => props.direction,
  () =>
    setTimeout(() => {
      syncUnderline()
    })
)

const syncUnderline = () => {
  move(underlineRef.value!, caculateDistance(refs[currentTab.value!.index]))
}

onMounted(() => {
  setupFirstTab()
  window.addEventListener('resize', syncUnderline)
})

onUnmounted(() => window.removeEventListener('resize', syncUnderline))

const underlineWidthOnVerticalMode = props.underlineLength + 'px'
</script>

<style lang="scss" scoped>
.lq-tab__container {
  width: 100%;
  .lq-tab__tabs {
    position: relative;
    .lq-tab__tab {
      cursor: pointer;
      &:hover {
        color: var(--el-color-primary);
      }
    }
    .lq-tab__tab[disabled='true'] {
      cursor: not-allowed;
      color: var(--el-color-info);
    }
    .lq-tab__tab.active {
      color: var(--el-color-primary);
    }
  }
}

.lq-tab__container.vertical {
  .lq-tab__tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    .lq-tab__underline {
      display: block;
      height: 2px;
      background-color: var(--el-color-primary);
      margin: auto;
      position: absolute;
      width: v-bind(underlineWidthOnVerticalMode);
      bottom: 0;
      left: 0;
      transition: all 200ms ease-in-out;
    }
  }
}

.lq-tab__container.horizontal {
  display: flex;
  .lq-tab__tabs {
    margin-right: 1rem;
    .lq-tab__tab {
      margin-bottom: 1rem;
    }
  }
  .lq-tab__underline {
    display: block;
    height: 2px;
    background-color: var(--el-color-primary);
    margin: auto;
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    transition: all 200ms ease-in-out;
  }
}
</style>
