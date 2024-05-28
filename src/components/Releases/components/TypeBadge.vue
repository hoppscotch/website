<template>
  <div class="flex flex-row flex-wrap gap-1">
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
        case "improvement":
          return "inline-flex items-center rounded-md border border-fuchsia-800 bg-fuchsia-500/10 px-2 text-sm text-fuchsia-400"
        case "feature":
          return "inline-flex items-center rounded-md border border-teal-800 bg-teal-500/10 px-2 text-sm text-teal-400"
        case "hotfix":
          return "inline-flex items-center rounded-md border border-red-800 bg-red-500/10 px-2 text-sm text-red-400"
        default:
          return ""
      }
    },
    getIconClass(type) {
      switch (type) {
        case "improvement":
          return "mr-2 h-1.5 w-1.5 rounded-full bg-fuchsia-400"
        case "feature":
          return "mr-2 h-1.5 w-1.5 rounded-full bg-teal-400"
        case "hotfix":
          return "mr-2 h-1.5 w-1.5 rounded-full bg-red-400"
        default:
          return ""
      }
    },
    getTypeLabel(type) {
      switch (type) {
        case "improvement":
          return "Improvement"
        case "feature":
          return "Feature"
        case "hotfix":
          return "Hotfix"
        default:
          return ""
      }
    },
  },
}
</script>
