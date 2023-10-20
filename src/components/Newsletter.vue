<template>
  <div
    id="newsletter"
    class="flex flex-col items-center max-w-5xl px-4 py-12 mx-auto before:absolute before:h-px before:inset-x-0 before:top-0 before:bg-gradient-to-r before:from-transparent before:via-violet-500/20 before:to-transparent"
  >
    <h4
      class="pb-4 text-transparent bg-clip-text max-w-max bg-gradient-to-br from-violet-200 via-violet-100 to-violet-50"
    >
      Subscribe to our newsletter
    </h4>
    <p class="max-w-md mt-2 text-center text-violet-200/50">
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
        class="w-full px-4 py-2 border transition rounded-xl border-violet-500/50 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 hover:border-violet-500/80 backdrop-blur-md placeholder:text-violet-400/50"
        type="email"
        required
        name="EMAIL"
      />
      <input
        id="mc-embedded-subscribe"
        type="submit"
        value="Subscribe"
        name="subscribe"
        class="relative inline-flex items-center justify-center px-3 py-2 text-sm border cursor-pointer transition violet-500ite/50 rounded-xl bg-violet-500/10 border-violet-500/50 hover:border-violet-500/80"
      />
    </form>
  </div>
</template>
