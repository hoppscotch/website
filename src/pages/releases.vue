<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <!-- Section header -->
      <div class="py-12 md:py-32">
        <h2
          class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
        >
          Releasess
        </h2>
        <p class="text-zinc-400/80">Updates from the Hoppscotch team.</p>
        <p class="mt-4 text-sm">
          <SubscribeToUpdates />
          <span class="mx-4 text-zinc-400/20">|</span>
          <a
            href="https://twitter.com/hoppscotch_io"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded text-zinc-400/60 transition hover:text-zinc-400/80"
            >Follow us on Twitter</a
          >
        </p>
      </div>
      <!-- Blogs -->
      <BlogList />
    </div>
  </section>
</template>
