<template>
  <div
    id="newsletter"
    class="relative flex flex-col items-center max-w-5xl px-4 py-12 mx-auto before:absolute before:h-px before:inset-x-0 before:top-0 before:bg-gradient-to-r before:from-transparent before:via-gray-500/20"
  >
    <!-- Radial gradient -->
    <div
      class="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      aria-hidden="true"
    >
      <div
        class="absolute top-0 flex items-center justify-center w-1/3 -translate-x-1/2 -translate-y-1/2 left-1/2 aspect-video"
      >
        <div
          class="absolute inset-0 translate-z-0 bg-gray-500 rounded-full blur-[60px] opacity-10"
        ></div>
      </div>
    </div>
    <h4
      class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-gray-200/50 via-gray-100/80 to-gray-50/80"
    >
      Subscribe to our newsletter
    </h4>
    <p class="max-w-md mt-2 text-center text-gray-400/80">
      Receive monthly updates on new posts and features.
    </p>
    <form
      id="mc-embedded-subscribe-form"
      class="flex flex-col flex-1 w-full max-w-sm mt-8 gap-4 sm:flex-row"
      action="https://hoppscotch.us20.list-manage.com/subscribe/post?u=807aba6832422fc0a3a1ac751&amp;id=03385b483f&amp;f_id=00f07deaf0"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
      validate
    >
      <input
        id="mce-EMAIL"
        placeholder="Email"
        class="w-full px-4 py-2 border transition rounded-xl border-gray-500/50 bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 hover:border-gray-500/80 backdrop-blur-md placeholder:text-gray-400/50"
        type="email"
        required
        name="EMAIL"
      />
      <input
        id="mc-embedded-subscribe"
        type="submit"
        value="Subscribe"
        name="subscribe"
        class="relative inline-flex items-center justify-center px-3 py-2 text-sm border cursor-pointer transition gray-500ite/50 rounded-xl bg-gray-500/10 border-gray-500/50 hover:border-gray-500/80"
      />
    </form>
  </div>
</template>
