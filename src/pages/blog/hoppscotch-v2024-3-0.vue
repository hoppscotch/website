<script setup lang="ts">
useHead({
  title: "Hoppscotch v2024.3.0:  Access Control, Variable Scopes and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2024.3.0:  Access Control, Variable Scopes and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2024.3.0:  Access Control, Variable Scopes and more",
    },
    {
      name: "description",
      content:
        "The Hoppscotch team has been working tirelessly for the past two months! Our first major release of the year, Hoppscotch v2024.3.0, is designed to provide you with improved and advanced features for testing your APIs and managing your team.",
    },
    {
      property: "og:description",
      content:
        "The Hoppscotch team has been working tirelessly for the past two months! Our first major release of the year, Hoppscotch v2024.3.0, is designed to provide you with improved and advanced features for testing your APIs and managing your team.",
    },
    {
      name: "twitter:description",
      content:
        "The Hoppscotch team has been working tirelessly for the past two months! Our first major release of the year, Hoppscotch v2024.3.0, is designed to provide you with improved and advanced features for testing your APIs and managing your team.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2024-3-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2024-3-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2024-3-0",
    },
  ],
})
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <BlogPostHeader />
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
                <span class="text-zinc-200/20">Feb 14, 2024</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2024.3.0: Access Control, Variable Scopes and more
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
              src="/images/blog-v2024-3-0.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              Hoppscotch simplifies testing your APIs with our user-friendly API
              testing client, helping you deliver software more rapidly.
              <br />
              <br />
              <a
                href="https://hoppscotch.io"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >Give Hoppscotch Cloud a try</a
              >
              — no login needed.
            </p>
            <p class="mb-8 mt-4">
              The Hoppscotch team has been working tirelessly for the past two
              months! Our first major release of the year, Hoppscotch v2024.3.0,
              is designed to provide you with improved and advanced features for
              testing your APIs and managing your team.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">OAuth 2.0 - Grant Types</h4>
            <p class="mb-8 mt-4">
              OAuth 2.0 is an industry-standard authorization protocol. It
              allows third-party applications to gain limited access to a web
              service on behalf of a user, without exposing the user's
              credentials.
            </p>
            <p class="mb-8 mt-4">
              In OAuth 2.0, grant types are methods that a client application
              can use to obtain an access token. With the introduction of Grant
              Types in Hoppscotch, you can now set the grant type as any of the
              following options:
            </p>
            <ul class="mb-8 ml-5 mt-4 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">Authorization Code</li>
              <li class="pl-4">Authorization Code using PKCE</li>
              <li class="pl-4">Client Credentials</li>
              <li class="pl-4">Password Credentials</li>
              <li class="pl-4">Implicit</li>
            </ul>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/v2024-3-0-grant_types.gif"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Variables</h4>
            <p class="mb-8 mt-4">
              In this release, we've reconsidered our approach to variables in
              Hoppscotch and are introducing variable scopes.
            </p>
            <h4 class="mb-4 text-white">Variable Scopes</h4>
            <p class="mb-8 mt-4">
              Hoppscotch provides different variable scopes, allowing you to use
              various scopes for different contexts.
            </p>
            <ul class="mb-8 ml-5 mt-4 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">
                Global Variables: These can be accessed throughout Hoppscotch
                and have the broadest scope of all variables.
              </li>
              <li class="pl-4">
                Environment Variables: These allow your variables to be scoped
                to a specific environment. Environment variables are useful when
                you have the same set of variables for two environments, such as
                production and staging.
              </li>
              <li class="pl-4">
                Request Variables: These are scoped to an individual request.
                Request variables are useful when you want to use variables in
                your URL path or when you want to embed a URL variable.
              </li>
            </ul>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/v2024-3-0-RequestVariables.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Secret Variables</h4>
            <p class="mb-8 mt-4">
              We've also introduced secret variables in our point release last
              month. A secret variable allows users to specify secrets and
              reference the values as variables. The values of secret variables
              in any workspace will never be synced to the server or shared with
              any workspace members.
              <a
                href="https://hoppscotch.com/blog/introducing-secret-variables"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >Read more</a
              >.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/v2024-3-0-GlobalVariables.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Search Your Collections Using Spotlight
            </h4>
            <p class="mb-8 mt-4">
              Now you can search your team and personal collection using
              Spotlight! Just use command + K.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/v2024-3-0-search.gif"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Access Controls & New Login Providers on Self-Hosted Enterprise
            </h4>
            <p class="mb-8 mt-4">
              Hoppscotch enterprise gets some extra attention! You can now set
              up access controls on Hoppscotch enterprise.
            </p>
            <ul class="mb-8 ml-5 mt-4 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">
                Site protection: This allows only logged-in users to use
                Hoppscotch.
              </li>
              <li class="pl-4">
                Domain whitelisting: This makes it easy to approve all users
                within your organization to access Hoppscotch.
              </li>
            </ul>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/v2024-3-0-AccessControls.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4">
              We're also adding a few new providers to give you more options:
            </p>
            <ul class="mb-8 ml-5 mt-4 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">
                OIDC-based single sign-on: This allows you to configure any OIDC
                provider you want with Hoppscotch.
              </li>
              <li class="pl-4">
                GitHub Enterprise auth: This enables you to use GitHub
                Enterprise OAuth for your organization.
              </li>
            </ul>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4">
              We need you help to constantly improve Hoppscotch so that we can
              make it easier for you to build better software! Write to us at
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
              >
              if you have any feedback about Hoppscotch!
            </p>
          </section>
        </article>
      </div>
    </div>
  </section>
</template>
