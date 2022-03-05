<template>
  <div class="relative flex flex-col min-h-screen">
    <HomeHeader />
    <main
      class="container flex flex-col flex-1"
    >
      <router-view />
    </main>
    <HomeFooter />
  </div>
</template>
