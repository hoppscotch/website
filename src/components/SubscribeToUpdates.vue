<script setup lang="ts">
const newsletterModalOpen = ref(false)
</script>

<template>
  <button
    class="rounded text-zinc-400/60 transition hover:text-zinc-400/80"
    @click.stop="newsletterModalOpen = true"
  >
    Subscribe to updates
  </button>
  <Modal
    id="video-modal"
    aria-label="modal-headline"
    :modal-open="newsletterModalOpen"
    @close-modal="newsletterModalOpen = false"
  >
    <div class="rounded-2xl border border-zinc-500/20 bg-white/10 p-1">
      <div
        class="relative h-full w-full overflow-hidden rounded-xl border border-zinc-950 bg-primary"
      >
        <Newsletter />
      </div>
    </div>
  </Modal>
</template>
