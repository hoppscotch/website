import Vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"
import Layouts from "vite-plugin-vue-layouts"
import Pages from "vite-plugin-pages"
import generateSitemap from "vite-ssg-sitemap"
import { unheadVueComposablesImports } from "@unhead/vue"
import AutoImport from "unplugin-auto-import/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { defineConfig } from "vite"
import Unfonts from "unplugin-fonts/vite"
import type { ViteSSGOptions } from "vite-ssg"

const ssgOptions: ViteSSGOptions = {
  script: "async",
  formatting: "minify",
  onFinished() {
    generateSitemap()
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Layouts(),
    Pages(),
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
        enabled: true,
      },
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
        unheadVueComposablesImports,
      ],
      resolvers: [ElementPlusResolver()],
      vueTemplate: true,
      dirs: ["./components/**"],
    }),
    Unfonts({
      fontsource: {
        families: [
          {
            name: "Inter Variable",
            variables: ["variable-full"],
          },
          {
            name: "Plus Jakarta Sans Variable",
            variables: ["variable-full"],
          },
        ],
      },
    }),
  ],
  ssgOptions,
})
