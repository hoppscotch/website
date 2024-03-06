<script setup lang="ts">
interface tierType {
  name: string
  id: string
  href: string
  featured: boolean
  description: string
  price: {
    monthly: string
    annually: string
  }
  mainFeatures: string[]
}

const tiers = ref<tierType[]>([
  {
    name: "Starter",
    id: "tier-starter",
    href: "#",
    featured: false,
    description: "All your essential business finances, taken care of.",
    price: { monthly: "$15", annually: "$144" },
    mainFeatures: [
      "Basic invoicing",
      "Easy to use accounting",
      "Mutli-accounts",
    ],
  },
  {
    name: "Scale",
    id: "tier-scale",
    href: "#",
    featured: true,
    description: "The best financial services for your thriving business.",
    price: { monthly: "$60", annually: "$576" },
    mainFeatures: [
      "Advanced invoicing",
      "Easy to use accounting",
      "Mutli-accounts",
      "Tax planning toolkit",
      "VAT & VATMOSS filing",
      "Free bank transfers",
    ],
  },
  {
    name: "Growth",
    id: "tier-growth",
    href: "#",
    featured: false,
    description: "Convenient features to take your business to the next level.",
    price: { monthly: "$30", annually: "$288" },
    mainFeatures: [
      "Basic invoicing",
      "Easy to use accounting",
      "Mutli-accounts",
      "Tax planning toolkit",
    ],
  },
])

interface tierPlanType {
  Starter: boolean | string
  Scale: boolean | string
  Growth: boolean | string
}

interface featureType {
  name: string
  tiers: tierPlanType
}

interface sectionType {
  name: string
  features: featureType[]
}

const sections = ref<sectionType[]>([
  {
    name: "Catered for business",
    features: [
      {
        name: "Tax Savings",
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: "Easy to use accounting",
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: "Multi-accounts",
        tiers: {
          Starter: "3 accounts",
          Scale: "Unlimited accounts",
          Growth: "7 accounts",
        },
      },
      {
        name: "Invoicing",
        tiers: {
          Starter: "3 invoices",
          Scale: "Unlimited invoices",
          Growth: "10 invoices",
        },
      },
      {
        name: "Exclusive offers",
        tiers: { Starter: false, Scale: true, Growth: true },
      },
      {
        name: "6 months free advisor",
        tiers: { Starter: false, Scale: true, Growth: true },
      },
      {
        name: "Mobile and web access",
        tiers: { Starter: false, Scale: true, Growth: false },
      },
    ],
  },
  {
    name: "Other perks",
    features: [
      {
        name: "24/7 customer support",
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: "Instant notifications",
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: "Budgeting tools",
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: "Digital receipts",
        tiers: { Starter: true, Scale: true, Growth: true },
      },
      {
        name: "Pots to separate money",
        tiers: { Starter: false, Scale: true, Growth: true },
      },
      {
        name: "Free bank transfers",
        tiers: { Starter: false, Scale: true, Growth: false },
      },
      {
        name: "Business debit card",
        tiers: { Starter: false, Scale: true, Growth: false },
      },
    ],
  },
])
</script>

<template>
  <div class="relative py-12 md:py-16">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <!-- Feature comparison (up to lg) -->
      <section aria-labelledby="mobile-comparison-heading" class="lg:hidden">
        <h2 id="mobile-comparison-heading" class="sr-only">
          Feature comparison
        </h2>
        <div class="mx-auto max-w-2xl space-y-16">
          <div
            v-for="tier in tiers"
            :key="tier.id"
            class="border-t border-zinc-900"
          >
            <div
              class="'-mt-px md:w-80' w-72 border-t-2 pt-10"
              :class="[
                tier.featured ? 'border-zinc-500' : 'border-transparent',
              ]"
            >
              <h3
                class="text-sm font-semibold leading-6"
                :class="[tier.featured ? 'text-zinc-500' : 'text-zinc-400/80']"
              >
                {{ tier.name }}
              </h3>
              <p class="mt-1 text-sm leading-6 text-zinc-100">
                {{ tier.description }}
              </p>
            </div>
            <div class="mt-10 space-y-10">
              <div v-for="section in sections" :key="section.name">
                <h4 class="text-sm font-semibold leading-6 text-zinc-100">
                  {{ section.name }}
                </h4>
                <div class="relative mt-6">
                  <!-- Fake card background -->
                  <div
                    aria-hidden="true"
                    class="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
                  ></div>
                  <div
                    class="relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0"
                    :class="[
                      tier.featured
                        ? 'ring-2 ring-zinc-500'
                        : 'ring-1 ring-zinc-900/10',
                    ]"
                  >
                    <dl class="divide-y divide-zinc-200 text-sm leading-6">
                      <div
                        v-for="feature in section.features"
                        :key="feature.name"
                        class="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0"
                      >
                        <dt class="pr-4 text-zinc-100">
                          {{ feature.name }}
                        </dt>
                        <dd
                          class="flex items-center justify-end sm:justify-center sm:px-4"
                        >
                          <span
                            v-if="
                              typeof feature.tiers[
                                tier.name as keyof tierPlanType
                              ] === 'string'
                            "
                            :class="
                              tier.featured
                                ? 'font-semibold text-zinc-500'
                                : 'text-zinc-400/80'
                            "
                            >{{
                              feature.tiers[tier.name as keyof tierPlanType]
                            }}</span
                          >
                          <template v-else>
                            <icon-lucide-check
                              v-if="
                                feature.tiers[
                                  tier.name as keyof tierPlanType
                                ] === true
                              "
                              class="mx-auto h-5 w-5 text-zinc-500"
                              aria-hidden="true"
                            />
                            <icon-lucide-x
                              v-else
                              class="mx-auto h-5 w-5 text-zinc-400/80"
                              aria-hidden="true"
                            />
                            <span class="sr-only">{{
                              feature.tiers[tier.name as keyof tierPlanType] ===
                              true
                                ? "Yes"
                                : "No"
                            }}</span>
                          </template>
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <!-- Fake card border -->
                  <div
                    aria-hidden="true"
                    class="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
                    :class="[
                      tier.featured
                        ? 'ring-2 ring-zinc-500'
                        : 'ring-1 ring-zinc-900/10',
                    ]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Feature comparison (lg+) -->
      <section aria-labelledby="comparison-heading" class="hidden lg:block">
        <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>
        <div
          class="grid grid-cols-4 gap-x-8 border-t border-zinc-500/10 before:block"
        >
          <div
            v-for="tier in tiers"
            :key="tier.id"
            aria-hidden="true"
            class="-mt-px"
          >
            <div
              class="border-t-2 pt-10"
              :class="[
                tier.featured ? 'border-zinc-500' : 'border-transparent',
              ]"
            >
              <p
                class="text-sm font-semibold leading-6"
                :class="[tier.featured ? 'text-zinc-500' : 'text-zinc-400/80']"
              >
                {{ tier.name }}
              </p>
              <p class="mt-1 text-sm leading-6 text-zinc-100">
                {{ tier.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="-mt-6 space-y-16">
          <div v-for="section in sections" :key="section.name">
            <h3 class="text-sm font-semibold leading-6 text-zinc-100">
              {{ section.name }}
            </h3>
            <div class="relative -mx-8 mt-10">
              <!-- Fake card backgrounds -->
              <div
                class="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                aria-hidden="true"
              >
                <div
                  class="h-full w-full rounded-lg bg-zinc-800/20 shadow-sm"
                ></div>
                <div
                  class="h-full w-full rounded-lg bg-zinc-800/20 shadow-sm"
                ></div>
                <div
                  class="h-full w-full rounded-lg bg-zinc-800/20 shadow-sm"
                ></div>
              </div>

              <table class="relative w-full border-separate border-spacing-x-8">
                <thead>
                  <tr class="text-left">
                    <th scope="col">
                      <span class="sr-only">Feature</span>
                    </th>
                    <th v-for="tier in tiers" :key="tier.id" scope="col">
                      <span class="sr-only">{{ tier.name }} tier</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(feature, featureIdx) in section.features"
                    :key="feature.name"
                  >
                    <th
                      scope="row"
                      class="w-1/4 py-3 pr-4 text-left text-sm leading-6 text-zinc-400/80"
                    >
                      {{ feature.name }}
                      <div
                        v-if="featureIdx !== section.features.length - 1"
                        class="absolute inset-x-8 mt-3 h-px bg-zinc-900"
                      ></div>
                    </th>
                    <td
                      v-for="tier in tiers"
                      :key="tier.id"
                      class="relative w-1/4 px-4 py-0 text-center"
                    >
                      <span class="relative h-full w-full py-3">
                        <span
                          v-if="
                            typeof feature.tiers[
                              tier.name as keyof tierPlanType
                            ] === 'string'
                          "
                          class="text-sm leading-6"
                          :class="[
                            tier.featured
                              ? 'font-semibold text-zinc-500'
                              : 'text-zinc-400/80',
                          ]"
                          >{{
                            feature.tiers[tier.name as keyof tierPlanType]
                          }}</span
                        >
                        <template v-else>
                          <icon-lucide-check
                            v-if="
                              feature.tiers[tier.name as keyof tierPlanType] ===
                              true
                            "
                            class="mx-auto h-5 w-5 text-zinc-500"
                            aria-hidden="true"
                          />
                          <icon-lucide-x
                            v-else
                            class="mx-auto h-5 w-5 text-zinc-400/80"
                            aria-hidden="true"
                          />
                          <span class="sr-only">{{
                            feature.tiers[tier.name as keyof tierPlanType] ===
                            true
                              ? "Yes"
                              : "No"
                          }}</span>
                        </template>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- Fake card borders -->
              <div
                class="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
                aria-hidden="true"
              >
                <div
                  v-for="tier in tiers"
                  :key="tier.id"
                  class="rounded-lg"
                  :class="[
                    tier.featured
                      ? 'ring-2 ring-zinc-500'
                      : 'ring-1 ring-zinc-900/10',
                  ]"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
