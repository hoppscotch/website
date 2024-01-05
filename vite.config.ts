import { fileURLToPath, URL } from "node:url"
import path from "node:path"
import Vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"
import Layouts from "vite-plugin-vue-layouts"
import generateSitemap from "vite-ssg-sitemap"
import { unheadVueComposablesImports } from "@unhead/vue"
import UnheadVite from "@unhead/addons/vite"
import AutoImport from "unplugin-auto-import/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { defineConfig } from "vite"
import Unfonts from "unplugin-fonts/vite"
import type { ViteSSGOptions } from "vite-ssg"
import Markdown from "unplugin-vue-markdown/vite"
import VueRouter from "unplugin-vue-router/vite"
import { VueRouterAutoImports } from "unplugin-vue-router"

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
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "~/": `${path.resolve(__dirname, "src")}/`,
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
    // https://github.com/unplugin/unplugin-icons
    Icons(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      imports: [
        "vue",
        "@vueuse/core",
        unheadVueComposablesImports,
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          "vue-router/auto": ["useLink"],
        },
      ],
      resolvers: [ElementPlusResolver()],
      vueTemplate: true,
      dirs: ["./components/**"],
    }),
    // https://github.com/cssninjaStudio/unplugin-fonts
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
