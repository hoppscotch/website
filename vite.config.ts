import { fileURLToPath, URL } from "node:url"
import { resolve, dirname } from "node:path"
import Vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"
import Layouts from "vite-plugin-vue-layouts"
import generateSitemap from "vite-ssg-sitemap"
import { unheadVueComposablesImports } from "@unhead/vue"
import UnheadVite from "@unhead/addons/vite"
import AutoImport from "unplugin-auto-import/vite"
import { defineConfig } from "vite"
import Unfonts from "unplugin-fonts/vite"
import type { ViteSSGOptions } from "vite-ssg"
import Markdown from "unplugin-vue-markdown/vite"
import VueRouter from "unplugin-vue-router/vite"
import { VueRouterAutoImports } from "unplugin-vue-router"
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"

const ssgOptions: ViteSSGOptions = {
  script: "async",
  formatting: "minify",
  onFinished() {
    generateSitemap({
      hostname: "https://hoppscotch.com/",
    })
  },
}

// https://vitejs.dev/config
export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~/": resolve(dirname(fileURLToPath(import.meta.url)), "src") + "/",
    },
  },

  plugins: [
    VueRouter({
      extensions: [".vue", ".md"],
    }),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/unplugin/unplugin-vue-markdown
    Markdown({
      headEnabled: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue", "md"],
      resolvers: [
        IconsResolver({
          prefix: "icon",
        }),
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    // https://github.com/FatehAK/vite-plugin-image-optimizer
    ViteImageOptimizer({}),
    // https://github.com/unplugin/unplugin-icons
    Icons(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "@vueuse/core",
        unheadVueComposablesImports,
        VueRouterAutoImports,
        {
          "@vueuse/integrations/useSortable": ["useSortable"],
        },
      ],
      vueTemplate: true,
    }),
    // https://github.com/cssninjaStudio/unplugin-fonts
    Unfonts({
      fontsource: {
        families: ["Inter Variable", "Plus Jakarta Sans Variable"],
      },
    }),
    // https://github.com/unjs/unhead
    UnheadVite(),
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions,
})
