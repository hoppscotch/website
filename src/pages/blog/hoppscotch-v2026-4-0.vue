<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2026.4.0: Collection-level Scripts, SMTP OAuth2, Security Patches and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2026.4.0: Collection-level Scripts, SMTP OAuth2, Security Patches and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2026.4.0: Collection-level Scripts, SMTP OAuth2, Security Patches and more",
    },
    {
      name: "description",
      content:
        "We're excited to announce Hoppscotch v2026.4.0, featuring collection-level pre-request and test scripts, SMTP OAuth2 for self-hosted, security patches and more.",
    },
    {
      property: "og:description",
      content:
        "We're excited to announce Hoppscotch v2026.4.0, featuring collection-level pre-request and test scripts, SMTP OAuth2 for self-hosted, security patches and more.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to announce Hoppscotch v2026.4.0, featuring collection-level pre-request and test scripts, SMTP OAuth2 for self-hosted, security patches and more.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2026-4-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2026-4-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2026-4-0",
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
                <span class="text-zinc-200/20">Apr 29, 2026</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2026.4.0: Collection-level Scripts, SMTP OAuth2,
                Security Patches and more
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
              src="/images/blog-v2026-4-0.png"
              width="352"
              height="198"
              alt="v2026.4.0"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're excited to announce the release of Hoppscotch v2026.4.0!
              This update brings collection-level pre-request and test scripts,
              SMTP OAuth2 authentication for self-hosted instances, a new
              desktop app settings section, important security patches, and a
              range of quality-of-life improvements.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Collection-level Pre-request and Test Scripts
            </h4>
            <p class="mb-8 mt-4">
              You can now attach pre-request and test scripts directly to a
              collection. These scripts run automatically before and after every
              request inside that collection — no more copy-pasting auth setup
              or assertion logic across dozens of individual requests.
            </p>
            <p class="mb-8">
              This is especially powerful for collections that share a common
              authentication flow. Set up your token fetch once at the
              collection level and every request in the collection inherits it
              automatically.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2026-4-0-1.png"
                width="352"
                height="198"
                alt="Collection-level Scripts"
              />
            </section>
            <br />
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
            <h4 class="mb-4 text-white">API Documentation UX Improvements</h4>
            <p class="mb-8 mt-4">
              The API documentation experience has been refined with a cleaner
              layout, improved interaction patterns, and a fix for environment
              validation when publishing docs. Navigating and publishing your
              API documentation is now smoother from start to finish.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              SMTP OAuth2 Authentication (Self-Hosted)
            </h4>
            <p class="mb-8 mt-4">
              Self-hosted instances can now authenticate with SMTP servers using
              OAuth2. This means you can use modern mail providers like Gmail or
              Microsoft 365 without falling back to basic username and password
              authentication, keeping your email delivery both secure and
              compliant.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Desktop Settings</h4>
            <p class="mb-8 mt-4">
              The desktop app now has a dedicated settings foundation. This
              first phase introduces manual update checks and the option to
              disable automatic update checks at startup — giving you full
              control over when and how updates are applied, particularly useful
              in managed or air-gapped environments.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Security Patches</h4>
            <p class="mb-8 mt-4">
              Security was a significant focus in this release. We've updated
              our security threat model and policy, and shipped the following
              patches:
            </p>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>
                Patched CVE-2026-31812 by bumping quinn-proto to 0.11.14.
              </li>
              <li>
                Applied follow-up hardening across the platform as part of a
                continued security audit.
              </li>
              <li>
                Fixed authorization code flow failing with Google OAuth.
              </li>
            </ul>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Self-Hosted Improvements</h4>
            <p class="mb-8 mt-4">
              This release brings several improvements for self-hosted
              editions:
            </p>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>
                Redis is now supported as the storage backend for rate limiting,
                enabling more scalable and distributed deployments.
              </li>
              <li>
                OAuth2 state management has been made stateless, including
                stateless OAuth for SAML and OIDC flows — improving reliability
                in multi-instance setups.
              </li>
              <li>
                The platform default proxy URL is now applied on load and reset,
                so proxy configuration is always consistent.
              </li>
              <li>
                OTEL field updates are now skipped when observability is
                disabled, reducing unnecessary configuration noise.
              </li>
              <li>
                The login divider is now shown conditionally, keeping the login
                screen clean based on your configured auth providers.
              </li>
              <li>
                You can now set the domain URL as the mock server environment
                variable, and customize web server timeouts to suit your
                infrastructure.
              </li>
            </ul>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Bug Fixes</h4>
            <p class="mb-8 mt-4">
              We've also fixed a number of bugs across the app:
            </p>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>
                Fixed environment tooltip overflow on hover.
              </li>
              <li>
                Fixed org auth timeout and state leak on the desktop app.
              </li>
              <li>
                Fixed environment validation when publishing API docs.
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
