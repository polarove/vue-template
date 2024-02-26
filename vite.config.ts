import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// @unhead/vue
import { unheadVueComposablesImports } from '@unhead/vue'

// i18n
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// unocss
import UnoCSS from 'unocss/vite'

// unplugin-icons
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

// fs
import path, { resolve } from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //     port: 67,
  //     https: {
  //         cert: fs.readFileSync(
  //             path.resolve(__dirname, 'src/assets/ssl/home/dev.pem')
  //         ),
  //         key: fs.readFileSync(
  //             path.resolve(__dirname, 'src/assets/ssl/home/dev-key.pem')
  //         ),
  //     },
  // },
  base: 'vue-template',
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'vue-i18n',
        {
          from: './src/assets/typings/type/response',
          imports: ['response'],
          type: true
        },
        unheadVueComposablesImports
      ],
      resolvers: [ElementPlusResolver()],
      dirs: ['src/store', 'src/composables/**', 'src/api/*.ts', 'src/enums/**']
    }),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './src/assets/locale/**.json')]
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        }),
        IconsResolver({
          // prefix: 'i-',
          customCollections: ['team']
        })
      ]
    }),
    Icons({
      // auto install icon set for you while importing a icon, but this is expirmental
      autoInstall: true,
      customCollections: {
        // key as the collection name
        // 'my-icons': {
        //   account: '<svg><!-- ... --></svg>',
        //   // load your custom icon lazily
        //   settings: () => fs.readFile('./path/to/my-icon.svg', 'utf-8')
        //   /* ... */
        // },
        // 'my-other-icons': async (iconName) => {
        //   // your custom loader here. Do whatever you want.
        //   // for example, fetch from a remote server:
        //   return await fetch(`https://example.com/icons/${iconName}.svg`).then(
        //     (res) => res.text()
        //   )
        // },
        // a helper to load icons from the file system
        // files under `./assets/icons` with `.svg` extension will be loaded as it's file name
        // you can also provide a transform callback to change each icon (optional)
        team: FileSystemIconLoader('./src/assets/icon', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    })
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                    @use "@scss/element/common/override.scss" as common;
                    @use "@scss/element/dark/override.scss" as dark;
                    @use "@scss/variable.scss" as *;            
                `
      }
    }
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@icon': resolve(__dirname, 'src/assets/icon'),
      '@img': resolve(__dirname, 'src/assets/img'),
      '@css': resolve(__dirname, 'src/assets/css'),
      '@scss': resolve(__dirname, 'src/assets/scss'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@composables': resolve(__dirname, 'src/composables'),
      '@api': resolve(__dirname, 'src/api'),
      '@class': resolve(__dirname, 'src/class'),
      '@typings': resolve(__dirname, 'src/typings'),
      '@router': resolve(__dirname, 'src/router'),
      '@store': resolve(__dirname, 'src/store')
    }
  }
})
