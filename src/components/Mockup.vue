<script setup lang="ts">
const requestTabs = [
  {
    name: "Parameters",
  },
  {
    name: "Body",
  },
  {
    name: "Headers",
  },
  {
    name: "Authorization",
  },
  {
    name: "Pre-request Script",
  },
  {
    name: "Tests",
  },
]

const activeRequestTab = ref("Parameters")
const showResponse = ref(false)
const sendingRequest = ref(false)

const responseTabs = [
  {
    name: "JSON",
  },
  {
    name: "Raw",
  },
  {
    name: "Headers",
  },
  {
    name: "Test Results",
  },
]
const responseTime = () => Math.floor(Math.random() * 5000)
const responseSize = () => Math.floor(Math.random() * 1000)
const responseText = `{
    "method": "GET",
    "args": {},
    "data": "",
    "headers": {
      "accept": "application/json, text/plain, */*,image/webp",
      "accept-encoding": "br",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "cdn-loop": "netlify",
      "host": "echo.hoppscotch.io",
      "origin": "https://hoppscotch.com",
      "referer": "https://hoppscotch.com/",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
    },
    "path": "/",
    "isBase64Encoded": true
  }`

const activeResponseTab = ref("JSON")

const sendRequest = () => {
  sendingRequest.value = true
  setTimeout(() => {
    sendingRequest.value = false
    showResponse.value = true
  }, 500)
}
</script>

<template>
  <div class="relative w-full overflow-hidden p-2">
    <div
      class="justify-staitems-start flex flex-1 flex-col items-start overflow-y-auto overscroll-auto rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 text-xs brightness-110 transition-all duration-500"
      :class="sendingRequest || showResponse ? 'h-96' : 'h-80'"
    >
      <div class="sticky top-0 flex w-full flex-col">
        <div class="flex w-full gap-4 p-4">
          <div
            class="shrink-0 rounded-full border border-zinc-400/10 px-4 py-2 font-semibold text-zinc-600 backdrop-blur-md"
          >
            GET
          </div>
          <div
            class="w-full truncate rounded-full border border-zinc-400/10 px-4 py-2 text-zinc-600 backdrop-blur-md"
          >
            https://echo.hoppscotch.io
          </div>
          <button
            class="group/button relative grid shrink-0 overflow-hidden rounded-full px-4 py-2 shadow-[0_1000px_0_0_theme(colors.zinc.400)33_inset] transition-colors duration-200"
            @click="sendRequest"
          >
            <span>
              <span
                class="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip-element overflow-hidden rounded-full [mask:linear-gradient(theme(colors.zinc.50),_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate-element before:bg-[conic-gradient(from_0deg,transparent_0_340deg,theme(colors.zinc.50)_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
              ></span>
            </span>
            <span
              class="backdrop absolute inset-[1px] rounded-full bg-zinc-950 transition-colors duration-200 group-hover/button:bg-zinc-900"
            ></span>
            <span class="text z-10 text-zinc-100">Send</span>
          </button>
        </div>
        <div
          class="no-scrollbar flex w-full min-w-0 overflow-x-auto border-b border-zinc-400/10"
        >
          <button
            v-for="(tab, index) in requestTabs"
            :key="index"
            class="inline-flex flex-shrink-0 border-b border-transparent px-4 py-2 transition hover:text-zinc-600 focus:outline-none focus-visible:border-b focus-visible:border-zinc-800"
            :class="
              activeRequestTab === tab.name
                ? '!border-zinc-800 text-zinc-600'
                : 'text-zinc-800'
            "
            @click="activeRequestTab = tab.name"
          >
            {{ tab.name }}
          </button>
        </div>
        <div
          class="flex w-full divide-x divide-zinc-400/10 border-b border-zinc-400/10"
        >
          <div class="flex flex-1 px-4 py-2 text-zinc-800/50">Key</div>
          <div class="flex flex-1 px-4 py-2 text-zinc-800/50">Value</div>
        </div>
      </div>
      <div
        class="flex w-full flex-1 items-center justify-center overflow-y-auto text-zinc-400/25"
      >
        <icon-lucide-loader-2
          v-if="sendingRequest"
          class="h-4 w-4 animate-spin text-zinc-500"
        />
        <template v-else-if="showResponse">
          <div v-motion-fade-visible-once class="flex h-full w-full flex-col">
            <div class="flex w-full gap-4 p-4 text-zinc-600">
              <span> Status: 200 OK </span>
              <span> Time: {{ responseTime() }}ms </span>
              <span> Size: {{ responseSize() }}B </span>
            </div>
            <div
              class="no-scrollbar flex w-full min-w-0 overflow-x-auto border-b border-zinc-400/10"
            >
              <button
                v-for="(tab, index) in responseTabs"
                :key="index"
                class="inline-flex flex-shrink-0 border-b border-transparent px-4 py-2 transition hover:text-zinc-600 focus:outline-none focus-visible:border-b focus-visible:border-zinc-800"
                :class="
                  activeResponseTab === tab.name
                    ? '!border-zinc-800 text-zinc-600'
                    : 'text-zinc-800'
                "
                @click="activeResponseTab = tab.name"
              >
                {{ tab.name }}
              </button>
            </div>
            <div
              class="flex w-full flex-1 items-start justify-start overflow-y-scroll whitespace-pre p-4 font-mono text-zinc-600"
            >
              {{ responseText }}
            </div>
          </div>
        </template>
        <span
          v-else
          class="pointer-events-none mx-auto table animate-background-shine items-center bg-[linear-gradient(110deg,transparent,45%,theme(colors.zinc.300),55%,transparent)] bg-[length:200%_100%] bg-clip-text text-center text-xs text-transparent"
        >
          Send request to view response
        </span>
      </div>
    </div>
  </div>
</template>
