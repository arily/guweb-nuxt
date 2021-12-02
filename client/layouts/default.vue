<template>
  <div class="flex flex-col h-screen overflow-y-hidden bg-hsl-b6">
    <NavbarMain />
    <div id="app" class="flex flex-col flex-1 w-full overflow-y-auto bg-dark-5">
      <div class="flex-grow">
        <div id="main">
          <Nuxt />
        </div>
      </div>
      <footer class="py-4 text-center bottom-1 bg-hsl-b5">
        <h1 class="text-xs font-semibold text-white">
          © 2021 Varkaria
        </h1>
      </footer>
    </div>
  </div>
</template>

<style>
.container {
  @apply z-50 px-2 mx-auto max-w-7xl sm:px-6 lg:px-8;
}
</style>
