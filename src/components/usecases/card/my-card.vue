<template>
  <section class="flex-between items-center">
    <h1>{{ $t('components') }} - card</h1>
    <div>
      <social-icon
        url="https://github.com/polarove"
        class="hover-color-primary"
        icon="i-mdi:github"
      />
      <wt-locale size="2.4em" class="mr-1em ml-1em" />
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
    <div class="footer">
      <el-text>
        Github@<a href="https://github.com/polarove" class="name">polarove</a>
      </el-text>
      <span class="opacity-50">&ensp;&ensp;&ensp;|&ensp;&ensp;</span>
      <el-text>
        bilibili@<a href="https://space.bilibili.com/471857522" class="name"
          >粉丝拌饭</a
        >
      </el-text>
    </div>
  </section>
</template>

<script lang="ts" setup>
const jumpGithub = () => {
  window.open('https://github.com/polarove')
}
</script>

<style lang="scss" scoped>
.footer {
  height: 3rem;
  margin-top: 0.5rem;
  text-align: center;
  .name {
    &:hover {
      color: var(--el-color-primary);
    }
  }
  a {
    color: var(--el-text-color-primary);
  }
}
</style>
