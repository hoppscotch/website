<script setup lang="ts">
useHead({
  title: "Introducing secret variables in Hoppscotch Environments",
  meta: [
    {
      property: "og:title",
      content: "Introducing secret variables in Hoppscotch Environments",
    },
    {
      name: "twitter:title",
      content: "Introducing secret variables in Hoppscotch Environments",
    },
    {
      name: "description",
      content:
        "Making it easy for you to manage sensitive information such as tokens, API keys, and passwords. Secrets not only enhance the security of managing your secrets but also prevent accidental sharing with third parties.",
    },
    {
      property: "og:description",
      content:
        "Making it easy for you to manage sensitive information such as tokens, API keys, and passwords. Secrets not only enhance the security of managing your secrets but also prevent accidental sharing with third parties.",
    },
    {
      name: "twitter:description",
      content:
        "Making it easy for you to manage sensitive information such as tokens, API keys, and passwords. Secrets not only enhance the security of managing your secrets but also prevent accidental sharing with third parties.",
    },
    {
      property: "og:image",
      content: "https://hoppscotch.com/images/blog-secret-variables.png",
    },
    {
      name: "twitter:image",
      content: "https://hoppscotch.com/images/blog-secret-variables.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://hoppscotch.com/blog/introducing-secret-variables",
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
                Introducing secret variables in Hoppscotch Environments
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
              src="/images/blog-secret-variables.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mb-8 mt-4">
              Hoppscotch is a powerful yet simple-to-use API testing suite. It
              removes a lot of complexity, making it easy for anyone to get
              started with API testing.
              <br />
              <br />
              <a
                href="https://hoppscotch.io"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >Try Hoppscotch now!</a
              >
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4">
              <a
                href="https://docs.hoppscotch.io/documentation/features/environments"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >Hoppscotch Environments</a
              >
              allow you to group together a set of variable data, making it
              easier to reuse and share data when developing and testing APIs
              with your team. Environments allow you to assign any data to a
              variable.
            </p>
            <p class="mb-8 mt-4">
              With the introduction of secrets in a Hoppscotch environment, we
              aim to make it easy for you to manage sensitive information such
              as tokens, API keys, and passwords. Secrets not only enhance the
              security of managing your secrets but also prevent accidental
              sharing with third parties.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Secrets</h4>
            <p class="mb-8 mt-4">
              When you create a secret in a personal or shared workspace, the
              value of the variable will never be synced with our servers. This
              means that the value of the secrets you configure will not be
              shared with any of your teammates. It is expected that the rest of
              your team will populate their own secrets before testing APIs.
            </p>
            <section class="max-w-4xl">
              <ImageZoom
                class="h-full w-full rounded md:rounded-xl"
                src="/images/secret-variable-1.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </section>
            <p class="mb-8 mt-4">
              Furthermore, secret variables will not be exported when exporting
              an environment from Hoppscotch. To prioritize security, secret
              values are masked using asterisks (*****) throughout Hoppscotch,
              preventing accidental leakage when sharing your screen or from
              shoulder surfing.
            </p>
            <p class="mb-8 mt-4">
              Moreover, in a shared workspace, workspace owners and editors can
              create, delete, edit, and use secrets. On the other hand,
              workspace viewers only have the ability to add values to already
              created secrets.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Secret variables in the CLI</h4>
            <p class="mb-8 mt-4">
              When using the Hoppscotch CLI, there are two approaches to
              resolving secret values:
            </p>
            <p class="mb-8 mt-4">
              You can use a secrets manager to load the variables and values
              into your operating system environment. Secrets loaded from the
              environment will be masked using asterisks(*****) on the CLI
              (recommended approach)
            </p>
            <p class="mb-8 mt-4">
              Alternatively, you can edit the environment export file and
              manually add your secrets as regular variables.
            </p>
            <hr
              class="my-12 h-px border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <p class="mb-8 mt-4">
              At Hoppscotch, ensuring a safe and secure API development and
              testing workflow is one of our top priorities. We believe that the
              addition of secret variables will make it easier for you to manage
              your API secrets.
            </p>
            <p class="mb-8 mt-4">
              If you have any product feedback, please feel free to reach out to
              us at
              <a
                href="mailto:hello@hoppscotch.io"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >hello@hoppscotch.io</a
              >
              or raise an issue on our
              <a
                href="https://github.com/hoppscotch/hoppscotch"
                target="_blank"
                class="border-b border-zinc-200 transition hover:text-zinc-50"
                >GitHub repository.</a
              >
            </p>
          </section>
        </article>
      </div>
    </div>
  </section>
</template>
