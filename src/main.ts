import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'
import { createI18n } from 'vue-i18n'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// vue app
import App from '@/App.vue'

// pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// @unhead/vue
const unhead = createHead()

// i18n
// locale messages have been itegrated into vite-plugin-vue-i18n/messages
import messages from '@intlify/unplugin-vue-i18n/messages'
const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages
})

// vue-router
import router from '@router'

// customize css
import '@css/normalize.css'
import '@css/scrollbar.css'
import '@css/universal.css'

// element-plus dark mode
import 'element-plus/theme-chalk/dark/css-vars.css'

// element-plus layout css
import 'element-plus/theme-chalk/display.css'

// nprogress
import 'nprogress/nprogress.css'
import '@css/nprogress.css'

// unocss
import 'virtual:uno.css'

const app = createApp(App)
app.use(pinia)
app.use(i18n)
app.use(unhead)
app.use(router)
app.mount('#app')
