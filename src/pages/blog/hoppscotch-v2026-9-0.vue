<script setup lang="ts">
const title = "Hoppscotch v2026.9.0: Enterprise Cloud, AI Assistant and more"
const description =
  "Hoppscotch v2026.9.0 introduces the Enterprise Cloud tier and an AI Assistant for Enterprise Cloud and Enterprise Self-Host."

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
      content: "https://hoppscotch.com/images/blog-v2026-9-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2026-9-0.png",
    },
    { property: "og:type", content: "article" },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2026-9-0",
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
                <span class="text-zinc-200/20">Sep 29, 2026</span>
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
              src="/images/blog-v2026-9-0.png"
              width="352"
              height="198"
              alt="Hoppscotch v2026.9.0"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're excited to announce Hoppscotch v2026.9.0. This release
              brings a new Enterprise Cloud tier for organizations that need
              stronger identity, security, and governance controls, along with
              an AI Assistant that can act on API work for Enterprise Cloud and
              Enterprise Self-Host customers.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Introducing Enterprise Cloud</h4>
            <ImageZoom
              class="mb-8 h-full w-full rounded md:rounded-xl"
              src="/images/blog-v2026-9-0-1.png"
              width="352"
              height="198"
              alt="Enterprise Cloud"
            />
            <p class="mb-8 mt-4">
              Enterprise Cloud adds a new tier alongside the Free and Business
              plans. It includes everything in the Free plan, plus the controls
              teams need to manage access, investigate activity, and get help
              running Hoppscotch at scale. The experience is designed to bring
              Cloud closer to the enterprise capabilities already available in
              our self-hosted edition. Enterprise Cloud is available at $11 per
              user/month when billed annually, or $14 per user/month when billed
              monthly.
            </p>
            <ul class="mb-8 list-disc space-y-3 pl-6">
              <li>
                <strong class="text-zinc-100"
                  >Identity and Access Management:</strong
                >
                manage enterprise access with organization-level controls.
              </li>
              <li>
                <strong class="text-zinc-100">Single Sign-On:</strong> connect
                your identity provider for a simpler, more secure sign-in
                experience.
              </li>
              <li>
                <strong class="text-zinc-100">Audit Logs:</strong> review
                important organization activity and support compliance
                workflows.
              </li>
              <li>
                <strong class="text-zinc-100">Dedicated Support:</strong> get
                assistance from a team focused on your organization.
              </li>
              <li>
                <strong class="text-zinc-100">Everything in Free:</strong> keep
                the API testing and collaboration capabilities your team already
                uses.
              </li>
            </ul>
            <p class="mb-8">
              Enterprise Cloud is built around the same direction as our
              self-hosted Enterprise tier, with more features and governance
              capabilities coming soon.
            </p>
            <p class="mb-8">
              <a
                href="https://hoppscotch.io/orgs"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
              >
                Create an organization →</a
              >
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Meet the AI Assistant</h4>
            <ImageZoom
              class="mb-8 h-full w-full rounded md:rounded-xl"
              src="/images/blog-v2026-9-0-2.png"
              width="352"
              height="198"
              alt="Hoppscotch AI Assistant"
            />
            <p class="mb-8 mt-4">
              The new AI Assistant is an agentic chat interface docked inside
              Hoppscotch. It understands the request, response, environment, and
              collections you're working with, then uses real Hoppscotch tools
              to get work done. Ask it to add authentication and run a request,
              write a test for a response, create an environment, or organize a
              collection, and it can carry out the steps instead of only
              describing them.
            </p>
            <p class="mb-8">
              The assistant can edit request fields, run and save requests,
              manage tabs, work with environments and collections, publish
              documentation, and manage mock servers. It can chain several
              actions together and show each step as it works. Skills are also
              available from the
              <code class="rounded bg-zinc-800 px-1 py-0.5 text-sm">/</code>
              menu for common workflows such as debugging, writing tests, adding
              authentication, and documenting an API.
            </p>
            <p class="mb-8">
              The AI Assistant is available in Enterprise Cloud and Enterprise
              Self-Host. You can find it in
              <strong class="text-zinc-100"
                >Settings &gt; AI experiments</strong
              >
              and connect the provider that works for your organization,
              including Anthropic, OpenAI, Bedrock, Azure, or a compatible local
              runtime.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">More features are coming soon</h4>
            <p class="mb-8 mt-4">
              This is the beginning of a broader set of enterprise capabilities
              across Cloud and Self-Host. We're continuing to improve admin
              experiences, security controls, governance, and the AI Assistant
              based on what enterprise teams need most.
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
            <p class="mb-8 mt-4">
              Have feedback or an enterprise use case to share? Write to us at
              <a
                href="mailto:hello@hoppscotch.io"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >hello@hoppscotch.io</a
              >, join our
              <a
                href="https://hoppscotch.io/discord"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >Discord server</a
              >, or visit our
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
