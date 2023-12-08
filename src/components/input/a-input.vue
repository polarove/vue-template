<template>
  <div class="input_container">
    <input
      :type="type"
      :value="modelValue"
      @input="verificate($event)"
      id="input"
      placeholder=" "
    />
    <label for="input" class="placeholder">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  size: {
    type: String,
    default: 'default',
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: 'label',
  },
})

const emit = defineEmits(['update:modelValue'])

const verificate = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<style lang="scss" scoped>
.input_container {
  position: relative;

  input {
    width: 100%;
    height: 40px;
    border: 1px solid var(--el-border-color-light);
    border-radius: 4px;
    padding: 0 0.5em;
    font-size: 1em;
    outline: none;
    transition: all 0.2s ease-in-out;
    &:focus,
    &:not(:placeholder-shown) {
      border: 0.1rem solid var(--el-color-primary);
    }
    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: 0;
      color: var(--el-color-primary);
      transform: translateY(-75%) scale(0.88);
    }
  }
  .placeholder {
    position: absolute;
    top: 50%;
    left: 0.5rem;
    transform: translateY(-50%);
    color: #999;
    padding: 0 0.2em;
    background-color: var(--el-bg-color);
    transition: all 0.2s ease-in-out;
    pointer-events: none;
  }
}
</style>
