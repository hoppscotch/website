<script setup lang="ts">
  const tabOptions = {
    tabs: [
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
    ],
    activeTab: "Parameters",
  }
</script>

<template>
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="flex items-start justify-start overflow-y-auto border brightness-110 overscroll-auto h-80 rounded-2xl border-neutral-500/25 bg-gradient-to-b from-neutral-600/5 to-neutral-500/5"
    >
      <div class="flex flex-col flex-1 h-full text-xs">
        <div class="flex p-4 gap-4">
          <div
            class="inline-flex px-4 py-2 font-semibold border rounded-full text-neutral-600 border-neutral-400/10 backdrop-blur-md"
          >
            GET
          </div>
          <div
            class="inline-flex flex-1 px-4 py-2 border rounded-full text-neutral-600 border-neutral-400/10 backdrop-blur-md"
          >
            https://echo.hoppscotch.io
          </div>
          <button
            class="group/button relative grid overflow-hidden rounded-full px-4 py-2 shadow-[0_1000px_0_0_theme(colors.neutral.400)33_inset] transition-colors duration-200"
          >
            <span>
              <span
                class="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(theme(colors.neutral.50),_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,theme(colors.neutral.50)_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]"
              ></span>
            </span>
            <span
              class="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover/button:bg-neutral-900"
            ></span>
            <span class="z-10 text text-neutral-100">Send</span>
          </button>
        </div>
        <div class="flex truncate border-b border-neutral-400/10">
          <div
            v-for="(tab, index) in tabOptions.tabs"
            :key="index"
            class="px-4 py-2"
            :class="
              tabOptions.activeTab === tab.name
                ? 'border-b border-neutral-800 text-neutral-600'
                : 'text-neutral-800'
            "
          >
            {{ tab.name }}
          </div>
        </div>
        <div
          class="flex border-b divide-x divide-neutral-400/10 border-neutral-400/10"
        >
          <div class="flex flex-1 px-4 py-2 text-neutral-800/50">Key</div>
          <div class="flex flex-1 px-4 py-2 text-neutral-800/50">Value</div>
        </div>
        <div
          class="flex items-center justify-center flex-1 text-neutral-400/25"
        >
          Send request to view response
        </div>
      </div>
    </div>
  </div>
</template>
