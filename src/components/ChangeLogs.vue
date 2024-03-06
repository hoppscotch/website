<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <div class="py-12 md:py-16">
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            Changelog
          </h2>
          <p class="text-zinc-400/80">
            New updates and improvements to Hoppscotch.
          </p>
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
        <!-- Logs -->
        <ChangeLog24122023 />
        <ChangeLog19122023 />
        <ChangeLog14112023 />
        <ChangeLog08112023 />
        <ChangeLog15102023 />
        <ChangeLog18092023 />
        <ChangeLog31082023 />
        <ChangeLog18072023 />
        <ChangeLog27062023 />
        <ChangeLog12062023 />
        <ChangeLog05062023 />
        <ChangeLog02062023 />
        <ChangeLog110520232 />
        <ChangeLog110520231 />
        <ChangeLog23042023 />
        <ChangeLog11042023 />
      </div>
    </div>
  </section>
</template>
