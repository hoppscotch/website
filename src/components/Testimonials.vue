<script setup lang="ts">
  import TestimonialImg01 from "/images/testimonial-01.jpeg"
  import TestimonialImg02 from "/images/testimonial-02.jpeg"
  import TestimonialImg03 from "/images/testimonial-03.jpeg"

  interface Testimonial {
    img: string
    quote: string
    name: string
    role: string
  }

  const active = ref<number>(0)
  const autorotate = ref<boolean>(true)
  const autorotateTiming = ref<number>(7000)

  const items = ref<Testimonial[]>([
    {
      img: TestimonialImg01,
      quote:
        "Hoppscotch is the future of API development infrastructure, and the future is here.",
      name: "Joseph Jacks",
      role: "Founder, OSS Capital",
    },
    {
      img: TestimonialImg02,
      quote: "Hoppscotch which gives me all of the functions I need.",
      name: "Jason McFeetors",
      role: "Automation Evangelist, n8n",
    },
    {
      img: TestimonialImg03,
      quote: "Our team loves Hoppscotch. Saved us a lot of time.",
      name: "Rakshit Arora",
      role: "Founder, MoonlightDevs",
    },
  ])

  onMounted(() => {
    if (autorotate.value) {
      setInterval(() => {
        active.value = (active.value + 1) % items.value.length
      }, autorotateTiming.value)
    }
  })
</script>

<template>
  <section>
    <div class="max-w-4xl px-4 mx-auto sm:px-6">
      <div class="relative pb-12 md:pb-16">
        <!-- Particles animation -->
        <div
          class="absolute top-0 -mt-6 -translate-x-1/2 left-1/2 -z-10 w-80 h-80"
        >
          <ClientOnly>
            <Particles
              class="absolute inset-0 -z-10"
              :quantity="10"
              :staticity="30"
            />
          </ClientOnly>
        </div>
        <!-- Carousel -->
        <div class="text-center">
          <!-- Testimonial image -->
          <div
            class="relative h-32 [mask-image:_linear-gradient(0deg,_transparent,_theme(colors.gray.500)_40%,_theme(colors.gray.500))]"
          >
            <div
              class="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-gray-500/20 before: before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-gray-950 after:m-px before:-z-20 after:-z-20"
            >
              <TransitionGroup
                enter-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-500 order-first"
                enter-from-class="opacity-0 -rotate-[60deg]"
                enter-to-class="opacity-100 rotate-0"
                leave-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-500"
                leave-from-class="opacity-100 rotate-0"
                leave-to-class="opacity-0 rotate-[60deg]"
              >
                <template v-for="(item, index) in items" :key="index">
                  <div
                    v-if="active === index"
                    class="absolute inset-0 h-full -z-10"
                  >
                    <img
                      loading="lazy"
                      class="relative w-16 h-16 p-1 border rounded-full -translate-x-1/2 filter grayscale top-11 left-1/2 border-gray-500/20"
                      :src="item.img"
                      :alt="item.name"
                    />
                  </div>
                </template>
              </TransitionGroup>
            </div>
          </div>
          <!-- Text -->
          <div class="relative flex flex-col items-center mb-10">
            <TransitionGroup
              enter-active-class="order-first transition duration-500 delay-200"
              enter-from-class="opacity-0 -translate-x-4"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="absolute transition duration-500 delay-300"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 translate-x-4"
            >
              <template v-for="(item, index) in items" :key="index">
                <div
                  v-if="active === index"
                  class="block text-xl font-semibold text-transparent bg-clip-text max-w-max bg-gradient-to-r from-white via-white/80 to-white/30"
                >
                  {{ item.quote }}
                </div>
              </template>
            </TransitionGroup>
          </div>
          <!-- Buttons -->
          <div class="flex flex-wrap justify-center -m-1.5">
            <template v-for="(item, index) in items" :key="index">
              <button
                class="inline-flex items-center justify-center border border-transparent rounded-full transition px-3 py-1 m-1.5 text-xs text-gray-200 [background:linear-gradient(theme(colors.gray.950),_theme(colors.gray.950))_padding-box,_conic-gradient(theme(colors.gray.400),_theme(colors.gray.700)_25%,_theme(colors.gray.700)_75%,_theme(colors.gray.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-gray-950/10 before:rounded-full before:pointer-events-none"
                :class="
                  active === index
                    ? 'opacity-100 shadow-gray-950/50 shadow-xl'
                    : 'opacity-50 hover:opacity-80'
                "
                @click="
                  () => {
                    active = index
                  }
                "
              >
                <span class="relative">
                  <span class="text-gray-50">{{ item.name }}</span>
                  <span class="ml-2 text-gray-500">{{ item.role }}</span>
                </span>
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
