<script>
import Releases from "./RELEASESREADME.md"

export default {
  components: {
    Releases,
  },
}
</script>

<template>
  <section>
    <div class="relative mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <Releases />
        <Section>
          <Row>
            <Update type="Added">
              <ul
                class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-green-500"
              >
                <li class="pl-4">i18n support to admin dashboard.</li>
                <li class="pl-4">
                  Auto-complete recent history entries in URL bar.
                </li>
                <li class="pl-4">Context menu.</li>
              </ul>
            </Update>
            <div class="w-96 max-w-2xl">
              <h5 class="flex items-center">
                <icon-lucide-badge-check class="mr-3" />
                Changed
              </h5>
              <ul
                class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-amber-500"
              >
                <li class="pl-4">Revamped spotlight.</li>
                <li class="pl-4">UX improvement for SmartTree.</li>
                <li class="pl-4">Fonts are now bundled with packages.</li>
              </ul>
            </div>
            <div class="w-96 max-w-2xl">
              <h5 class="flex items-center">
                <icon-lucide-trash-2 class="mr-3" />
                Removed
              </h5>
              <ul
                class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-red-500"
              >
                <li class="pl-4">
                  Unnecessary dependencies from hoppscotch-ui.
                </li>
                <li class="pl-4">Move crisp out of common.</li>
              </ul>
            </div>
            <div class="w-96 max-w-2xl">
              <h5 class="flex items-center">
                <icon-lucide-check-check class="mr-3" />
                Fixed
              </h5>
              <ul
                class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-teal-500"
              >
                <li class="pl-4">Shortcut keys for spotlight and shortcuts.</li>
                <li class="pl-4">Firefox browser scrollbar issue.</li>
                <li class="pl-4">Elastic overscroll on Safari.</li>
              </ul>
            </div>
            <div class="w-96 max-w-2xl">
              <h5 class="flex items-center">
                <icon-lucide-rocket class="mr-3" />
                Performance
              </h5>
              <ul
                class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-fuchsia-500"
              >
                <li class="pl-4">Bump dependencies.</li>
                <li class="pl-4">Type and UX improvement for SmartTree.</li>
              </ul>
            </div>
            <div class="w-96 max-w-2xl">
              <h5 class="flex items-center">
                <icon-lucide-flask-conical class="mr-3" />
                Other
              </h5>
              <ul
                class="mb-8 ml-5 mt-4 list-disc space-y-2 text-zinc-400/80 marker:text-zinc-500"
              >
                <li class="pl-4">
                  Updated font size and truncation on fields.
                </li>
                <li class="pl-4">Improved command labels and icons.</li>
              </ul>
            </div>
          </Row>
        </Section>
      </div>
    </div>
  </section>
</template>
