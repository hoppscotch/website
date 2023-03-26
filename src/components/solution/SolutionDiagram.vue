<template>
  <div class="flex flex-col px-8 py-16">
    <div
      class="relative flex flex-col items-center justify-center p-8 border source-container source-data space-y-2 md:space-y-0 md:flex-row md:space-x-2 border-dividerDark rounded-2xl bg-primary transition"
    >
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">REST</h3>
        <p class="mt-1 text-secondaryLight">OpenAPI, Hoppscotch, JSON, etc.</p>
      </div>
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">SOAP</h3>
        <p class="mt-1 text-secondaryLight">XML, WSDL, CRM, etc.</p>
      </div>
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">GraphQL</h3>
        <p class="mt-1 text-secondaryLight">APIs, Databases, JSON, etc.</p>
      </div>
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">Real-time</h3>
        <p class="mt-1 text-secondaryLight">WebSockets, SSE, Socket.IO, etc.</p>
      </div>
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">RPC</h3>
        <p class="mt-1 text-secondaryLight">tRPC, etc.</p>
      </div>
    </div>
    <svg class="movement-animation">
      <line x1="5" x2="5" y1="0" y2="100" />
    </svg>
    <div class="flex items-center justify-center">
      <span
        class="flex px-4 py-2 border border-dividerDark rounded-xl bg-primaryLight transition"
      >
        <icon-lucide-git-fork class="mr-2" />
        Source control
      </span>
    </div>
    <svg class="movement-animation">
      <line x1="5" x2="5" y1="0" y2="100" />
    </svg>
    <div
      class="relative flex flex-col items-center justify-center p-8 border source-container source-build space-y-2 md:space-y-0 md:flex-row md:space-x-2 border-dividerDark rounded-2xl bg-primary transition"
    >
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">Design</h3>
        <p class="mt-1 text-secondaryLight">
          Contentful, Drupal, WordPress, etc.
        </p>
      </div>
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">Mock</h3>
        <p class="mt-1 text-secondaryLight">Documentation, Posts, etc.</p>
      </div>
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">Develop</h3>
        <p class="mt-1 text-secondaryLight">
          APIs, Databases, YAML, JSON, CSV, etc.
        </p>
      </div>
    </div>
    <svg class="movement-animation">
      <line x1="5" x2="5" y1="0" y2="100" />
    </svg>
    <div class="flex items-center justify-center">
      <span
        class="flex px-4 py-2 border border-dividerDark rounded-xl bg-primaryLight transition"
      >
        <icon-lucide-cloudy class="mr-2" />
        Cloud
      </span>
    </div>
    <svg class="movement-animation">
      <line x1="5" x2="5" y1="0" y2="100" />
    </svg>
    <div class="flex items-center justify-center">
      <span
        class="flex px-4 py-2 border border-dividerDark rounded-xl bg-primaryLight transition"
      >
        <icon-lucide-shield-check class="mr-2" />
        APM
      </span>
    </div>
    <svg class="movement-animation">
      <line x1="5" x2="5" y1="0" y2="100" />
    </svg>
    <div
      class="relative flex flex-col items-center justify-center p-8 border source-container source-test space-y-2 md:space-y-0 md:flex-row md:space-x-2 border-dividerDark rounded-2xl bg-primary transition"
    >
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">Automated</h3>
        <p class="mt-1 text-secondaryLight">
          APIs, Databases, YAML, JSON, CSV, etc.
        </p>
      </div>
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">Manual</h3>
        <p class="mt-1 text-secondaryLight">
          APIs, Databases, YAML, JSON, CSV, etc.
        </p>
      </div>
    </div>
    <svg class="movement-animation">
      <line x1="5" x2="5" y1="0" y2="100" />
    </svg>
    <div class="flex items-center justify-center">
      <span
        class="flex px-4 py-2 border border-dividerDark rounded-xl bg-primaryLight transition"
      >
        <icon-lucide-git-fork class="mr-2" />
        Source control
      </span>
    </div>
    <svg class="movement-animation">
      <line x1="5" x2="5" y1="0" y2="100" />
    </svg>
    <div class="flex items-center justify-center">
      <span
        class="flex px-4 py-2 border border-dividerDark rounded-xl bg-primaryLight transition"
      >
        <icon-lucide-webhook class="mr-2" />
        CI/CD
      </span>
    </div>
    <svg class="movement-animation">
      <line x1="5" x2="5" y1="0" y2="100" />
    </svg>
    <div
      class="relative flex flex-col items-center justify-center p-8 border source-container source-deploy space-y-2 md:space-y-0 md:flex-row md:space-x-2 border-dividerDark rounded-2xl bg-primary transition"
    >
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">Document</h3>
        <p class="mt-1 text-secondaryLight">
          Contentful, Drupal, WordPress, etc.
        </p>
      </div>
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">Distribute</h3>
        <p class="mt-1 text-secondaryLight">Documentation, Posts, etc.</p>
      </div>
      <div
        class="flex flex-col w-full p-4 border border-dividerDark rounded-xl bg-primary transition md:w-auto"
      >
        <h3 class="font-bold text-secondaryDark">Monitor</h3>
        <p class="mt-1 text-secondaryLight">
          APIs, Databases, YAML, JSON, CSV, etc.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.source-container:before {
  @apply absolute;
  @apply right-8;
  @apply bottom-full;
  @apply bg-primary;
  @apply text-secondaryDark;
  @apply font-semibold;
  @apply px-3 py-2;
  @apply rounded-t-md;
  @apply border-t;
  @apply border-l;
  @apply border-r;
  @apply border-dividerDark;
  @apply transition;
}
.source-data:before {
  content: "Data";
}
.source-build:before {
  content: "Build";
}
.source-test:before {
  content: "Test";
}
.source-deploy:before {
  content: "Deploy";
}
.movement-animation {
  @apply mx-auto;
  width: 10px;
  height: 2rem;
}
svg line {
  @apply stroke-accentLight;

  stroke-width: 1px;
  stroke-linecap: round;
  stroke-dasharray: 0.5px 10px;
  animation: animateline 4s linear both infinite;
}
@keyframes animateline {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -2rem;
  }
}
</style>
