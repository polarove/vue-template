<template>
  <el-divider />
  <section class="flex-between items-center">
    <h1>compoenents - card</h1>
    <div>
      <social-icon url="https://github.com/polarove" icon="i-mdi:github" />
      <wt-theme class="text-size-[2em]" />
    </div>
  </section>
  <section flex-center-col>
    <rotate-card c-p @click="jumpGithub()" type="square">
      <el-image
        src="https://avatars.githubusercontent.com/u/95893742?v=4"
        alt="polarove"
        fit="cover"
      />
    </rotate-card>
  </section>
  <el-divider />
  <section class="flex-between items-center">
    <h1>toolcat - utils</h1>
    <div>
      <social-icon
        url="https://www.npmjs.com/package/@polaris_liu/toolcat"
        icon="i-mdi:npm"
        class="hover-color-primary"
        size="3.5rem"
      />
      <social-icon
        url="https://github.com/polarove/toolcat"
        icon="i-mdi:github"
        class="hover-color-primary"
      />
      <wt-theme class="text-size-[2em]" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const jumpGithub = () => {
  window.open('https://github.com/polarove')
}
</script>

<style lang="scss" scoped></style>
