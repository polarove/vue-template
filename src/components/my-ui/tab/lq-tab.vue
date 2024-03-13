<template>
  <div class="lq-tab__container" :class="direction">
    <div class="lq-tab__tabs">
      <div
        v-for="(tab, index) in tabs"
        :class="{ active: currentTab?.value === index }"
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
  </div>
</template>

<script lang="ts" setup>
import { ComponentPublicInstance } from 'vue'
type direction = 'vertical' | 'horizontal'
export interface Tab {
  name: string
  value: number
  disabled: boolean
}

const props = withDefaults(
  defineProps<{
    modelValue: number
    tabs: Array<Tab>
    direction?: direction
    underlineLength?: number
    maxUnderlineLength?: number
  }>(),
  {
    direction: 'vertical',
    underlineLength: 30,
    maxUnderlineLength: 50
  }
)

const underlineWidthOnVerticalMode = props.underlineLength + 'px'
const maxUnderlineWidth = props.maxUnderlineLength + 'px'
const currentTab = ref<Tab>()
const mark = ref(true)
const underlineRef = shallowRef()
const emit = defineEmits(['update:modelValue'])
const tabRefs: Record<number, HTMLDivElement> = {}

const setupFirstTab = () => {
  const firstAvailableTab = props.tabs.find((item) => !item.disabled)
  if (firstAvailableTab) {
    if (!isNaN(props.modelValue))
      currentTab.value = props.tabs[props.modelValue]
    else currentTab.value = firstAvailableTab
  }
}

const setupRef = (
  index: number,
  el: Element | ComponentPublicInstance | null
) => {
  nextTick(() => {
    tabRefs[index] = el as HTMLDivElement
    if (mark.value) {
      setTimeout(() =>
        move(
          underlineRef.value!,
          caculateDistance(tabRefs[currentTab.value!.value])
        )
      )
      emit('update:modelValue', currentTab.value?.value)
      mark.value = false
    }
  })
}

const handleTabClick = (tab: Tab, index: number) => {
  if (tab.disabled) return
  else {
    saveTab(tab)
    move(underlineRef.value!, caculateDistance(tabRefs[index]))
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
      return distanceY
  }
}

const saveTab = (tab: Tab) => {
  currentTab.value = tab
  emit('update:modelValue', currentTab.value.value)
}

const move = (el: HTMLElement, distance: number) => {
  switch (props.direction) {
    case 'vertical':
      el.style.transform = `translateX(${distance}px)`
      break
    case 'horizontal':
      el.style.transform = `translateY(${distance + 5}px)`
      break
    default:
      break
  }
}

watch(
  () => props.direction,
  () =>
    setTimeout(() => {
      move(
        underlineRef.value!,
        caculateDistance(tabRefs[currentTab.value!.value])
      )
    })
)

const syncUnderline = () => {
  move(underlineRef.value!, caculateDistance(tabRefs[currentTab.value!.value]))
}

onMounted(() => {
  setupFirstTab()
  window.addEventListener('resize', syncUnderline)
})

onUnmounted(() => window.removeEventListener('resize', syncUnderline))

watch(
  () => props.modelValue,
  () => {
    currentTab.value!.value = parseInt(props.modelValue.toString())
    syncUnderline()
  }
)
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
    .lq-tab__underline {
      display: block;
      height: 2px;
      background-color: var(--el-color-primary);
      margin: auto;
      position: absolute;
      left: 0;
      max-width: v-bind(maxUnderlineWidth);
      transition: all 200ms ease-in-out;
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
      width: v-bind(underlineWidthOnVerticalMode);
      bottom: 0;
    }
  }
}

.lq-tab__container.horizontal {
  display: flex;
  overflow: hidden;
  .lq-tab__tabs {
    margin-right: 1rem;
    .lq-tab__tab {
      margin-bottom: 1rem;
    }
  }
  .lq-tab__underline {
    top: 0;
    width: 100%;
  }
}
</style>
