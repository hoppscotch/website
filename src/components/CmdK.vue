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

  const activeTab = ref("request")
  const selectedEntryIndex = ref(0)
  const search = ref("")

  const changeTab = (tab: string) => {
    activeTab.value = tab
    selectedEntryIndex.value = 0
  }
  const selectEntry = (entry: number) => {
    selectedEntryIndex.value = entry
  }
  const filteredEntries = (entries: cmdkTabEntry[]) => {
    return entries.filter((entry) => {
      return entry.name.toLowerCase().includes(search.value.toLowerCase())
    })
  }
</script>
<template>
  <div
    class="flex items-center px-4 -mb-2 text-sm justify-evenly border-violet-400/10"
  >
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      class="flex items-center justify-center focus:outline-none relative p-4 after:content-['']"
      :class="
        activeTab === tab.id
          ? 'after:absolute text-slate-300 after:inset-x-4 after:-bottom-px after:h-px after:bg-gradient-to-r after:from-transparent after:via-violet-400/50 after:to-transparent flex-1 '
          : 'text-slate-400'
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
  <div class="relative w-full p-2 overflow-hidden">
    <div
      class="flex items-start justify-start overflow-y-auto border overscroll-auto h-80 rounded-2xl border-violet-500/25 bg-violet-500/5 backdrop-blur-md"
    >
      <div class="relative flex flex-col flex-1 text-xs">
        <input
          v-model="search"
          class="sticky top-0 z-10 flex-1 px-4 py-4 border-b bg-violet-950/5 backdrop-blur-md placeholder:text-violet-400/80 focus:outline-none border-violet-400/10"
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
              <div class="px-4 py-2 text-violet-200/50">
                {{ tab.name }}
              </div>
              <div class="flex flex-col px-2 text-violet-100/80">
                <div
                  v-for="(entry, entryIndex) in filteredEntries(tab.entries)"
                  :key="entryIndex"
                  class="flex items-center justify-between px-3 py-2 cursor-pointer rounded-md"
                  :class="{
                    'bg-violet-400/10': entryIndex === selectedEntryIndex,
                  }"
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
                      class="px-1 rounded bg-violet-200/10 text-[10px]"
                    >
                      {{ key }}</span
                    >
                  </div>
                </div>
                <div
                  v-if="filteredEntries(tab.entries).length === 0"
                  class="flex flex-col items-center justify-center h-full text-violet-200/50"
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
