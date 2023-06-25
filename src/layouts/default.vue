<template>
  <div class="flex flex-col min-h-screen">
    <!-- Site header -->
    <AppHeader />
    <!-- Page content -->
    <main class="flex flex-col grow">
      <RouterView />
    </main>
    <!-- Site footer -->
    <AppFooter />
  </div>
</template>
