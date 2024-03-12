// vite.config.ts
import { defineConfig } from "file:///C:/projects/tukun/vue-template/node_modules/.pnpm/vite@5.1.6_@types+node@20.11.26_sass@1.71.1/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/projects/tukun/vue-template/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.1.6_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///C:/projects/tukun/vue-template/node_modules/.pnpm/unplugin-auto-import@0.17.5_@vueuse+core@10.9.0/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/projects/tukun/vue-template/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/projects/tukun/vue-template/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/resolvers.js";
import { unheadVueComposablesImports } from "file:///C:/projects/tukun/vue-template/node_modules/.pnpm/@unhead+vue@1.8.13_vue@3.4.21/node_modules/@unhead/vue/dist/index.mjs";
import VueI18nPlugin from "file:///C:/projects/tukun/vue-template/node_modules/.pnpm/@intlify+unplugin-vue-i18n@3.0.1_vue-i18n@9.10.1/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import UnoCSS from "file:///C:/projects/tukun/vue-template/node_modules/.pnpm/unocss@0.58.5_postcss@8.4.35_vite@5.1.6/node_modules/unocss/dist/vite.mjs";
import Icons from "file:///C:/projects/tukun/vue-template/node_modules/.pnpm/unplugin-icons@0.18.5/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///C:/projects/tukun/vue-template/node_modules/.pnpm/unplugin-icons@0.18.5/node_modules/unplugin-icons/dist/resolver.js";
import { FileSystemIconLoader } from "file:///C:/projects/tukun/vue-template/node_modules/.pnpm/unplugin-icons@0.18.5/node_modules/unplugin-icons/dist/loaders.js";
import path, { resolve } from "path";
var __vite_injected_original_dirname = "C:\\projects\\tukun\\vue-template";
var vite_config_default = defineConfig({
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
  base: "/vue-template",
  plugins: [
    vue(),
    UnoCSS(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
        "vue-i18n",
        {
          from: "./src/assets/typings/type/restful",
          imports: ["Restful"],
          type: true
        },
        unheadVueComposablesImports
      ],
      resolvers: [ElementPlusResolver()],
      dirs: [
        "src/store",
        "src/composables/**",
        "src/constants/**",
        "src/api/**",
        "src/enums/**"
      ]
    }),
    VueI18nPlugin({
      include: [path.resolve(__vite_injected_original_dirname, "./src/assets/locale/**.json")]
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass"
        }),
        IconsResolver({
          // prefix: 'i-',
          customCollections: ["team"]
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
        team: FileSystemIconLoader(
          "./src/assets/icon",
          (svg) => svg.replace(/^<svg /, '<svg fill="currentColor" ')
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
      "@": resolve(__vite_injected_original_dirname, "src"),
      "@icon": resolve(__vite_injected_original_dirname, "src/assets/icon"),
      "@img": resolve(__vite_injected_original_dirname, "src/assets/img"),
      "@css": resolve(__vite_injected_original_dirname, "src/assets/css"),
      "@scss": resolve(__vite_injected_original_dirname, "src/assets/scss"),
      "@pages": resolve(__vite_injected_original_dirname, "src/pages"),
      "@composables": resolve(__vite_injected_original_dirname, "src/composables"),
      "@api": resolve(__vite_injected_original_dirname, "src/api"),
      "@class": resolve(__vite_injected_original_dirname, "src/class"),
      "@typings": resolve(__vite_injected_original_dirname, "src/typings"),
      "@router": resolve(__vite_injected_original_dirname, "src/router"),
      "@store": resolve(__vite_injected_original_dirname, "src/store")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFx0dWt1blxcXFx2dWUtdGVtcGxhdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXHByb2plY3RzXFxcXHR1a3VuXFxcXHZ1ZS10ZW1wbGF0ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovcHJvamVjdHMvdHVrdW4vdnVlLXRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXHJcblxyXG4vLyBAdW5oZWFkL3Z1ZVxyXG5pbXBvcnQgeyB1bmhlYWRWdWVDb21wb3NhYmxlc0ltcG9ydHMgfSBmcm9tICdAdW5oZWFkL3Z1ZSdcclxuXHJcbi8vIGkxOG5cclxuaW1wb3J0IFZ1ZUkxOG5QbHVnaW4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcclxuXHJcbi8vIHVub2Nzc1xyXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xyXG5cclxuLy8gdW5wbHVnaW4taWNvbnNcclxuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnXHJcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJ1xyXG5pbXBvcnQgeyBGaWxlU3lzdGVtSWNvbkxvYWRlciB9IGZyb20gJ3VucGx1Z2luLWljb25zL2xvYWRlcnMnXHJcblxyXG4vLyBmc1xyXG5pbXBvcnQgcGF0aCwgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcclxuLy8gaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAvLyBzZXJ2ZXI6IHtcclxuICAvLyAgICAgcG9ydDogNjcsXHJcbiAgLy8gICAgIGh0dHBzOiB7XHJcbiAgLy8gICAgICAgICBjZXJ0OiBmcy5yZWFkRmlsZVN5bmMoXHJcbiAgLy8gICAgICAgICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9hc3NldHMvc3NsL2hvbWUvZGV2LnBlbScpXHJcbiAgLy8gICAgICAgICApLFxyXG4gIC8vICAgICAgICAga2V5OiBmcy5yZWFkRmlsZVN5bmMoXHJcbiAgLy8gICAgICAgICAgICAgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9hc3NldHMvc3NsL2hvbWUvZGV2LWtleS5wZW0nKVxyXG4gIC8vICAgICAgICAgKSxcclxuICAvLyAgICAgfSxcclxuICAvLyB9LFxyXG4gIGJhc2U6ICcvdnVlLXRlbXBsYXRlJyxcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIFVub0NTUygpLFxyXG4gICAgQXV0b0ltcG9ydCh7XHJcbiAgICAgIGltcG9ydHM6IFtcclxuICAgICAgICAndnVlJyxcclxuICAgICAgICAndnVlLXJvdXRlcicsXHJcbiAgICAgICAgJ0B2dWV1c2UvY29yZScsXHJcbiAgICAgICAgJ3Z1ZS1pMThuJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmcm9tOiAnLi9zcmMvYXNzZXRzL3R5cGluZ3MvdHlwZS9yZXN0ZnVsJyxcclxuICAgICAgICAgIGltcG9ydHM6IFsnUmVzdGZ1bCddLFxyXG4gICAgICAgICAgdHlwZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHVuaGVhZFZ1ZUNvbXBvc2FibGVzSW1wb3J0c1xyXG4gICAgICBdLFxyXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxyXG4gICAgICBkaXJzOiBbXHJcbiAgICAgICAgJ3NyYy9zdG9yZScsXHJcbiAgICAgICAgJ3NyYy9jb21wb3NhYmxlcy8qKicsXHJcbiAgICAgICAgJ3NyYy9jb25zdGFudHMvKionLFxyXG4gICAgICAgICdzcmMvYXBpLyoqJyxcclxuICAgICAgICAnc3JjL2VudW1zLyoqJ1xyXG4gICAgICBdXHJcbiAgICB9KSxcclxuICAgIFZ1ZUkxOG5QbHVnaW4oe1xyXG4gICAgICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2Fzc2V0cy9sb2NhbGUvKiouanNvbicpXVxyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgcmVzb2x2ZXJzOiBbXHJcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcih7XHJcbiAgICAgICAgICBpbXBvcnRTdHlsZTogJ3Nhc3MnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XHJcbiAgICAgICAgICAvLyBwcmVmaXg6ICdpLScsXHJcbiAgICAgICAgICBjdXN0b21Db2xsZWN0aW9uczogWyd0ZWFtJ11cclxuICAgICAgICB9KVxyXG4gICAgICBdXHJcbiAgICB9KSxcclxuICAgIEljb25zKHtcclxuICAgICAgLy8gYXV0byBpbnN0YWxsIGljb24gc2V0IGZvciB5b3Ugd2hpbGUgaW1wb3J0aW5nIGEgaWNvbiwgYnV0IHRoaXMgaXMgZXhwaXJtZW50YWxcclxuICAgICAgYXV0b0luc3RhbGw6IHRydWUsXHJcbiAgICAgIGN1c3RvbUNvbGxlY3Rpb25zOiB7XHJcbiAgICAgICAgLy8ga2V5IGFzIHRoZSBjb2xsZWN0aW9uIG5hbWVcclxuICAgICAgICAvLyAnbXktaWNvbnMnOiB7XHJcbiAgICAgICAgLy8gICBhY2NvdW50OiAnPHN2Zz48IS0tIC4uLiAtLT48L3N2Zz4nLFxyXG4gICAgICAgIC8vICAgLy8gbG9hZCB5b3VyIGN1c3RvbSBpY29uIGxhemlseVxyXG4gICAgICAgIC8vICAgc2V0dGluZ3M6ICgpID0+IGZzLnJlYWRGaWxlKCcuL3BhdGgvdG8vbXktaWNvbi5zdmcnLCAndXRmLTgnKVxyXG4gICAgICAgIC8vICAgLyogLi4uICovXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAnbXktb3RoZXItaWNvbnMnOiBhc3luYyAoaWNvbk5hbWUpID0+IHtcclxuICAgICAgICAvLyAgIC8vIHlvdXIgY3VzdG9tIGxvYWRlciBoZXJlLiBEbyB3aGF0ZXZlciB5b3Ugd2FudC5cclxuICAgICAgICAvLyAgIC8vIGZvciBleGFtcGxlLCBmZXRjaCBmcm9tIGEgcmVtb3RlIHNlcnZlcjpcclxuICAgICAgICAvLyAgIHJldHVybiBhd2FpdCBmZXRjaChgaHR0cHM6Ly9leGFtcGxlLmNvbS9pY29ucy8ke2ljb25OYW1lfS5zdmdgKS50aGVuKFxyXG4gICAgICAgIC8vICAgICAocmVzKSA9PiByZXMudGV4dCgpXHJcbiAgICAgICAgLy8gICApXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBhIGhlbHBlciB0byBsb2FkIGljb25zIGZyb20gdGhlIGZpbGUgc3lzdGVtXHJcbiAgICAgICAgLy8gZmlsZXMgdW5kZXIgYC4vYXNzZXRzL2ljb25zYCB3aXRoIGAuc3ZnYCBleHRlbnNpb24gd2lsbCBiZSBsb2FkZWQgYXMgaXQncyBmaWxlIG5hbWVcclxuICAgICAgICAvLyB5b3UgY2FuIGFsc28gcHJvdmlkZSBhIHRyYW5zZm9ybSBjYWxsYmFjayB0byBjaGFuZ2UgZWFjaCBpY29uIChvcHRpb25hbClcclxuICAgICAgICB0ZWFtOiBGaWxlU3lzdGVtSWNvbkxvYWRlcignLi9zcmMvYXNzZXRzL2ljb24nLCAoc3ZnKSA9PlxyXG4gICAgICAgICAgc3ZnLnJlcGxhY2UoL148c3ZnIC8sICc8c3ZnIGZpbGw9XCJjdXJyZW50Q29sb3JcIiAnKVxyXG4gICAgICAgIClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICBdLFxyXG5cclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGFkZGl0aW9uYWxEYXRhOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgQHVzZSBcIkBzY3NzL2VsZW1lbnQvY29tbW9uL292ZXJyaWRlLnNjc3NcIiBhcyBjb21tb247XHJcbiAgICAgICAgICAgICAgICAgICAgQHVzZSBcIkBzY3NzL2VsZW1lbnQvZGFyay9vdmVycmlkZS5zY3NzXCIgYXMgZGFyaztcclxuICAgICAgICAgICAgICAgICAgICBAdXNlIFwiQHNjc3MvdmFyaWFibGUuc2Nzc1wiIGFzICo7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICAgICdAaWNvbic6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2Fzc2V0cy9pY29uJyksXHJcbiAgICAgICdAaW1nJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvYXNzZXRzL2ltZycpLFxyXG4gICAgICAnQGNzcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2Fzc2V0cy9jc3MnKSxcclxuICAgICAgJ0BzY3NzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvYXNzZXRzL3Njc3MnKSxcclxuICAgICAgJ0BwYWdlcyc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3BhZ2VzJyksXHJcbiAgICAgICdAY29tcG9zYWJsZXMnOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21wb3NhYmxlcycpLFxyXG4gICAgICAnQGFwaSc6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2FwaScpLFxyXG4gICAgICAnQGNsYXNzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY2xhc3MnKSxcclxuICAgICAgJ0B0eXBpbmdzJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvdHlwaW5ncycpLFxyXG4gICAgICAnQHJvdXRlcic6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL3JvdXRlcicpLFxyXG4gICAgICAnQHN0b3JlJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvc3RvcmUnKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUixTQUFTLG9CQUFvQjtBQUNqVCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFHcEMsU0FBUyxtQ0FBbUM7QUFHNUMsT0FBTyxtQkFBbUI7QUFHMUIsT0FBTyxZQUFZO0FBR25CLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLDRCQUE0QjtBQUdyQyxPQUFPLFFBQVEsZUFBZTtBQXJCOUIsSUFBTSxtQ0FBbUM7QUF5QnpDLElBQU8sc0JBQVEsYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVkxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLFNBQVMsQ0FBQyxTQUFTO0FBQUEsVUFDbkIsTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUVBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDakMsTUFBTTtBQUFBLFFBQ0o7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLE1BQ1osU0FBUyxDQUFDLEtBQUssUUFBUSxrQ0FBVyw2QkFBNkIsQ0FBQztBQUFBLElBQ2xFLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVc7QUFBQSxRQUNULG9CQUFvQjtBQUFBLFVBQ2xCLGFBQWE7QUFBQSxRQUNmLENBQUM7QUFBQSxRQUNELGNBQWM7QUFBQTtBQUFBLFVBRVosbUJBQW1CLENBQUMsTUFBTTtBQUFBLFFBQzVCLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUE7QUFBQSxNQUVKLGFBQWE7QUFBQSxNQUNiLG1CQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQWtCakIsTUFBTTtBQUFBLFVBQXFCO0FBQUEsVUFBcUIsQ0FBQyxRQUMvQyxJQUFJLFFBQVEsVUFBVSwyQkFBMkI7QUFBQSxRQUNuRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFFQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDN0IsU0FBUyxRQUFRLGtDQUFXLGlCQUFpQjtBQUFBLE1BQzdDLFFBQVEsUUFBUSxrQ0FBVyxnQkFBZ0I7QUFBQSxNQUMzQyxRQUFRLFFBQVEsa0NBQVcsZ0JBQWdCO0FBQUEsTUFDM0MsU0FBUyxRQUFRLGtDQUFXLGlCQUFpQjtBQUFBLE1BQzdDLFVBQVUsUUFBUSxrQ0FBVyxXQUFXO0FBQUEsTUFDeEMsZ0JBQWdCLFFBQVEsa0NBQVcsaUJBQWlCO0FBQUEsTUFDcEQsUUFBUSxRQUFRLGtDQUFXLFNBQVM7QUFBQSxNQUNwQyxVQUFVLFFBQVEsa0NBQVcsV0FBVztBQUFBLE1BQ3hDLFlBQVksUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDNUMsV0FBVyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUMxQyxVQUFVLFFBQVEsa0NBQVcsV0FBVztBQUFBLElBQzFDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
