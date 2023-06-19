<template>
  <!-- Contact section -->
  <section>
    <div class="max-w-6xl px-4 mx-auto sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Section header -->
        <div class="max-w-3xl pb-12 mx-auto text-center md:pb-16">
          <h1 class="h1">Have a question about Simple? Contact us directly</h1>
        </div>

        <!-- Contact form -->
        <form class="max-w-xl mx-auto">
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3 mb-4 md:w-1/2 md:mb-0">
              <label
                class="block mb-1 text-sm font-medium text-gray-800"
                for="first-name"
                >First Name <span class="text-red-600">*</span></label
              >
              <input
                id="first-name"
                type="text"
                class="w-full text-gray-800 form-input"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div class="w-full px-3 md:w-1/2">
              <label
                class="block mb-1 text-sm font-medium text-gray-800"
                for="last-name"
                >Last Name <span class="text-red-600">*</span></label
              >
              <input
                id="last-name"
                type="text"
                class="w-full text-gray-800 form-input"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3">
              <label
                class="block mb-1 text-sm font-medium text-gray-800"
                for="email"
                >Email <span class="text-red-600">*</span></label
              >
              <input
                id="email"
                type="email"
                class="w-full text-gray-800 form-input"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3">
              <label
                class="block mb-1 text-sm font-medium text-gray-800"
                for="subject"
                >Subject <span class="text-red-600">*</span></label
              >
              <input
                id="subject"
                type="text"
                class="w-full text-gray-800 form-input"
                placeholder="How can we help you?"
                required
              />
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3">
              <label
                class="block mb-1 text-sm font-medium text-gray-800"
                for="country"
                >Country</label
              >
              <select id="country" class="w-full text-gray-500 form-select">
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3">
            <div class="w-full px-3">
              <label
                class="block mb-1 text-sm font-medium text-gray-800"
                for="message"
                >Message</label
              >
              <textarea
                id="message"
                rows="4"
                class="w-full text-gray-800 form-textarea"
                placeholder="Write your message"
              ></textarea>
            </div>
          </div>
          <div class="flex flex-wrap mt-4 -mx-3">
            <div class="w-full px-3">
              <button
                class="w-full text-white bg-blue-600 btn hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </div>
          <div class="mt-4 text-sm text-gray-600">
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
