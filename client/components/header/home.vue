<template>
  <div
    class="h-header"
    :style="
      '--page-image: url(' + require(`~/assets/headers/homepage.jpg`) + ')'
    "
  >
    <div class="container grid gap-6 text-center text-white">
      <div class="font-semibold text-white text-md">
        <div class="flex justify-center gap-4">
          <div class="flex gap-6 px-4 py-1 bg-black rounded-full bg-opacity-40">
            <div>0 <span class="text-xs">ONLINE</span></div>
            <div>0 <span class="text-xs">REGISTER USERS</span></div>
          </div>
        </div>
      </div>

      <div class="grid gap-2">
        <h1 class="text-4xl font-bold">
          GUWEB
        </h1>
        <h2 class="font-semibold text-md home-sub">
          We are an osu! private server built from the ground up with many
          unique features not seen elsewhere - for more information, check out
          gulag and guweb on GitHub - we're fully open source!
        </h2>
      </div>

      <div class="flex justify-center gap-2">
        <button
          type="button"
          class="inline-flex justify-center w-full px-6 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-hsl-h2 hover:bg-hsl-l4 focus:outline-none sm:w-auto sm:text-sm"
        >
          Login
        </button>

        <button
          type="button"
          class="inline-flex justify-center w-full px-6 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-hsl-h2 hover:bg-hsl-l4 focus:outline-none sm:w-auto sm:text-sm"
        >
          Register
        </button>
      </div>
    </div>

    <div class="absolute w-full bottom-4">
      <div class="flex justify-center">
        <svg
          class="w-5 h-5 text-white animate-bounce"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style>
.home-sub {
  max-width: 32rem;
  margin: 0 auto;
}
</style>

<style scoped>
.h-header {
  height: 26rem;
  margin-bottom: 0rem;
}
</style>
