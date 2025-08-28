<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2024.8.0: AWS Signature, Workspace Management APIs and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2024.8.0: AWS Signature, Workspace Management APIs and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2024.8.0: AWS Signature, Workspace Management APIs and more",
    },
    {
      name: "description",
      content:
        "We are excited to announce the release of Hoppscotch v2024.8.0. This release includes a number of new features and improvements that will make your API testing experience even better.",
    },
    {
      property: "og:description",
      content:
        "We are excited to announce the release of Hoppscotch v2024.8.0. This release includes a number of new features and improvements that will make your API testing experience even better.",
    },
    {
      name: "twitter:description",
      content:
        "We are excited to announce the release of Hoppscotch v2024.8.0. This release includes a number of new features and improvements that will make your API testing experience even better.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2024-8-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2024-8-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2024-8-0",
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
                <span class="text-zinc-200/20">Aug 30, 2024</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2024.8.0: AWS Signature, Workspace Management APIs,
                and more
              </span>
            </h3>
            <div class="flex items-center">
              <img
                loading="lazy"
                class="mr-4 shrink-0 rounded-full"
                src="/images/blog-author-02.jpg"
                width="32"
                height="32"
                alt="Kiran Johns"
              />
              <div class="text-sm">
                <span class="text-zinc-200/80 transition"> Kiran Johns </span>
              </div>
            </div>
          </header>
          <section class="max-w-4xl">
            <ImageZoom
              class="h-full w-full rounded md:rounded-xl"
              src="/images/blog-v2024-8-0.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">Hoppscotch turned 5 this August.</p>
            <p class="mb-8 mt-4">
              When we first launched Hoppscotch, our plan was clear: make it
              easier for developers to test APIs directly from their browser
              without logging in (hoppscotch.io). Today, we've evolved far
              beyond that initial vision. Hoppscotch now features a Self-Hosted
              Edition, giving you greater control over your data and a Desktop
              Application for a smoother, faster experience.
            </p>
            <p class="mb-8 mt-4">
              With our latest update, version 2024.8.0, we're excited to
              introduce cool new features that we think you'll love.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            This update introduces new additions to the Hoppscotch Backend that
            require users to run a new migration (instructions can be found here
            for
            <a
              href="https://docs.hoppscotch.io/documentation/self-host/community-edition/install-and-build#migrations"
              target="_blank"
              class="border-b border-zinc-200 transition hover:text-zinc-50"
            >
              community</a
            >
            and
            <a
              href="https://docs.hoppscotch.io/documentation/self-host/enterprise-edition/install-and-build#migrations"
              target="_blank"
              class="border-b border-zinc-200 transition hover:text-zinc-50"
            >
              enterprise</a
            >
            editions respectively), in addition to that, we're also adding a new
            environment variable `DATA_ENCRYPTION_KEY` whose value is a 32
            character alphanumeric string. For more details on this please refer
            to the
            <a
              href="https://docs.hoppscotch.io"
              target="_blank"
              class="border-b border-zinc-200 transition hover:text-zinc-50"
              >documentation</a
            >.
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">AWS Signature Authorization Type</h4>
            <p class="mb-8 mt-4">
              Support for AWS Signature authorization is now available. This
              HMAC (Hash-based Message Authentication Code) mechanism ensures
              that your requests are genuine and tamper-proof. Just enter your
              AWS Access Key and Secret Key to securely sign your API requests
              within Hoppscotch.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-8-0-1.jpeg"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Description Field for Request Parameters and Headers
            </h4>
            <p class="mb-8 mt-4">
              To help you keep track of your API components, we've introduced
              description fields for request parameters and headers. Now, you
              can add notes about what each parameter or header does right
              inside Hoppscotch, making it easier to remember the purpose of
              each part of your request.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Import HAR Files to the Hoppscotch Collection
            </h4>
            <p class="mb-8 mt-4">
              You can now import HAR (HTTP Archive) files into Hoppscotch with
              just a couple of clicks. Whether you're pulling data from your
              browser or a network tool, you can quickly bring HAR files into
              Hoppscotch collections and get to work.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-8-0-2.jpeg"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">APIs for Workspace Management</h4>
            <p class="mb-8 mt-4">
              Admins using the Self-Hosted Enterprise Edition can now manage
              workspaces more easily with simple API calls. Tasks such as
              creating new workspaces, updating existing workspace details and
              deleting workspaces can be performed with just a single click.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4">
              We're beyond grateful for the support from our community. Your
              belief in Hoppscotch and recognition of its potential have been
              major to our growth. We'd love to hear your thoughts on this
              release or anything else you'd like to share. Feel free to reach
              out to us at
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
              >. We can't wait to hear from you!
            </p>
          </section>
        </article>
      </div>
    </div>
  </section>
</template>
