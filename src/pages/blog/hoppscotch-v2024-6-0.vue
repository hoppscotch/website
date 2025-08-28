<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2024.6.0: Collection Runner on CLI, Team Invite Links, Client Certificates and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2024.6.0: Collection Runner on CLI, Team Invite Links, Client Certificates and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2024.6.0: Collection Runner on CLI, Team Invite Links, Client Certificates and more",
    },
    {
      name: "description",
      content:
        "We are excited to announce the release of Hoppscotch v2024.6.0. This release includes a number of new features and improvements that will make your API testing experience even better.",
    },
    {
      property: "og:description",
      content:
        "We are excited to announce the release of Hoppscotch v2024.6.0. This release includes a number of new features and improvements that will make your API testing experience even better.",
    },
    {
      name: "twitter:description",
      content:
        "We are excited to announce the release of Hoppscotch v2024.6.0. This release includes a number of new features and improvements that will make your API testing experience even better.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2024-6-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2024-6-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2024-6-0",
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
                <span class="text-zinc-200/20">Jun 28, 2024</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2024.6.0: Collection Runner on CLI, Team Invite
                Links, Client Certificates and more
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
              src="/images/blog-v2024-6-0.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              Hoppscotch is a super simple API client. You can easily get
              started with Hoppscotch using our web application or desktop app,
              and collaborate with your team via our cloud! Now, if you prefer
              hosting on your own, check out Hoppscotch Self-Host Editions and
              deploy Hoppscotch on your servers.
            </p>
            <p class="mb-8 mt-4">
              With our latest release v2024.6.0, we're taking a step forward in
              building out our Hoppscotch ecosystem of products as well as
              bringing some cool features across the cloud API client and our
              self-hosted products!
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Connect your CLI with the API client
            </h4>
            <p class="mb-8 mt-4">
              Hoppscotch CLI can now connect with your API client and run
              collections that are present in shared workspaces.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-6-0-1.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <p class="mb-8 mt-4">
              To run the collections present in your API client, you need to
              create a personal access token! Once the personal access token is
              created, you can right-click any collection, select Run
              Collection, copy the command you see and run it on the CLI!
            </p>
            <p class="mb-8 mt-4">
              To run a collection present in the Hoppscotch cloud, the command
              looks like the one below:
            </p>
            <pre
              class="overflow-x-auto whitespace-pre-wrap rounded-md border border-neutral-800 bg-neutral-900 p-4"
            >
hopp test -e &lt;environment_id&gt; -d &lt;delay_in_ms&gt; &lt;hoppscotch_collection_id&gt; --token &lt;access_token&gt;</pre
            >
            <p class="mb-8 mt-4">
              You can also run a collection present on your self-hosted instance
              by passing your server URL as an argument:
            </p>
            <pre
              class="overflow-x-auto whitespace-pre-wrap rounded-md border border-neutral-800 bg-neutral-900 p-4"
            >
hopp test -e &lt;environment_id&gt; -d &lt;delay_in_ms&gt; &lt;hoppscotch_collection_id&gt; --token &lt;access_token&gt; --server &lt;server_url&gt;</pre
            >
            <p class="mb-8 mt-4">
              Read more about
              <a
                href="https://docs.hoppscotch.io/documentation/clients/cli/overview#running-collections-present-on-the-api-client"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >running a collection using the CLI</a
              >.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Client Certificates on the Hoppscotch App
            </h4>
            <p class="mb-8 mt-4">
              We've brought the ability to add client certificates to
              authenticate requests on the Hoppscotch desktop app! You can now
              use a .pem or .pfx/.pkcs12 certificate to authenticate your
              requests to a configured domain. Once set up, these certificates
              are applied whenever you request HTTP to your specified domains.
            </p>
            <p class="mb-8 mt-4">
              Read more about
              <a
                href="https://docs.hoppscotch.io/documentation/clients/cli/overview#running-collections-present-on-the-api-client"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >setting up client certificates on the Hoppscotch</a
              >.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-6-0-2.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Custom Banners</h4>
            <p class="mb-8 mt-4">
              Custom banners allow the self-host admin to share important
              announcements such as a scheduled maintenance or instance upgrade
              with the rest of your team! Banners are exclusive to Hoppscotch
              self-host enterprise and you can read more about it here.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2024-6-0-3.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Active Users</h4>
            <p class="mb-8 mt-4">
              Self-host admins can now see the last active time of the users in
              your organization via the user management page on the Hoppscotch
              Admin dashboard, making it easy for you to manage inactive users
              on the app.
            </p>

            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4">
              That's it for the June release, a big thanks to all our
              contributors and supporters and thank you so much for reading! If
              you've any feedback, contact us at hello@hoppscotch.io - we'd love
              to hear from you!
            </p>
          </section>
        </article>
      </div>
    </div>
  </section>
</template>
