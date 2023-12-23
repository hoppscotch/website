<script setup lang="ts">
  useHead({
    title: "Introducing Hoppscotch Desktop Application • Blog • Hoppscotch",
    meta: [
      {
        property: "og:title",
        content:
          "Introducing Hoppscotch Desktop Application • Blog • Hoppscotch",
      },
      {
        name: "twitter:title",
        content:
          "Introducing Hoppscotch Desktop Application • Blog • Hoppscotch",
      },
      {
        name: "description",
        content:
          "The Hoppscotch Desktop app has been a highly requested product by our community. We've been listening and are excited to announce that the day has finally arrived.",
      },
      {
        property: "og:description",
        content:
          "The Hoppscotch Desktop app has been a highly requested product by our community. We've been listening and are excited to announce that the day has finally arrived.",
      },
      {
        name: "twitter:description",
        content:
          "The Hoppscotch Desktop app has been a highly requested product by our community. We've been listening and are excited to announce that the day has finally arrived.",
      },
      {
        property: "og:image",
        content:
          "https://hoppscotch.com/images/blog-introducing-hoppscotch-desktop-application.png",
      },
      {
        name: "twitter:image",
        content:
          "https://hoppscotch.com/images/blog-introducing-hoppscotch-desktop-application.png",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content:
          "https://hoppscotch.com/blog/introducing-hoppscotch-desktop-application",
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
                    >Engineering,</span
                  >
                </li>
                <li class="m-1">
                  <span
                    class="inline-flex text-center transition text-zinc-100/50"
                    >Design</span
                  >
                </li>
                <span class="mx-2 text-zinc-400/20">|</span>
                <span class="text-zinc-200/20">November 8, 2023</span>
              </ul>
            </div>
            <h3 class="mb-8">
              <span
                class="block text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
              >
                Introducing Hoppscotch Desktop Application
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
              src="/images/blog-introducing-hoppscotch-desktop-application.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mt-4 mb-8">
              The Hoppscotch Desktop app has been a
              <a
                href="https://github.com/hoppscotch/hoppscotch/issues/3101"
                target="_blank"
                class="border-b transition border-zinc-200 hover:text-zinc-50"
                >highly requested product</a
              >
              by our community. We've been listening and are excited to announce
              that the day has finally arrived - today marks the launch of the
              public alpha version of the Hoppscotch Desktop App for macOS,
              Windows, and Linux!
            </p>
            <p class="mt-4 mb-8">
              You can get started with the Hoppscotch Desktop App right away.
            </p>
            <p class="mt-4 mb-8">
              <RouterLink
                to="/download"
                class="relative inline-flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm border transition rounded-xl bg-zinc-500/10 border-zinc-500/50 hover:border-zinc-500/80"
              >
                Download Hoppscotch Desktop App
              </RouterLink>
            </p>
          </section>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded md:rounded-xl"
              src="/images/blog-introducing-hoppscotch-desktop-application-1.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mt-4 mb-8">
              Just over a year ago, we shared our ambitious plans to develop a
              dedicated desktop app that would enhance your API testing and
              development experience. The journey from that exciting
              announcement to this moment has been a labor of love, dedication,
              and countless lines of code. Today, we are thrilled to give you
              the first public glimpse of our hard work.
            </p>
            <p class="mt-4 mb-8">
              Hoppscotch has become one of the most loved API testing clients.
              Hoppscotch enables developers and testers to quickly get started
              with API testing using our web-based API client and PWA.
            </p>
            <p class="mt-4 mb-8">
              Our team spent months working on the desktop app because we wanted
              to create the best-performing API testing client out there - a
              desktop app that can run on any machine, with no compromise to our
              values!
            </p>
            <p class="mt-4 mb-8">
              Hoppscotch Desktop is a major step forward in our mission to build
              an API development ecosystem. With its ridiculously fast
              performance and easy-to-use interface, Hoppscotch Desktop is the
              app you need for your API development.
            </p>
            <h4 class="mb-4 text-white">Game-Changer for API Testing</h4>
            <p class="mt-4 mb-8">
              The Hoppscotch Desktop app is built on the robust Tauri framework
              using Rust, which redefines the API client experience. With its
              lightning-fast load times and minimal memory footprint, the app
              ensures seamless API interactions without compromising your
              system's resources.
            </p>
            <p class="mt-4 mb-8">
              To test how fast Hoppscotch really is, we ran a performance
              benchmark on a Windows 11 machine with an ARM64 VM, comparing
              Postman, Insomnia, and Hoppscotch.
            </p>
          </section>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded md:rounded-xl"
              src="/images/blog-introducing-hoppscotch-desktop-application-2.png"
              width="352"
              height="198"
              alt="News 01"
            />
            <p class="mt-2 text-xs italic">
              *Benchmark is done using AppTimer on Windows 11 on an arm64 VM,
              for 30 iterations with 2 second cooldown in between iterations.
              The value provided is the mean time measured over the iterations.
              One run is counted as the time from when the execution starts till
              the window becomes responsive after all the loading.
            </p>
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mt-4 mb-8">
              Hoppscotch is 10x faster than Postman and 6x faster than Insomnia
              in terms of startup time. There's a lot more optimizing to be done
              and we believe Hoppscotch will only get faster with time.
            </p>
            <p class="mt-4 mb-8">
              The Hoppscotch app is also lightweight when it comes to file size.
              This aligns with our founding philosophy that anyone should be
              able to get started with API testing on any machine. The
              Hoppscotch Desktop app is 20x lighter than Insomnia and 15x
              lighter than Postman when it comes to file size!
            </p>
          </section>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded md:rounded-xl"
              src="/images/blog-introducing-hoppscotch-desktop-application-3.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mt-4 mb-8">
              Security is paramount for us, and the Hoppscotch app takes this
              seriously. By default, Hoppscotch is sandboxed, safeguarding your
              system from malware and other potential security threats, and
              offering a worry-free experience.
            </p>
            <p class="mt-4 mb-8">
              The Hoppscotch Desktop app doesn't just meet expectations, it sets
              new standards in performance, optimization, and security.
            </p>
            <h4 class="mb-4 text-white">Here's a Cookie</h4>
            <p class="mt-4 mb-8">
              With the desktop app, you can now have cookie support for your
              requests. With the new Cookie Manager, you can add a domain and
              specify all the cookies that are under that domain. To add a
              cookie, simply click on the "Add cookie" button and edit the
              pre-generated cookie string or paste an entirely new one.
            </p>
          </section>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded md:rounded-xl"
              src="/images/blog-introducing-hoppscotch-desktop-application-4.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <hr
              class="h-px my-12 border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">Get Hoppscotch Desktop App now!</h4>
            <p class="mt-4 mb-8">
              For this alpha release, Hoppscotch is now available for download
              on macOS (Intel & Apple Silicon), Windows, and Linux. You can
              download the latest release here on our website.
            </p>
          </section>
          <section class="max-w-4xl">
            <RouterLink to="/download">
              <img
                class="w-full h-full rounded md:rounded-xl"
                src="/images/blog-introducing-hoppscotch-desktop-application-5.png"
                width="352"
                height="198"
                alt="News 01"
              />
            </RouterLink>
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mt-4 mb-8 text-xs italic">
              *The Hoppscotch Desktop App is currently in alpha. This means that
              it is not yet feature-complete and may contain bugs. We are
              actively working on improving the app and adding new features. You
              may encounter bugs and issues while using the app. If you do,
              please report them on our
              <a
                href="https://github.com/hoppscotch/hoppscotch"
                target="_blank"
                class="border-b transition border-zinc-200 hover:text-zinc-50"
                >GitHub repository</a
              >.
            </p>
            <p class="mt-4 mb-8">
              Once you've installed the desktop app, you can use Hoppscotch with
              or without an account. If you don't want to create an account, all
              your data will be stored locally.
            </p>
            <p class="mt-4 mb-8">
              With an account, you can interact with our Hoppscotch Cloud
              instance to collaborate with your team in testing and developing
              APIs. In your personal workspace, you have the option to choose
              what you sync with our cloud server. If cloud sync is disabled,
              then all the data is cached on the desktop app.
            </p>
          </section>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded md:rounded-xl"
              src="/images/blog-introducing-hoppscotch-desktop-application-6.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mt-4 mb-8">
              The Hoppscotch desktop app has unlocked a lot of possibilities for
              what we can achieve. Some potential possibilities include local
              file-based workspaces and making the desktop app interact with
              Hoppscotch Cloud as well as your own self-hosted instance of
              Hoppscotch.
            </p>
            <p class="mt-4 mb-8">
              Hoppscotch Desktop App is set to redefine how you work with APIs.
              We invite you to explore and experience the speed and efficiency
              it offers. Let's embark on this new chapter together and
              revolutionize the way you interact with APIs.
            </p>
            <hr
              class="h-px my-12 border-t-0 bg-gradient-to-r from-transparent via-zinc-500/20"
            />
            <h4 class="mb-4 text-white">A Fresh New Look and Identity</h4>
            <p class="mt-4 mb-8">
              Hoppscotch has now grown beyond being just an alternative product.
              Our vision today is to build an ecosystem of tools around the
              entire API development lifecycle, and we have already started
              building the foundation for this.
            </p>
            <p class="mt-4 mb-8">
              Today, we are excited to announce a significant milestone for
              Hoppscotch - the unveiling of our new brand identity. This
              rebranding is a reflection of the tremendous growth and evolution
              that our organization has experienced.
            </p>
          </section>
          <section class="max-w-4xl">
            <ImageZoom
              class="w-full h-full rounded md:rounded-xl"
              src="/images/blog-introducing-hoppscotch-desktop-application-7.png"
              width="352"
              height="198"
              alt="News 01"
            />
            <ImageZoom
              class="w-full h-full rounded md:rounded-xl"
              src="/images/blog-introducing-hoppscotch-desktop-application-8.png"
              width="352"
              height="198"
              alt="News 01"
            />
          </section>
          <section class="max-w-xl text-zinc-200/80">
            <p class="mt-4 mb-8">
              Thank you for joining us on this exciting journey as we introduce
              the Hoppscotch Desktop App as well as our new brand identity. It
              is the result of your valuable feedback to deliver the ultimate
              API development ecosystem.
            </p>
            <p class="mt-4 mb-8">
              Hoppscotch is revolutionizing API development and testing, setting
              new standards in the field. We can't wait for you to explore and
              uncover the endless possibilities it offers.
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
