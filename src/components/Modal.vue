<script setup lang="ts">
const props = defineProps({
  id: { type: String, required: true },
  ariaLabel: { type: String, default: "Modal" },
  modalOpen: { type: Boolean },
})

const emit = defineEmits(["closeModal"])

const modalContent = ref<HTMLElement | null>(null)

// close on click outside
function clickHandler(event: MouseEvent) {
  if (
    !props.modalOpen ||
    !modalContent.value ||
    modalContent.value.contains(event.target as Node)
  ) {
    return
  }
  emit("closeModal")
}

// close if the esc key is pressed
function keyHandler(event: KeyboardEvent) {
  if (!props.modalOpen || event.key !== "Escape") {
    return
  }
  emit("closeModal")
}

onMounted(() => {
  document.addEventListener("click", clickHandler)
  document.addEventListener("keydown", keyHandler)
})

onUnmounted(() => {
  document.removeEventListener("click", clickHandler)
  document.removeEventListener("keydown", keyHandler)
})
</script>

<template>
  <!-- Modal backdrop -->
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-100 ease-out"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="modalOpen"
      class="fixed inset-0 z-50 transition-opacity bg-slate-950/10 backdrop-blur-2xl"
      aria-hidden="true"
    ></div>
  </Transition>

  <!-- Modal dialog -->
  <Transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-out"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-show="modalOpen"
      :id="id"
      class="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-hidden sm:px-6"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="ariaLabel"
    >
      <div
        ref="modalContent"
        class="relative flex flex-col items-end w-full max-w-6xl max-h-full overflow-auto"
      >
        <button
          class="p-1 mb-4 border rounded-full transition border-white/10 hover:border-white/25 bg-white/10"
          @click="emit('closeModal')"
        >
          <icon-lucide-x />
        </button>
        <slot />
      </div>
    </div>
  </Transition>
</template>
