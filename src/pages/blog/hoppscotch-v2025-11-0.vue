<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2025.11.0: API Documentation [Beta], Scripting, API Mocking Enhancements, and Portable Desktop Apps",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2025.11.0: API Documentation [Beta], Scripting, API Mocking Enhancements, and Portable Desktop Apps",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2025.11.0: API Documentation [Beta], Scripting, API Mocking Enhancements, and Portable Desktop Apps",
    },
    {
      name: "description",
      content:
        "We're excited to announce Hoppscotch v2025.11.0, featuring API Documentation, a Scripting, API Mocking Enhancements, desktop app enhancements, and more.",
    },
    {
      property: "og:description",
      content:
        "We're excited to announce Hoppscotch v2025.11.0, featuring API Documentation, a Scripting, API Mocking Enhancements, desktop app enhancements, and more.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to announce Hoppscotch v2025.11.0, featuring API Documentation, a Scripting, API Mocking Enhancements, desktop app enhancements, and more.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2025-11-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2025-11-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2025-11-0",
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
                <span class="text-zinc-200/20">Nov 27, 2025</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2025.11.0: API Documentation [Beta],
                Scripting, API Mocking Enhancements, and Portable Desktop Apps
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
              src="/images/blog-v2025-11-0.png"
              width="352"
              height="198"
              alt="v2025.11.0"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
              <p class="mb-8 mt-4">
                We're excited to announce the release of Hoppscotch v2025.11.0.
                This update brings highly requested features like API
                Documentation, significant improvements to scripting, and
                enhancements to The Hoppscotch desktop application.
              </p>
              <hr
                class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
              />
              <h4 class="mb-4 text-white">API Documentation</h4>
              <p class="mb-8 mt-4">
                We are introducing a comprehensive API Documentation feature to
                Hoppscotch, enabling users to create, edit, and view rich
                documentation for their API collections and requests. This
                enhancement transforms Hoppscotch from a pure testing tool into
                a complete API documentation platform.
              </p>
              <section class="max-w-4xl">
                <ImageZoom
                  class="h-full w-full rounded md:rounded-xl"
                  src="/images/blog-v2025-11-0-1.png"
                  width="352"
                  height="198"
                  alt="API Documentation"
                />
              </section>
              <br />
              <p class="mb-8 mt-4">
                Team members can collaboratively add, edit, and publish API
                documentation to a public URL, making it easy to share your API
                specifications with your team and the world.
              </p>
              <ul class="mb-8 list-inside list-disc space-y-2">
                <li>
                  <strong>Markdown Support:</strong> Write rich documentation
                  using Markdown to provide context and details for your APIs.
                </li>
                <li>
                  <strong>Code Snippet Generator:</strong> Generate code
                  snippets for your requests in multiple languages and clients.
                </li>
                <li>
                  <strong>Sidebar Navigation:</strong> Easily navigate through
                  your entire collection or view documentation request by
                  request.
                </li>
                <li>
                  <strong>Public URLs:</strong> Publish your documentation to a
                  public URL for easy sharing with your team and external
                  stakeholders.
                </li>
              </ul>
              <p class="mb-8 mt-4">
                We have an exciting roadmap ahead, with features like versioning
                and more coming soon.
              </p>
              <p class="mb-8 mt-4">
                <em
                  >Note: API Documentation is an experimental feature currently
                  in public beta. We welcome your feedback as we continue to
                  refine and improve this capability.</em
                >
              </p>
              <hr
                class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
              />
              <h4 class="mb-4 text-white">Scripting, API Mocking Enhancements</h4>
              <p class="mb-8 mt-4">
                Adds request-sending to the scripting sandbox with
                <code>hopp.fetch()</code>, global <code>fetch()</code>, and
                <code>pm.sendRequest()</code> so pre/post-request scripts can
                perform token refreshes, chained calls, and validations.
                Requests respect the chosen interceptor across web, desktop, and
                CLI, with strong typing and extensive tests.
              </p>
              <section class="max-w-4xl">
                <ImageZoom
                  class="h-full w-full rounded md:rounded-xl"
                  src="/images/blog-v2025-11-0-2.png"
                  width="352"
                  height="198"
                  alt="Scripting, API Mocking Enhancements"
                />
              </section>
              <br />
              <p class="mb-8 mt-4">New Features</p>
              <ul class="mb-8 list-inside list-disc space-y-2">
                <li>
                  <code>hopp.fetch()</code> and global <code>fetch</code> with
                  Request/Response/Headers/FormData/URLSearchParams support and
                  single-read body semantics.
                </li>
                <li>
                  <code>pm.sendRequest()</code> for Postman compatibility (string
                  URL or request object), backed by the same fetch layer.
                </li>
              </ul>
              <hr
                class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
              />
              <h4 class="mb-4 text-white">Portable Desktop Apps</h4>
              <p class="mb-8 mt-4">
                The Hoppscotch desktop application now supports portable builds for both
                Cloud and Self-Hosted editions (Community and Enterprise). This
                major update allows you to run Hoppscotch without installation,
                providing greater flexibility for users who need to work across
                multiple environments or have restricted installation
                privileges.
              </p>
              <hr
                class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
              />
              <h4 class="mb-4 text-white">Mock Server Enhancements</h4>
              <p class="mb-8 mt-4">
                We've added several feature enhancements to the Mock Server,
                making it more robust and flexible for your testing needs.
              </p>
              <section class="max-w-4xl">
                <ImageZoom
                  class="h-full w-full rounded md:rounded-xl"
                  src="/images/blog-v2025-11-0-3.png"
                  width="352"
                  height="198"
                  alt="Mock Server Enhancements"
                />
              </section>
              <br />
              <ul class="mb-8 list-inside list-disc space-y-2">
                <li>
                  Mock URLs in Environment Variables: You can now use
                  environment variables for mock URLs, streamlining your
                  workflow across different environments.
                </li>
                <li>
                  Pet Store Example Collection: We've added a Pet Store example
                  collection featuring a complete set of CRUD requests to help
                  you explore mock server capabilities.
                </li>
                <li>
                  Enhanced UX: Improved user experience with clear messages and
                  guidance when creating example collections.
                </li>
              </ul>
              <hr
                class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
              />
              <h4 class="mb-4 text-white">Other Improvements</h4>
              <p class="mb-8 mt-4">
                We've also included various bug fixes and performance
                improvements to ensure a smoother experience.
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
    <Cta />
  </section>
</template>
