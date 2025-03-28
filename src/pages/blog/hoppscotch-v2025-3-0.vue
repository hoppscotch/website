<script setup lang="ts">
useHead({
  title: "Hoppscotch v2025.3.0: Deactivate Organization Users, App Improvements and more",
  meta: [
    {
      property: "og:title",
      content: "Hoppscotch v2025.3.0: Deactivate Organization Users, App Improvements and more",
    },
    {
      name: "twitter:title",
      content: "Hoppscotch v2025.3.0: Deactivate Organization Users, App Improvements and more",
    },
    {
      name: "description",
      content:
        "We're excited to announce Hoppscotch v2025.3.0, bringing you new features, improvements, and fixes to enhance your API testing experience. This release makes managing organization users simpler and includes several app enhancements based on your feedback.",
    },
    {
      property: "og:description",
      content:
        "We're excited to announce Hoppscotch v2025.3.0, bringing you new features, improvements, and fixes to enhance your API testing experience. This release makes managing organization users simpler and includes several app enhancements based on your feedback.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to announce Hoppscotch v2025.3.0, bringing you new features, improvements, and fixes to enhance your API testing experience. This release makes managing organization users simpler and includes several app enhancements based on your feedback.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2025-3-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2025-3-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2025-3-0",
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
                <span class="text-zinc-200/20">Mar 28, 2025</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2025.3.0: Deactivate Organization Users, App Improvements and more
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
              src="/images/blog-v2025-3-0.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              <a
                href="https://hoppscotch.io/"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50">
                Hoppscotch</a>
              stands out as a powerful yet intuitive API development platform, empowering developers worldwide to streamline their API workflows.
            </p>
            <p class="mb-8 mt-4">
              We're excited to announce Hoppscotch v2025.3.0, bringing you new features, improvements, and fixes to enhance your API testing experience.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Deactivate Organization Users</h4>
            <p class="mb-8 mt-4">
              You can now deactivate users within your organization, giving you more control over user management.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-3-0-1.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              Why it matters:
            </p>
            <ul class="mb-8 ml-5 mt-4 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">
                Improve security by removing access for inactive users without deleting their accounts.
              </li>
              <li class="pl-4">
                Maintain user data and history while preventing them from accessing the workspace.
              </li>
            </ul>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Search Environments</h4>
            <br />
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-3-0-2.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              Quickly find and filter environments through the selector dropdown. This helps you manage multiple environments more efficiently and reduces time spent scrolling through long environment lists.
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
