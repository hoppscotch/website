<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div class="py-12 md:py-16">
          <h2
            class="block pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
          >
            Changelog
          </h2>
          <p class="text-gray-400/80">
            New updates and improvements to Hoppscotch.
          </p>
          <p class="mt-4 text-sm">
            <RouterLink
              :to="{ path: '', hash: '#newsletter' }"
              class="rounded transition text-gray-400/60 hover:text-gray-400/80"
            >
              Subscribe to updates
            </RouterLink>
            <span class="mx-4 text-gray-400/20">|</span>
            <a
              href="https://twitter.com/hoppscotch_io"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded transition text-gray-400/60 hover:text-gray-400/80"
              >Follow us on Twitter</a
            >
          </p>
        </div>
        <!-- Logs -->
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
