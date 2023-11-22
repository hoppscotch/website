<script setup lang="ts">
  const platform = ref<"cloud" | "selfhost">("cloud")

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
      price: "Coming soon!",
      unit: "",
      description:
        "Crafted for teams and enterprises seeking an unparalleled API testing experience. Includes everything in the free edition, plus...",
      features: [
        "Single Sign-On via SAML",
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
        "Crafted for teams and enterprises seeking an unparalleled API testing experience. Includes everything in the community edition, plus...",
      features: [
        "Single Sign-On via SAML",
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
    <!-- Radial gradient -->
    <div
      class="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      <div
        class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-video"
      >
        <div
          class="absolute inset-0 translate-z-0 bg-gray-500 rounded-full blur-[60px] opacity-10"
        ></div>
      </div>
    </div>
    <div class="max-w-5xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-24">
        <!-- Content -->
        <div
          class="flex flex-col items-center max-w-2xl pb-12 mx-auto text-center md:pb-20"
        >
          <span
            class="inline-flex mb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-50 to-gray-600"
          >
            Pricing
          </span>
          <h2
            class="block pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
          >
            Affordable Plans for Everyone
          </h2>
          <p class="text-gray-400/80">
            Begin your API testing for free, upgrade as you grow.
          </p>
        </div>
        <!-- Pricing tabs -->
        <div class="relative">
          <!-- Tabs -->
          <div class="flex justify-center mb-16">
            <fieldset
              class="grid grid-cols-2 p-1 text-xs font-semibold text-center text-gray-400 bg-gray-900 rounded-full"
            >
              <legend class="sr-only">Platform</legend>
              <label
                class="px-3 py-2 transition rounded-full cursor-pointer hover:text-gray-400"
                :class="{
                  '!bg-gray-950 !text-gray-50': platform === 'cloud',
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
              <label
                class="px-3 py-2 transition rounded-full cursor-pointer hover:text-gray-400"
                :class="{
                  '!bg-gray-950 !text-gray-50': platform === 'selfhost',
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
            </fieldset>
          </div>
          <!-- Content -->
          <div
            class="grid items-center max-w-lg grid-cols-1 mx-auto mt-16 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-3xl lg:grid-cols-2"
          >
            <div
              v-for="(tier, index) in platform === 'cloud'
                ? cloudTiers
                : selfhostTiers"
              :key="tier.id"
              :class="[
                tier.featured
                  ? 'relative bg-gray-200/90 shadow-2xl'
                  : 'bg-gray-900/80 sm:mx-8 lg:mx-0',
                tier.featured
                  ? ''
                  : index === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                'rounded-3xl p-8 ring-1 ring-gray-800 backdrop-blur-md',
              ]"
            >
              <h4
                :id="tier.id"
                :class="[
                  tier.featured ? 'text-gray-950' : 'text-gray-400',
                  'font-semibold leading-loose',
                ]"
              >
                {{ tier.name }}
              </h4>
              <div class="flex items-baseline mt-4 gap-x-2">
                <h1
                  :class="[
                    tier.featured ? 'text-gray-950' : 'text-gray-400',
                    'text-5xl font-semibold tracking-tight',
                  ]"
                >
                  {{ tier.price }}
                </h1>
                <span
                  :class="[
                    tier.featured ? 'text-gray-600' : 'text-gray-500',
                    'font-jakarta',
                  ]"
                >
                  {{ tier.unit }}
                </span>
              </div>
              <p
                :class="[
                  tier.featured ? 'text-gray-700' : 'text-gray-500',
                  'mt-6 text-sm',
                ]"
              >
                {{ tier.description }}
              </p>
              <ul
                role="list"
                :class="[
                  tier.featured ? 'text-gray-800' : 'text-gray-500',
                  'mt-8 space-y-3 text-sm',
                ]"
              >
                <li
                  v-for="feature in tier.features"
                  :key="feature"
                  class="flex items-center gap-x-3"
                >
                  <icon-lucide-check
                    :class="[tier.featured ? 'text-gray-900' : 'text-gray-400']"
                    aria-hidden="true"
                  />
                  {{ feature }}
                </li>
              </ul>
              <a
                :href="tier.href"
                :aria-describedby="tier.id"
                target="_blank"
                class="relative inline-flex items-center justify-center flex-shrink-0 w-full px-3 py-2 mt-8 text-sm font-medium transition border font-jakarta rounded-xl"
                :class="[
                  tier.featured
                    ? 'bg-gray-900/10 text-gray-950 border-gray-800/50 hover:border-gray-800/80'
                    : 'bg-gray-600/10 text-gray-400 border-gray-500/50 hover:border-gray-500/80',
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
