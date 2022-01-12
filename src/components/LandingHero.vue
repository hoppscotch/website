<template>
  <div class="flex flex-col px-8 py-16">
    <LandingAnnouncement />
    <div class="flex flex-col items-center">
      <h1
        class="my-4 text-5xl font-semibold leading-none tracking-tighter text-center transition text-secondaryDark md:text-6xl lg:text-8xl"
      >
        Open Source
        <br>
        <span
          class="text-transparent transition bg-clip-text bg-gradient-to-tr from-green-600 via-team-400 to-emerald-600"
        >
          Reimagined
        </span>
      </h1>
      <p class="my-4 text-xl text-center md:w-3/5">
        Kooli help you monetize open source projects, accept payments, publish
        exclusive contents and manage customers online.
      </p>
      <div class="relative flex w-full my-16">
        <img
          class="object-cover object-center w-full h-full transition border-4 rounded-lg border-dividerLight screenshot-banner"
          src="/src/assets/images/banner.png"
          alt="Screenshot"
          loading="lazy"
        >
      </div>
    </div>
  </div>
</template>
