<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2026.5.0: OpenAPI 3.1 Export, Proxy Configuration, Desktop Zoom, and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2026.5.0: OpenAPI 3.1 Export, Proxy Configuration, Desktop Zoom, and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2026.5.0: OpenAPI 3.1 Export, Proxy Configuration, Desktop Zoom, and more",
    },
    {
      name: "description",
      content:
        "We're excited to announce Hoppscotch v2026.5.0, featuring OpenAPI 3.1 collection export, configurable proxy URL, desktop zoom controls, Mongolian translation, a secret variable security fix, and supply chain hardening.",
    },
    {
      property: "og:description",
      content:
        "We're excited to announce Hoppscotch v2026.5.0, featuring OpenAPI 3.1 collection export, configurable proxy URL, desktop zoom controls, Mongolian translation, a secret variable security fix, and supply chain hardening.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to announce Hoppscotch v2026.5.0, featuring OpenAPI 3.1 collection export, configurable proxy URL, desktop zoom controls, Mongolian translation, a secret variable security fix, and supply chain hardening.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2026-5-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2026-5-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2026-5-0",
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
                <span class="text-zinc-200/20">May 28, 2026</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2026.5.0: OpenAPI 3.1 Export, Proxy Configuration,
                Desktop Zoom, and more
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
              src="/images/blog-v2026-5-0.png"
              width="352"
              height="198"
              alt="v2026.5.0"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're excited to announce the release of Hoppscotch v2026.5.0!
              This update brings OpenAPI 3.1 collection export, a configurable
              proxy URL for self-hosted teams, zoom level controls in the desktop
              app, Mongolian language support, a critical fix preventing secret
              variables from leaking to the backend, and ongoing supply chain
              security hardening.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">OpenAPI 3.1 Collection Export</h4>
            <p class="mb-8 mt-4">
              Hoppscotch collections can now be exported as OpenAPI 3.1
              documents. OpenAPI 3.1 aligns fully with JSON Schema, making it
              easier to use your collections with the latest generation of API
              tooling — code generators, validators, mocking servers, and
              documentation platforms.
            </p>
            <p class="mb-8">
              Whether you're sharing an API spec with your team or publishing
              docs to an external portal, you can now export directly from
              Hoppscotch without any manual conversion step.
            </p>
            <p class="mb-8">
              <a
                href="/download"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
              >
                Get the latest version →</a
              >
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Configurable Proxy URL (Self-Hosted)
            </h4>
            <p class="mb-8 mt-4">
              Self-hosted instances can now configure the proxy URL via
              environment variables or through the admin dashboard — no more
              redeployments just to update your proxy routing. This gives
              infrastructure teams more flexibility when managing network
              policies and simplifies proxy management across environments.
            </p>
            <p class="mb-8">
              Alongside this, a related fix ensures that Hoppscotch waits for
              proxy settings to be fully loaded before issuing any requests,
              preventing subtle race conditions that could result in requests
              bypassing the configured proxy.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Desktop Zoom Level Control</h4>
            <p class="mb-8 mt-4">
              The Hoppscotch desktop app now includes a zoom level control in
              settings. Whether you prefer a larger UI on a high-DPI display or
              a more compact view on a smaller screen, you can now dial in the
              right zoom level without touching your OS-level display settings.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Mongolian Language Support</h4>
            <p class="mb-8 mt-4">
              Hoppscotch is now available in Mongolian, bringing the total
              number of supported languages up. We're grateful to the community
              contributors who make these translations possible, helping
              developers around the world use Hoppscotch in their native
              language.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Security: Secret Variable Values No Longer Leak to Backend
            </h4>
            <p class="mb-8 mt-4">
              Secret variable values are now strictly kept on the client side
              and are no longer sent to the backend. This closes a potential
              data exposure path that could have allowed sensitive credentials —
              API keys, tokens, passwords — to be inadvertently transmitted.
            </p>
            <p class="mb-8">
              If you use secret variables in your collections, we strongly
              recommend upgrading to this release.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Supply Chain Security Hardening</h4>
            <p class="mb-8 mt-4">
              This release continues our investment in supply chain security.
              We've applied a dependency chain security patch and enforced
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >minimumReleaseAge</code
              >
              across our Renovate configuration, ensuring that newly published
              dependency versions go through an observation window before being
              adopted — reducing exposure to newly introduced malicious packages.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Bug Fixes</h4>
            <p class="mb-8 mt-4">
              We've also resolved a number of bugs in this release:
            </p>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>
                Collection tree structure is now preserved when re-importing an
                OpenAPI spec, preventing unexpected flattening or reordering.
              </li>
              <li>
                Fixed a class validation issue for
                <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                  >updateRESTUserRequest</code
                >
                that could cause request update failures.
              </li>
              <li>
                Resolved app load type mismatches and a shell import alias issue
                in the desktop app that could prevent it from starting correctly
                in some configurations.
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
