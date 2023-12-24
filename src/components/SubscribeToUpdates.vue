<script setup lang="ts">
  const newsletterModalOpen = ref(false)
</script>

<template>
  <button
    class="rounded transition text-zinc-400/60 hover:text-zinc-400/80"
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
    <div class="p-1 border rounded-2xl bg-white/10 border-zinc-500/20">
      <div
        class="relative w-full h-full overflow-hidden border border-zinc-950 rounded-xl bg-primary"
      >
        <Newsletter />
      </div>
    </div>
  </Modal>
</template>
