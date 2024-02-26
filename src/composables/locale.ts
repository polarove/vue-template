import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import type { SupportedUILocale } from '@typings/type/locale'

export const useSupportedLocale: Map<string, string> = new Map([
    ['en', 'English'],
    ['zh-CN', '简体中文'],
])

export const useSupportedUILocale: SupportedUILocale[] = [
    {
        language: 'en',
        locale: en,
    },
    {
        language: 'zh-CN',
        locale: zhCn,
    },
]
