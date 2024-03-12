<template>
  <el-config-provider :locale="epLocale" :message="config">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import { localeMap } from '@/composables/locale'
import { useHead } from '@unhead/vue'
import { StrUtil } from '@polaris_liu/toolcat'

const storeLocale = LocaleStore()
const i18n = useI18n({
  useScope: 'global'
})

if (StrUtil.isEmpty(localStorage.getItem(LANG)))
  useLocalStorage('locale', { lang: storeLocale.getLocale })
i18n.locale.value = storeLocale.getLocale
document.querySelector('html')?.setAttribute(LANG, storeLocale.getLocale)

// element plus 最大消息数
const config = reactive({
  max: 3
})

const epLocale = computed(
  () => localeMap.get(storeLocale.getLocale)?.elementPlus
)
const title = computed(() => i18n.t('title'))
useHead({
  title: title
})
</script>
