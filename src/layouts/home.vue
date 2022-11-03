<template>
  <div class="relative flex flex-col min-h-screen">
    <HomeHeader />
    <main
      class="container flex flex-col flex-1"
    >
      <RouterView />
    </main>
    <HomeFooter />
  </div>
</template>
