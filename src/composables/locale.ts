import { en, zhCn, type Language } from 'element-plus/es/locale/index.mjs'

export interface Locale {
  elementPlus: Language
  name: string
}

export const localeMap = new Map<string, Locale>()
localeMap.set(LOCALES.ZH_CN, { elementPlus: zhCn, name: '简体中文' })
localeMap.set(LOCALES.EN_US, { elementPlus: en, name: 'English' })
