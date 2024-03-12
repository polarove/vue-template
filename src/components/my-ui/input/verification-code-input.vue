<template>
  <form :modelValue="modelValue">
    <input
      v-for="(order, index) in count"
      @keyup="Backspace($event, order)"
      :ref="(el: Element | ComponentPublicInstance | null) => setInputRef(order, el)"
      :key="index"
      @input="constraintInput($event as InputEvent, order)"
      @focus="currentPosition = order"
      style="min-width: 2em"
      :class="size"
      :style="{
        width: cellUnit * 0.8 + 'em',
        textShadow: fontColor
      }"
    />
  </form>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import type { ComponentPublicInstance } from 'vue'
const emit = defineEmits(['update:modelValue', 'submit', 'check'])
const props = withDefaults(
  defineProps<{
    modelValue: string
    size?: 'small' | 'default' | 'large'
    count: number
    cellUnit: number
    fontColor: string
    autoFocus: boolean
    autoSubmit: boolean
  }>(),
  {
    size: 'default',
    count: 6,
    cellUnit: 1,
    fontColor: '',
    autoFocus: true,
    autoSubmit: true
  }
)

// 最终用于提交的结果
const result = ref('')

// 当前输入框位置
const currentPosition = ref<number>(1)

// 所有输入框的引用
const refs: Record<number, HTMLInputElement> = {}
const setInputRef = (
  order: number,
  el: Element | ComponentPublicInstance | null
) => {
  nextTick(() => {
    refs[`${order}`] = el as HTMLInputElement
  })
}

// 聚焦输入框
const focusOn = (index: number) => {
  if (props.autoFocus) {
    nextTick(() => {
      refs[index]?.focus()
    })
  }
}

const checkInput = (target: HTMLInputElement) => {
  emit('check', target.value, (result: boolean) => {
    if (!result && target) {
      target.value = ''
      return
    }
  })
}

// 判断是否是数字
// 控制输入
const constraintInput = (event: InputEvent, order: number) => {
  let target = event.target as HTMLInputElement
  checkInput(target)
  if (order) {
    const nextOrder = order + 1
    if (target.value.length > props.cellUnit) {
      target.value = target.value.slice(0, props.cellUnit)
      refs[`${nextOrder}`]?.focus()
    } else if (target.value.length === props.cellUnit) {
      target.value = target.value.slice(0, props.cellUnit)
      refs[`${nextOrder}`]?.focus()
    }
    updateResult()
  } else console.error('order is not defined')
}

// 控制黏贴
const constraintPaste = () => {
  window.navigator.clipboard.readText().then((text) => {
    text.split('').forEach((item, index) => {
      emit('check', item, (result: boolean) => {
        if (result) {
          let nextOrder = index + 1
          var el: HTMLInputElement = refs[`${nextOrder}`]
          if (el) {
            el?.focus()
            el.value = item
            updateResult()
          }
          currentPosition.value = text.length
        } else {
          return
        }
      })
    })
  })
}

// 更新最终结果
const updateResult = () => {
  result.value = Object.values(refs)
    .map((item) => item.value)
    .join('')
  emit('update:modelValue', result.value)
  if (
    result.value.length === props.count * props.cellUnit &&
    props.autoSubmit
  ) {
    emit('submit', result.value)
  }
}

// 监听删除键
const Backspace = (event: KeyboardEvent, order: number) => {
  if (event.key === 'Backspace' && order >= 1) {
    updateResult()
    let preOrder = order - 1
    var current = refs[`${order}`]?.value
    if (current.length === 0 && preOrder > 0) {
      refs[`${preOrder}`]?.focus()
      currentPosition.value = preOrder
    }
    return
  }
}

// 监听粘贴事件
window.addEventListener('paste', constraintPaste)

// 获取指定元素的ref
const getRef = (index: number) => refs[`${index}`]

// 自动聚焦
const initComponent = () => focusOn(currentPosition.value)

// 组件加载时自动聚焦
onMounted(() => initComponent())

// 组件卸载时移除黏贴监听
onUnmounted(() => window.removeEventListener('paste', constraintPaste))

defineExpose({
  refs,
  getRef,
  currentPosition
})
</script>

<style scoped>
input {
  margin: 0.2em 0.4em;
  border-radius: 0.25em;
  color: transparent;
  border: none;
  outline: 0;
  text-align: center;
  font-weight: bold;
  background-color: transparent;
  box-shadow: 0 0 0 1px var(--el-border-color-light);
  transition: all 0.2s ease-in-out;
}

input.small {
  height: 1.7em;
  font-size: 1.1em;
}
input.default {
  height: 2em;
  font-size: 1.4em;
}
input.large {
  height: 2.3em;
  font-size: 1.7em;
}
input:focus {
  box-shadow: 0 0 0 1px var(--el-color-primary) inset;
}
</style>
