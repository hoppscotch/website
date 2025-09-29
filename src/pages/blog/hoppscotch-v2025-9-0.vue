<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2025.9.0: Sort Collections, New Experimental Scripting Namespace and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2025.9.0: Sort Collections, New Experimental Scripting Namespace and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2025.9.0: Sort Collections, New Experimental Scripting Namespace and more",
    },
    {
      name: "description",
      content:
        "We're excited to announce Hoppscotch v2025.9.0, featuring collection sorting, improved workspace management, enhanced security updates and better UI interactions.",
    },
    {
      property: "og:description",
      content:
        "We're excited to announce Hoppscotch v2025.9.0, featuring collection sorting, improved workspace management, enhanced security updates and better UI interactions.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to announce Hoppscotch v2025.9.0, featuring collection sorting, improved workspace management, enhanced security updates and better UI interactions.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2025-9-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2025-9-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2025-9-0",
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
                <span class="text-zinc-200/20">Sep 29, 2025</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2025.9.0: Sort Collections, New Experimental Scripting Namespace and more
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
              src="/images/blog-v2025-9-0.png"
              width="352"
              height="198"
              alt="v2025.9.0"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're excited to announce Hoppscotch v2025.9.0, featuring
              <strong>alphabetical collection sorting</strong>,
              <strong>improved workspace management</strong>,
              <strong>enhanced security updates</strong>, better
              <strong>UI interactions</strong>, and the introduction of the new experimental
              <strong>hopp scripting namespace</strong> — plus numerous bug fixes and refinements.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Alphabetical Collection Sorting</h4>
            <p class="mb-8 mt-4">
              Keep your collections organized with automatic alphabetical sorting for both
              user and team collections. No more scrolling through unsorted lists to find
              what you need - everything is now neatly arranged in alphabetical order for
              faster navigation and better organization.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-9-0-1.png"
                width="352"
                height="198"
                alt="Alphabetical Collection Sorting"
              />
            </section>
            <br />
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Enhanced Workspace Management</h4>
            <p class="mb-8 mt-4">
              We've improved workspace management with support for non-empty shared workspace
              names, ensuring better organization and clearer identification of your
              collaborative spaces. Additionally, we've resolved issues with token expiration
              handling for logged-in users, providing a smoother experience when working
              across extended sessions.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Improved UI and User Experience</h4>
            <p class="mb-8 mt-4">
              This release includes several UI enhancements: correct indentation for nested
              endpoints in the sidebar for better visual hierarchy, prevention of empty entries
              when dragging items past the last row, improved modal interactions with overlay
              click-to-close functionality, and better handling of multiple Set-Cookie headers
              in responses.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-9-0-2.png"
                width="352"
                height="198"
                alt="Improved UI and User Experience"
              />
            </section>
            <br />
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">New Experimental hopp Scripting Namespace</h4>
            <p class="mb-8 mt-4">
              We've introduced the new experimental <strong>hopp namespace</strong> for scripting,
              providing a more structured and future-proof approach to writing scripts within
              Hoppscotch. This namespace will serve as the foundation for enhanced scripting
              capabilities in future releases.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-9-0-3.png"
                width="352"
                height="198"
                alt="New Experimental Hopp Scripting Namespace"
              />
            </section>
            <br />
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Security and Infrastructure Improvements</h4>
            <p class="mb-8 mt-4">
              This release includes important security patches for the dependency chain,
              ensuring your API testing environment remains secure. We've also streamlined
              OAuth grant type definitions, improved Node.js base image setup by ensuring
              npm installation, and resolved race conditions in active team collection
              tab inheritance.
            </p>
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
  </section>
</template>
