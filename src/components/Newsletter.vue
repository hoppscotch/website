<template>
  <div
    id="newsletter"
    class="flex flex-col items-center max-w-5xl px-4 py-12 mx-auto before:absolute before:h-px before:inset-x-0 before:top-0 before:bg-gradient-to-r before:from-transparent before:via-violet-500/20 before:to-transparent"
  >
    <h4
      class="pb-4 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/80 to-white/20"
    >
      Subscribe to our newsletter
    </h4>
    <p class="max-w-md mt-2 text-center text-slate-400">
      Receive monthly updates on new posts and features.
    </p>
    <form
      id="mc-embedded-subscribe-form"
      class="flex flex-col flex-1 w-full max-w-sm mt-8 sm:flex-row"
      action="https://hoppscotch.us20.list-manage.com/subscribe/post?u=807aba6832422fc0a3a1ac751&amp;id=03385b483f&amp;f_id=00f07deaf0"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
      validate
    >
      <input
        id="mce-EMAIL"
        placeholder="Email"
        class="w-full px-4 py-2 border rounded-full transition border-violet-500/20 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 hover:border-violet-500/60 backdrop-blur-md placeholder:text-violet-500"
        type="email"
        required
        name="EMAIL"
      />
      <input
        id="mc-embedded-subscribe"
        type="submit"
        value="Subscribe"
        name="subscribe"
        class="px-4 py-2 mt-4 ml-0 text-sm font-semibold border rounded-full transition bg-gradient-to-b border-violet-500 from-slate-950 via-slate-900 to-violet-900 hover:to-violet-500 sm:mt-0 sm:ml-4 hover:border-violet-600"
      />
    </form>
  </div>
</template>
