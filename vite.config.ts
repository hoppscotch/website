import Vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"
import Pages from "vite-plugin-pages"
import Layouts from "vite-plugin-vue-layouts"
import generateSitemap from "vite-ssg-sitemap"
import { unheadVueComposablesImports } from "@unhead/vue"
import UnheadVite from "@unhead/addons/vite"
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
    Pages(),
    Layouts(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: "icon",
        }),
      ],
    }),
    Icons(),
    AutoImport({
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
    UnheadVite(),
  ],
  ssgOptions,
})
