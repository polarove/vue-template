<template>
  <div class="lq-input__container" :style="{ height: height, width: width }">
    <div class="lq-input__affix">
      <slot name="affix"> </slot>
    </div>
    <div class="lq-input" :class="border">
      <input
        placeholder=""
        v-autofocus="autoFocus"
        v-model="model"
        :type="type"
        :id="label"
        @input="emit('input')"
        @focus="emit('focus')"
        @blur="emit('blur')"
      />
      <label :for="label"> {{ label }} </label>
      <div class="lq-input__message">
        <slot name="message"></slot>
      </div>
      <div class="lq-input__suffix">
        <slot name="suffix"> </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { vAutofocus } from '@/directives/v-autofocus'
withDefaults(
  defineProps<{
    label?: string
    type?: string
    height?: string
    width?: string
    autoFocus?: boolean
    border?: 'underline' | 'border'
  }>(),
  {
    label: 'label',
    type: 'text',
    height: '30px',
    width: '100%',
    autoFocus: false,
    border: 'border'
  }
)
const model = defineModel({ required: true })
const emit = defineEmits(['input', 'focus', 'blur'])
</script>

<style lang="scss" scoped>
.lq-input__container {
  position: relative;
  display: flex;
  .lq-input {
    position: relative;
    width: 100%;
    padding-right: 1rem;
  }
  .lq-input > input {
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    color: var(--el-text-color-primary);
    transition: all 200ms ease-in-out;
  }
  .lq-input.underline > input {
    border-bottom: 1px solid var(--el-border-color-light);
  }
  .lq-input.underline > input:focus {
    border-bottom: 1.5px solid var(--el-color-primary);
  }
  .lq-input.border > input {
    padding-left: 10px;
    border-radius: 6px;
    border: 1px solid var(--el-border-color-light);
  }
  .lq-input.border > input:focus {
    border: 1.5px solid var(--el-color-primary);
  }
  .lq-input.border > label {
    padding: 0 0.2rem;
    pointer-events: none;
    left: 0.5rem;
    background-color: var(--el-card-bg-color);
  }
  .lq-input > input + label {
    position: absolute;
    top: 50%;
    cursor: text;
    user-select: none;
    transform: translateY(-50%);
    left: 0;
    transition: all 0.3s ease;
    color: var(--el-text-color-placeholder);
  }
  .lq-input > input + label {
    user-select: none;
  }
  .lq-input > input:focus + label,
  .lq-input > input:not(:placeholder-shown) + label {
    top: 0;
    transform: translateY(-70%);
    font-size: 0.88em;
    color: var(--el-color-primary);
  }
  .lq-input__affix {
    transform: translateY(25%);
    padding-right: 0.125rem;
  }
  .lq-input__suffix {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
}
.lq-input__message {
  font-size: 0.88rem;
  margin-top: 2px;
  float: left;
}
</style>
