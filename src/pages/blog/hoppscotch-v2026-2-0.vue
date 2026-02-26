<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2026.2.0: URL Encoding Highlighted Text, API Docs Versioning, Stronger Security and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2026.2.0: URL Encoding Highlighted Text, API Docs Versioning, Stronger Security and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2026.2.0: URL Encoding Highlighted Text, API Docs Versioning, Stronger Security and more",
    },
    {
      name: "description",
      content:
        "We're excited to announce Hoppscotch v2026.2.0, featuring URL encoding/decoding of highlighted text, API docs versioning, stronger security and more.",
    },
    {
      property: "og:description",
      content:
        "We're excited to announce Hoppscotch v2026.2.0, featuring URL encoding/decoding of highlighted text, API docs versioning, stronger security and more.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to announce Hoppscotch v2026.2.0, featuring URL encoding/decoding of highlighted text, API docs versioning, stronger security and more.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2026-2-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2026-2-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2026-2-0",
    },
  ],
})
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <PostHeader />
        <!-- Blog content -->
        <article class="flex flex-col items-center space-y-8">
          <header class="flex w-full max-w-xl flex-col">
            <div class="mb-4 text-white">
              <ul class="-m-1 flex flex-wrap items-center text-sm">
                <li class="m-1">
                  <span
                    class="inline-flex text-center text-zinc-100/50 transition"
                    >Product</span
                  >
                </li>
                <span class="mx-2 text-zinc-400/20">|</span>
                <span class="text-zinc-200/20">Feb 26, 2026</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2026.2.0: URL Encoding of Highlighted Text, API Docs Versioning, Stronger Security and more
              </span>
            </h3>
            <div class="flex items-center">
              <img
                loading="lazy"
                class="mr-4 shrink-0 rounded-full"
                src="/images/blog-author-01.jpg"
                width="32"
                height="32"
                alt="Liyas Thomas"
              />
              <div class="text-sm">
                <span class="text-zinc-200/80 transition"> Liyas Thomas </span>
              </div>
            </div>
          </header>
          <section class="max-w-4xl">
            <ImageZoom
              class="h-full w-full rounded md:rounded-xl"
              src="/images/blog-v2026-2-0.png"
              width="352"
              height="198"
              alt="v2026.2.0"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're excited to announce the release of Hoppscotch v2026.2.0!
              This update is packed with handy new features, important security
              updates and a bunch of quality-of-life improvements to make your
              API workflow smoother than ever.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Encode and Decode Highlighted Text</h4>
            <p class="mb-8 mt-4">
              Ever wanted to encode just part of a URL instead of the whole
              thing? Now you can! Simply highlight the portion of text you want
              to encode or decode, and Hoppscotch will apply the transformation
              only to your selection. No more manually juggling encoded and
              plain-text segments.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2026-2-0-1.png"
                width="352"
                height="198"
                alt="Encode and Decode Highlighted Text"
              />
            </section>
            <br />
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Version Your API Documentation</h4>
            <p class="mb-8 mt-4">
              API Documentation now supports versioning! You can maintain and
              publish multiple versions of your docs side by side, so your API
              consumers always know exactly which version they're working with.
              No more confusion when your API evolves.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2026-2-0-2.png"
                width="352"
                height="198"
                alt="API Documentation Versioning"
              />
            </section>
            <br />
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Easier Team Management for Admins</h4>
            <p class="mb-8 mt-4">
              If you're managing a large organization, you'll love this one.
              The teams list in the admin dashboard now comes with search and
              pagination, so you can quickly find and navigate through teams
              without endlessly scrolling.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Stronger Security Across the Board</h4>
            <p class="mb-8 mt-4">
              We've taken security seriously in this release. We've patched
              several vulnerabilities, including issues where unauthorized
              users could potentially access certain endpoints. We've also
              updated dependencies to keep everything locked down. Your data
              and your team's data are safer than ever.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Bug Fixes and Improvements</h4>
            <p class="mb-8 mt-4">
              We've also squashed a bunch of bugs and polished up the
              experience:
            </p>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>
                Secret environment variables now work correctly in basic auth
                headers — they're properly resolved before being encoded.
              </li>
              <li>
                Fixed an issue where old script errors would stick around even
                after clearing your pre-request scripts. The scripting sandbox
                now recovers gracefully.
              </li>
              <li>
                Realtime pages look and work better on smaller screens, with
                improved layout and no more content overflow.
              </li>
              <li>
                Hovering over long variable values no longer causes them to
                spill outside the visible area.
              </li>
              <li>
                Opening a request from search results no longer throws an
                unexpected error.
              </li>
              <li>
                The environment variables dialog now uses more screen space on
                larger displays, giving you a better editing experience.
              </li>
            </ul>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4">
              What do you want us to build next? Write to us at
              <a
                href="mailto:hello@hoppscotch.io"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >hello@hoppscotch.io</a
              >, join the conversation on our
              <a
                href="https://hoppscotch.io/discord"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >Discord server</a
              >, or head over to our
              <a
                href="https://github.com/hoppscotch/hoppscotch"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >GitHub repository</a
              >.
            </p>
          </section>
        </article>
      </div>
    </div>
    <Cta />
  </section>
</template>
