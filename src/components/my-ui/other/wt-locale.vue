<template>
  <keep-alive>
    <el-dropdown>
      <component
        :is="element"
        hover="cursor-pointer color-primary"
        :style="{ fontSize: size }"
        class="i-mdi:translate"
      />

      <template #dropdown>
        <el-dropdown-item
          v-for="(locale, index) in $i18n.availableLocales"
          :key="index"
          @click="updateLocale(locale), ($i18n.locale = locale)"
        >
          <span :class="{ active: $i18n.locale === locale }">
            {{ localeMap.get(locale)?.name }}
          </span>
        </el-dropdown-item>
      </template>
    </el-dropdown>
  </keep-alive>
</template>

<script setup lang="ts">
import { localeMap } from '@/composables/locale'
const storeLocale = LocaleStore()
const updateLocale = (locale: string) => {
  document.querySelector('html')?.setAttribute(LANG, storeLocale.getLocale)
  storeLocale.setLocale(locale)
}

withDefaults(
  defineProps<{
    element?: 'div' | 'span'
    size?: string
  }>(),
  {
    element: 'div',
    size: '1.4rem'
  }
)
</script>

<style lang="scss" scoped>
.active {
  color: var(--el-color-primary);
}
</style>
