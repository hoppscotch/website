<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2025.5.0: User Groups, Improved Auth Types, Bug Fixes and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2025.5.0: User Groups, Improved Auth Types, Bug Fixes and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2025.5.0: User Groups, Improved Auth Types, Bug Fixes and more",
    },
    {
      name: "description",
      content:
        "Here's a quick overview of the new features and improvements in Hoppscotch v2025.5.0.",
    },
    {
      property: "og:description",
      content:
        "Here's a quick overview of the new features and improvements in Hoppscotch v2025.5.0.",
    },
    {
      name: "twitter:description",
      content:
        "Here's a quick overview of the new features and improvements in Hoppscotch v2025.5.0.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2025-5-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2025-5-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2025-5-0",
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
                <span class="text-zinc-200/20">May 28, 2025</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2025.5.0: User Groups, Improved Auth Types, Bug
                Fixes and more
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
              src="/images/blog-v2025-5-0.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              Hoppscotch v2025.5.0 is here, packed with new features,
              improvements, and bug fixes to enhance your API development
              experience. Here's a quick overview of the new features and
              improvements:
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">User Groups</h4>
            <p class="mb-8 mt-4">
              Hoppscotch now supports user groups, allowing you to manage team
              members more effectively. Admins can create groups, assign roles,
              and control access to different workspaces of your self-hosted
              enterprise instance.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-5-0-1.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              This feature is particularly useful for teams working on large
              projects, as it simplifies user management and enhances
              collaboration.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Improved Authentication Types</h4>
            <p class="mb-8 mt-4">
              We've improved the authentication types in Hoppscotch, making it
              easier to manage and configure authentication for your API
              requests.
            </p>
            <p class="mb-8 mt-4">
              HAWK authentication now supports request payloads, allowing you to
              sign requests with the payload included. This is particularly
              useful for APIs that require payload signing for security.
            </p>
            <p class="mb-8 mt-4">
              AWS Signature Version 4 authentication now supports request body
              when signing requests. This enhancement ensures that your requests
              are signed correctly, even when the request body is included.
            </p>
            <p class="mb-8 mt-4">
              JWT authentication has been revamped to support both
              <code>HS256</code>, <code>HS384</code>, and
              <code>HS512</code> algorithms. This improvement allows you to
              choose the algorithm that best fits your API's security
              requirements.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Improved Script Editor</h4>
            <p class="mb-8 mt-4">
              The script editor in Hoppscotch has been improved to support
              console methods like <code>console.log()</code>,
              <code>console.error()</code>, and more. This enhancement makes it
              easier to debug your scripts and see the output directly in the
              console.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-5-0-2.png"
                width="352"
                height="198"
                alt="News 02"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              You can opt-out of the new experience from
              <strong>Settings > Experiments</strong>.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Initial and Current Values for Environment Variables
            </h4>
            <p class="mb-8 mt-4">
              Hoppscotch now supports initial and current values for environment
              variables. This feature allows you to set default values for your
              environment variables, which can be overridden at runtime.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4">
              In addition to these new features, we've also made several bug
              fixes and improvements to enhance the overall performance and
              stability of Hoppscotch.
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
