<script setup lang="ts">
  useHead({
    title:
      "Hoppscotch v2023.12.0: Better API testing capabilities and more • Blog • Hoppscotch",
    meta: [
      {
        property: "og:title",
        content:
          "Hoppscotch v2023.12.0: Better API testing capabilities and more • Blog • Hoppscotch",
      },
      {
        name: "twitter:title",
        content:
          "Hoppscotch v2023.12.0: Better API testing capabilities and more • Blog • Hoppscotch",
      },
      {
        name: "description",
        content:
          "We're excited to share what we've been working on the past few months with the launch of our latest release, Hoppscotch v2023.12.0.",
      },
      {
        property: "og:description",
        content:
          "We're excited to share what we've been working on the past few months with the launch of our latest release, Hoppscotch v2023.12.0.",
      },
      {
        name: "twitter:description",
        content:
          "We're excited to share what we've been working on the past few months with the launch of our latest release, Hoppscotch v2023.12.0.",
      },
      {
        property: "og:image",
        content:
          "https://hoppscotch.com/images/blog-better-api-testing-capabilities-and-more.png",
      },
      {
        name: "twitter:image",
        content:
          "https://hoppscotch.com/images/blog-better-api-testing-capabilities-and-more.png",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content:
          "https://hoppscotch.com/blog/better-api-testing-capabilities-and-more",
      },
    ],
  })
</script>

<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <BlogPostHeader />
        <!-- Blog content -->
        <article class="flex flex-col items-center space-y-8">
          <header class="flex flex-col w-full max-w-xl">
            <div class="mb-4 text-white">
              <ul class="flex flex-wrap items-center -m-1 text-sm">
                <li class="m-1">
                  <span
                    class="inline-flex text-center transition text-zinc-100/50"
                    >Product,</span
                  >
                </li>
                <li class="m-1">
                  <span
                    class="inline-flex text-center transition text-zinc-100/50"
                    >Engineering</span
                  >
                </li>
                <span class="mx-2 text-zinc-400/20">|</span>
                <span class="text-zinc-200/20">Dec 19, 2023</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
              >
                Hoppscotch v2023.12.0: Better API testing capabilities and more
              </span>
            </h3>
            <div class="flex items-center">
              <img
                loading="lazy"
                class="mr-4 rounded-full shrink-0"
                src="/images/blog-author-02.jpg"
                width="32"
                height="32"
                alt="Kiran Johns"
              />
              <div class="text-sm">
                <span class="transition text-zinc-200/80"> Kiran Johns </span>
              </div>
            </div>
          </header>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded md:rounded-xl"
              src="/images/blog-better-api-testing-capabilities-and-more.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mt-4 mb-8">
              At Hoppscotch, we're creating an API development ecosystem to help
              you ship software faster. Easily test your APIs anytime,
              anywhere—no signup required! We've made Hoppscotch even better
              because you deserve the best. Try Hoppscotch now and collaborate
              with your team to test APIs in just minutes!
            </p>
            <p class="mt-4 mb-8">
              We're excited to share what we've been working on the past few
              months with the launch of our latest release, Hoppscotch
              v2023.12.0! This release is all about providing you with better
              API testing capabilities, collaboration features, and an overall
              improved app experience and performance!
            </p>
            <h4 class="mb-4 text-white">
              Collection-level authorization and header
            </h4>
            <p class="mt-4 mb-8">
              When working with numerous requests within a collection, setting
              authorization and header configurations for each request with
              identical settings can be cumbersome. With our latest release, you
              can now add authorization and header settings at the collection
              level. Right-click on the collection to edit its properties, where
              you can set headers and authorization settings for all requests
              within the collection.
            </p>
          </section>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded md:rounded-xl"
              src="/images/blog-collection-level-headers-and-auth.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mt-4 mb-8">
              Requests or folders within the collection can choose to either
              inherit the properties of the root collection or override them.
            </p>
            <h4 class="mb-4 text-white">
              Easily share your API requests with anyone
            </h4>
            <p class="mt-4 mb-8">
              Sharing your work is now easier than ever! With our enhanced
              experience for sharing a request, you can simply right-click on
              any saved request and share it, making it effortless for others to
              discover and engage with your API requests. You can share a
              request in three ways:
            </p>
            <ul class="mt-4 mb-8 ml-5 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">
                Links: Generate a raw, HTML, or Markdown link to the request.
              </li>
              <li class="pl-4">
                Buttons: Generate a button with a link to the request that can
                be added to an HTML or Markdown file.
              </li>
              <li class="pl-4">
                Embeds: Create a mini version of Hoppscotch that you can embed
                in an HTML page, allowing your audience to interact with your
                API request.
              </li>
            </ul>
          </section>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded md:rounded-xl"
              src="/images/blog-shared-requests-widgets.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mt-4 mb-8">
              Sharing a request doesn't grant others access to the original
              data; it simply provides them with a copy to use. Therefore, if a
              shared request contains environment variables, it will not
              function properly, and it is advisable to replace the environment
              variable with its corresponding value before sharing.
            </p>
            <h4 class="mb-4 text-white">
              Easily manage your self-hosted server configurations
            </h4>
            <p class="mt-4 mb-8">
              We've also made improvements to Hoppscotch's self-host feature.
              You can manage your server configurations directly from the
              self-host admin dashboard. You can configure authentication
              providers, as well as manage your SMTP settings from the
              dashboard. For self-hosted enterprise versions, you can use the
              dashboard to configure your license and set up extra services like
              audit logs.
            </p>
            <p class="mt-4 mb-8">
              The Hoppscotch Desktop app has also received numerous updates and
              improvements! The size of the Hoppscotch app installer on a Mac
              has been reduced to just 10MB!
            </p>
            <p class="mt-4 mb-8">
              We've introduced several other improvements, including the option
              to add subpath-based access for the admin dashboard and Hoppscotch
              backend instead of port-based access. With this update, you can
              choose between configuring port-based access or subpath-based
              access. If subpath-based access is enabled, you can access the
              Hoppscotch backend and admin dashboard at domain-name.com/backend
              and domain-name.com/admin. We will gradually migrate away from
              port-based access for the self-host admin dashboard and backend in
              the future.
            </p>
            <p class="mt-4 mb-8">
              Spotlight search has received some enhancements. Now, you can
              directly search the Hoppscotch documentation from within the app.
            </p>
            <p class="mt-4 mb-8">
              We've also implemented stability and performance improvements to
              our web and desktop app on Hoppscotch Cloud, making your API
              testing even faster and smoother!
            </p>
            <p class="mt-4 mb-8">
              That's it for this release. You can read the entire
              <RouterLink
                to="/changelog/19-12-2023"
                class="border-b transition border-zinc-200 hover:text-zinc-50"
                >v2023.12.0 release changelog</RouterLink
              >. We'd love to see how all these improvements will help you
              develop and test your APIs, enabling you to ship your products
              faster! If you'd like to provide feedback on anything we've
              shipped for this release or even general feedback, please let us
              know on our GitHub repository or reach out to us at
              support@hoppscotch.io.
            </p>
          </section>
        </article>
      </div>
    </div>
  </section>
</template>
