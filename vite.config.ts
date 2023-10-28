import { fileURLToPath, URL } from "node:url"
import path from "node:path"
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
    generateSitemap({
      hostname: "https://next.hoppscotch.com/",
    })
  },
}

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },

  plugins: [
    Vue(),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      resolvers: [
        IconsResolver({
          prefix: "icon",
        }),
      ],
    }),
    // https://github.com/unplugin/unplugin-icons
    Icons(),
    // https://github.com/cssninjaStudio/unplugin-fonts
    // https://github.com/antfu/unplugin-auto-import
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
    // https://github.com/unjs/unhead
    UnheadVite(),
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions,
})
