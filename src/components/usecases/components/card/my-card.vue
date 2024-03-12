<template>
  <section class="flex-between items-center">
    <h1>compoenents - card</h1>
    <div>
      <social-icon
        url="https://github.com/polarove"
        class="hover-color-primary"
        icon="i-mdi:github"
      />
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
</template>

<script lang="ts" setup>
const jumpGithub = () => {
  window.open('https://github.com/polarove')
}
</script>

<style lang="scss" scoped></style>
