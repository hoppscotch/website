<template>
  <div
    id="newsletter"
    class="relative mx-auto flex max-w-5xl flex-col items-center p-10 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-zinc-500/20"
  >
    <h4
      class="block max-w-max bg-gradient-to-r from-white via-white/80 to-white/30 bg-clip-text pb-4 text-center text-transparent"
    >
      Subscribe to our newsletter
    </h4>
    <p class="mt-2 max-w-md text-center text-zinc-400/80">
      Receive monthly updates on new posts and features.
    </p>
    <form
      id="mc-embedded-subscribe-form"
      class="mt-8 flex w-full max-w-sm flex-1 flex-col gap-4 sm:flex-row"
      action="https://hoppscotch.us20.list-manage.com/subscribe/post?u=807aba6832422fc0a3a1ac751&amp;id=03385b483f&amp;f_id=00f07deaf0"
      method="post"
      name="mc-embedded-subscribe-form"
      target="_blank"
      validate
    >
      <input
        id="mce-EMAIL"
        placeholder="Email"
        class="w-full rounded-xl border border-zinc-500/50 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 px-4 py-2 backdrop-blur-md transition placeholder:text-zinc-400/50 hover:border-zinc-500/80"
        type="email"
        required
        name="EMAIL"
      />
      <input
        id="mc-embedded-subscribe"
        type="submit"
        value="Subscribe"
        name="subscribe"
        class="relative inline-flex cursor-pointer items-center justify-center rounded-xl border border-zinc-500/50 bg-zinc-500/10 px-3 py-2 text-sm transition hover:border-zinc-500/80"
      />
    </form>
  </div>
</template>
