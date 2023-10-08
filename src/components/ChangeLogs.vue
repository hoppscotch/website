<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <div class="py-12 md:py-16">
          <h2
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-violet-200/50 via-violet-200/80 to-violet-100/80"
          >
            Changelog
          </h2>
          <p class="text-lg text-violet-200/50">
            New updates and improvements to Hoppscotch.
          </p>
          <p class="mt-4 text-sm">
            <RouterLink
              :to="{ path: '', hash: '#newsletter' }"
              class="rounded transition text-violet-400/60 hover:text-violet-400/80"
            >
              Subscribe to updates
            </RouterLink>
            <span class="mx-4 text-violet-400/20">|</span>
            <a
              href="https://twitter.com/hoppscotch_io"
              target="_blank"
              rel="noopener noreferrer"
              class="rounded transition text-violet-400/60 hover:text-violet-400/80"
              >Follow us on Twitter</a
            >
          </p>
        </div>
        <!-- Logs -->
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
