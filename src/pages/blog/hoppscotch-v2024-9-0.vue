<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2024.9.0: Save API Responses, Predefined Variables, and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2024.9.0: Save API Responses, Predefined Variables, and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2024.9.0: Save API Responses, Predefined Variables, and more",
    },
    {
      name: "description",
      content:
        "Hoppscotch v2024.9.0 brings some exciting updates and addresses key issues that have been bugging our users for a while.",
    },
    {
      property: "og:description",
      content:
        "Hoppscotch v2024.9.0 brings some exciting updates and addresses key issues that have been bugging our users for a while.",
    },
    {
      name: "twitter:description",
      content:
        "Hoppscotch v2024.9.0 brings some exciting updates and addresses key issues that have been bugging our users for a while.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2024-9-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2024-9-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2024-9-0",
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
                <span class="text-zinc-200/20">Oct 4, 2024</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2024.9.0: Save API Responses, Predefined Variables,
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
              src="/images/blog-v2024-9-0.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're Hoppscotch, a super simple, yet powerful developer-friendly
              API testing client. Try it out—get started with our web client in
              seconds. Here's what's new in our September 2024 Release.
            </p>
            <p class="mb-8 mt-4">
              Hoppscotch v2024.9.0 brings some exciting updates and addresses
              key issues that have been bugging our users for a while.
            </p>
            <p class="mb-8 mt-4">
              We’re always looking to improve, so feel free to let us know what
              you’d like to see next at hello@hoppscotch.io.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Introducing Hoppscotch Agent</h4>
            <p class="mb-8 mt-4">
              We're introducing a new way to make it easier for developers to
              work with our web API client. Say hello to the Hoppscotch Agent!
              This tiny desktop application acts as a native interceptor for API
              calls. Once installed and configured, Hoppscotch's web client will
              route your API requests through the Agent, bypassing browser
              limitations.
            </p>
            <p class="mb-8 mt-4">
              Learn more about
              <a
                href="https://docs.hoppscotch.io/documentation/features/interceptor#hoppscotch-agent"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >Hoppscotch Agent from documentation</a
              >.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Save API responses in your collection
            </h4>
            <p class="mb-8 mt-4">
              You can now save examples of API responses directly in your
              collection. This means you no longer have to send the same request
              repeatedly just to see a response—previous responses can be saved
              alongside their corresponding requests.
            </p>
            <p class="mb-8 mt-4">
              This feature is particularly helpful when working with API
              endpoints that return varied responses based on different
              conditions.
            </p>
            <p class="mb-8 mt-4">
              To save a response as an example, simply click the "Save as
              Example" button near the API response. It’s that easy!
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-9-0-1.jpeg"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Use AI to generate a request body</h4>
            <p class="mb-8 mt-4">
              This release includes a powerful AI feature: you can now use
              Hoppscotch AI to generate a request body. Whether you're making
              complex API requests or just need a quick start, this AI tool will
              save you time by providing automatic body configurations.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-9-0-2.jpeg"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Hoppscotch now supports predefined variables
            </h4>
            <p class="mb-8 mt-4">
              We’re excited to introduce predefined variables, making it easier
              to generate dynamic, realistic data during request execution. Use
              these variables in your requests in the format $variable.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-9-0-3.jpeg"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <p class="mb-8 mt-4">
              For example, $isoTimestamp provides the current ISO timestamp at
              zero UTC, while $randomUUID gives you a randomly generated
              36-character UUID.
            </p>
            <p class="mb-8 mt-4">
              Check out our documentation for the
              <a
                href="https://docs.hoppscotch.io/documentation/features/variables"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >full list of available variables.</a
              >.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Add comments on a JSON request body</h4>
            <p class="mb-8 mt-4">
              Collaborating on API requests just got easier! You can now add
              comments directly to the JSON request body. This feature enhances
              communication by allowing developers to leave notes,
              clarifications, or explanations within the request itself, making
              it simpler for teams to work together on complex APIs.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Import collections from different Workspaces
            </h4>
            <p class="mb-8 mt-4">
              Our latest release introduces a new feature that allows you to
              import collections into your workspace from other workspaces you
              have access to. This makes sharing collections across different
              teams effortless.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-9-0-4.jpeg"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4">
              Hoppscotch v2024.9.0 brings a lot of handy features that improve
              your API testing experience. We're excited to share this release
              and get your feedback on where we should improve further. Write to
              us at
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
