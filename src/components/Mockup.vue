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
      showResponse.value = true
      sendingRequest.value = false
    }, 1800)
  }
</script>

<template>
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="flex flex-col items-start flex-1 overflow-y-auto text-xs border justify-staitems-start brightness-110 overscroll-auto h-96 rounded-2xl border-neutral-500/25 bg-gradient-to-b from-neutral-600/5 to-neutral-500/5"
    >
      <div class="sticky top-0 flex flex-col w-full">
        <div class="flex w-full p-4 gap-4">
          <div
            class="px-4 py-2 font-semibold border rounded-full shrink-0 text-neutral-600 border-neutral-400/10 backdrop-blur-md"
          >
            GET
          </div>
          <div
            class="w-full px-4 py-2 truncate border rounded-full text-neutral-600 border-neutral-400/10 backdrop-blur-md"
          >
            https://echo.hoppscotch.io
          </div>
          <button
            class="group/button shrink-0 relative grid overflow-hidden rounded-full px-4 py-2 shadow-[0_1000px_0_0_theme(colors.neutral.400)33_inset] transition-colors duration-200"
            @click="sendRequest"
          >
            <span>
              <span
                class="spark mask-gradient animate-flip-element before:animate-rotate-element absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(theme(colors.neutral.50),_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,theme(colors.neutral.50)_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
              ></span>
            </span>
            <span
              class="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover/button:bg-neutral-900"
            ></span>
            <span class="z-10 text text-neutral-100">Send</span>
          </button>
        </div>
        <div
          class="flex w-full min-w-0 overflow-x-auto border-b no-scrollbar border-neutral-400/10"
        >
          <button
            v-for="(tab, index) in requestTabs"
            :key="index"
            class="inline-flex flex-shrink-0 px-4 py-2 border-b border-transparent transition focus:outline-none focus-visible:border-b focus-visible:border-neutral-800 hover:text-neutral-600"
            :class="
              activeRequestTab === tab.name
                ? '!border-neutral-800 text-neutral-600'
                : 'text-neutral-800'
            "
            @click="activeRequestTab = tab.name"
          >
            {{ tab.name }}
          </button>
        </div>
        <div
          class="flex w-full border-b divide-x divide-neutral-400/10 border-neutral-400/10"
        >
          <div class="flex flex-1 px-4 py-2 text-neutral-800/50">Key</div>
          <div class="flex flex-1 px-4 py-2 text-neutral-800/50">Value</div>
        </div>
      </div>
      <div
        class="flex items-center justify-center flex-1 w-full overflow-y-auto text-neutral-400/25"
      >
        <icon-lucide-loader-2
          v-if="sendingRequest"
          class="w-4 h-4 text-neutral-500 animate-spin"
        />
        <template v-else-if="showResponse">
          <div class="flex flex-col w-full h-full">
            <div class="flex w-full p-4 gap-4 text-neutral-600">
              <span> Status: 200 OK </span>
              <span> Time: {{ responseTime() }}ms </span>
              <span> Size: {{ responseSize() }}B </span>
            </div>
            <div
              class="flex w-full min-w-0 overflow-x-auto border-b no-scrollbar border-neutral-400/10"
            >
              <button
                v-for="(tab, index) in responseTabs"
                :key="index"
                class="inline-flex flex-shrink-0 px-4 py-2 border-b border-transparent transition focus:outline-none focus-visible:border-b focus-visible:border-neutral-800 hover:text-neutral-600"
                :class="
                  activeResponseTab === tab.name
                    ? '!border-neutral-800 text-neutral-600'
                    : 'text-neutral-800'
                "
                @click="activeResponseTab = tab.name"
              >
                {{ tab.name }}
              </button>
            </div>
            <div
              class="flex items-start justify-start flex-1 w-full p-4 overflow-y-scroll font-mono whitespace-pre text-neutral-600"
            >
              {{ responseText }}
            </div>
          </div>
        </template>
        <span
          v-else
          class="table mx-auto items-center pointer-events-none text-center animate-background-shine bg-[linear-gradient(110deg,transparent,45%,theme(colors.neutral.300),55%,transparent)] bg-[length:200%_100%] bg-clip-text text-xs text-transparent"
        >
          Send request to view response
        </span>
      </div>
    </div>
  </div>
</template>
