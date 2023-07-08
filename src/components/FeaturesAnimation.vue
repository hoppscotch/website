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
        <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
          <div>
            <div
              class="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Features
            </div>
          </div>
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            All in one place
          </h2>
          <p
            class="text-lg text-slate-400"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We are building the future of API development. All in one place.
          </p>
        </div>
        <!-- Logo animation -->
        <div class="relative flex flex-col items-center p-16">
          <!-- Blurred dots -->
          <svg
            class="absolute -translate-y-1/2 top-1/2"
            width="557"
            height="93"
            xmlns="http://www.w3.org/2000/svg"
            data-aos="zoom-in"
          >
            <defs>
              <filter
                id="hlogo-blurreddots-a"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
              </filter>
              <filter
                id="blurreddots-b"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
              </filter>
              <filter
                id="blurreddots-c"
                x="-150%"
                y="-150%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur stdDeviation="6" in="SourceGraphic" />
              </filter>
              <filter
                id="blurreddots-d"
                x="-150%"
                y="-150%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
              </filter>
              <filter
                id="blurreddots-e"
                x="-150%"
                y="-150%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
              </filter>
              <filter
                id="blurreddots-f"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
              </filter>
              <filter
                id="blurreddots-g"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
              </filter>
              <filter
                id="blurreddots-h"
                x="-150%"
                y="-150%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur stdDeviation="6" in="SourceGraphic" />
              </filter>
              <filter
                id="blurreddots-i"
                x="-150%"
                y="-150%"
                width="400%"
                height="400%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur stdDeviation="4" in="SourceGraphic" />
              </filter>
              <filter
                id="blurreddots-j"
                x="-75%"
                y="-75%"
                width="250%"
                height="250%"
                filterUnits="objectBoundingBox"
              >
                <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
              </filter>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g class="fill-indigo-600" transform="translate(437 8)">
                <circle
                  fill-opacity=".64"
                  filter="url(#blurreddots-a)"
                  cx="6"
                  cy="66"
                  r="6"
                />
                <circle
                  fill-opacity=".32"
                  filter="url(#blurreddots-b)"
                  cx="90"
                  cy="6"
                  r="6"
                />
                <circle
                  fill-opacity=".64"
                  filter="url(#blurreddots-c)"
                  cx="90"
                  cy="66"
                  r="6"
                />
                <circle
                  fill-opacity=".32"
                  filter="url(#blurreddots-d)"
                  cx="6"
                  cy="36"
                  r="4"
                />
                <circle
                  fill-opacity=".32"
                  filter="url(#blurreddots-e)"
                  cx="60"
                  cy="36"
                  r="4"
                />
                <circle fill-opacity=".64" cx="34" cy="22" r="2" />
                <circle fill-opacity=".32" cx="34" cy="50" r="2" />
                <circle fill-opacity=".64" cx="118" cy="22" r="2" />
                <circle fill-opacity=".32" cx="118" cy="50" r="2" />
              </g>
              <g class="fill-indigo-600" transform="matrix(-1 0 0 1 120 8)">
                <circle
                  fill-opacity=".64"
                  filter="url(#blurreddots-f)"
                  cx="6"
                  cy="66"
                  r="6"
                />
                <circle
                  fill-opacity=".32"
                  filter="url(#blurreddots-g)"
                  cx="90"
                  cy="6"
                  r="6"
                />
                <circle
                  fill-opacity=".64"
                  filter="url(#blurreddots-h)"
                  cx="90"
                  cy="66"
                  r="6"
                />
                <circle
                  fill-opacity=".32"
                  filter="url(#blurreddots-i)"
                  cx="6"
                  cy="36"
                  r="4"
                />
                <circle
                  fill-opacity=".64"
                  filter="url(#blurreddots-j)"
                  cx="60"
                  cy="36"
                  r="4"
                />
                <circle fill-opacity=".32" cx="34" cy="22" r="2" />
                <circle fill-opacity=".32" cx="34" cy="50" r="2" />
                <circle fill-opacity=".64" cx="118" cy="22" r="2" />
                <circle fill-opacity=".32" cx="118" cy="50" r="2" />
              </g>
            </g>
          </svg>
          <div
            class="relative flex items-center justify-center w-32 h-32"
            data-aos="zoom-in"
          >
            <!-- Halo effect -->
            <svg
              class="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none h-auto max-w-[200%]"
              width="800"
              height="800"
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lg-1" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop
                    stop-color="#020617"
                    stop-opacity="0%"
                    offset="0%"
                  ></stop>
                  <stop stop-color="#020617" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g class="opacity-75 fill-indigo-600" fill-rule="evenodd">
                <circle class="pulse" cx="400" cy="400" r="200" />
                <circle class="pulse pulse-1" cx="400" cy="400" r="200" />
                <circle class="pulse pulse-2" cx="400" cy="400" r="200" />
                <circle class="pulse pulse-3" cx="400" cy="400" r="200" />
                <rect fill="url(#lg-1)" width="800" height="800" />
              </g>
            </svg>
            <!-- Logo -->
            <svg
              class="w-16 h-16"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="0%"
                  y1="32.443%"
                  x2="104.18%"
                  y2="50%"
                >
                  <stop stop-color="#FFF" stop-opacity=".299" offset="0%" />
                  <stop stop-color="#7587E4" stop-opacity="0" offset="100%" />
                </linearGradient>
                <linearGradient id="b" x1="18.591%" y1="0%" x2="100%" y2="100%">
                  <stop stop-color="#818CF8" offset="0%" />
                  <stop stop-color="#C7D2FE" offset="100%" />
                </linearGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path fill="#3730A3" d="M16 18.5V32l15.999-9.25V9.25z" />
                <path fill="#4F46E5" d="m0 23 16 9V18.501L0 9.251z" />
                <path
                  fill-opacity=".64"
                  fill="url(#a)"
                  d="M16 13 0 23l16 9 16-9z"
                />
                <path fill="url(#b)" d="M16 0 0 9.25l16 9.25 15.999-9.25z" />
              </g>
            </svg>
          </div>
        </div>
        <!-- Integration boxes -->
        <div
          class="relative grid max-w-xs grid-cols-2 gap-6 mx-auto mt-10 sm:max-w-md md:max-w-6xl sm:grid-cols-3 md:grid-cols-6 md:mt-20"
        >
          <!-- Top vertical line -->
          <div
            class="hidden md:block absolute w-0.5 h-8 -top-16 -mt-2 bg-slate-900 left-1/2 -translate-x-1/2"
            aria-hidden="true"
          ></div>
          <div
            class="relative flex items-center justify-center p-2 bg-slate-900 rounded-2xl aspect-square"
            data-aos="fade-up"
          >
            <!-- Inner lines -->
            <div
              class="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2"
              aria-hidden="true"
            >
              <div
                class="absolute w-0.5 h-full bg-slate-900 left-1/2 -translate-x-1/2"
              ></div>
              <div class="absolute w-1/2 h-0.5 bg-slate-900 right-0"></div>
            </div>
            <!-- Circle -->
            <div
              class="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-slate-900 to-slate-950"
            >
              <!-- Icon -->
              <img
                src="/images/integration-icon-01.svg"
                width="36"
                height="46"
                alt="Icon 01"
              />
            </div>
          </div>
          <div
            class="relative flex items-center justify-center p-2 bg-slate-900 rounded-2xl aspect-square"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <!-- Inner lines -->
            <div
              class="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2"
              aria-hidden="true"
            >
              <div
                class="absolute w-0.5 h-full bg-slate-900 left-1/2 -translate-x-1/2"
              ></div>
              <div class="absolute w-full h-0.5 bg-slate-900"></div>
            </div>
            <!-- Circle -->
            <div
              class="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-slate-900 to-slate-950"
            >
              <!-- Icon -->
              <img
                src="/images/integration-icon-02.svg"
                width="46"
                height="46"
                alt="Icon 02"
              />
            </div>
          </div>
          <div
            class="relative flex items-center justify-center p-2 bg-slate-900 rounded-2xl aspect-square"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <!-- Inner lines -->
            <div
              class="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2"
              aria-hidden="true"
            >
              <div
                class="absolute w-0.5 h-full bg-slate-900 left-1/2 -translate-x-1/2"
              ></div>
              <div class="absolute w-full h-0.5 bg-slate-900"></div>
            </div>
            <!-- Circle -->
            <div
              class="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-slate-900 to-slate-950"
            >
              <!-- Icon -->
              <img
                src="/images/integration-icon-03.svg"
                width="53"
                height="45"
                alt="Icon 03"
              />
            </div>
          </div>
          <div
            class="relative flex items-center justify-center p-2 bg-slate-900 rounded-2xl aspect-square"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <!-- Inner lines -->
            <div
              class="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2"
              aria-hidden="true"
            >
              <div
                class="absolute w-0.5 h-full bg-slate-900 left-1/2 -translate-x-1/2"
              ></div>
              <div class="absolute w-full h-0.5 bg-slate-900"></div>
            </div>
            <!-- Circle -->
            <div
              class="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-slate-900 to-slate-950"
            >
              <!-- Icon -->
              <img
                src="/images/integration-icon-04.svg"
                width="48"
                height="46"
                alt="Icon 04"
              />
            </div>
          </div>
          <div
            class="relative flex items-center justify-center p-2 bg-slate-900 rounded-2xl aspect-square"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <!-- Inner lines -->
            <div
              class="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2"
              aria-hidden="true"
            >
              <div
                class="absolute w-0.5 h-full bg-slate-900 left-1/2 -translate-x-1/2"
              ></div>
              <div class="absolute w-full h-0.5 bg-slate-900"></div>
            </div>
            <!-- Circle -->
            <div
              class="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-slate-900 to-slate-950"
            >
              <!-- Icon -->
              <img
                src="/images/integration-icon-05.svg"
                width="49"
                height="48"
                alt="Icon 05"
              />
            </div>
          </div>
          <div
            class="relative flex items-center justify-center p-2 bg-slate-900 rounded-2xl aspect-square"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <!-- Inner lines -->
            <div
              class="hidden md:block absolute inset-0 w-[calc(100%+24px)] h-6 -top-10 left-1/2 -translate-x-1/2"
              aria-hidden="true"
            >
              <div
                class="absolute w-0.5 h-full bg-slate-900 left-1/2 -translate-x-1/2"
              ></div>
              <div class="absolute w-1/2 h-0.5 bg-slate-900 left-0"></div>
            </div>
            <!-- Circle -->
            <div
              class="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-t from-slate-900 to-slate-950"
            >
              <!-- Icon -->
              <img
                src="/images/integration-icon-06.svg"
                width="48"
                height="44"
                alt="Icon 06"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
/* Pulsing animation */
@keyframes pulseLoop {
  0% {
    opacity: 0;
    transform: scale(1) translateZ(0);
  }
  30% {
    opacity: 0.4;
  }
  60% {
    opacity: 0;
  }
  80% {
    opacity: 0;
    transform: scale(2.5) translateZ(0);
  }
}
.pulse {
  transform: scale(1);
  opacity: 0;
  transform-origin: center;
  animation: pulseLoop 8000ms linear infinite;
}
.pulse-1 {
  animation-delay: -2000ms;
}
.pulse-2 {
  animation-delay: -4000ms;
}
.pulse-3 {
  animation-delay: -6000ms;
}
.translate-z-0 {
  transform: translateZ(0);
}
</style>
