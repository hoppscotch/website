<script setup lang="ts">
useHead({
  title: "Hoppscotch v2024.7.0: JUnit Reports, User management API & more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2024.7.0: JUnit Reports, User management API & more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2024.7.0: JUnit Reports, User management API & more",
    },
    {
      name: "description",
      content:
        "We are excited to announce the release of Hoppscotch v2024.7.0. This release includes a number of new features and improvements that will make your API testing experience even better.",
    },
    {
      property: "og:description",
      content:
        "We are excited to announce the release of Hoppscotch v2024.7.0. This release includes a number of new features and improvements that will make your API testing experience even better.",
    },
    {
      name: "twitter:description",
      content:
        "We are excited to announce the release of Hoppscotch v2024.7.0. This release includes a number of new features and improvements that will make your API testing experience even better.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2024-7-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2024-7-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2024-7-0",
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
                <span class="text-zinc-200/20">Jul 30, 2024</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2024.7.0: JUnit Reports, User management API & more
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
              src="/images/blog-v2024-7-0.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              Hoppscotch is a simple straightforward API testing client that
              helps developers around the world to work with their APIs. You can
              easily get started with Hoppscotch using our web client at
              hoppscotch.io or download our desktop app!
            </p>
            <p class="mb-8 mt-4">
              We're excited to roll out new features and enhancements with out
              latest release v2024.7.0 on our cloud and self-hosted solutions.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Generate JUnit Reports for Collection Runs on CLI
            </h4>
            <p class="mb-8 mt-4">
              The hopp test command can now generate JUnit Reports in XML format
              for collection runs. Specify a path to store the reports in your
              desired location, else, the default path for saving the JUnit
              report will be the current working directory.
            </p>
            <pre
              class="overflow-x-auto whitespace-pre-wrap rounded-md border border-neutral-800 bg-neutral-900 p-4"
            >
hopp test &lt;file_path_or_id&gt; --env &lt;file_path_or_id&gt; --reporter-junit [path.xml]</pre
            >
            <br />
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-7-0-1.jpeg"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">AI meets Hoppscotch</h4>
            <p class="mb-8 mt-4">
              We are gradually introducing AI-powered features to provide
              quality of life features to help improve your API testing
              experience and we're starting with one small feature.
            </p>
            <h4 class="mb-4 text-white">Automatically naming an API request</h4>
            <p class="mb-8 mt-4">
              This feature assigns a relevant name to an API request without
              requiring manual input from the user. The system examines the
              Request components and extracts the parameters to develop a name
              for the API Request.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-7-0-2.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Duplicate a Collection</h4>
            <p class="mb-8 mt-4">
              You can now duplicate collections with a single click, enabling
              easier management of similar requests and configurations without
              having to recreate them from scratch.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-7-0-3.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Manage your users using APIs</h4>
            <p class="mb-8 mt-4">
              You can now perform user management on Hoppscotch self-host and
              perform actions such as inviting users and granting admin rights
              using APIs. Learn more about it from our
              <a
                href="https://docs.hoppscotch.io/documentation/self-host/community-edition/admin-dashboard"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >documentation</a
              >.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4">
              And that's a wrap for this month's release! Our team is dedicated
              to continuously improving Hoppscotch and we appreciate your
              support in helping us get better each day. If you have any
              feedback or suggestions, please reach out to us at
              <a
                href="mailto:hello@hoppscotch.io"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >hello@hoppscotch.io</a
              >
              or head over to our
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
