<script setup lang="ts">
useHead({
  title: "Hoppscotch v2025.1.0: SCIM, Workspace Activity Logs and more",
  meta: [
    {
      property: "og:title",
      content: "Hoppscotch v2025.1.0: SCIM, Workspace Activity Logs and more",
    },
    {
      name: "twitter:title",
      content: "Hoppscotch v2025.1.0: SCIM, Workspace Activity Logs and more",
    },
    {
      name: "description",
      content:
        "Our v2025.1.0 release introduces exciting updates to enhance your experience with Hoppscotch.",
    },
    {
      property: "og:description",
      content:
        "Our v2025.1.0 release introduces exciting updates to enhance your experience with Hoppscotch.",
    },
    {
      name: "twitter:description",
      content:
        "Our v2025.1.0 release introduces exciting updates to enhance your experience with Hoppscotch.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2025-1-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2025-1-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2025-1-0",
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
                <span class="text-zinc-200/20">Jan 31, 2025</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2025.1.0: SCIM, Workspace Activity Logs and more
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
              src="/images/blog-v2025-1-0.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              Hoppscotch is a simple straightforward API testing client that
              helps developers around the world to work with their APIs. You can
              easily get started with Hoppscotch by visiting
              <a
                href="https://hoppscotch.io/"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >hoppscotch.io</a
              >.
            </p>
            <p class="mb-8 mt-4">
              We're really excited to share the latest updates from the first
              release of this year! We've been working towards providing support
              to some of the major requests from the Hoppscotch community!
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">SCIM Provisioning</h4>
            <p class="mb-8 mt-4">
              Manage user access effortlessly with SCIM provisioning for
              self-hosted enterprise deployments. This powerful feature enables:
            </p>
            <ul class="mb-8 ml-5 mt-4 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">
                Automated user provisioning and deprovisioning across your
                organization
              </li>
              <li class="pl-4">
                Seamless integration with major identity providers (IdPs)
              </li>
              <li class="pl-4">
                Enhanced security through standardized user management protocols
              </li>
            </ul>
            <p class="mb-8 mt-4">
              Perfect for enterprises looking to manager their team workflow
              while maintaining robust security standards.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Workspace Activity Logs</h4>
            <p class="mb-8 mt-4">
              Transparency and collaboration are at the heart of every
              successful team. With Workspace Activity Logs on Hoppscotch
              Enterprise, you can now:
            </p>
            <ul class="mb-8 ml-5 mt-4 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">
                Visibility into every action: Get real-time visibility into all
                changes and actions happening within your workspace.
              </li>
              <li class="pl-4">
                Improve collaboration: Keep everyone on the same page with
                detailed logs of every update, ensuring accountability and
                better teamwork.
              </li>
            </ul>
            <p class="mb-8 mt-4">
              Whether you're working with a small team or managing a larger
              organization, Workspace Activity Logs help you stay informed and
              maintain a collaborative environment.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-1-0-2.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">GraphQL Query Generation</h4>
            <p class="mb-8 mt-4">
              GraphQL users, we've got something exciting for you! Writing
              queries can sometimes feel tedious and repetitive, but with
              GraphQL Query Generation, we're making it easier than ever with
              Automated Query Creation Generate GraphQL queries instantly from
              the documentation
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-1-0-3.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
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
