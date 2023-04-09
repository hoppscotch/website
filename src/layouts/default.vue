<template>
  <div class="relative flex flex-col min-h-screen">
    <HomeHeader />
    <main class="container flex flex-col flex-1">
      <RouterView />
    </main>
    <LandingNewsletter class="container lg:max-w-4xl" />
    <!-- <HomeFooter class="container lg:max-w-4xl" /> -->
  </div>
</template>
