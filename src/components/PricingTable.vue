<script setup lang="ts">
const platform = ref<"cloud" | "selfhost">("selfhost")

const cloudTiers = [
  {
    name: "Free",
    id: "tier-free",
    cta: "Get started",
    href: "https://hoppscotch.io",
    price: "$0",
    unit: "forever",
    description: "Everything you need to get started with API testing.",
    features: [
      "Unlimited workspaces",
      "Unlimited collections",
      "Unlimited collaborators",
      "Community support",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    cta: "Join waitlist",
    href: "https://forms.gle/XPYDMp8m6JHNWcYp9",
    price: "Coming soon",
    unit: "",
    description:
      "Crafted for teams and enterprises seeking an unparalleled API testing experience.",
    features: [
      "Everything in free plan",
      "SAML-based Single-Sign-On",
      "Identity and access management",
      "Audit logs",
      "Dedicated support",
      "Custom payment options",
    ],
    featured: true,
  },
]
const selfhostTiers = [
  {
    name: "Community",
    id: "tier-community",
    cta: "Get started",
    href: "https://docs.hoppscotch.io/documentation/self-host/getting-started",
    price: "$0",
    unit: "forever",
    description:
      "Everything you need to get started with API testing, perfect for individuals and small teams.",
    features: [
      "Unlimited workspaces",
      "Unlimited collections",
      "Unlimited collaborators",
      "Admin dashboard",
      "Community support",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    cta: "Contact sales",
    href: "https://cal.com/hoppscotch/enterprise-demo",
    price: "$19",
    unit: "/ user / month",
    description:
      "Crafted for teams and enterprises seeking an unparalleled, privacy-friendly API testing experience.",
    features: [
      "Everything in community edition",
      "SAML-based Single-Sign-On",
      "Identity and access management",
      "Audit logs",
      "Dedicated support",
      "Custom payment options",
    ],
    featured: true,
  },
]
</script>

<template>
  <section class="relative">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Content -->
        <div
          class="mx-auto flex max-w-2xl flex-col items-center pb-12 text-center md:pb-20"
        >
          <span
            class="mb-6 inline-flex max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-transparent"
          >
            Pricing
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            Affordable Plans for Everyone
          </h2>
          <p class="text-zinc-400/80">
            Hoppscotch is free to use for everyone. We also offer paid plans
            with additional features and support.
          </p>
        </div>
        <!-- Pricing tabs -->
        <div class="relative">
          <!-- Tabs -->
          <div class="mb-16 flex justify-center">
            <fieldset
              class="grid grid-cols-2 rounded-full bg-zinc-900 p-1 text-center text-xs font-semibold text-zinc-400"
            >
              <legend class="sr-only">Platform</legend>
              <label
                class="cursor-pointer rounded-full px-3 py-2 transition hover:text-zinc-400"
                :class="{
                  '!bg-zinc-950 !text-zinc-50': platform === 'selfhost',
                }"
              >
                <input
                  v-model="platform"
                  type="radio"
                  name="platform"
                  value="selfhost"
                  class="sr-only"
                />
                <span>Self-Host</span>
              </label>
              <label
                class="cursor-pointer rounded-full px-3 py-2 transition hover:text-zinc-400"
                :class="{
                  '!bg-zinc-950 !text-zinc-50': platform === 'cloud',
                }"
              >
                <input
                  v-model="platform"
                  type="radio"
                  name="platform"
                  value="cloud"
                  class="sr-only"
                />
                <span>Cloud</span>
              </label>
            </fieldset>
          </div>
          <!-- Content -->
          <div
            class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-3xl lg:grid-cols-2"
          >
            <div
              v-for="(tier, index) in platform === 'cloud'
                ? cloudTiers
                : selfhostTiers"
              :key="tier.id"
              :class="[
                tier.featured
                  ? 'relative bg-zinc-200/90 shadow-2xl'
                  : 'bg-zinc-900/80 sm:mx-8 lg:mx-0',
                tier.featured
                  ? ''
                  : index === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                    : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                'rounded-3xl p-8 ring-1 ring-zinc-800 backdrop-blur-md',
              ]"
            >
              <h4
                :id="tier.id"
                :class="[
                  tier.featured ? 'text-zinc-950' : 'text-zinc-400',
                  'font-semibold leading-loose',
                ]"
              >
                {{ tier.name }}
              </h4>
              <div class="mt-4 flex items-baseline gap-x-2">
                <h1
                  :class="[
                    tier.featured ? 'text-zinc-950' : 'text-zinc-400',
                    'text-5xl font-semibold tracking-tight',
                  ]"
                >
                  {{ tier.price }}
                </h1>
                <span
                  :class="[
                    tier.featured ? 'text-zinc-600' : 'text-zinc-500',
                    'font-jakarta',
                  ]"
                >
                  {{ tier.unit }}
                </span>
              </div>
              <p
                :class="[
                  tier.featured ? 'text-zinc-700' : 'text-zinc-500',
                  'mt-6 text-sm',
                ]"
              >
                {{ tier.description }}
              </p>
              <ul
                role="list"
                :class="[
                  tier.featured ? 'text-zinc-800' : 'text-zinc-500',
                  'mt-8 space-y-3 text-sm',
                ]"
              >
                <li
                  v-for="feature in tier.features"
                  :key="feature"
                  class="flex items-center gap-x-3"
                >
                  <icon-lucide-check
                    :class="[tier.featured ? 'text-zinc-900' : 'text-zinc-400']"
                    aria-hidden="true"
                  />
                  {{ feature }}
                </li>
              </ul>
              <a
                :href="tier.href"
                :aria-describedby="tier.id"
                target="_blank"
                class="relative mt-8 inline-flex w-full flex-shrink-0 items-center justify-center rounded-xl border px-3 py-2 font-jakarta text-sm font-medium transition"
                :class="[
                  tier.featured
                    ? 'border-zinc-800/50 bg-zinc-900/10 text-zinc-950 hover:border-zinc-800/80'
                    : 'border-zinc-500/50 bg-zinc-600/10 text-zinc-400 hover:border-zinc-500/80',
                ]"
              >
                {{ tier.cta }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
