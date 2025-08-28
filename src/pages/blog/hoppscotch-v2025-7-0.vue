<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2025.7.0: Improved Self-Hosted Onboarding Flow, Authorization Panel UI and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2025.7.0: Improved Self-Hosted Onboarding Flow, Authorization Panel UI and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2025.7.0: Improved Self-Hosted Onboarding Flow, Authorization Panel UI and more",
    },
    {
      name: "description",
      content:
        "We're excited to announce the release of Hoppscotch v2025.7.0, which includes significant improvements to the self-hosted onboarding flow, a revamped authorization panel UI and an experimental scripting editor.",
    },
    {
      property: "og:description",
      content:
        "We're excited to announce the release of Hoppscotch v2025.7.0, which includes significant improvements to the self-hosted onboarding flow, a revamped authorization panel UI and an experimental scripting editor.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to announce the release of Hoppscotch v2025.7.0, which includes significant improvements to the self-hosted onboarding flow, a revamped authorization panel UI and an experimental scripting editor.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2025-7-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2025-7-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2025-7-0",
    },
  ],
})
</script>

<!-- fixed: broken keyboard quit action
fixed: broken encoded characters in URL
fixed: broken media-type in HTTP request
added: status code and additional metadata to GraphQL responses
added: email validation while updating email from profile page
improvement: authorization ui panel
feat: sh onboarding page
added: monaco editor integration
improvement: preserve response viewer scroll position per tab
improvement: tooltip theme updates
improvement: audience attribute addition in OAuth2 flows -->

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
                <span class="text-zinc-200/20">Jul 30, 2025</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2025.7.0: Improved Self-Hosted Onboarding Flow,
                Authorization Panel UI and more
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
              src="/images/blog-v2025-7-0.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're excited to announce the release of Hoppscotch v2025.7.0,
              which includes significant improvements to the self-hosted
              onboarding flow, a revamped authorization panel UI and an
              experimental scripting editor.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Improved Self-Hosted Onboarding Flow
            </h4>
            <p class="mb-8 mt-4">
              The self-hosted onboarding flow has been revamped to provide a
              smoother and more intuitive setup experience. This update
              simplifies the initial configuration process, making it easier for
              users to get started with their self-hosted instance.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-7-0-1.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">The new onboarding flow includes:</p>
            <ul class="mb-8 ml-5 mt-4 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">
                <strong>Default Values:</strong> Many environment variables now
                have an default value that is set automatically during the
                onboarding process.
              </li>
              <li class="pl-4">
                <strong>Authentication Methods:</strong> The onboarding flow now
                includes options for configuring authentication methods, such as
                OAuth2 and API keys, to streamline the setup process.
              </li>
            </ul>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Revamped Authorization Panel UI</h4>
            <p class="mb-8 mt-4">
              The authorization panel UI has been redesigned to provide a more
              user-friendly experience. The new design makes it easier to manage
              and configure authorization settings for your API requests.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-7-0-2.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              Input fields for authorization methods have been streamlined,
              making it easier to enter and manage credentials. The new design
              also includes improved labels and tooltips to help users
              understand the purpose of each field.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Experimental Scripting Editor</h4>
            <p class="mb-8 mt-4">
              Hoppscotch v2025.7.0 introduces an experimental scripting editor
              based on the Monaco Editor. This new experience comes with a
              variety of features, including syntax highlighting, code
              completion and debugging tools, making it easier to write and
              test scripts within Hoppscotch.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-7-0-3.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              This feature is still in development and we welcome feedback from
              the community to help shape its future. You can opt-in to the
              experimental scripting editor from the Settings page > Experiments
              > Experimental Scripting Sandbox.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">
              Status Code and Additional Metadata in GraphQL Responses
            </h4>
            <p class="mb-8 mt-4">
              In this release, we've added support for status codes and
              additional metadata in GraphQL responses. This enhancement allows
              users to better understand the results of their GraphQL queries
              and handle errors more effectively.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-7-0-4.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              The status code and metadata are now included in the response
              status code, providing valuable information about the success or
              failure of the request, response size and other relevant details.
              This feature is particularly useful for debugging and
              troubleshooting GraphQL queries.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Minor Bug Fixes and Improvements</h4>
            <p class="mb-8 mt-4">
              In addition to the major features, we've also made several minor
              bug fixes and improvements to enhance the overall performance and
              stability of Hoppscotch.
            </p>
            <ul class="mb-8 ml-5 mt-4 list-disc space-y-2 marker:text-zinc-100">
              <li class="pl-4">
                <strong>Encoded Characters in URL:</strong> Fixed an issue where
                encoded characters in the URL were not being handled correctly.
              </li>
              <li class="pl-4">
                <strong>Media-Type in HTTP Request:</strong> Fixed an issue
                where the media-type in the HTTP request was not being set
                correctly.
              </li>
              <li class="pl-4">
                <strong>Email Validation:</strong> Added email validation while
                updating the email from the profile page.
              </li>
              <li class="pl-4">
                <strong>Audience Attribute in OAuth2 Flows:</strong> Added the
                audience attribute to OAuth2 flows to improve compatibility with
                various authentication providers.
              </li>
              <li class="pl-4">
                <strong>Preserve Response Viewer Scroll Position:</strong>
                Improved the response viewer to preserve the scroll position per
                tab, making it easier to navigate through large responses.
              </li>
              <li class="pl-4">
                <strong>Tooltip Theme Updates:</strong> Updated the tooltip
                themes to provide a more consistent and visually appealing
                experience.
              </li>
            </ul>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4">
              In addition to these new features, we've also made several bug
              fixes and improvements to enhance the overall performance and
              stability of Hoppscotch.
            </p>
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
