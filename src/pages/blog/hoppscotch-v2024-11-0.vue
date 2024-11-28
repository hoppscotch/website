<script setup lang="ts">
useHead({
  title: "Hoppscotch v2024.11.0: Introducing collection runner, and more",
  meta: [
    {
      property: "og:title",
      content: "Hoppscotch v2024.11.0: Introducing collection runner, and more",
    },
    {
      name: "twitter:title",
      content: "Hoppscotch v2024.11.0: Introducing collection runner, and more",
    },
    {
      name: "description",
      content:
        "Our 2024.11.0 release introduces exciting updates to enhance your experience with Hoppscotch.",
    },
    {
      property: "og:description",
      content:
        "Our 2024.11.0 release introduces exciting updates to enhance your experience with Hoppscotch.",
    },
    {
      name: "twitter:description",
      content:
        "Our 2024.11.0 release introduces exciting updates to enhance your experience with Hoppscotch.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2024-11-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2024-11-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2024-11-0",
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
                <span class="text-zinc-200/20">Nov 28, 2024</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2024.11.0: Introducing collection runner, and more
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
              src="/images/blog-v2024-11-0.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              At Hoppscotch, we build an easy-to-use, developer-friendly,
              powerful API testing client. Our 2024.11.0 release introduces
              exciting updates to enhance your experience with Hoppscotch.
            </p>
            <p class="mb-8 mt-4">
              <a
                href="https://hoppscotch.io/"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >Try it out</a
              >
              — get started with our API web client easily! We're always looking
              to improve, so let us know what you'd like to see next at
              <a
                href="mailto:hello@hoppscotch.io"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >hello@hoppscotch.io</a
              >.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Execute Requests with the New Collection Runner
            </h4>
            <p class="mb-8 mt-4">
              We've introduced the collection runner in the Hoppscotch API
              testing client! This feature lets you automate the execution of
              multiple requests within a collection.
            </p>
            <p class="mb-8 mt-4">
              Access the
              <a
                href="https://docs.hoppscotch.io/documentation/features/runner"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >collection runner</a
              >
              by clicking the runner icon while hovering over a collection or
              navigating to the collection's menu. Configure your settings in
              the runner menu, then run the collection to receive responses.
            </p>
            <p class="mb-8 mt-4">
              You can also integrate the collection runner into your CI/CD
              pipeline using the Hoppscotch CLI, available in the same menu.
            </p>
            <p class="mb-8 mt-4">
              Additonally, the Hoppscotch CLI can now run collections with
              iterations and data feed. For more insights on run settings, see
              the
              <a
                href="https://docs.hoppscotch.io/documentation/clients/cli/overview#running-collections-present-on-the-api-client"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >documentation</a
              >.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-11-0-1.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Send Binary Files in Your Request Body
            </h4>
            <p class="mb-8 mt-4">
              We've enhanced binary file support, enabling you to seamlessly
              include binary file content-types in your API requests. To use
              this feature, go to the request body section, select the binary
              file option, and incorporate your files with just a few clicks.
              Get full details on uploading binary data in our
              <a
                href="https://docs.hoppscotch.io/documentation/getting-started/rest/uploading-data#uploading-binary-data"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >documentation</a
              >.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">View Detailed Import Summaries</h4>
            <p class="mb-8 mt-4">
              We've improved data imports with a comprehensive summary feature.
              This overview provides key details such as number of collections,
              requests, responses etc. ensuring greater visibility and a
              smoother user experience.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-11-0-2.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Specify Content Types for Request Body Form Data
            </h4>
            <p class="mb-8 mt-4">
              We now allow flexible content-type customization for
              multipart/form-data requests. While file content-types are handled
              automatically, you can override them for specific parameters. This
              feature supports mixed content types, enabling you to send
              multiple files alongside additional data, such as JSON-formatted
              parameters, in a single request.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-11-0-3.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
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
  </section>
</template>
