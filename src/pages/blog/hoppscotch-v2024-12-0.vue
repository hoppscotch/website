<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2024.12.0: Generate scripts with AI, Sync Admin role from SAML, and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2024.12.0: Generate scripts with AI, Sync Admin role from SAML, and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2024.12.0: Generate scripts with AI, Sync Admin role from SAML, and more",
    },
    {
      name: "description",
      content:
        "Our 2024.12.0 release introduces exciting updates to enhance your experience with Hoppscotch.",
    },
    {
      property: "og:description",
      content:
        "Our 2024.12.0 release introduces exciting updates to enhance your experience with Hoppscotch.",
    },
    {
      name: "twitter:description",
      content:
        "Our 2024.12.0 release introduces exciting updates to enhance your experience with Hoppscotch.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2024-12-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2024-12-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2024-12-0",
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
                <span class="text-zinc-200/20">Dec 23, 2024</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2024.12.0: Generate scripts with AI, Sync Admin role
                from SAML, and more
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
              src="/images/blog-v2024-12-0.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              Hoppscotch builds an easy-to-use, developer-friendly, powerful API
              testing client. Our 2024.12.0 release brings exciting updates to
              enhance your experience with Hoppscotch.
            </p>
            <p class="mb-8 mt-4">
              <a
                href="https://hoppscotch.io/"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >Try it out</a
              >—start using our API web client easily! We constantly seek
              improvement, so share your feedback and suggestions at
              <a
                href="mailto:hello@hoppscotch.io"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >hello@hoppscotch.io</a
              >.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Generate pre-request and post-request scripts using prompts
            </h4>
            <p class="mb-8 mt-4">
              Hoppscotch's intuitive prompt-based system helps developers of all
              skill levels generate custom pre-request and post-request scripts
              effortlessly. This makes it accessible and straightforward for
              anyone to implement powerful request automation.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-12-0-1.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4"></p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Bulk edit on request body form-data</h4>
            <p class="mb-8 mt-4">
              The new bulk editing capability lets you modify multiple form
              fields easily and manage large datasets efficiently.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-12-0-2.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Sync Admin role from SAML</h4>
            <p class="mb-8 mt-4">
              We now synchronize administrative privileges between your SAML
              provider and Hoppscotch self-host enterprise, which enables
              automatic admin role assignment and maintains consistent access
              management across your organization.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Bug fixes and improvements</h4>
            <p class="mb-8 mt-4">
              We have fixed minor issues and improved performance to ensure a
              smoother, more reliable testing experience for our users.
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
