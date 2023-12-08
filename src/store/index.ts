import { defineStore } from 'pinia'

export const LocaleStore = defineStore({
    id: 'locale',
    state: () => ({
        locale: 'zh-CN',
    }),
    getters: {
        getLocale(): string {
            return this.locale
        },
    },
    actions: {
        setLocale(locale: string): void {
            this.locale = locale
        },
    },

    persist: true,
})
