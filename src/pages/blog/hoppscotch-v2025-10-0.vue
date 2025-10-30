<script setup lang="ts">
useHead({
  title:
    "Hoppscotch v2025.10.0: API Mock Servers, Chai.js-based Assertions in Scripts and more",
  meta: [
    {
      property: "og:title",
      content:
        "Hoppscotch v2025.10.0: API Mock Servers, Chai.js-based Assertions in Scripts and more",
    },
    {
      name: "twitter:title",
      content:
        "Hoppscotch v2025.10.0: API Mock Servers, Chai.js-based Assertions in Scripts and more",
    },
    {
      name: "description",
      content:
        "We're excited to announce Hoppscotch v2025.10.0, featuring API Mock Servers, Chai.js-based assertions in scripts, enhanced testing capabilities and more.",
    },
    {
      property: "og:description",
      content:
        "We're excited to announce Hoppscotch v2025.10.0, featuring API Mock Servers, Chai.js-based assertions in scripts, enhanced testing capabilities and more.",
    },
    {
      name: "twitter:description",
      content:
        "We're excited to announce Hoppscotch v2025.10.0, featuring API Mock Servers, Chai.js-based assertions in scripts, enhanced testing capabilities and more.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-v2025-10-0.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-v2025-10-0.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/hoppscotch-v2025-10-0",
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
                <span class="text-zinc-200/20">Oct 30, 2025</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text text-transparent"
              >
                Hoppscotch v2025.10.0: API Mock Servers, Chai.js-based Assertions in Scripts and more
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
              src="/images/blog-v2025-10-0.png"
              width="352"
              height="198"
              alt="v2025.10.0"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              We're excited to announce Hoppscotch v2025.10.0, featuring
              <strong>API Mock Servers</strong> for simulating API responses,
              <strong>Chai.js-based assertions</strong> with Postman compatibility layer in scripts,
              <strong>redirect control in Agent</strong>,
              <strong>enhanced authentication flows</strong>, and numerous improvements to make your API development workflow even more efficient.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">API Mock Servers</h4>
            <p class="mb-8 mt-4">
              Introducing API Mock Servers - a powerful new feature that allows you to simulate
              API responses without needing a backend. Create mock endpoints with custom responses,
              status codes, and headers to test your applications independently. Perfect for
              frontend development, testing edge cases, and developing against APIs that are
              still in progress.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-10-0-1.png"
                width="352"
                height="198"
                alt="API Mock Servers"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              Mock servers support dynamic responses with unique names and duplicate prevention,
              allowing you to create realistic scenarios and simulate various API behaviors.
              They work seamlessly with both modern and legacy collections, with private access
              hints to help you understand visibility settings. Whether you're working on a new
              feature or need to test error handling, mock servers give you complete control
              over API responses.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Chai.js-based Assertions with Postman Compatibility</h4>
            <p class="mb-8 mt-4">
              We've integrated the Chai.js assertion library into our scripting environment with
              a Postman compatibility layer, making it easier than ever to migrate your existing
              test scripts. Use familiar Chai syntax to validate responses, check data structures,
              and ensure your APIs behave as expected - all while maintaining compatibility with
              Postman script patterns.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-10-0-2.png"
                width="352"
                height="198"
                alt="Chai.js-based Assertions"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              With support for BDD-style assertions (expect/should) and TDD-style assertions (assert),
              you can write more readable and maintainable test scripts. Chain assertions together
              for comprehensive validation of API responses, including deep equality checks, type
              validation, and more. The enhanced scripting sandbox now preserves file uploads and
              provides improved value handling and serialization for more reliable test execution.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Agent: Control Redirect Follow</h4>
            <p class="mb-8 mt-4">
              The Hoppscotch Agent now supports redirect control, giving you fine-grained control
              over how HTTP redirects are handled during request execution. This feature is
              essential for testing redirect flows, debugging authentication sequences, and
              understanding how your APIs handle various redirect scenarios.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Enhanced Authentication and Security</h4>
            <p class="mb-8 mt-4">
              This release brings significant improvements to authentication handling. We've
              implemented automatic token refresh flows that detect when your authentication
              tokens expire and seamlessly refresh them, ensuring uninterrupted API testing
              sessions. Additionally, we've added missing token checks to the request save
              workflow for better security validation.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/blog-v2025-10-0-3.png"
                width="352"
                height="198"
                alt="Enhanced Authentication"
              />
            </section>
            <br />
            <p class="mb-8 mt-4">
              OAuth improvements include better preservation of PKCE and client secrets during
              Postman collection imports, and you can now configure custom session cookie names
              for enhanced flexibility in enterprise environments. We've also implemented
              important security patches across the dependency chain and prevented log injection
              vulnerabilities.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Improved Developer Experience</h4>
            <p class="mb-8 mt-4">
              We've enhanced the overall developer experience with several quality-of-life
              improvements. The environment variable system now includes improved fallback
              behavior, and we've added the <code>$randomCompanyName</code> predefined variable
              for generating test data. Team selector polling has been optimized to avoid rapid
              requests, resulting in better performance and reduced server load.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Infrastructure and Stability Improvements</h4>
            <p class="mb-8 mt-4">
              Behind the scenes, we've made significant infrastructure improvements to enhance
              reliability and performance. The application now handles graceful shutdown and
              container stops properly, and we've resolved issues with infrastructure config
              resets by correctly resetting the onboarding state. Code quality improvements
              across the backend ensure better maintainability and fewer edge-case bugs.
            </p>
            <p class="mb-8 mt-4">
              We've also streamlined our CI/CD pipeline with platform jobs and improved Node.js
              version management, ensuring consistent builds and deployments across all environments.
            </p>
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
