<template>
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

<style lang="scss" scoped></style>
