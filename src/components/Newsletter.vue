<template>
  <div
    id="newsletter"
    class="flex flex-col items-center px-4 py-16 border-t border-slate-900"
  >
    <h4 class="text-center h4 text-slate-200">Subscribe to our newsletter</h4>
    <p class="max-w-md mt-2 text-center text-slate-400">
      Receive monthly updates on new posts and features.
    </p>
    <form
      class="flex flex-col flex-1 w-full max-w-sm mt-8 sm:flex-row"
      action="https://hoppscotch.us20.list-manage.com/subscribe/post?u=807aba6832422fc0a3a1ac751&amp;id=03385b483f&amp;f_id=00f07deaf0"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      target="_blank"
      validate
    >
      <input
        placeholder="Email"
        class="w-full form-input"
        type="email"
        required
        name="EMAIL"
        id="mce-EMAIL"
      />
      <input
        type="submit"
        value="Subscribe"
        name="subscribe"
        id="mc-embedded-subscribe"
        class="px-4 py-1 mt-4 ml-0 text-sm font-semibold bg-purple-600 rounded transition hover:bg-purple-500 sm:mt-0 sm:ml-4"
      />
    </form>
  </div>
</template>
