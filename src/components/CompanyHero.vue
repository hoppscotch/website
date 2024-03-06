<script setup lang="ts">
import Image01 from "/images/world-user-01.jpg"
import Image02 from "/images/world-user-02.jpg"
import Image03 from "/images/world-user-03.jpg"

const active = ref<number>(0)
const autorotate = ref<boolean>(true)
const autorotateTiming = ref<number>(7000)

const items = ref([
  {
    img: Image01,
    alt: "Testimonial 01",
    quote:
      "“ I feel grateful that Open PRO pushed me to expand my horizons and strive to accomplish more, not only in my career but in education as well.“",
    name: "Darya Semenova",
    role: "Backend Developer",
  },
  {
    img: Image02,
    alt: "Testimonial 02",
    quote:
      "“ Not only in my career but in education as well, I feel grateful that Open PRO pushed me to expand my horizons and strive to accomplish more.“",
    name: "Greg Sebastian",
    role: "Head of Design",
  },
  {
    img: Image03,
    alt: "Testimonial 03",
    quote:
      "“ I feel grateful that Open PRO pushed me to expand my horizons and strive to accomplish more, not only in my career but in education as well.“",
    name: "Dominik Prasad",
    role: "Backend Lead",
  },
])

const autorotateInterval = ref<NodeJS.Timeout | null>(null)

const stopAutorotate = () => {
  if (autorotateInterval.value) {
    clearInterval(autorotateInterval.value)
  }
}

onMounted(() => {
  if (autorotate.value) {
    autorotateInterval.value = setInterval(() => {
      active.value =
        active.value + 1 === items.value.length ? 0 : active.value + 1
    }, autorotateTiming.value)
  }
})

onBeforeUnmount(() => {
  stopAutorotate()
})
</script>

<template>
  <section class="relative">
    <div class="mx-auto max-w-5xl px-4 sm:px-6">
      <div class="pb-24 pt-32">
        <!-- Section header -->
        <div
          class="mx-auto flex max-w-2xl flex-col items-center pb-12 text-center md:pb-20"
        >
          <span
            class="mb-6 inline-flex max-w-max bg-gradient-to-br from-zinc-50 to-zinc-600 bg-clip-text text-transparent"
          >
            Company
          </span>
          <h2
            class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-transparent"
          >
            You're in good company
          </h2>
          <p class="text-zinc-400/80">
            We're a team of passionate designers and developers working together
            to build the most advanced and easy-to-use API development platform
            ever created.
          </p>
        </div>
        <!-- Check list -->
        <div class="mx-auto max-w-4xl pb-16">
          <ul
            class="text-md -mx-3 -my-8 flex flex-col flex-wrap items-center justify-center text-zinc-200 sm:flex-row"
          >
            <li class="mx-3 my-2 flex items-center">
              <icon-lucide-badge-check class="mr-3 text-green-400" />
              <span>Work Life Balance</span>
            </li>
            <li class="mx-3 my-2 flex items-center">
              <icon-lucide-badge-check class="mr-3 text-green-400" />
              <span>Competitive Salary And Equity</span>
            </li>
            <li class="mx-3 my-2 flex items-center">
              <icon-lucide-badge-check class="mr-3 text-green-400" />
              <span>5 Weeks Paid Vacation</span>
            </li>
            <li class="mx-3 my-2 flex items-center">
              <icon-lucide-badge-check class="mr-3 text-green-400" />
              <span>Generous Gear Credit</span>
            </li>
            <li class="mx-3 my-2 flex items-center">
              <icon-lucide-badge-check class="mr-3 text-green-400" />
              <span>Diversity and Inclusion</span>
            </li>
          </ul>
        </div>
        <!-- Carousel area -->
        <div class="mx-auto max-w-2xl">
          <!-- World map -->
          <div class="py-12">
            <div class="relative">
              <!-- Map -->
              <div
                class="absolute inset-0 flex items-end justify-center"
                aria-hidden="true"
              >
                <div
                  class="bottom-0 h-1/2 translate-y-8 transform border-l border-dashed border-zinc-700"
                ></div>
              </div>
              <!-- People pics -->
              <img
                loading="lazy"
                src="/images/worldmap.svg"
                width="672"
                height="330"
                alt="World map"
              />
              <img
                loading="lazy"
                class="absolute rounded-full"
                style="top: 22%; left: 52%"
                src="/images/world-user-01.jpg"
                width="32"
                height="32"
                alt="User 01"
              />
              <img
                loading="lazy"
                class="absolute rounded-full"
                style="top: 50%; left: 58%"
                src="/images/world-user-02.jpg"
                width="48"
                height="48"
                alt="User 02"
              />
              <img
                loading="lazy"
                class="absolute rounded-full"
                style="top: 8.5%; left: 70.5%"
                src="/images/world-user-03.jpg"
                width="56"
                height="56"
                alt="User 02"
              />
              <img
                loading="lazy"
                class="absolute rounded-full"
                style="top: 34%; left: 76.5%"
                src="/images/world-user-04.jpg"
                width="72"
                height="72"
                alt="User 04"
              />
              <img
                loading="lazy"
                class="absolute rounded-full"
                style="top: 29.5%; left: 8.5%"
                src="/images/world-user-05.jpg"
                width="48"
                height="48"
                alt="User 05"
              />
              <img
                loading="lazy"
                class="absolute rounded-full"
                style="top: 56%; left: 19%"
                src="/images/world-user-06.jpg"
                width="56"
                height="56"
                alt="User 06"
              />
              <img
                loading="lazy"
                class="absolute rounded-full"
                style="top: 20%; left: 24.5%"
                src="/images/world-user-07.jpg"
                width="64"
                height="64"
                alt="User 07"
              />
              <img
                loading="lazy"
                class="absolute rounded-full"
                style="top: 39%; left: 43%"
                src="/images/world-user-08.jpg"
                width="40"
                height="40"
                alt="User 08"
              />
            </div>
          </div>
          <!-- Carousel -->
          <div class="relative mt-2 flex flex-col items-center">
            <!-- Testimonials -->
            <TransitionGroup
              enter-active-class="order-first transition duration-500 transform"
              enter-from-class="opacity-0 scale-90"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="absolute transition duration-300 transform"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-90"
            >
              <template v-for="(item, index) in items" :key="index">
                <div v-show="active === index" class="text-center">
                  <div class="mb-4 inline-flex flex-col justify-center">
                    <img
                      loading="lazy"
                      class="rounded-full border-2 border-zinc-500 p-2"
                      :src="item.img"
                      width="64"
                      height="64"
                      :alt="item.alt"
                    />
                  </div>
                  <blockquote class="text-lg text-zinc-200">
                    {{ item.quote }}
                  </blockquote>
                  <div class="mt-3 text-zinc-800">
                    <cite class="not-italic text-zinc-200">
                      {{ item.name }}
                    </cite>
                    | <span class="text-zinc-100">{{ item.role }}</span>
                  </div>
                </div>
              </template>
            </TransitionGroup>
            <!-- Bullets -->
            <div class="mt-6 flex justify-center">
              <template v-for="(_item, index) in items" :key="index">
                <button
                  class="group p-1"
                  @click="
                    () => {
                      active = index
                      stopAutorotate()
                    }
                  "
                >
                  <span
                    class="block h-2 w-2 rounded-full transition group-hover:bg-zinc-400"
                    :class="active === index ? 'bg-zinc-200' : 'bg-zinc-500'"
                  ></span>
                </button>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
