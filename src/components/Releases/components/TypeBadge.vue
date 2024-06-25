<template>
  <div class="mb-8 mr-3 mt-2 inline-block">
    <span :class="getTypeClass(type)">
      <span :class="getIconClass(type)"></span>
      {{ getTypeLabel(type) }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  methods: {
    getTypeClass(type) {
      switch (type) {
        case "improvements":
          return "inline-flex items-center rounded-md border border-fuchsia-800 bg-fuchsia-500/10 px-2 text-xs text-fuchsia-400"
        case "new features":
          return "inline-flex items-center rounded-md border border-teal-800 bg-teal-500/10 px-2 text-xs text-teal-400"
        case "hotfix":
          return "inline-flex items-center rounded-md border border-red-800 bg-red-500/10 px-2 text-xs text-red-400"
        default:
          return ""
      }
    },
    getIconClass(type) {
      switch (type) {
        case "improvements":
          return "mr-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400"
        case "new features":
          return "mr-2 h-1.5 w-1.5 rounded-full bg-teal-400"
        case "hotfix":
          return "mr-2 h-1.5 w-1.5 rounded-full bg-red-400"
        default:
          return ""
      }
    },
    getTypeLabel(type) {
      switch (type) {
        case "improvements":
          return "Improvements"
        case "new features":
          return "New Features"
        case "hotfix":
          return "Hotfix"
        default:
          return ""
      }
    },
  },
}
</script>
