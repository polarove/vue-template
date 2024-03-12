<template>
  <div class="tab-container">
    <div
      class="tab-item"
      :class="{ active: index === active_tab }"
      v-for="(item, index) in tabs"
      :key="index"
      @click="toggleTab(index)"
    >
      <span class="tab-inner">
        {{ $t(item) }}
      </span>
    </div>
    <tab-underline ref="line" :width="lineWidth" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  tabs: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  startFrom: {
    type: Number,
    default: 0
  },
  lineWidth: {
    type: Number,
    default: 30
  }
})

const emit = defineEmits(['toggle'])

import { useElementTransform } from '@vueuse/motion'

const active_tab = ref<number>(props.startFrom)

const line = ref<HTMLElement | null>(null)
const { transform } = useElementTransform(line)

const toggleTab = (index: number) => {
  active_tab.value = index
  nextTick(async () => {
    await move(index)
  })
}

const move = async (index: number) => {
  const el = document.getElementsByClassName('tab-item')[index] as HTMLElement
  const child = el.children[0] as HTMLElement
  const el_width = child.clientWidth
  const line_width = props.lineWidth
  const el_left = child.offsetLeft + (el_width - line_width) / 2
  transform.translateX = el_left + 'px'
  emit('toggle', index)
}

onMounted(() => {
  move(active_tab.value)
})

onresize = () => {
  move(active_tab.value)
}
</script>

<style lang="scss">
.tab-container {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  margin: auto;
  width: 100%;
  justify-content: space-between;
  position: relative;
  .tab-item {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    flex: 1 0 auto;
    padding-bottom: 6px;
    cursor: pointer;
    &:hover {
      color: var(--el-color-primary);
    }
    .tab-inner {
      user-select: none;
      margin: 0 10px;
    }
  }
  .tab-item.active {
    .tab-inner {
      color: var(--el-color-primary);
    }
  }
}
</style>
