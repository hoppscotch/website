<script setup lang="ts">
import type { DownloadablePlatformType } from "@/pages/download.vue"
import IconGlobe from "~icons/lucide/globe"
import IconTerminal from "~icons/lucide/terminal"

type DownloadablePlatform = {
  id: DownloadablePlatformType
  name: string
  icon:
    | {
        type: "image"
        src: string
      }
    | {
        type: "svg"
        src: any
      }
  downloadLinks: {
    name: string
    url: string
  }[]
}

const platform = defineModel("platform")

const platforms: DownloadablePlatform[] = [
  {
    id: "macOS",
    name: "Mac",
    icon: {
      type: "image",
      src: "/images/download-apple.svg",
    },
    downloadLinks: [
      {
        name: "Download for Mac &nbsp; ~ &nbsp; Apple Silicon",
        url: "https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_mac_aarch64.dmg",
      },
      {
        name: "Download for Mac &nbsp; ~ &nbsp; Intel",
        url: "https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_mac_x64.dmg",
      },
    ],
  },
  {
    id: "windows",
    name: "Windows",
    icon: {
      type: "image",
      src: "/images/download-windows.svg",
    },
    downloadLinks: [
      {
        name: "Download for Windows",
        url: "https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_win_x64.msi",
      },
    ],
  },
  {
    id: "linux",
    name: "Linux",
    icon: {
      type: "image",
      src: "/images/download-linux.svg",
    },
    downloadLinks: [
      {
        name: "Download for Linux &nbsp; ~ &nbsp; .deb",
        url: "https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_linux_x64.deb",
      },
      {
        name: "Download for Linux &nbsp; ~ &nbsp; .AppImage",
        url: "https://github.com/hoppscotch/releases/releases/latest/download/Hoppscotch_linux_x64.AppImage",
      },
    ],
  },
  {
    id: "web",
    name: "Web App",
    icon: {
      type: "svg",
      src: IconGlobe,
    },
    downloadLinks: [
      {
        name: "Open Web App",
        url: "https://hoppscotch.io",
      },
    ],
  },
  {
    id: "cli",
    name: "CLI",
    icon: {
      type: "svg",
      src: IconTerminal,
    },
    downloadLinks: [
      {
        name: "Install CLI",
        url: "https://docs.hoppscotch.io/documentation/clients/cli",
      },
    ],
  },
]

const router = useRouter()

// Set the URL query parameter based on the platform selected
const handlePlatformChange = (newPlatform: DownloadablePlatformType) => {
  platform.value = newPlatform
  router.push({
    name: "/download",
    query: {
      platform: newPlatform,
    },
  })
}
</script>

<template>
  <section class="relative">
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <div
          class="mx-auto flex max-w-2xl flex-col items-center pb-12 text-center md:pb-20"
        >
          <span
            class="mb-6 inline-flex max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-transparent"
          >
            Download
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            Hoppscotch Client
          </h2>
          <p class="text-zinc-400/80">
            Download (alpha release) for Mac, Windows, Linux — Web and CLI.
          </p>
        </div>
        <!-- Section content -->
        <div class="mx-auto max-w-4xl">
          <!-- Tabs buttons -->
          <div
            class="no-scrollbar mb-10 flex w-full min-w-0 gap-4 overflow-x-auto"
          >
            <button
              v-for="item in platforms"
              :key="item.id"
              class="m-2 inline-flex flex-shrink-0 grow flex-col items-center justify-center rounded-xl border border-transparent px-8 py-4 text-center opacity-50 transition-opacity hover:bg-zinc-500/10"
              :class="{
                '!border-zinc-400/10 bg-zinc-500/10 !opacity-100':
                  platform === item.id,
              }"
              @click="handlePlatformChange(item.id)"
            >
              <div
                class="mb-4 flex flex-shrink-0 rounded-xl border border-zinc-600 bg-zinc-900 p-4"
              >
                <img
                  v-if="item.icon.type === 'image'"
                  loading="lazy"
                  class="h-6 w-6"
                  :src="item.icon.src"
                  :alt="item.name"
                />
                <component
                  v-else-if="item.icon.type === 'svg'"
                  :is="item.icon.src"
                  class="h-6 w-6"
                />
              </div>
              <div
                class="text-sm leading-tight"
                :class="{ 'text-zinc-200': platform === item.id }"
              >
                {{ item.name }}
              </div>
            </button>
          </div>
          <!-- Tab items -->
          <div class="relative flex min-h-32 flex-col">
            <Transition
              v-for="item in platforms"
              :key="item.id"
              enter-active-class="order-first transition duration-500 "
              enter-from-class="opacity-0 -translate-y-8"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition duration-500 "
              leave-from-class="opacity-100 -translate-y-0"
              leave-to-class="opacity-0 translate-y-8"
            >
              <div
                v-if="platform === item.id"
                class="flex w-full justify-center"
              >
                <div class="flex flex-col items-stretch gap-4">
                  <a
                    v-for="link in item.downloadLinks"
                    :key="link.name"
                    :href="link.url"
                    class="relative inline-flex flex-shrink-0 items-center justify-center rounded-xl border border-zinc-500/50 bg-zinc-500/10 px-3 py-2 text-sm transition hover:border-zinc-500/80"
                    target="_blank"
                  >
                    <div v-html="link.name" />
                  </a>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
