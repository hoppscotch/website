<template>
  <div class="flex min-h-screen flex-col">
    <!-- Site header -->
    <AppHeader />
    <!-- Page content -->
    <main class="flex grow flex-col overflow-clip">
      <RouterView />
    </main>
    <!-- Site footer -->
    <AppFooter />
  </div>
</template>
