<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2026.6.0: Desktop Cookie Persistence, OAuth2 ID Token Support, and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2026.6.0: Desktop Cookie Persistence, OAuth2 ID Token Support, and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2026.6.0: Desktop Cookie Persistence, OAuth2 ID Token Support, and more",
    },
    {
      name: "description",
      content:
        "We're excited to announce Hoppscotch v2026.6.0, featuring desktop cookie persistence and reapplication, ID Token support for OAuth2, mock server reliability fixes, Thai language support, and backend security hardening.",
    },
    {
      property: "og:description",
      content:
        "We're excited to announce Hoppscotch v2026.6.0, featuring desktop cookie persistence and reapplication, ID Token support for OAuth2, mock server reliability fixes, Thai language support, and backend security hardening.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to announce Hoppscotch v2026.6.0, featuring desktop cookie persistence and reapplication, ID Token support for OAuth2, mock server reliability fixes, Thai language support, and backend security hardening.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2026-6-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2026-6-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2026-6-0",
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
                <span class="text-zinc-200/20">Jun 29, 2026</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2026.6.0: Desktop Cookie Persistence, OAuth2 ID
                Token Support, and more
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
              src="/images/blog-v2026-6-0.png"
              width="352"
              height="198"
              alt="v2026.6.0"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're excited to announce the release of Hoppscotch v2026.6.0!
              This update brings cookie persistence and reapplication to the
              desktop app, adds ID Token support for OAuth2 token requests,
              fixes mock server URL handling for subpath deployments, and
              introduces Thai language support — alongside backend ownership
              enforcement, stricter SMTP URL validation, and a fresh round of
              security patches and bug fixes.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Desktop Cookie Persistence and Reapplication
            </h4>
            <p class="mb-8 mt-4">
              The desktop app now reliably persists cookies and reapplies them
              across sessions. This makes authenticated flows smoother when
              testing APIs that depend on cookie-based sessions.
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
            <h4 class="mb-4 text-white">ID Token Support for OAuth2</h4>
            <p class="mb-8 mt-4">
              When working with OAuth2, you can now choose which token to send.
              Alongside the standard access token, Hoppscotch can use the
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >id_token</code
              >
              returned by OpenID Connect providers — useful when an API expects
              the OIDC identity token for authentication rather than the access
              token.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Mock Server Reliability</h4>
            <p class="mb-8 mt-4">
              Domain-based mock server URLs now append
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >/backend</code
              >
              when subpath access is enabled, so mock URLs resolve correctly for
              subpath deployments.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Thai Language Support</h4>
            <p class="mb-8 mt-4">
              Hoppscotch is now available in Thai. Thanks to our community
              translators for helping more developers use Hoppscotch in their
              own language.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Security Hardening</h4>
            <p class="mb-8 mt-4">
              This release also tightens security on a few fronts:
            </p>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>
                Backend APIs now enforce ownership on user history and private
                user fields, so one account can't read another's data.
              </li>
              <li>Hardened SMTP URL validation in the self-hosted backend.</li>
              <li>Security patches for the v2026.6.0 dependency chain.</li>
            </ul>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Self-Hosted Admin Dashboard</h4>
            <p class="mb-8 mt-4">
              The self-hosted admin dashboard now surfaces which configuration
              fields are blocking a save, so operators can spot and fix invalid
              states without digging through logs.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Bug Fixes</h4>
            <p class="mb-8 mt-4">
              We've also resolved a few bugs in this release:
            </p>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>
                New mock servers now default to private, and their
                public/private visibility is saved correctly on creation.
              </li>
              <li>
                Inherited collection headers now correctly resolve environment
                variables.
              </li>
              <li>JSON bodies are now preserved in cURL parser conversions.</li>
              <li>
                The desktop app now syncs the self-hosted instance version from
                the manifest, reducing version mismatches.
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
