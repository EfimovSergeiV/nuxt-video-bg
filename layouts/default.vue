<template>
  <div class="app">
    <video src="../assets/files/bg-video.mp4" muted loop autoplay></video>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    welcome: "This is Header",
  }),
})
</script>

<style>
video {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* opacity: 0.8; */
}
.content {
  position: absolute;
  width: 100%;
  z-index: 10;
}

</style>