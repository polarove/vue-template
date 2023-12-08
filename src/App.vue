<template>
  <el-config-provider :locale="ui_locale">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import type { SupportedUILocale } from '@typings/type/locale'
// init locale store
const locale_store = LocaleStore()

// load locale from locale_store
const { locale: global_locale } = useI18n()
global_locale.value = locale_store.getLocale

// load locale for ui framework
const ui_locale = computed(() => {
  return useSupportedUILocale.find(
    (item: SupportedUILocale) => item.language === locale_store.getLocale
  )?.locale
})
</script>
