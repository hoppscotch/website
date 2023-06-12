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
      <div class="py-12 md:py-20">
        <!-- Content -->
        <div class="max-w-3xl pb-12 mx-auto text-center md:pb-20">
          <div>
            <div
              class="inline-flex pb-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-200"
            >
              Pricing plans
            </div>
          </div>
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
          >
            Flexible plans and features
          </h2>
          <p class="text-lg text-slate-400">
            All the lorem ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet.
          </p>
        </div>
        <!-- Pricing tabs -->
        <div class="relative">
          <!-- Blurred shape -->
          <div
            class="absolute bottom-0 -mb-20 pointer-events-none -translate-x-1/2 max-md:hidden left-2/3 blur-2xl opacity-70"
            aria-hidden="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient
                  id="bs5-a"
                  x1="19.609%"
                  x2="50%"
                  y1="14.544%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#A855F7" />
                  <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
                </linearGradient>
              </defs>
              <path
                fill="url(#bs5-a)"
                fill-rule="evenodd"
                d="m661 736 461 369-284 58z"
                transform="matrix(1 0 0 -1 -661 1163)"
              />
            </svg>
          </div>
          <!-- Content -->
          <div
            class="grid md:grid-cols-4 xl:-mx-6 text-sm [&>div:nth-of-type(-n+4)]:py-6 [&>div:nth-last-of-type(-n+4)]:pb-6 max-md:[&>div:nth-last-of-type(-n+4)]:mb-8 max-md:[&>div:nth-of-type(-n+4):nth-of-type(n+1)]:rounded-t-3xl max-md:[&>div:nth-last-of-type(-n+4)]:rounded-b-3xl md:[&>div:nth-of-type(2)]:rounded-tl-3xl md:[&>div:nth-of-type(4)]:rounded-tr-3xl md:[&>div:nth-last-of-type(3)]:rounded-bl-3xl md:[&>div:nth-last-of-type(1)]:rounded-br-3xl [&>div]:bg-slate-700/20 [&>div:nth-of-type(4n+1)]:bg-transparent max-md:[&>div:nth-of-type(4n+5)]:hidden max-md:[&>div:nth-of-type(4n+2)]:order-1 max-md:[&>div:nth-of-type(4n+3)]:order-2 max-md:[&>div:nth-of-type(4n+4)]:order-3 max-md:md:[&>div:nth-of-type(n)]:mb-0 [&>div:nth-of-type(4n+3)]:relative before:[&>div:nth-of-type(4n+3)]:absolute before:[&>div:nth-of-type(4n+3)]:-inset-px before:[&>div:nth-of-type(4n+3)]:rounded-[inherit] before:[&>div:nth-of-type(4n+3)]:border-x-2 before:[&>div:nth-of-type(3)]:border-t-2 before:[&>div:nth-last-of-type(2)]:border-b-2 before:[&>div:nth-of-type(4n+3)]:border-purple-500 before:[&>div:nth-of-type(4n+3)]:-z-10 before:[&>div:nth-of-type(4n+3)]:pointer-events-none"
          >
            <!-- Pricing toggle -->
            <div class="flex flex-col justify-end px-6">
              <div class="pb-5 md:border-b border-slate-800">
                <!-- Toggle switch -->
                <div class="max-md:text-center">
                  <div class="inline-flex items-center whitespace-nowrap">
                    <div
                      class="mr-2 text-sm font-medium text-slate-500 md:max-lg:hidden"
                    >
                      Monthly
                    </div>
                    <div class="relative">
                      <input
                        type="checkbox"
                        id="toggle"
                        class="sr-only peer"
                        v-model="annual"
                      />
                      <label
                        for="toggle"
                        class="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-purple-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-slate-400 peer-checked:peer-focus-visible:outline-purple-500"
                      >
                        <span class="sr-only">Pay Yearly</span>
                      </label>
                    </div>
                    <div class="ml-2 text-sm font-medium text-slate-500">
                      Yearly (<span class="text-teal-500">-20%</span>)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Pro price -->
            <div class="flex flex-col justify-end px-6">
              <div class="pb-4 mb-4 border-b grow border-slate-800">
                <div
                  class="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5"
                >
                  Pro
                </div>
                <div class="mb-1">
                  <span class="text-lg font-medium text-slate-500">$</span
                  ><span class="text-3xl font-bold text-slate-50">{{
                    annual ? "24" : "29"
                  }}</span
                  ><span class="text-sm font-medium text-slate-600">/mo</span>
                </div>
                <div class="text-slate-500">Everything at your fingertips.</div>
              </div>
              <div class="pb-4 border-b border-slate-800">
                <a
                  class="w-full transition duration-150 ease-in-out btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                  href="/"
                >
                  Get Started
                  <span
                    class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                  >
                    <icon-lucide-arrow-right />
                  </span>
                </a>
              </div>
            </div>
            <!-- Team price -->
            <div class="flex flex-col justify-end px-6">
              <div class="pb-4 mb-4 border-b grow border-slate-800">
                <div
                  class="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5"
                >
                  Team
                </div>
                <div class="mb-1">
                  <span class="text-lg font-medium text-slate-500">$</span
                  ><span class="text-3xl font-bold text-slate-50">{{
                    annual ? "49" : "54"
                  }}</span
                  ><span class="text-sm font-medium text-slate-600">/mo</span>
                </div>
                <div class="text-slate-500">Everything at your fingertips.</div>
              </div>
              <div class="pb-4 border-b border-slate-800">
                <a
                  class="w-full text-white bg-purple-500 transition duration-150 ease-in-out btn-sm hover:bg-purple-600 group"
                  href="/"
                >
                  Get Started
                  <span
                    class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                  >
                    <icon-lucide-arrow-right />
                  </span>
                </a>
              </div>
            </div>
            <!-- Enterprise price -->
            <div class="flex flex-col justify-end px-6">
              <div class="pb-4 mb-4 border-b grow border-slate-800">
                <div
                  class="text-base font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-0.5"
                >
                  Enterprise
                </div>
                <div class="mb-1">
                  <span class="text-lg font-medium text-slate-500">$</span
                  ><span class="text-3xl font-bold text-slate-50">{{
                    annual ? "79" : "85"
                  }}</span
                  ><span class="text-sm font-medium text-slate-600">/mo</span>
                </div>
                <div class="text-slate-500">Everything at your fingertips.</div>
              </div>
              <div class="pb-4 border-b border-slate-800">
                <a
                  class="w-full transition duration-150 ease-in-out btn-sm text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                  href="/"
                >
                  Get Started
                  <span
                    class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                  >
                    <icon-lucide-arrow-right />
                  </span>
                </a>
              </div>
            </div>
            <!-- # Usage -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 mt-4 font-medium text-slate-50">Usage</div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 mt-4 font-medium text-slate-50 md:hidden">
                Usage
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 mt-4 font-medium text-slate-50 md:hidden">
                Usage
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 mt-4 font-medium text-slate-50 md:hidden">
                Usage
              </div>
            </div>
            <!-- Social Connections -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 border-b text-slate-400 border-slate-800">
                Social Connections
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span
                  >100 <span class="md:hidden">Social Connections</span></span
                >
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span
                  >250 <span class="md:hidden">Social Connections</span></span
                >
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span
                  >Unlimited
                  <span class="md:hidden">Social Connections</span></span
                >
              </div>
            </div>
            <!-- Custom Domains -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 border-b text-slate-400 border-slate-800">
                Custom Domains
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span>4 <span class="md:hidden">Custom Domains</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span
                  >Unlimited <span class="md:hidden">Custom Domains</span></span
                >
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span
                  >Unlimited <span class="md:hidden">Custom Domains</span></span
                >
              </div>
            </div>
            <!-- User Role Management -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 border-b text-slate-400 border-slate-800">
                User Role Management
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span
                  >Unlimited
                  <span class="md:hidden">User Role Management</span></span
                >
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span
                  >Unlimited
                  <span class="md:hidden">User Role Management</span></span
                >
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span
                  >Unlimited
                  <span class="md:hidden">User Role Management</span></span
                >
              </div>
            </div>
            <!-- External Databases -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 border-b text-slate-400 border-slate-800">
                External Databases
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span>1 <span class="md:hidden">External Databases</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span>5 <span class="md:hidden">External Databases</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span
                  >Unlimited
                  <span class="md:hidden">External Databases</span></span
                >
              </div>
            </div>
            <!-- # Features -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 mt-4 font-medium text-slate-50">Features</div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 mt-4 font-medium text-slate-50 md:hidden">
                Features
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 mt-4 font-medium text-slate-50 md:hidden">
                Features
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 mt-4 font-medium text-slate-50 md:hidden">
                Features
              </div>
            </div>
            <!-- Custom Connection -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 border-b text-slate-400 border-slate-800">
                Custom Connection
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span><span class="md:hidden">Custom Connection</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span><span class="md:hidden">Custom Connection</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span><span class="md:hidden">Custom Connection</span></span>
              </div>
            </div>
            <!-- Advanced Deployment Options -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 border-b text-slate-400 border-slate-800">
                Advanced Deployment Options
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span
                  ><span class="md:hidden"
                    >Advanced Deployment Options</span
                  ></span
                >
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span
                  ><span class="md:hidden"
                    >Advanced Deployment Options</span
                  ></span
                >
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span
                  ><span class="md:hidden"
                    >Advanced Deployment Options</span
                  ></span
                >
              </div>
            </div>
            <!-- Extra Add-ons -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 border-b text-slate-400 border-slate-800">
                Extra Add-ons
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span><span class="md:hidden">Extra Add-ons</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span><span class="md:hidden">Extra Add-ons</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span><span class="md:hidden">Extra Add-ons</span></span>
              </div>
            </div>
            <!-- Admin Roles -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 border-b text-slate-400 border-slate-800">
                Admin Roles
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center py-2 border-b border-slate-800 text-slate-400 max-md:hidden"
              >
                <span><span class="md:hidden">Admin Roles</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center py-2 border-b border-slate-800 text-slate-400 max-md:hidden"
              >
                <span><span class="md:hidden">Admin Roles</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span><span class="md:hidden">Admin Roles</span></span>
              </div>
            </div>
            <!-- Deploy and Monitor -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 border-b text-slate-400 border-slate-800">
                Deploy and Monitor
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center py-2 border-b border-slate-800 text-slate-400 max-md:hidden"
              >
                <span><span class="md:hidden">Deploy and Monitor</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center py-2 border-b border-slate-800 text-slate-400 max-md:hidden"
              >
                <span><span class="md:hidden">Deploy and Monitor</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span><span class="md:hidden">Deploy and Monitor</span></span>
              </div>
            </div>
            <!-- Enterprise Add-ons -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 border-b text-slate-400 border-slate-800">
                Enterprise Add-ons
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center py-2 border-b border-slate-800 text-slate-400 max-md:hidden"
              >
                <span><span class="md:hidden">Enterprise Add-ons</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center py-2 border-b border-slate-800 text-slate-400 max-md:hidden"
              >
                <span><span class="md:hidden">Enterprise Add-ons</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span><span class="md:hidden">Enterprise Add-ons</span></span>
              </div>
            </div>
            <!-- # Support -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 mt-4 font-medium text-slate-50">Support</div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div class="hidden py-2 mt-4 font-medium text-slate-50">
                Support
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 mt-4 font-medium text-slate-50 md:hidden">
                Support
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 mt-4 font-medium text-slate-50 md:hidden">
                Support
              </div>
            </div>
            <!-- Premium Support -->
            <div class="flex flex-col justify-end px-6">
              <div class="py-2 border-b text-slate-400 border-slate-800">
                Premium Support
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center py-2 border-b border-slate-800 text-slate-400 max-md:hidden"
              >
                <span><span class="md:hidden">Premium Support</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span><span class="md:hidden">Premium Support</span></span>
              </div>
            </div>
            <div class="flex flex-col justify-end px-6">
              <div
                class="flex items-center h-full py-2 border-b border-slate-800 text-slate-400"
              >
                <icon-lucide-check class="mr-3 text-purple-500 shrink-0" />
                <span><span class="md:hidden">Premium Support</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"

const annual = ref(true)
</script>
