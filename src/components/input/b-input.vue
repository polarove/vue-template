<template>
  <div class="input_container">
    <div class="input_wrapper">
      <input
        :type="type"
        id="input"
        placeholder=" "
        v-model="query"
        @input="check()"
        @keyup.enter="search()"
      />
      <div class="underline"></div>
      <label for="input" class="placeholder">{{ label }}</label>
    </div>
    <div class="append">
      <slot name="append">
        <div @click="search()" class="i-mdi:search text-size-1.5em"></div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const query = ref<string | null>()
const check = () => {
  console.log(query.value)
}
const search = () => {
  if (!query.value) return
  useRouter().replace({
    path: '/search/result',
    query: {
      keyword: query.value,
    },
  })
}
defineProps({
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
</script>

<style lang="scss" scoped>
.input_container {
  position: relative;
  display: flex;
  justify-content: space-between;

  .input_wrapper {
    flex: 1;

    input {
      width: 100%;
      height: 40px;
      color: var(--el-input-text-color, var(--el-text-color-regular));
      background-color: var(--el-input-bg-color);
      border: none;
      font-size: 1em;
      outline: none;
      transition: all 0.2s ease-in-out;
      &:focus,
      &:not(:placeholder-shown) {
        + .underline::before {
          width: 100%;
          transition: width 0.5s ease;
        }
        + .underline::after {
          width: 100%;
          background-color: transparent;
        }
      }
      &:focus ~ label,
      &:not(:placeholder-shown) ~ label {
        top: 0;
        transform: translateY(-65%) scale(0.88);
      }
    }
    .underline {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: var(--el-border-color-light);
      height: 0.1rem;
      &::after,
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        bottom: 0;
        width: 0;
        height: 0.1rem;
        background-color: var(--el-color-primary);
        transform-origin: left;
      }

      &::before {
        left: 0;
      }

      &::after {
        right: 0;
        transition: width 0.5s ease;
      }
    }

    .placeholder {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      color: var(--el-text-color-placeholder);
      transition: all 0.2s ease-in-out;
      pointer-events: none;
    }
  }
  .append {
    right: 0;
    width: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    position: relative;
    cursor: pointer;
    background-color: inherit;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0.1em;
      opacity: 0;
      border-radius: inherit;
      transition: all 0.2s ease-in-out;
      background-color: var(--el-color-primary);
    }
    &:hover {
      color: var(--el-color-primary);
      &::before {
        opacity: 1;
      }
    }
  }
}
</style>
