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
    <div class="footer">
      <el-text>
        Github@<a href="https://github.com/polarove" class="name">polarove</a>
      </el-text>
    </div>
  </section>
  <section>
    <div><h2>About me</h2></div>
    <p>Gender & Sex: male</p>
    <p>University: Minnan University of Science and Technology (2019 - 2023)</p>
    <p>Degree: bachelor</p>
    <p>Major: Infomation Management and Information System (IMIS)</p>
    <p>
      Working experience: about&nbsp;{{
        monthsThatHasWastedInWork()
      }}&nbsp;months
    </p>
    <p>Field: a web fullstack developer</p>
  </section>
</template>

<script lang="ts" setup>
const jumpGithub = () => {
  window.open('https://github.com/polarove')
}

const monthsThatHasWastedInWork = () => {
  const STARTED_AT = 2023
  const NOW = new Date()
  const YEAR = NOW.getFullYear()
  const MONTH = NOW.getMonth()
  if (YEAR - STARTED_AT === 1) {
    return MONTH + 2
  } else {
    return (YEAR - 1 - STARTED_AT) * 12 + MONTH
  }
}
</script>

<style lang="scss" scoped>
.footer {
  height: 3em;
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
