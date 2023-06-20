<template>
  <!-- Contact section -->
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Section header -->
        <div class="pb-12 md:pb-20">
          <h2
            class="pb-4 text-transparent h2 bg-clip-text bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
          >
            Contact us
          </h2>
          <p class="text-lg text-slate-400">
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </p>
          <p class="mt-4 text-sm">
            <RouterLink
              :to="{ path: '', hash: '#newsletter' }"
              class="font-medium text-indigo-400 rounded transition hover:text-indigo-300"
            >
              Subscribe to updates
            </RouterLink>
            <span class="mx-4 text-slate-800">|</span>
            <a
              href="https://twitter.com/hoppscotch_io"
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium text-indigo-400 rounded transition hover:text-indigo-300"
              >Follow us on Twitter</a
            >
          </p>
        </div>
        <!-- Contact form -->
        <form class="max-w-xl">
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3 mb-4 md:w-1/2 md:mb-0">
              <label
                class="block mb-2 text-sm font-medium text-slate-200"
                for="first-name"
                >First Name <span class="text-red-600">*</span></label
              >
              <input
                id="first-name"
                type="text"
                class="w-full text-slate-200 form-input"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div class="w-full px-3 md:w-1/2">
              <label
                class="block mb-2 text-sm font-medium text-slate-200"
                for="last-name"
                >Last Name <span class="text-red-600">*</span></label
              >
              <input
                id="last-name"
                type="text"
                class="w-full text-slate-200 form-input"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3">
              <label
                class="block mb-2 text-sm font-medium text-slate-200"
                for="email"
                >Email <span class="text-red-600">*</span></label
              >
              <input
                id="email"
                type="email"
                class="w-full text-slate-200 form-input"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3">
              <label
                class="block mb-2 text-sm font-medium text-slate-200"
                for="subject"
                >Subject <span class="text-red-600">*</span></label
              >
              <input
                id="subject"
                type="text"
                class="w-full text-slate-200 form-input"
                placeholder="How can we help you?"
                required
              />
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3">
              <label
                class="block mb-2 text-sm font-medium text-slate-200"
                for="country"
                >Country</label
              >
              <select id="country" class="w-full text-slate-500 form-select">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3">
              <label
                class="block mb-2 text-sm font-medium text-slate-200"
                for="message"
                >Message</label
              >
              <textarea
                id="message"
                rows="4"
                class="w-full text-slate-200 form-textarea"
                placeholder="Write your message"
              ></textarea>
            </div>
          </div>
          <div class="flex flex-wrap mt-4 -mx-3">
            <div class="px-3">
              <button
                class="w-full text-white bg-indigo-600 btn hover:bg-indigo-700"
              >
                Send
              </button>
            </div>
          </div>
          <div class="mt-4 text-sm text-slate-600">
            By clicking "send" you consent to allow Simple to store and process
            the personal information submitted above and agree to our
            <a class="underline" href="#0">terms and conditions</a> as well as
            our <a class="underline" href="#0">Privacy Policy</a>.
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
