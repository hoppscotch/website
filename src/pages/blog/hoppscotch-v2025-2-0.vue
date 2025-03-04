<script setup lang="ts">
useHead({
  title: "Hoppscotch v2025.2.0: Cloud for Organizations, Desktop App for Hoppscotch Self-Host and more",
  meta: [
    {
      property: "og:title",
      content: "Hoppscotch v2025.2.0: Cloud for Organizations, Desktop App for Hoppscotch Self-Host and more",
    },
    {
      name: "twitter:title",
      content: "Hoppscotch v2025.2.0: Cloud for Organizations, Desktop App for Hoppscotch Self-Host and more",
    },
    {
      name: "description",
      content:
        "We're thrilled to unveil Hoppscotch v2025.2.0, packed with major enhancements our community has been asking for.",
    },
    {
      property: "og:description",
      content:
        "We're thrilled to unveil Hoppscotch v2025.2.0, packed with major enhancements our community has been asking for.",
    },
    {
      name: "twitter:description",
      content:
        "We're thrilled to unveil Hoppscotch v2025.2.0, packed with major enhancements our community has been asking for.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2025-2-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2025-2-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2025-2-0",
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
                <span class="text-zinc-200/20">Mar 4, 2025</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2025.2.0: Cloud for Organizations, Desktop App for Hoppscotch Self-Host and more
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
              src="/images/blog-v2025-2-0.png"
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
              We're thrilled to unveil Hoppscotch v2025.2.0, packed with major enhancements our community has been asking for. This update delivers new capabilities including our Cloud for Organizations, expanded desktop app functionality for self-hosted instances, customizable email templates, and advanced proxy management tools.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Cloud for Organizations</h4>
            <p class="mb-8 mt-4">
              For teams that require advanced collaboration, we're launching Hoppscotch Cloud for Organizations at $8 per user per month
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-2-0-1.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              With Cloud for Organizations, you get access to:
            </p>
            <ul class="mb-8 ml-5 mt-4 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">
                An admin dashboard to manage users, teams, and workspaces
              </li>
              <li class="pl-4">
                Priority support for all your API testing needs
              </li>
              <li class="pl-4">
                And more advanced features
              </li>
            </ul>
            <p class="mb-8 mt-4">
              Hoppscotch Cloud makes team collaboration more efficient while keeping API workflows smooth and secure.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Desktop App Support for Hoppscotch Self-Host</h4>
            <br />
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-2-0-2.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              The Hoppscotch Desktop App now fully supports self-hosted deployments! Simply add the URL of your self-hosted Hoppscotch instance, and you can start using it seamlessly within the desktop app.
            </p>
            <p class="mb-8 mt-4">
              This update ensures that self-hosted users get the same smooth experience as cloud users, with all the advantages of a dedicated desktop client.
              </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Email Template Customization</h4>
            <br />
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-2-0-3.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              Self-hosted admins can now customize email templates for user and workspace invitations directly from the Hoppscotch Admin Dashboard.
            </p>
            <p class="mb-8 mt-4">
              This feature gives you full control over invitation emails, allowing you to match them with your organization's branding and messaging.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Configure Proxy URLs for Your Entire Team</h4>
            <br />

            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-2-0-4.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              Self-hosted organizations can now set a default proxy URL for all users in their workspace.
            </p>
            <ul class="mb-8 ml-5 mt-4 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">
                The new proxy URL will automatically apply to all team members
              </li>
              <li class="pl-4">
                You ensure a consistent API testing environment for your entire organization
              </li>
            </ul>
            This feature simplifies proxy management for teams working in self-hosted environments.
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
