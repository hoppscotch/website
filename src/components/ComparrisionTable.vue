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
    name: "Hoppscotch",
    id: "tier-hoppscotch",
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
    name: "Postman",
    id: "tier-postman",
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
  Hoppscotch: boolean | string
  Postman: boolean | string
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
        name: "Unlimited collections",
        tiers: { Hoppscotch: true, Postman: false },
      },
      {
        name: "Unlimited requests",
        tiers: { Hoppscotch: true, Postman: false },
      },
      {
        name: "Unlimited environments",
        tiers: { Hoppscotch: true, Postman: false },
      },
      {
        name: "Unlimited collection runs",
        tiers: { Hoppscotch: true, Postman: false },
      },
      // offline support
      {
        name: "Offline support",
        tiers: { Hoppscotch: true, Postman: false },
      },
      {
        name: "Web app",
        tiers: { Hoppscotch: true, Postman: true },
      },
      {
        name: "Desktop app",
        tiers: { Hoppscotch: true, Postman: true },
      },
      {
        name: "CLI",
        tiers: { Hoppscotch: true, Postman: true },
      },
      {
        name: "Invoicing",
        tiers: {
          Hoppscotch: "Unlimited invoices",
          Postman: "10 invoices",
        },
      },
      {
        name: "Exclusive offers",
        tiers: { Hoppscotch: true, Postman: true },
      },
      {
        name: "6 months free advisor",
        tiers: { Hoppscotch: true, Postman: true },
      },
      {
        name: "Mobile and web access",
        tiers: { Hoppscotch: true, Postman: false },
      },
    ],
  },
  {
    name: "Other perks",
    features: [
      {
        name: "24/7 customer support",
        tiers: { Hoppscotch: true, Postman: true },
      },
      {
        name: "Instant notifications",
        tiers: { Hoppscotch: true, Postman: true },
      },
      {
        name: "Budgeting tools",
        tiers: { Hoppscotch: true, Postman: true },
      },
      {
        name: "Digital receipts",
        tiers: { Hoppscotch: true, Postman: true },
      },
      {
        name: "Pots to separate money",
        tiers: { Hoppscotch: true, Postman: true },
      },
      {
        name: "Free bank transfers",
        tiers: { Hoppscotch: true, Postman: false },
      },
      {
        name: "Business debit card",
        tiers: { Hoppscotch: true, Postman: false },
      },
    ],
  },
])
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
            Compare
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            Hoppscotch vs. Postman
          </h2>
          <p class="text-zinc-400/80">
            With Hoppscotch, there's no hidden charges—and we'd never upsell you
            to a higher plan or additional features to improve your experience.
            You get a seamless API testing experience and reliable (and fast!)
            support with every Hoppscotch plan.
          </p>
        </div>
        <div class="relative">
          <section aria-labelledby="comparison-heading" class="block">
            <h2 id="comparison-heading" class="sr-only">Feature comparison</h2>
            <div class="grid grid-cols-3 gap-x-8 before:block">
              <div v-for="tier in tiers" :key="tier.id" class="-mt-px">
                <div class="pt-10">
                  <p class="text-center text-base leading-6">
                    {{ tier.name }}
                  </p>
                  <!-- <p class="my-6 text-sm text-zinc-400/80">
                    {{ tier.description }}
                  </p> -->
                </div>
              </div>
            </div>
            <div class="-mt-6 space-y-16">
              <div v-for="section in sections" :key="section.name">
                <h3 class="text-base leading-6 text-zinc-400">
                  {{ section.name }}
                </h3>
                <div class="relative -mx-8 mt-10">
                  <!-- Fake card backgrounds -->
                  <div
                    class="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-3 gap-x-8 before:block"
                  >
                    <div
                      class="h-full w-full rounded-lg bg-zinc-800/20 shadow-sm"
                    ></div>
                  </div>
                  <!-- Table -->
                  <table
                    class="relative w-full border-separate border-spacing-x-8"
                  >
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
                          class="w-1/3 py-3 pr-4 text-left text-sm font-normal leading-6 text-zinc-400/80"
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
                          class="relative w-1/3 px-4 py-0 text-center"
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
                                  ? 'text-zinc-500'
                                  : 'text-zinc-400/80',
                              ]"
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
                                class="mx-auto h-5 w-5 text-green-500"
                              />
                              <icon-lucide-x
                                v-else
                                class="mx-auto h-5 w-5 text-red-500"
                              />
                              <span class="sr-only">{{
                                feature.tiers[
                                  tier.name as keyof tierPlanType
                                ] === true
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
                    class="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-3 gap-x-8 before:block"
                  >
                    <div
                      v-for="tier in tiers"
                      :key="tier.id"
                      class="rounded-lg"
                      :class="[
                        tier.featured
                          ? 'ring-2 ring-zinc-500'
                          : 'ring-1 ring-zinc-900',
                      ]"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
