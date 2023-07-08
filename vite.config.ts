import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"
import Layouts from "vite-plugin-vue-layouts"
import Pages from "vite-plugin-pages"
import generateSitemap from "vite-plugin-pages-sitemap"
import { unheadVueComposablesImports } from "@unhead/vue"
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [
    Vue(),
    Layouts(),
    Pages({
      onRoutesGenerated: (routes) =>
        generateSitemap({ routes, hostname: "https://next.hoppscotch.com/" }),
    }),
    Components({
      resolvers: [
        IconsResolver({
          prefix: "icon",
        }),
      ],
    }),
    Icons(),
    AutoImport({
      dts: true,
      eslintrc: {
        enabled: true, // <-- this
      },
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
        unheadVueComposablesImports,
      ],
    }),
  ],
})
