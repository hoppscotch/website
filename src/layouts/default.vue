<template>
  <div class="flex flex-col min-h-screen overflow-hidden">
    <!-- Site header -->
    <Header />
    <!-- Page content -->
    <main class="flex flex-col grow">
      <RouterView />
    </main>
    <!-- Site footer -->
    <Footer />
  </div>
</template>
