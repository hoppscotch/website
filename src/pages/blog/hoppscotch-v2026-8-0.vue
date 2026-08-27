<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2026.8.0: Data-Driven Collection Runs, More Predictable Cookies and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2026.8.0: Data-Driven Collection Runs, More Predictable Cookies and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2026.8.0: Data-Driven Collection Runs, More Predictable Cookies and more",
    },
    {
      name: "description",
      content:
        "We're excited to announce Hoppscotch v2026.8.0 — the collection runner is data-driven, cookie handling is more predictable, and a companion Hoppscotch MCP Server launches alongside, with a unified REST and GraphQL workspace up next.",
    },
    {
      property: "og:description",
      content:
        "We're excited to announce Hoppscotch v2026.8.0 — the collection runner is data-driven, cookie handling is more predictable, and a companion Hoppscotch MCP Server launches alongside, with a unified REST and GraphQL workspace up next.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to announce Hoppscotch v2026.8.0 — the collection runner is data-driven, cookie handling is more predictable, and a companion Hoppscotch MCP Server launches alongside, with a unified REST and GraphQL workspace up next.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2026-8-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2026-8-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2026-8-0",
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
                <span class="text-zinc-200/20">Aug 25, 2026</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2026.8.0: Data-Driven Collection Runs, More
                Predictable Cookies and more
              </span>
            </h3>
            <div class="flex items-center">
              <img
                loading="lazy"
                class="mr-4 shrink-0 rounded-full"
                src="/images/blog-author-03.jpeg"
                width="32"
                height="32"
                alt="James George"
              />
              <div class="text-sm">
                <span class="text-zinc-200/80 transition"> James George </span>
              </div>
            </div>
          </header>
          <section class="max-w-4xl">
            <ImageZoom
              class="h-full w-full rounded md:rounded-xl"
              src="/images/blog-v2026-8-0.png"
              width="352"
              height="198"
              alt="v2026.8.0"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're excited to announce the release of Hoppscotch v2026.8.0!
              This update makes the collection runner data-driven and smooths
              out cookie handling — and it arrives alongside a companion
              Hoppscotch MCP Server, with a unified REST and GraphQL workspace
              up next.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Data-driven collection runs</h4>
            <p class="mb-8 mt-4">
              The collection runner can now be data-driven. Attach a CSV or JSON
              data file and the runner executes your collection once per row,
              exposing each row's columns as variables for that iteration — the
              data-file workflow many of you know from other API clients. Those
              iteration values take priority for that run and are never saved.
              You can also pick a subset of requests to run, and export the run
              results as JSON.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">More predictable cookie handling</h4>
            <p class="mb-8 mt-4">
              A new response cookie sent without a
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >Domain</code
              >
              attribute now stays with the exact host that set it, instead of
              leaking to its subdomains. And when an older Hoppscotch Agent does
              not return structured cookie data, the app falls back to reading
              the
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm"
                >Set-Cookie</code
              >
              response header, so cookies are still captured.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">More fixes</h4>
            <p class="mb-8 mt-4">
              On desktop, an instance that needs sign-in could strand you on a
              screen with no way back to the instance switcher when its sign-in
              failed. The app now checks for a recorded sign-in failure before
              resuming such an instance, and opens the instance switcher
              instead. The connection-timeout dropdown also has a fixed width
              now.
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
              Coming next: a unified REST and GraphQL workspace
            </h4>
            <p class="mb-8 mt-4">
              REST and GraphQL are coming together into a single workspace, so
              you can create, switch between, and manage both kinds of requests
              from the same tabbed interface, with first-class GraphQL tooling
              alongside REST. That work is in review now and lands in an
              upcoming release.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Companion launch: Hoppscotch MCP Server
            </h4>
            <p class="mb-8 mt-4">
              Alongside this release, we launched the Hoppscotch MCP Server. It
              lets an AI agent in a tool like Claude or Cursor work with your
              Hoppscotch collections, requests, and environments. See the
              dedicated announcement for what it does, where it works, and how
              to set it up.
            </p>
            <p class="mb-8">
              <a
                href="/blog/introducing-hoppscotch-mcp-server"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
              >
                Read the dedicated announcement →</a
              >
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
