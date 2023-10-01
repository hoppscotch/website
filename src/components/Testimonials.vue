<script setup lang="ts">
  import TestimonialImg01 from "/images/testimonial-01.jpg"
  import TestimonialImg02 from "/images/testimonial-02.jpg"
  import TestimonialImg03 from "/images/testimonial-03.jpg"

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
      quote: "The ability to capture responses is a game-changer...",
      name: "Jessie J",
      role: "Ltd Head of Product",
    },
    {
      img: TestimonialImg02,
      quote: "I have been using this product for a few weeks now...",
      name: "Mark Luk",
      role: "Spark Founder & CEO",
    },
    {
      img: TestimonialImg03,
      quote:
        "As a busy professional, I don't have a lot of time to devote to working out...",
      name: "Jeff Kahl",
      role: "Appy Product Lead",
    },
  ])

  let autorotateInterval: NodeJS.Timeout | null = null

  const stopAutorotate = () => {
    if (autorotateInterval) {
      clearInterval(autorotateInterval)
    }
  }

  onMounted(() => {
    if (autorotate.value) {
      autorotateInterval = setInterval(() => {
        active.value = (active.value + 1) % items.value.length
      }, autorotateTiming.value)
    }
  })

  onBeforeUnmount(() => {
    stopAutorotate()
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
            class="relative h-32 [mask-image:_linear-gradient(0deg,_transparent,_theme(colors.violet.500)_40%,_theme(colors.violet.500))]"
          >
            <div
              class="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-violet-500/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-slate-950 after:m-px before:-z-20 after:-z-20"
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
                      class="relative w-16 h-16 p-1 border rounded-full -translate-x-1/2 top-11 left-1/2 border-violet-500/20"
                      :src="item.img"
                      :alt="item.name"
                    />
                  </div>
                </template>
              </TransitionGroup>
            </div>
          </div>
          <!-- Text -->
          <div class="relative flex flex-col mb-10">
            <TransitionGroup
              enter-active-class="order-first transition duration-500 delay-200"
              enter-from-class="opacity-0 -translate-x-4"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="absolute transition duration-500 delay-300"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 translate-x-4"
            >
              <template v-for="(item, index) in items" :key="index">
                <div v-if="active === index">
                  <div
                    class="text-xl font-bold text-transparent bg-clip-text max-w-max bg-gradient-to-br from-violet-200/50 via-violet-200/80 to-violet-100/80"
                  >
                    {{ item.quote }}
                  </div>
                </div>
              </template>
            </TransitionGroup>
          </div>
          <!-- Buttons -->
          <div class="flex flex-wrap justify-center -m-1.5">
            <template v-for="(item, index) in items" :key="index">
              <button
                class="inline-flex items-center justify-center border border-transparent rounded-full transition px-3 py-1 m-1.5 text-xs text-violet-200 [background:linear-gradient(theme(colors.violet.950),_theme(colors.slate.950))_padding-box,_conic-gradient(theme(colors.violet.400),_theme(colors.violet.700)_25%,_theme(colors.violet.700)_75%,_theme(colors.violet.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-violet-950/10 before:rounded-full before:pointer-events-none"
                :class="
                  active === index
                    ? 'opacity-100 shadow-violet-950/50 shadow-xl'
                    : 'opacity-50 hover:opacity-80'
                "
                @click="
                  () => {
                    active = index
                    stopAutorotate()
                  }
                "
              >
                <span class="relative">
                  <span class="text-violet-50">{{ item.name }}</span>
                  <span class="ml-2 text-violet-500">{{ item.role }}</span>
                </span>
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
