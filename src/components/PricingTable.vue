<script setup lang="ts">
  const platform = ref<"cloud" | "selfhost">("cloud")

  const cloudTiers = [
    {
      name: "Community",
      id: "tier-community",
      cta: "Get started",
      href: "https://hoppscotch.io",
      price: "Free",
      unit: "forever",
      description:
        "We build software in the open, with permissive licenses and thriving communities because we believe investing in open source will help leave the world a little better than we found it.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
      ],
      featured: false,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      cta: "Join the waitlist",
      href: "https://forms.gle/XPYDMp8m6JHNWcYp9",
      price: "comming soon",
      unit: "",
      description:
        "Deploy Hoppscotch on-premise with our support. Securely manage, organize, and accelerate API-first development at scale.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "Dedicated support representative",
        "Marketing automations",
        "Custom integrations",
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
      price: "Free",
      unit: "forever",
      description:
        "We build software in the open, with permissive licenses and thriving communities because we believe investing in open source will help leave the world a little better than we found it.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
      ],
      featured: false,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      cta: "Contact sales",
      href: "https://cal.com/hoppscotch/enterprise-demo",
      price: "$19",
      unit: "per user per month",
      description:
        "Deploy Hoppscotch on-premise with our support. Securely manage, organize, and accelerate API-first development at scale.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "Dedicated support representative",
        "Marketing automations",
        "Custom integrations",
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
          class="absolute inset-0 translate-z-0 bg-neutral-500 rounded-full blur-[60px] opacity-10"
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
            class="inline-flex mb-6 text-transparent bg-clip-text max-w-max bg-gradient-to-b from-neutral-50 to-neutral-600"
          >
            Pricing plans
          </span>
          <h2
            class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-neutral-200/50 via-neutral-100/80 to-neutral-50/80"
          >
            Flexible plans and features
          </h2>
          <p class="text-lg text-neutral-200/50">
            Choose the plan that works for you.
          </p>
        </div>
        <!-- Pricing tabs -->
        <div class="relative">
          <!-- Tabs -->
          <div class="flex justify-center mb-16">
            <fieldset
              class="p-1 text-xs font-semibold text-center rounded-full grid grid-cols-2 text-neutral-500 bg-neutral-800"
            >
              <legend class="sr-only">Platform</legend>
              <label
                class="px-3 py-2 rounded-full cursor-pointer transition hover:text-neutral-400"
                :class="{
                  '!bg-neutral-900 !text-neutral-50': platform === 'cloud',
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
                class="px-3 py-2 rounded-full cursor-pointer transition hover:text-neutral-400"
                :class="{
                  '!bg-neutral-900 !text-neutral-50': platform === 'selfhost',
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
            class="items-center max-w-lg mx-auto mt-16 grid grid-cols-1 gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
          >
            <div
              v-for="(tier, index) in platform === 'cloud'
                ? cloudTiers
                : selfhostTiers"
              :key="tier.id"
              :class="[
                tier.featured
                  ? 'relative bg-neutral-200/90 shadow-2xl'
                  : 'bg-neutral-900/90 sm:mx-8 lg:mx-0',
                tier.featured
                  ? ''
                  : index === 0
                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                'rounded-3xl p-8 ring-1 ring-neutral-800 backdrop-blur-md',
              ]"
            >
              <h4
                :id="tier.id"
                :class="[
                  tier.featured ? 'text-neutral-950' : 'text-neutral-400',
                  'font-semibold leading-loose',
                ]"
              >
                {{ tier.name }}
              </h4>
              <div class="flex items-baseline mt-4 gap-x-2">
                <h1
                  :class="[
                    tier.featured ? 'text-neutral-950' : 'text-neutral-400',
                    'text-5xl font-bold tracking-tight',
                  ]"
                >
                  {{ tier.price }}
                </h1>
                <span
                  :class="[
                    tier.featured ? 'text-neutral-600' : 'text-neutral-500',
                    'font-jakarta',
                  ]"
                >
                  {{ tier.unit }}
                </span>
              </div>
              <p
                :class="[
                  tier.featured ? 'text-neutral-700' : 'text-neutral-500',
                  'mt-6 text-sm',
                ]"
              >
                {{ tier.description }}
              </p>
              <ul
                role="list"
                :class="[
                  tier.featured ? 'text-neutral-800' : 'text-neutral-500',
                  'mt-8 space-y-3 text-sm',
                ]"
              >
                <li
                  v-for="feature in tier.features"
                  :key="feature"
                  class="flex items-center gap-x-3"
                >
                  <icon-lucide-check
                    :class="[
                      tier.featured ? 'text-neutral-900' : 'text-neutral-400',
                    ]"
                    aria-hidden="true"
                  />
                  {{ feature }}
                </li>
              </ul>
              <a
                :href="tier.href"
                :aria-describedby="tier.id"
                target="_blank"
                class="relative inline-flex items-center justify-center flex-shrink-0 w-full px-3 py-2 mt-8 text-sm font-medium border transition font-jakarta rounded-xl"
                :class="[
                  tier.featured
                    ? 'bg-neutral-900/10 text-neutral-950 border-neutral-800/50 hover:border-neutral-800/80'
                    : 'bg-neutral-600/10 text-neutral-400 border-neutral-500/50 hover:border-neutral-500/80',
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
