<template>
  <div
    class="h-header"
    :style="'--page-image: url(' + require(`~/assets/headers/${headerimg}.jpg`) + ')'"
  >
    <div class="container text-center text-white lg:text-left">
      <h2 class="text-lg">
        {{ subtitle }}
      </h2>
      <h1 class="text-3xl font-normal">
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    subtitle: {
      type: String,
      default: 'Subtitle'
    },
    headerimg: {
      type: String,
      default: 'sample'
    }
  }
}
</script>

<style>
.h-header {
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(
      180deg,
      hsla(var(--base-hue), 10%, 10%, 0.8) 0%,
      hsl(var(--base-hue), 10%, 10%, 0.8) 100%
    ),
    var(--page-image);
  height: 8rem;
  margin-bottom: -4rem;
  background-size: cover;
  transition: 0.5s ease;
}

@media only screen and (min-width: 1024px) {
  .h-header {
    height: 16rem;
  }
}
</style>
