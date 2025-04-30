<script setup lang="ts">
useHead({
  title: "Hoppscotch v2025.4.0: Hawk Auth, Admin dashboard UX Upgrade and more",
  meta: [
    {
      property: "og:title",
      content: "Hoppscotch v2025.4.0: Hawk Auth, Admin dashboard UX Upgrade and more",
    },
    {
      name: "twitter:title",
      content: "Hoppscotch v2025.4.0: Hawk Auth, Admin dashboard UX Upgrade and more",
    },
    {
      name: "description",
      content:
        "We're excited to release Hoppscotch v2025.4.0, introducing new features and quality-of-life improvements that make API testing and collaboration more powerful and intuitive.",
    },
    {
      property: "og:description",
      content:
        "We're excited to release Hoppscotch v2025.4.0, introducing new features and quality-of-life improvements that make API testing and collaboration more powerful and intuitive.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to release Hoppscotch v2025.4.0, introducing new features and quality-of-life improvements that make API testing and collaboration more powerful and intuitive.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2025-4-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2025-4-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2025-4-0",
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
                <span class="text-zinc-200/20">Apr 30, 2025</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2025.4.0: Hawk Auth, Admin dashboard UX Upgrade and more
              </span>
            </h3>
            <div class="flex items-center">
              <img
                loading="lazy"
                class="mr-4 shrink-0 rounded-full"
                src="/images/blog-author-02.jpg"
                width="32"
                height="32"
                alt="Kiran Johns"
              />
              <div class="text-sm">
                <span class="text-zinc-200/80 transition"> Kiran Johns </span>
              </div>
            </div>
          </header>
          <section class="max-w-4xl">
            <ImageZoom
              class="h-full w-full rounded md:rounded-xl"
              src="/images/blog-v2025-4-0.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're excited to announce Hoppscotch v2025.4.0, bringing you new features, improvements, and fixes to enhance your API testing experience.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Self-Host Admin Dashboard UX Redesign</h4>
            <p class="mb-8 mt-4">
              We've improved the user experience of the Self-Host Admin Dashboard to make managing your instance more intuitive.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-4-0-1.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              What's new:
            </p>
            <ul class="mb-8 ml-5 mt-4 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">
                Simplified navigation and cleaner layouts.
                            </li>
              <li class="pl-4">
                Faster access to key administrative functions.
                            </li>
            </ul>
            <p class="mb-8 mt-4">
              While it's not a full visual overhaul, this update is all about helping you get things done with less friction.
              </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Hawk Authentication Support</h4>
            <br />
            <p class="mb-8 mt-4">
              Hoppscotch now supports Hawk Authentication, a MAC-based scheme used in many secure APIs.            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4">
              Update to Hoppscotch v2025.4.0 to start using these new features and improvements. Whether you're managing teams, testing complex APIs, or running your own self-hosted instance, this release makes your workflow smoother and more powerful.
            </p>
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
