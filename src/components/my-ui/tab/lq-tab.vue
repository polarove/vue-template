<template>
  <div class="lq-tab__container" :class="direction">
    <div class="lq-tab__tabs">
      <div v-for="(tab, index) in tabs" :key="index" class="lq-tab__tab">
        <span>{{ tab.name }}</span>
      </div>
      <div class="lq-tab__underline" :style="{ width: width }"></div>
    </div>
    <div class="lq-tab__view">fasf</div>
  </div>
</template>

<script lang="ts" setup>
export interface Tab {
  name: string
  value: string
}

const props = withDefaults(
  defineProps<{
    tabs: Array<Tab>
    direction?: 'vertical' | 'horizontal'
    underlineLength?: string
  }>(),
  {
    direction: 'vertical',
    underlineLength: 'auto'
  }
)

const width = computed(() =>
  props.underlineLength === 'auto' ? caculatedLength() : props.underlineLength
)
</script>

<style lang="scss" scoped>
.lq-tab__container {
  width: 100%;
}

.lq-tab__container.vertical {
  .lq-tab__tabs {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
    position: relative;

    .lq-tab__underline {
      display: block;
      height: 2px;
      background-color: var(--el-color-primary);
      margin: auto;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateX(-50%);
      transition: all 0.2s ease-in-out;
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
