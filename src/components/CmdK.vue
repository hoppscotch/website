<script setup lang="ts">
import IconSend from "~icons/lucide/send"
import IconLayers from "~icons/lucide/layers"
import IconUsers from "~icons/lucide/users"
import IconFolder from "~icons/lucide/folder"
import IconSettings from "~icons/lucide/settings"
import IconPlay from "~icons/lucide/play"
import IconSave from "~icons/lucide/save"
import IconSaveAll from "~icons/lucide/save-all"
import IconFileEdit from "~icons/lucide/file-edit"
import IconCopyPlus from "~icons/lucide/copy-plus"
import IconCopy from "~icons/lucide/copy"
import IconUser from "~icons/lucide/user"
import IconPlusSquare from "~icons/lucide/plus-square"
import IconUserPlus from "~icons/lucide/user-plus"
import IconXCircle from "~icons/lucide/x-circle"
import IconSearch from "~icons/lucide/search"
import IconFolderPlus from "~icons/lucide/folder-plus"
import IconFolderX from "~icons/lucide/folder-x"
import IconFolderDown from "~icons/lucide/folder-down"
import IconImport from "~icons/lucide/import"
import IconLifeBuoy from "~icons/lucide/life-buoy"
import IconZap from "~icons/lucide/zap"
import IconPalette from "~icons/lucide/palette"
import IconGlobe from "~icons/lucide/globe"
import IconFlaskConical from "~icons/lucide/flask-conical"
import IconCommand from "~icons/lucide/command"

interface cmdkTabEntry {
  name: string
  icon: any
  shortcut?: string[]
}

interface cmdkTabs {
  id: string
  name: string
  icon: any
  entries: cmdkTabEntry[]
}

const tabs: cmdkTabs[] = [
  {
    id: "request",
    name: "Request",
    icon: IconSend,
    entries: [
      { name: "Send request", icon: IconPlay, shortcut: ["⌘", "↩"] },
      { name: "Save request", icon: IconSave, shortcut: ["⌘", "S"] },
      {
        name: "Save as new request",
        icon: IconSaveAll,
        shortcut: ["⌘", "Shift", "S"],
      },
      { name: "Rename request", icon: IconFileEdit },
      { name: "Open in new tab", icon: IconCopyPlus },
      { name: "Duplicate request", icon: IconCopy },
    ],
  },
  {
    id: "workspace",
    name: "Workspace",
    icon: IconLayers,
    entries: [
      { name: "Change workspace", icon: IconUsers },
      { name: "Switch to your personal workspace", icon: IconUser },
      { name: "Create a new workspace", icon: IconPlusSquare },
      { name: "Invite people", icon: IconUserPlus },
      { name: "Rename workspace", icon: IconFileEdit },
      { name: "Delete workspace", icon: IconXCircle },
    ],
  },
  {
    id: "team",
    name: "Team",
    icon: IconUsers,
    entries: [
      { name: "Switch team", icon: IconUsers },
      { name: "Create a new team", icon: IconPlusSquare },
      { name: "Invite people", icon: IconUserPlus },
      { name: "Rename team", icon: IconFileEdit },
      { name: "Delete team", icon: IconXCircle },
    ],
  },
  {
    id: "collections",
    name: "Collections",
    icon: IconFolder,
    entries: [
      { name: "Search", icon: IconSearch },
      { name: "Create a new collection", icon: IconFolderPlus },
      { name: "Rename collection", icon: IconFileEdit },
      { name: "Delete collection", icon: IconFolderX },
      { name: "Export collection", icon: IconFolderDown },
      { name: "Import from OpenAPI", icon: IconImport },
    ],
  },
  {
    id: "settings",
    name: "Settings",
    icon: IconSettings,
    entries: [
      { name: "Help and support", icon: IconLifeBuoy, shortcut: ["?"] },
      { name: "Keyboard shortcuts", icon: IconZap, shortcut: ["⌘", "/"] },
      { name: "Change theme", icon: IconPalette },
      { name: "Change language", icon: IconGlobe },
      { name: "Experiemnts", icon: IconFlaskConical },
      { name: "Search and command", icon: IconCommand, shortcut: ["⌘", "K"] },
    ],
  },
]

const activeTab = ref<string>("request")
const selectedEntryIndex = ref<number>(0)
const search = ref<string>("")

const changeTab = (tab: string) => {
  activeTab.value = tab
}

watch(activeTab, () => {
  selectedEntryIndex.value = 0
})

const selectEntry = (entry: number) => {
  selectedEntryIndex.value = entry
}

const filteredEntries = computed(() => {
  const activeTabData = tabs.find((tab) => tab.id === activeTab.value)
  if (!activeTabData) return []

  return activeTabData.entries.filter((entry) => {
    return entry.name.toLowerCase().includes(search.value.toLowerCase())
  })
})

const target = ref<HTMLDivElement | null>(null)
const targetIsVisible = ref(false)

let keydownListener: (() => void) | null = null

const cycleEntries = (direction: "up" | "down") => {
  if (direction === "up") {
    if (selectedEntryIndex.value === 0) {
      selectedEntryIndex.value = filteredEntries.value.length - 1
    } else {
      selectedEntryIndex.value--
    }
  } else {
    if (selectedEntryIndex.value === filteredEntries.value.length - 1) {
      selectedEntryIndex.value = 0
    } else {
      selectedEntryIndex.value++
    }
  }
}

const cycleTabs = (direction: "left" | "right") => {
  const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab.value)
  if (direction === "left") {
    if (activeTabIndex === 0) {
      activeTab.value = tabs[tabs.length - 1].id
    } else {
      activeTab.value = tabs[activeTabIndex - 1].id
    }
  } else {
    if (activeTabIndex === tabs.length - 1) {
      activeTab.value = tabs[0].id
    } else {
      activeTab.value = tabs[activeTabIndex + 1].id
    }
  }
}

const getKey = (e: KeyboardEvent) => {
  if (e.keyCode === 38) return "up"
  if (e.keyCode === 40) return "down"
  if (e.keyCode === 37) return "left"
  if (e.keyCode === 39) return "right"
  return null
}

watch(targetIsVisible, (isVisible) => {
  if (isVisible) {
    keydownListener = useEventListener(
      document,
      "keydown",
      (e: KeyboardEvent) => {
        const key = getKey(e)
        if (!key) return
        if (key === "up" || key === "down") cycleEntries(key)
        if (key === "left" || key === "right") cycleTabs(key)
      },
    )
  } else {
    cleanupKeydown()
  }
})

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  targetIsVisible.value = isIntersecting
})

const cleanupKeydown = () => {
  if (keydownListener) {
    keydownListener()
    keydownListener = null
  }
}

onBeforeUnmount(() => {
  cleanupKeydown()
})
</script>
<template>
  <div
    class="-mb-2 flex items-center justify-evenly border-zinc-400/10 px-4 text-sm"
  >
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      class="relative flex items-center justify-center p-4 after:content-[''] focus:outline-none"
      :class="
        activeTab === tab.id
          ? 'flex-1 text-zinc-400/80 transition after:absolute after:inset-x-4 after:-bottom-px after:z-10 after:h-px after:bg-gradient-to-r after:from-transparent after:via-zinc-500'
          : 'text-zinc-400/80 hover:text-zinc-400/80'
      "
      @click="changeTab(tab.id)"
    >
      <component :is="tab.icon" class="mr-3" />
      <span
        v-if="activeTab === tab.id"
        v-motion-slide-right
        class="duration-200"
      >
        {{ tab.name }}
      </span>
    </button>
  </div>
  <div ref="target" class="relative w-full overflow-hidden p-2">
    <div
      class="flex h-80 items-start justify-start overflow-y-auto overscroll-auto rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-800/10 to-zinc-400/10 brightness-110"
    >
      <div class="relative flex flex-1 flex-col text-xs">
        <input
          v-model="search"
          class="sticky top-0 z-10 flex-1 border-b border-zinc-400/10 bg-zinc-950/5 px-4 py-4 backdrop-blur-md placeholder:text-zinc-400/80 focus:outline-none"
          placeholder="Type a command or search…"
        />
        <div class="relative z-0 flex flex-col">
          <template v-for="(tab, tabIndex) in tabs">
            <div
              v-if="activeTab === tab.id"
              :key="tabIndex"
              v-motion-fade
              class="duration-500"
            >
              <div class="px-4 py-2 text-zinc-400/80">
                {{ tab.name }}
              </div>
              <div class="flex flex-col px-2">
                <div
                  v-for="(entry, entryIndex) in filteredEntries"
                  :key="entryIndex"
                  class="flex cursor-pointer items-center justify-between rounded-md bg-zinc-400 px-3 py-2 transition"
                  :class="
                    entryIndex === selectedEntryIndex
                      ? 'bg-opacity-10 text-zinc-100'
                      : 'bg-opacity-0 text-zinc-400/80'
                  "
                  @mouseover="selectEntry(entryIndex)"
                >
                  <span class="flex items-center">
                    <component :is="entry.icon" class="mr-3" />
                    {{ entry.name }}
                  </span>
                  <div v-if="entry.shortcut" class="flex space-x-1">
                    <span
                      v-for="(key, keyIndex) in entry.shortcut"
                      :key="keyIndex"
                      class="rounded bg-zinc-400/10 px-1 text-[10px] text-zinc-400/80"
                      :class="{
                        'text-zinc-400/80': entryIndex === selectedEntryIndex,
                      }"
                    >
                      {{ key }}</span
                    >
                  </div>
                </div>
                <div
                  v-if="filteredEntries.length === 0"
                  class="flex h-full flex-col items-center justify-center text-zinc-400/80"
                >
                  Nothing found for "{{ search }}"
                  <button class="m-2 underline" @click="search = ''">
                    Clear search
                  </button>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
