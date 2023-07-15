<script setup lang="ts">
import TestimonialImg01 from "/images/testimonial-01.jpg"
import TestimonialImg02 from "/images/testimonial-02.jpg"
import TestimonialImg03 from "/images/testimonial-03.jpg"

const active = ref(0)
const autorotate = ref(true)
const autorotateTiming = ref(7000)
const items = ref([
  {
    img: TestimonialImg01,
    quote:
      "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to be able to select between formats.ture responses is a game-changer.",
    name: "Jessie J",
    role: "Ltd Head of Product",
  },
  {
    img: TestimonialImg02,
    quote:
      "I have been using this product for a few weeks now and I am blown away by the results. My skin looks visibly brighter and smoother, and I have received so many compliments on my complexion.",
    name: "Mark Luk",
    role: "Spark Founder & CEO",
  },
  {
    img: TestimonialImg03,
    quote:
      "As a busy professional, I don't have a lot of time to devote to working out. But with this fitness program, I have seen amazing results in just a few short weeks. The workouts are efficient and effective.",
    name: "Jeff Kahl",
    role: "Appy Product Lead",
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
  <section>
    <div class="max-w-3xl px-4 mx-auto sm:px-6">
      <div class="relative py-12 md:pb-20">
        <!-- Particles animation -->
        <div
          class="absolute top-0 -mt-6 -translate-x-1/2 left-1/2 -z-10 w-80 h-80"
        >
          <Particles
            class="absolute inset-0 -z-10"
            :quantity="10"
            :staticity="30"
          />
        </div>
        <!-- Carousel -->
        <div class="text-center">
          <!-- Testimonial image -->
          <div
            class="relative h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_40%,theme(colors.white))]"
          >
            <div
              class="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-slate-400/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-slate-950 after:m-px before:-z-20 after:-z-20"
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
                      class="relative rounded-full -translate-x-1/2 top-11 left-1/2"
                      :src="item.img"
                      width="56"
                      height="56"
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
                    class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
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
                class="btn-sm m-1.5 text-xs py-1.5 text-slate-200 transition [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-900/30 before:rounded-full before:pointer-events-none"
                :class="
                  active === index
                    ? 'opacity-100 shadow-slate-900/50 shadow-xl'
                    : 'opacity-30 hover:opacity-60'
                "
                @click="
                  () => {
                    active = index
                    stopAutorotate()
                  }
                "
              >
                <span class="relative">
                  <span class="text-slate-50">{{ item.name }}</span>
                  <span class="ml-2 text-slate-500">{{ item.role }}</span>
                </span>
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
