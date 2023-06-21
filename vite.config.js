import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"
import Layouts from "vite-plugin-vue-layouts"
import Pages from "vite-plugin-pages"
import generateSitemap from "vite-plugin-pages-sitemap"
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [
    vue(),
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
    Icons({
      prefix: "icon",
    }),
  ],
})
