<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2026.3.0: Cloud for Organizations, Admin Dashboard Improvements, Security Patches and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2026.3.0: Cloud for Organizations, Admin Dashboard Improvements, Security Patches and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2026.3.0: Cloud for Organizations, Admin Dashboard Improvements, Security Patches and more",
    },
    {
      name: "description",
      content:
        "We're excited to announce Hoppscotch v2026.3.0, featuring Cloud for Organizations on desktop, admin dashboard improvements, security patches and more.",
    },
    {
      property: "og:description",
      content:
        "We're excited to announce Hoppscotch v2026.3.0, featuring Cloud for Organizations on desktop, admin dashboard improvements, security patches and more.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to announce Hoppscotch v2026.3.0, featuring Cloud for Organizations on desktop, admin dashboard improvements, security patches and more.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2026-3-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2026-3-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2026-3-0",
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
                <span class="text-zinc-200/20">Mar 31, 2026</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2026.3.0: Cloud for Organizations, Admin Dashboard
                Improvements, Security Patches and more
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
              src="/images/blog-v2026-3-0.png"
              width="352"
              height="198"
              alt="v2026.3.0"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're excited to announce the release of Hoppscotch v2026.3.0!
              This update makes Cloud for Organizations generally available on
              the desktop app, ships admin dashboard improvements, delivers
              important security patches, and includes a bunch of
              quality-of-life fixes.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Cloud for Organizations</h4>
            <p class="mb-8 mt-4">
              Cloud for Organizations is now generally available on the desktop
              app. Connect your org workspaces and collaborate with your team on
              collections, environments and requests — natively from the
              desktop, with full cloud sync.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2026-3-0-1.png"
                width="352"
                height="198"
                alt="Cloud for Organizations"
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
            <h4 class="mb-4 text-white">Admin Dashboard Improvements</h4>
            <p class="mb-8 mt-4">
              Admins on the Enterprise Edition can now see exactly which
              workspaces each user belongs to, right from the admin dashboard.
              This makes it significantly easier to audit access, troubleshoot
              permission issues, and manage your organization at scale.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />

            <h4 class="mb-4 text-white">Security Patches</h4>
            <p class="mb-8 mt-4">
              Security was a major focus in this release. We've addressed
              multiple vulnerabilities reported through our security process:
            </p>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>
                Prevented stored XSS in team member overflow tooltips and mock
                server responses.
              </li>
              <li>Blocked open redirect on the enter page.</li>
              <li>
                Validated device-login redirect URIs to prevent token theft via
                DNS rebinding.
              </li>
              <li>
                Patched dependency vulnerabilities and hardened the production
                Docker image.
              </li>
            </ul>
            <p class="mb-8">
              Several additional issues were identified and patched as part of a
              broader security audit to keep your data and your team's data
              safe.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Keyboard Shortcuts on Non-English Layouts
            </h4>
            <p class="mb-8 mt-4">
              Keyboard shortcuts now work correctly regardless of your keyboard
              layout. Whether you're using an AZERTY, QWERTZ, or any other
              non-QWERTY layout, shortcuts will fire as expected. We've also
              restored numpad support for first/last tab navigation.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Bug Fixes and Improvements</h4>
            <p class="mb-8 mt-4">
              We've also squashed a bunch of bugs and polished up the
              experience:
            </p>
            <ul class="mb-8 list-inside list-disc space-y-2">
              <li>
                OAuth2 code challenge method selection now persists correctly
                across sessions.
              </li>
              <li>
                Fixed an infinite auth refresh retry loop that could occur on
                permanent token errors.
              </li>
              <li>
                Full team collection tree is now fetched when importing a
                workspace, so nothing gets left behind.
              </li>
              <li>
                Tooltips on icon-only buttons inside popover triggers are back
                to working as expected.
              </li>
              <li>
                OpenAPI imports now fall back to the operation title when a
                summary isn't available, giving your requests meaningful names.
              </li>
              <li>
                File objects in HAR postData text are now resolved correctly.
              </li>
              <li>
                Newly created folders now appear immediately in the save-as
                dialog.
              </li>
              <li>
                Added native Edit menu on Linux desktop to enable clipboard
                shortcuts.
              </li>
              <li>
                Configurable TLS skip and optional SMTP authentication for
                self-hosted mailer.
              </li>
              <li>Updated Chinese translations.</li>
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
