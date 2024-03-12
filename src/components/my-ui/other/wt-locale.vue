<template>
  <el-dropdown>
    <span hover="cursor-pointer">
      {{ useSupportedLocale.get($i18n.locale) }}
    </span>
    <template #dropdown>
      <el-dropdown-item
        v-for="(locale, index) in $i18n.availableLocales"
        :key="index"
        @click="() => ($i18n.locale = locale) && toggleLanguage(locale)"
      >
        {{ useSupportedLocale.get(locale) }}
      </el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useSupportedLocale } from '@composables/locale'

const locale_store = LocaleStore()
const toggleUIFrameworkLanguage = (language: string) => {
  locale_store.setLocale(language)
}
const toggleHTMLLanguage = (language: string) => {
  document.querySelector('html')?.setAttribute('lang', language)
}
const toggleLanguage = (language: string) => {
  toggleUIFrameworkLanguage(language)
  toggleHTMLLanguage(language)
}
</script>

<style lang="scss" scoped></style>
