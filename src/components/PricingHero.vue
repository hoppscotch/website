<script setup lang="ts">
import { gradients } from "~/assets/data/gradients"
import { sections, tiers } from "~/assets/data/pricing"

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col px-8 py-16">
    <div class="flex flex-col items-center">
      <div
        class="max-w-2xl my-4 text-3xl leading-none tracking-tight text-center text-transparent transition bg-clip-text bg-gradient-to-br md:text-4xl lg:text-5xl"
        :class="gradients.gray"
      >
        {{ t("pricing.title") }}
      </div>
      <div
        class="my-4 text-xl tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-br md:w-3/5"
        :class="gradients.gray"
      >
        {{ t("pricing.description") }}
      </div>
    </div>
    <div class="mt-16">
      <div class="max-w-2xl mx-auto space-y-16 lg:hidden">
        <section
          v-for="tier in tiers"
          :key="tier.name"
          class="border rounded-lg border-divider"
        >
          <div class="p-8">
            <div class="text-lg font-medium leading-6">
              {{ tier.name }}
            </div>
            <div class="mt-4">
              <span
                class="text-4xl font-bold tracking-tight text-secondaryDark"
              >
                ${{ tier.priceMonthly }}
              </span>
              {{ " " }}
              <span class="text-base font-medium">/mo</span>
            </div>
            <div class="mt-4 mb-8 text-sm text-secondaryLight">
              {{ tier.description }}
            </div>
            <ButtonPrimary
              class="w-full"
              :rounded="false"
              outline
              :to="tier.href"
              :label="`Buy ${tier.name}`"
            />
          </div>
          <table v-for="section in sections" :key="section.name" class="w-full">
            <caption
              class="px-8 py-3 text-sm font-medium text-left border-t border-divider bg-primaryLight"
            >
              {{
                section.name
              }}
            </caption>
            <tbody class="divide-y divide-divider">
              <tr
                v-for="feature in section.features"
                :key="feature.name"
                class="border-t border-divider"
              >
                <th
                  class="px-8 py-4 text-sm font-normal text-left text-secondaryLight"
                  scope="row"
                >
                  {{ feature.name }}
                </th>
                <td class="py-4 pr-8">
                  <span
                    v-if="typeof feature.tiers[tier.name] === 'string'"
                    class="block text-sm text-right"
                    >{{ feature.tiers[tier.name] }}</span
                  >
                  <span v-else>
                    <lucide-check
                      v-if="feature.tiers[tier.name] === true"
                      class="w-4 h-4 ml-auto text-green-500"
                      aria-hidden="true"
                    />
                    <lucide-x
                      v-else
                      class="w-4 h-4 ml-auto"
                      aria-hidden="true"
                    />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="p-8 border-t border-divider">
            <ButtonPrimary
              class="w-full"
              :rounded="false"
              outline
              :to="tier.href"
              :label="`Buy ${tier.name}`"
            />
          </div>
        </section>
      </div>
      <div class="hidden border rounded-lg border-divider lg:block">
        <table class="w-full h-px table-fixed">
          <thead>
            <tr>
              <th class="px-8 py-4 text-sm font-medium text-left" scope="col">
                <span>Plans</span>
              </th>
              <th
                v-for="tier in tiers"
                :key="tier.name"
                class="w-1/4 px-8 py-4 text-lg font-medium text-left leading-6"
                scope="col"
              >
                {{ tier.name }}
              </th>
            </tr>
          </thead>
          <tbody class="border-t divide-y border-divider divide-dividerLight">
            <tr>
              <th
                class="px-8 py-8 text-sm font-medium text-left align-top"
                scope="row"
              >
                Pricing
              </th>
              <td
                v-for="tier in tiers"
                :key="tier.name"
                class="h-full px-8 py-8 align-top"
              >
                <div class="relative table h-full">
                  <div>
                    <span
                      class="text-4xl font-bold tracking-tight text-secondaryDark"
                      >${{ tier.priceMonthly }}</span
                    >
                    {{ " " }}
                    <span class="text-base font-medium">/mo</span>
                  </div>
                  <div class="mt-4 mb-8 text-sm text-secondaryLight">
                    {{ tier.description }}
                  </div>
                  <ButtonPrimary
                    class="w-full"
                    :rounded="false"
                    outline
                    :to="tier.href"
                    :label="`Buy ${tier.name}`"
                  />
                </div>
              </td>
            </tr>
            <template v-for="section in sections" :key="section.name">
              <tr>
                <th
                  class="px-8 py-4 text-sm font-medium text-left transition bg-primaryLight text-secondaryDark"
                  colspan="4"
                  scope="colgroup"
                >
                  {{ section.name }}
                </th>
              </tr>
              <tr v-for="feature in section.features" :key="feature.name">
                <th
                  class="px-8 py-4 text-sm font-normal text-left text-secondaryLight"
                  scope="row"
                >
                  {{ feature.name }}
                </th>
                <td v-for="tier in tiers" :key="tier.name" class="px-8 py-4">
                  <span
                    v-if="typeof feature.tiers[tier.name] === 'string'"
                    class="text-sm"
                  >
                    {{ feature.tiers[tier.name] }}
                  </span>
                  <span v-else>
                    <lucide-check
                      v-if="feature.tiers[tier.name] === true"
                      class="w-4 h-4 text-green-500"
                      aria-hidden="true"
                    />
                    <lucide-x
                      v-else
                      class="w-4 h-4 text-secondaryLight"
                      aria-hidden="true"
                    />
                  </span>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr class="border-t border-divider">
              <th scope="row"></th>
              <td v-for="tier in tiers" :key="tier.name" class="px-8 py-6">
                <ButtonPrimary
                  class="w-full"
                  :rounded="false"
                  outline
                  :to="tier.href"
                  :label="`Buy ${tier.name}`"
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
