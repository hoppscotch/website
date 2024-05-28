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
            <Added>
              <li class="pl-4">i18n support to admin dashboard.</li>
              <li class="pl-4">
                Auto-complete recent history entries in URL bar.
              </li>
              <li class="pl-4">Context menu.</li>
            </Added>
            <Changed>
              <li class="pl-4">Revamped spotlight.</li>
              <li class="pl-4">UX improvement for SmartTree.</li>
              <li class="pl-4">Fonts are now bundled with packages.</li>
            </Changed>
            <Removed>
              <li class="pl-4">Unnecessary dependencies from hoppscotch-ui.</li>
              <li class="pl-4">Move crisp out of common.</li>
            </Removed>
            <Fixed>
              <li class="pl-4">Shortcut keys for spotlight and shortcuts.</li>
              <li class="pl-4">Firefox browser scrollbar issue.</li>
              <li class="pl-4">Elastic overscroll on Safari.</li>
            </Fixed>
            <Performance>
              <li class="pl-4">Bump dependencies.</li>
              <li class="pl-4">Type and UX improvement for SmartTree.</li>
            </Performance>
            <Others>
              <li class="pl-4">Updated font size and truncation on fields.</li>
              <li class="pl-4">Improved command labels and icons.</li>
            </Others>
          </Row>
        </Section>
      </div>
    </div>
  </section>
</template>
