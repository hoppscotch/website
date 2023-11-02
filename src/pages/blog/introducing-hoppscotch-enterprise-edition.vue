<script setup lang="ts">
  useHead({
    title: "Introducing Hoppscotch Enterprise Edition • Blog • Hoppscotch",
    meta: [
      {
        property: "og:title",
        content:
          "Introducing Hoppscotch Enterprise Edition • Blog • Hoppscotch",
      },
      {
        name: "twitter:title",
        content:
          "Introducing Hoppscotch Enterprise Edition • Blog • Hoppscotch",
      },
      {
        name: "description",
        content:
          "We are thrilled to reveal our Hoppscotch August Release, v2023.8.0.",
      },
      {
        property: "og:description",
        content:
          "We are thrilled to reveal our Hoppscotch August Release, v2023.8.0.",
      },
      {
        name: "twitter:description",
        content:
          "We are thrilled to reveal our Hoppscotch August Release, v2023.8.0.",
      },
      {
        property: "og:image",
        content:
          "https://hoppscotch.com/images/blog-introducing-hoppscotch-enterprise-edition.png",
      },
      {
        name: "twitter:image",
        content:
          "https://hoppscotch.com/images/blog-introducing-hoppscotch-enterprise-edition.png",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content:
          "https://next.hoppscotch.com/blog/introducing-hoppscotch-enterprise-edition",
      },
    ],
  })
  const source = `${location.host}${location.pathname}`
  const { copy, copied } = useClipboard({
    legacy: true,
  })
</script>

<template>
  <section>
    <div class="relative max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Section header -->
        <BlogPostHeader :copied="copied" @copy="copy(source)" />
        <!-- Blog content -->
        <article class="flex flex-col items-center space-y-8">
          <header class="flex flex-col w-full max-w-2xl">
            <div class="mb-4">
              <ul class="flex flex-wrap -m-1 text-sm">
                <li class="m-1">
                  <span
                    class="inline-flex text-center transition text-neutral-100/50"
                    >Product</span
                  >
                  <span class="mx-2 text-neutral-400/20">|</span>
                  <span class="text-neutral-200/20">August 31, 2023</span>
                </li>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="text-transparent bg-clip-text max-w-max bg-gradient-to-br from-neutral-200/50 via-neutral-100/80 to-neutral-50/80"
              >
                Introducing Hoppscotch Enterprise Edition
              </span>
            </h3>
            <div class="flex items-center">
              <img
                loading="lazy"
                class="mr-4 rounded-full shrink-0"
                src="/images/blog-author-01.jpg"
                width="32"
                height="32"
                alt="Author 01"
              />
              <div class="text-sm">
                <span class="transition text-neutral-200/50">
                  Liyas Thomas
                </span>
              </div>
            </div>
          </header>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded-xl"
              src="/images/blog-introducing-hoppscotch-enterprise-edition.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-2xl text-neutral-200/80">
            <p class="mt-4 mb-8">
              We are thrilled to reveal our Hoppscotch August Release, version
              2023.8.0! Our dedicated team has been working tirelessly to bring
              you an array of exhilarating enhancements and innovative features
              that have been requested by our dynamic community. This release is
              all about elevating your API testing experience to unprecedented
              heights, and we cannot wait for you to explore the transformative
              power it brings.
            </p>
            <h4 class="mb-4">Hoppscotch Self-Host Enterprise Edition</h4>
            <p class="mt-4 mb-8">
              Hoppscotch is one of the most beloved API testing tools available,
              and our community has consistently expressed their desire to see
              Hoppscotch become enterprise-ready. We are thrilled to announce
              that Hoppscotch Enterprise is now available. Hoppscotch Enterprise
              caters to all the requirements of your organization, with the
              added benefit of data ownership. Hoppscotch Self-Host Enterprise
              enables you to deploy your instance on-premises and take control
              of your data.
            </p>
          </section>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded-xl"
              src="/images/blog-introducing-hoppscotch-enterprise-edition-1.png"
              alt="News"
            />
          </section>
          <section class="max-w-2xl text-neutral-200/80">
            <p class="mt-4 mb-8">
              But that's not all – the Hoppscotch Self-Host Enterprise edition
              comes with a treasure trove of additional features including:
            </p>
            <ul
              class="mt-4 mb-8 ml-5 list-disc space-y-2 marker:text-neutral-100"
            >
              <li class="pl-4">
                SAML-based Single Sign-On Support: Take the reins of user
                authentication and authorization with this cutting-edge
                addition, giving your organization complete control over access
                to Hoppscotch.
              </li>
              <li class="pl-4">
                Activity Monitoring for Organizational Administrators: Empower
                your administrators with the ability to oversee and track
                activities on the platform, ensuring a secure and smooth
                operation using audit logs.
              </li>
            </ul>
            <p class="mt-4 mb-8">
              Seize the opportunity and
              <a
                href="https://cal.com/hoppscotch/enterprise-demo"
                target="_blank"
                class="border-b transition border-neutral-100/50 hover:border-neutral-100"
                >book a demo</a
              >
              with us today to witness the transformation that Hoppscotch
              Enterprise can bring to your organization.
            </p>
          </section>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded-xl"
              src="/images/blog-introducing-hoppscotch-enterprise-edition-2.png"
              alt="News"
            />
          </section>
          <section class="max-w-2xl text-neutral-200/80">
            <h4 class="mb-4">Spotlight — New way to navigate Hoppscotch</h4>
            <p class="mt-4 mb-8">
              Introducing Spotlight Search, a new way to interact with
              Hoppscotch. No more navigating through complex menus or searching
              for specific options. With Spotlight Search, you can swiftly
              access every corner of Hoppscotch by simply pressing Command + K
              or Control + K and typing in what you want to do. You can access
              every corner of Hoppscotch effortlessly. It's a swift,
              streamlined, and intuitive approach that enhances your interaction
              with the platform.
            </p>
            <hr
              class="h-px my-12 border-t-0 bg-gradient-to-r from-transparent via-neutral-500/20"
            />
            <h4 class="mb-4">Inspections — Debug your APIs with ease</h4>
            <p class="mt-4 mb-8">
              Hoppscotch now comes equipped with the Inspections feature that
              not only alerts you to misconfiguration but also guides you toward
              the exact point of correction. Debugging your API requests has
              never been easier, reducing errors caused by misconfigured
              settings.
            </p>
            <hr
              class="h-px my-12 border-t-0 bg-gradient-to-r from-transparent via-neutral-500/20"
            />
            <h4 class="mb-4">Context Menus — Assist content-aware actions</h4>
            <p class="mt-4 mb-8">
              Context-aware menus assist you in swiftly executing actions on
              text and elements. Just select a piece of text and hover over it
              to reveal the available actions you can perform. Context Menus on
              text elements help you create variables and even add query
              parameters to the parameters tab easily.
            </p>
            <p class="mt-4 mb-8">
              What's more? we've extended the context menus to tabs — rename,
              duplicate, and close them effortlessly with just a right-click.
            </p>
            <hr
              class="h-px my-12 border-t-0 bg-gradient-to-r from-transparent via-neutral-500/20"
            />
            <h4 class="mb-4">GraphQL Client — Upgraded for speed</h4>
            <p class="mt-4 mb-8">
              Embrace a superior GraphQL experience with this release. Enjoy tab
              support for working on different connections and seamlessly switch
              between various queries within a single tab. The GraphQL client
              has received a significant upgrade, amplifying your productivity
              and effectiveness.
            </p>
            <ul
              class="mt-4 mb-8 ml-5 list-disc space-y-2 marker:text-neutral-100"
            >
              <li class="pl-4">
                Multi-Query Capabilities: Embrace the freedom to write and
                execute multiple queries within a single tab. This flexibility
                streamlines your workflow, reducing the clutter of numerous tabs
                while empowering you to accomplish more in less time.
              </li>
              <li class="pl-4">
                Seamless Connection Switching with Tabs: We've reimagined the
                way you manage connections on GraphQL. Our revamped interface
                introduces multiple tabs, each dedicated to a specific
                connection. This means you can seamlessly switch between
                different connections.
              </li>
            </ul>
            <hr
              class="h-px my-12 border-t-0 bg-gradient-to-r from-transparent via-neutral-500/20"
            />
            <p class="mt-4 mb-8">
              We've taken extra steps to enhance the Hoppscotch experience in
              every possible way. Enjoy additional features like URL
              auto-completion as you type, quick access to environment
              variables, and a finely tuned performance that promises the
              smoothest experience yet.
            </p>
            <p class="mt-4 mb-8">
              At Hoppscotch, innovation is our driving force. We're on an
              unrelenting journey to provide you with the pinnacle of API
              development and testing experiences. The excitement is palpable as
              we invite you to explore these features, harness their
              capabilities, and seamlessly integrate them into your workflow. As
              we embark on this thrilling chapter, your feedback remains a
              guiding light, shaping the future of Hoppscotch.
            </p>
            <p class="mt-4 mb-8">
              Thank you for being a part of this remarkable journey.
              <br />
              The Hoppscotch Team
            </p>
          </section>
        </article>
      </div>
    </div>
  </section>
</template>
