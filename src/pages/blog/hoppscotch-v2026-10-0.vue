<script setup lang="ts">
const title =
  "Hoppscotch v2026.10.0: AI Assistant for Enterprise Orgs, Desktop Browser Sign-In, System Trust Store and more"
const description =
  "Hoppscotch v2026.10.0 brings the AI Assistant to Enterprise organizations, browser sign-in for Enterprise orgs on desktop, and system trust store support for the desktop app."

useHead({
  title,
  meta: [
    { property: "og:title", content: title },
    { name: "twitter:title", content: title },
    { name: "description", content: description },
    { property: "og:description", content: description },
    { name: "twitter:description", content: description },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2026-10-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2026-10-0.png",
    },
    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2026-10-0",
    },
  ],
})
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <PostHeader />
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
                <span class="text-zinc-200/20">Oct 29, 2026</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                {{ title }}
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
              src="/images/blog-v2026-10-0.png"
              width="352"
              height="198"
              alt="Hoppscotch v2026.10.0"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're excited to announce Hoppscotch v2026.10.0. This release
              brings the AI Assistant to Enterprise organizations, a
              browser-based sign-in flow for Enterprise orgs on the desktop app,
              and system trust store support so the desktop app works seamlessly
              with your organization's certificates.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              AI Assistant for Enterprise organizations
            </h4>
            <p class="mb-8 mt-4">
              The AI Assistant we introduced in v2026.9.0 is now available for
              Enterprise organizations. Members of an Enterprise org can use the
              agentic chat interface docked inside Hoppscotch to edit requests,
              run and save them, write tests, manage environments and
              collections, and more, right from their organization workspace.
            </p>
            <p class="mb-8">
              You can find it in
              <strong class="text-zinc-100"
                >Settings &gt; AI experiments</strong
              >
              and connect the provider that works for your organization,
              including Anthropic, OpenAI, Bedrock, Azure, or a compatible local
              runtime.
            </p>
            <p class="mb-8">
              <a
                href="https://hoppscotch.io"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
              >
                Create an organization →</a
              >
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Browser sign-in for Enterprise orgs on desktop
            </h4>
            <p class="mb-8 mt-4">
              Signing in to an Enterprise organization from the desktop app is
              now much smoother. Instead of entering credentials inside the app,
              the desktop app opens your default browser where you sign in with
              your organization's identity provider, and then hands the session
              back to the app securely over the local loopback interface.
            </p>
            <p class="mb-8">
              This makes signing in with your organization's single sign-on more
              reliable, so you can get back to work in Hoppscotch with fewer
              connection hiccups.
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
              System trust store support on desktop
            </h4>
            <p class="mb-8 mt-4">
              The desktop app can now use your operating system's trust store
              when verifying TLS certificates. If your organization relies on
              custom certificate authorities, corporate proxies, or internal
              services with privately issued certificates, requests from the
              desktop app now respect the certificates your system already
              trusts, with no manual certificate juggling required.
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
