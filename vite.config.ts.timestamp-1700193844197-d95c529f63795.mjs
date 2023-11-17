// vite.config.ts
import { fileURLToPath, URL } from "node:url"
import path from "node:path"
import Vue from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/@vitejs+plugin-vue@4.5.0_vite@5.0.0_vue@3.3.8/node_modules/@vitejs/plugin-vue/dist/index.mjs"
import Icons from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/unplugin-icons@0.17.4/node_modules/unplugin-icons/dist/vite.mjs"
import IconsResolver from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/unplugin-icons@0.17.4/node_modules/unplugin-icons/dist/resolver.mjs"
import Components from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.8/node_modules/unplugin-vue-components/dist/vite.mjs"
import Pages from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/vite-plugin-pages@0.31.0_vite@5.0.0/node_modules/vite-plugin-pages/dist/index.mjs"
import Layouts from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/vite-plugin-vue-layouts@0.8.0_vite@5.0.0_vue-router@4.2.5_vue@3.3.8/node_modules/vite-plugin-vue-layouts/dist/index.mjs"
import generateSitemap from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/vite-ssg-sitemap@0.6.0/node_modules/vite-ssg-sitemap/dist/index.js"
import { unheadVueComposablesImports } from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/@unhead+vue@1.8.4_vue@3.3.8/node_modules/@unhead/vue/dist/index.mjs"
import UnheadVite from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/@unhead+addons@1.8.4/node_modules/@unhead/addons/dist/vite.mjs"
import AutoImport from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/unplugin-auto-import@0.16.7_@vueuse+core@10.6.1/node_modules/unplugin-auto-import/dist/vite.js"
import { ElementPlusResolver } from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/unplugin-vue-components@0.25.2_vue@3.3.8/node_modules/unplugin-vue-components/dist/resolvers.mjs"
import { defineConfig } from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/vite@5.0.0_@types+node@20.9.1_sass@1.69.5/node_modules/vite/dist/node/index.js"
import Unfonts from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/unplugin-fonts@1.0.3_vite@5.0.0/node_modules/unplugin-fonts/dist/vite.mjs"
import Markdown from "file:///Users/liyasthomas/Projects/website/node_modules/.pnpm/unplugin-vue-markdown@0.25.2_vite@5.0.0/node_modules/unplugin-vue-markdown/dist/vite.js"
var __vite_injected_original_dirname = "/Users/liyasthomas/Projects/website"
var __vite_injected_original_import_meta_url =
  "file:///Users/liyasthomas/Projects/website/vite.config.ts"
var ssgOptions = {
  script: "async",
  formatting: "minify",
  onFinished() {
    generateSitemap({
      hostname: "https://hoppscotch.com/",
    })
  },
}
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(
        new URL("./src", __vite_injected_original_import_meta_url)
      ),
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ["vue", "md"],
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
        "vue-router",
        "@vueuse/core",
        unheadVueComposablesImports,
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
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGl5YXN0aG9tYXMvUHJvamVjdHMvd2Vic2l0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2xpeWFzdGhvbWFzL1Byb2plY3RzL3dlYnNpdGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2xpeWFzdGhvbWFzL1Byb2plY3RzL3dlYnNpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIlxuaW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiXG5pbXBvcnQgVnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIlxuaW1wb3J0IEljb25zIGZyb20gXCJ1bnBsdWdpbi1pY29ucy92aXRlXCJcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gXCJ1bnBsdWdpbi1pY29ucy9yZXNvbHZlclwiXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZVwiXG5pbXBvcnQgUGFnZXMgZnJvbSBcInZpdGUtcGx1Z2luLXBhZ2VzXCJcbmltcG9ydCBMYXlvdXRzIGZyb20gXCJ2aXRlLXBsdWdpbi12dWUtbGF5b3V0c1wiXG5pbXBvcnQgZ2VuZXJhdGVTaXRlbWFwIGZyb20gXCJ2aXRlLXNzZy1zaXRlbWFwXCJcbmltcG9ydCB7IHVuaGVhZFZ1ZUNvbXBvc2FibGVzSW1wb3J0cyB9IGZyb20gXCJAdW5oZWFkL3Z1ZVwiXG5pbXBvcnQgVW5oZWFkVml0ZSBmcm9tIFwiQHVuaGVhZC9hZGRvbnMvdml0ZVwiXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tIFwidW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZVwiXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSBcInVucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVyc1wiXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgVW5mb250cyBmcm9tIFwidW5wbHVnaW4tZm9udHMvdml0ZVwiXG5pbXBvcnQgdHlwZSB7IFZpdGVTU0dPcHRpb25zIH0gZnJvbSBcInZpdGUtc3NnXCJcbmltcG9ydCBNYXJrZG93biBmcm9tIFwidW5wbHVnaW4tdnVlLW1hcmtkb3duL3ZpdGVcIlxuXG5jb25zdCBzc2dPcHRpb25zOiBWaXRlU1NHT3B0aW9ucyA9IHtcbiAgc2NyaXB0OiBcImFzeW5jXCIsXG4gIGZvcm1hdHRpbmc6IFwibWluaWZ5XCIsXG4gIG9uRmluaXNoZWQoKSB7XG4gICAgZ2VuZXJhdGVTaXRlbWFwKHtcbiAgICAgIGhvc3RuYW1lOiBcImh0dHBzOi8vaG9wcHNjb3RjaC5jb20vXCIsXG4gICAgfSlcbiAgfSxcbn1cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogZmlsZVVSTFRvUGF0aChuZXcgVVJMKFwiLi9zcmNcIiwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICBcIn4vXCI6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjXCIpfS9gLFxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIFZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgfSksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2hhbm5vZXJ1L3ZpdGUtcGx1Z2luLXBhZ2VzXG4gICAgUGFnZXMoe1xuICAgICAgZXh0ZW5zaW9uczogW1widnVlXCIsIFwibWRcIl0sXG4gICAgfSksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0pvaG5DYW1waW9uSnIvdml0ZS1wbHVnaW4tdnVlLWxheW91dHNcbiAgICBMYXlvdXRzKCksXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3VucGx1Z2luL3VucGx1Z2luLXZ1ZS1tYXJrZG93blxuICAgIE1hcmtkb3duKHtcbiAgICAgIGhlYWRFbmFibGVkOiB0cnVlLFxuICAgIH0pLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgZXh0ZW5zaW9uczogW1widnVlXCIsIFwibWRcIl0sXG4gICAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XG4gICAgICAgICAgcHJlZml4OiBcImljb25cIixcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICB9KSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW5wbHVnaW4vdW5wbHVnaW4taWNvbnNcbiAgICBJY29ucygpLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgZXNsaW50cmM6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIFwidnVlXCIsXG4gICAgICAgIFwidnVlLXJvdXRlclwiLFxuICAgICAgICBcIkB2dWV1c2UvY29yZVwiLFxuICAgICAgICB1bmhlYWRWdWVDb21wb3NhYmxlc0ltcG9ydHMsXG4gICAgICBdLFxuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgICAgZGlyczogW1wiLi9jb21wb25lbnRzLyoqXCJdLFxuICAgIH0pLFxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NuaW5qYVN0dWRpby91bnBsdWdpbi1mb250c1xuICAgIFVuZm9udHMoe1xuICAgICAgZm9udHNvdXJjZToge1xuICAgICAgICBmYW1pbGllczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiSW50ZXIgVmFyaWFibGVcIixcbiAgICAgICAgICAgIHZhcmlhYmxlczogW1widmFyaWFibGUtZnVsbFwiXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiUGx1cyBKYWthcnRhIFNhbnMgVmFyaWFibGVcIixcbiAgICAgICAgICAgIHZhcmlhYmxlczogW1widmFyaWFibGUtZnVsbFwiXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdW5qcy91bmhlYWRcbiAgICBVbmhlYWRWaXRlKCksXG4gIF0sXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXNzZ1xuICBzc2dPcHRpb25zLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlIsU0FBUyxlQUFlLFdBQVc7QUFDOVQsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sU0FBUztBQUNoQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQUNwQixPQUFPLHFCQUFxQjtBQUM1QixTQUFTLG1DQUFtQztBQUM1QyxPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGFBQWE7QUFFcEIsT0FBTyxjQUFjO0FBaEJyQixJQUFNLG1DQUFtQztBQUFxSSxJQUFNLDJDQUEyQztBQWtCL04sSUFBTSxhQUE2QjtBQUFBLEVBQ2pDLFFBQVE7QUFBQSxFQUNSLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFDWCxvQkFBZ0I7QUFBQSxNQUNkLFVBQVU7QUFBQSxJQUNaLENBQUM7QUFBQSxFQUNIO0FBQ0Y7QUFHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3BELE1BQU0sR0FBRyxLQUFLLFFBQVEsa0NBQVcsS0FBSyxDQUFDO0FBQUEsSUFDekM7QUFBQSxFQUNGO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsVUFBVSxPQUFPO0FBQUEsSUFDN0IsQ0FBQztBQUFBO0FBQUEsSUFFRCxNQUFNO0FBQUEsTUFDSixZQUFZLENBQUMsT0FBTyxJQUFJO0FBQUEsSUFDMUIsQ0FBQztBQUFBO0FBQUEsSUFFRCxRQUFRO0FBQUE7QUFBQSxJQUVSLFNBQVM7QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQTtBQUFBLElBRUQsV0FBVztBQUFBLE1BQ1QsWUFBWSxDQUFDLE9BQU8sSUFBSTtBQUFBLE1BQ3hCLFdBQVc7QUFBQSxRQUNULGNBQWM7QUFBQSxVQUNaLFFBQVE7QUFBQSxRQUNWLENBQUM7QUFBQSxNQUNIO0FBQUEsTUFDQSxTQUFTLENBQUMsVUFBVSxjQUFjLE9BQU87QUFBQSxJQUMzQyxDQUFDO0FBQUE7QUFBQSxJQUVELE1BQU07QUFBQTtBQUFBLElBRU4sV0FBVztBQUFBLE1BQ1QsVUFBVTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0FBQUEsTUFDakMsYUFBYTtBQUFBLE1BQ2IsTUFBTSxDQUFDLGlCQUFpQjtBQUFBLElBQzFCLENBQUM7QUFBQTtBQUFBLElBRUQsUUFBUTtBQUFBLE1BQ04sWUFBWTtBQUFBLFFBQ1YsVUFBVTtBQUFBLFVBQ1I7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLFdBQVcsQ0FBQyxlQUFlO0FBQUEsVUFDN0I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixXQUFXLENBQUMsZUFBZTtBQUFBLFVBQzdCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLElBRUQsV0FBVztBQUFBLEVBQ2I7QUFBQTtBQUFBLEVBRUE7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
