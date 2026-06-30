<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2026.6.0: Desktop Cookie Persistence, Security Hardening, Mock Server Reliability and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2026.6.0: Desktop Cookie Persistence, Security Hardening, Mock Server Reliability and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2026.6.0: Desktop Cookie Persistence, Security Hardening, Mock Server Reliability and more",
    },
    {
      name: "description",
      content:
        "We're excited to announce Hoppscotch v2026.6.0, featuring desktop cookie persistence and reapplication, self-hosted version sync fixes, mock server reliability improvements, and security hardening.",
    },
    {
      property: "og:description",
      content:
        "We're excited to announce Hoppscotch v2026.6.0, featuring desktop cookie persistence and reapplication, self-hosted version sync fixes, mock server reliability improvements, and security hardening.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to announce Hoppscotch v2026.6.0, featuring desktop cookie persistence and reapplication, self-hosted version sync fixes, mock server reliability improvements, and security hardening.",
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
                Hoppscotch v2026.6.0: Desktop Cookie Persistence, Thai
                Security Hardening, Mock Server Reliability and more
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
              This update improves desktop auth workflows with cookie
              persistence and reapplication, strengthens self-hosted
              reliability, and ships important backend
              and supply-chain security hardening.
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
              We also fixed desktop self-hosted instance version syncing from
              the manifest, reducing mismatch issues and improving the
              consistency of self-hosted desktop environments.
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
            <h4 class="mb-4 text-white">Self-Hosted Version Sync Reliability</h4>
            <p class="mb-8 mt-4">
              Desktop now correctly syncs self-hosted instance version details
              from manifest data, improving reliability and reducing confusion
              in managed and self-hosted environments.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Mock Server and Collection Reliability</h4>
            <p class="mb-8 mt-4">
              This release includes several improvements to request and mock
              workflows:
            </p>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>
                Domain-based mock server URLs now append
                <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                  >/backend</code
                >
                when subpath access is enabled.
              </li>
              <li>
                Mock server creation now persists the
                <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                  >isPublic</code
                >
                field correctly, with a private default.
              </li>
              <li>
                OpenAPI re-import now preserves collection tree structure.
              </li>
              <li>
                Inherited collection headers now correctly resolve environment
                variables.
              </li>
              <li>
                JSON bodies are now preserved in cURL parser conversions.
              </li>
            </ul>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Security and Platform Hardening</h4>
            <p class="mb-8 mt-4">
              Security is a major focus of v2026.6.0. This release includes:
            </p>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>
                Ownership enforcement for user history and private user fields
                in backend APIs.
              </li>
              <li>
                Stricter SMTP URL validation rejecting path, query, and fragment
                segments (GHSA-v7q6-r45w-2c6r).
              </li>
              <li>
                Dependency chain security patches for v2026.6.0 and release-age
                policy enforcement for supply-chain hardening.
              </li>
              <li>
                <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                  >@hoppscotch/ui</code
                >
                bumped to v0.2.6 across packages.
              </li>
            </ul>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Self-Hosted and Developer Experience</h4>
            <p class="mb-8 mt-4">
              Self-hosted admin now surfaces which configuration fields block
              saving, helping operators debug invalid states quickly. We also
              fixed class validation for updateRESTUserRequest and refreshed
              js-sandbox development instructions.
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
