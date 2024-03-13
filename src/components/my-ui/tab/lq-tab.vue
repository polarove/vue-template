<template>
  <div class="lq-tab__container" :class="direction">
    <div class="lq-tab__tabs">
      <div
        v-for="(tab, order) in tabs"
        :key="order"
        :class="tab.disabled ? 'disabled' : 'available'"
        class="lq-tab__tab"
        :ref="(el: Element | ComponentPublicInstance | null) => setupRef(order, el)"
        @click="handleTabClick(tab, order)"
      >
        {{ tab.name }}
      </div>
      <div
        class="lq-tab__underline"
        :style="{ width: underlineLength + 'px' }"
        ref="underlineRef"
      ></div>
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
const props = withDefaults(
  defineProps<{
    modelValue: Tab | undefined
    tabs: Array<Tab>
    direction?: 'vertical' | 'horizontal'
    underlineLength?: number
    activeIndex?: number
  }>(),
  {
    direction: 'vertical',
    underlineLength: 30,
    activeIndex: 0
  }
)

const emit = defineEmits(['update:modelValue'])
const tabState = reactive({
  index: props.activeIndex
})
const underlineRef = shallowRef(null)
const refs: Record<number, HTMLDivElement> = {}
const setupRef = (
  order: number,
  el: Element | ComponentPublicInstance | null
) => {
  nextTick(() => {
    refs[`${order}`] = el as HTMLDivElement
    if (order === props.tabs.length - 1) {
      console.log(4)

      // we only execute once when it hits the last element in tabs[]
      firstEl()
        .then((res: { index: number; el: HTMLDivElement }) => {
          saveIndex(res.index)
          move(underlineRef.value!, caculateDistance(res.el))
        })
        .catch(() => {
          /** we just ignore this since nothing happened */
        })
    }
  })
}

const handleTabClick = (tab: Tab, order: number) => {
  if (tab.disabled) return
  else {
    saveIndex(order)
    move(underlineRef.value!, caculateDistance(refs[order]))
  }
}

const caculateDistance = (targetTab: HTMLDivElement) =>
  targetTab.offsetLeft + (targetTab.clientWidth - props.underlineLength) / 2

const firstEl = async (): Promise<{ index: number; el: HTMLDivElement }> => {
  return new Promise((resolve, reject) => {
    const index = props.tabs.findIndex((item) => !item.disabled)
    const el = refs[index]
    if (el) resolve({ index, el })
    else reject('[Tab]: first el was not found')
  })
}

const saveIndex = (tabIndex: number) => {
  tabState.index = tabIndex
  emit('update:modelValue', props.tabs[tabIndex])
}

const move = (el: HTMLElement, distance: number) => {
  console.log(distance)
  el.style.transform = `translateX(${distance}px)`
}
</script>

<style lang="scss" scoped>
.lq-tab__container {
  width: 100%;
  .lq-tab__tabs {
    .lq-tab__tab {
      cursor: pointer;
      &:hover {
        color: var(--el-color-primary);
      }
    }
    .lq-tab__tab.disabled {
      cursor: not-allowed;
      color: var(--el-color-info);
    }
  }
}

.lq-tab__container.vertical {
  .lq-tab__tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    position: relative;

    .lq-tab__underline {
      display: block;
      height: 2px;
      background-color: var(--el-color-primary);
      margin: auto;
      position: absolute;
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
}
</style>
