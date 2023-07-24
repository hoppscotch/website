<script setup lang="ts">
import Image01 from "/images/world-user-01.jpg"
import Image02 from "/images/world-user-02.jpg"
import Image03 from "/images/world-user-03.jpg"

const active = ref(0)
const autorotate = ref(true)
const autorotateTiming = ref(7000)
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
const autorotateInterval = ref()
function stopAutorotate() {
  clearInterval(autorotateInterval.value)
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
    <!-- Radial gradient -->
    <div
      class="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      <div
        class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-square"
      >
        <div
          class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"
        ></div>
      </div>
    </div>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-16">
        <!-- Section header -->
        <div class="max-w-4xl pb-12 mx-auto text-center md:pb-20">
          <div
            class="relative inline-flex items-center justify-center px-4 py-2 mb-4 border rounded-full hero-subtitle-gradient border-white/10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              class="inline-flex font-medium text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-500"
            >
              Company
            </div>
          </div>
          <h2
            class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white/90 via-white/80 to-white/20"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            You're in good company
          </h2>
          <p
            class="text-lg text-slate-400"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We're a team of passionate designers and developers working together
            to build the most advanced and easy-to-use API development platform
            ever created.
          </p>
        </div>
        <!-- Check list -->
        <div class="max-w-4xl pb-16 mx-auto">
          <ul
            class="flex flex-col flex-wrap items-center justify-center -mx-3 -my-8 text-md text-slate-200 sm:flex-row"
          >
            <li
              class="flex items-center mx-3 my-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <icon-lucide-badge-check class="mr-3 text-green-400" />
              <span>Work Life Balance</span>
            </li>
            <li
              class="flex items-center mx-3 my-2"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <icon-lucide-badge-check class="mr-3 text-green-400" />
              <span>Competitive Salary And Equity</span>
            </li>
            <li
              class="flex items-center mx-3 my-2"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <icon-lucide-badge-check class="mr-3 text-green-400" />
              <span>5 Weeks Paid Vacation</span>
            </li>
            <li
              class="flex items-center mx-3 my-2"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <icon-lucide-badge-check class="mr-3 text-green-400" />
              <span>Generous Gear Credit</span>
            </li>
            <li
              class="flex items-center mx-3 my-2"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <icon-lucide-badge-check class="mr-3 text-green-400" />
              <span>Diversity and Inclusion</span>
            </li>
          </ul>
        </div>
        <!-- Carousel area -->
        <div class="max-w-2xl mx-auto">
          <!-- World map -->
          <div class="py-12">
            <div class="relative">
              <!-- Map -->
              <div
                class="absolute inset-0 flex items-end justify-center"
                aria-hidden="true"
              >
                <div
                  class="bottom-0 border-l border-dashed transform translate-y-8 h-1/2 border-slate-700"
                ></div>
              </div>
              <!-- People pics -->
              <img
                src="/images/worldmap.svg"
                width="672"
                height="330"
                alt="World map"
              />
              <img
                class="absolute rounded-full"
                style="top: 22%; left: 52%"
                src="/images/world-user-01.jpg"
                width="32"
                height="32"
                alt="User 01"
                data-aos="fade-up"
              />
              <img
                class="absolute rounded-full"
                style="top: 50%; left: 58%"
                src="/images/world-user-02.jpg"
                width="48"
                height="48"
                alt="User 02"
                data-aos="fade-up"
                data-aos-delay="400"
              />
              <img
                class="absolute rounded-full"
                style="top: 8.5%; left: 70.5%"
                src="/images/world-user-03.jpg"
                width="56"
                height="56"
                alt="User 02"
                data-aos="fade-up"
                data-aos-delay="100"
              />
              <img
                class="absolute rounded-full"
                style="top: 34%; left: 76.5%"
                src="/images/world-user-04.jpg"
                width="72"
                height="72"
                alt="User 04"
                data-aos="fade-up"
                data-aos-delay="700"
              />
              <img
                class="absolute rounded-full"
                style="top: 29.5%; left: 8.5%"
                src="/images/world-user-05.jpg"
                width="48"
                height="48"
                alt="User 05"
                data-aos="fade-up"
                data-aos-delay="500"
              />
              <img
                class="absolute rounded-full"
                style="top: 56%; left: 19%"
                src="/images/world-user-06.jpg"
                width="56"
                height="56"
                alt="User 06"
                data-aos="fade-up"
                data-aos-delay="200"
              />
              <img
                class="absolute rounded-full"
                style="top: 20%; left: 24.5%"
                src="/images/world-user-07.jpg"
                width="64"
                height="64"
                alt="User 07"
                data-aos="fade-up"
                data-aos-delay="600"
              />
              <img
                class="absolute rounded-full"
                style="top: 39%; left: 43%"
                src="/images/world-user-08.jpg"
                width="40"
                height="40"
                alt="User 08"
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
          </div>
          <!-- Carousel -->
          <div class="relative flex flex-col items-center mt-2">
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
                  <div class="inline-flex flex-col justify-center mb-4">
                    <img
                      class="p-2 border-2 border-purple-500 rounded-full"
                      :src="item.img"
                      width="64"
                      height="64"
                      :alt="item.alt"
                    />
                  </div>
                  <blockquote class="text-lg font-medium text-slate-200">
                    {{ item.quote }}
                  </blockquote>
                  <div class="mt-3 font-medium text-slate-800">
                    <cite class="not-italic text-slate-200">
                      {{ item.name }}
                    </cite>
                    | <span class="text-slate-500">{{ item.role }}</span>
                  </div>
                </div>
              </template>
            </TransitionGroup>
            <!-- Bullets -->
            <div class="flex justify-center mt-6">
              <template v-for="(_item, index) in items" :key="index">
                <button
                  class="p-1 group"
                  @click="
                    () => {
                      active = index
                      stopAutorotate()
                    }
                  "
                >
                  <span
                    class="block w-2 h-2 rounded-full transition group-hover:bg-slate-400"
                    :class="active === index ? 'bg-slate-200' : 'bg-slate-500'"
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
