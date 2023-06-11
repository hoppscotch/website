import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import Components from "unplugin-vue-components/vite"
import Layouts from "vite-plugin-vue-layouts"
import Pages from "vite-plugin-pages"

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env,
  },
  plugins: [
    vue(),
    Layouts(),
    Pages(),
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
