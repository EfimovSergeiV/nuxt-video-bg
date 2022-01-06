<template>
  <div class="app"> 
    <video src="../assets/files/two-bg-video.mp4" muted loop autoplay></video>
    <div class="content">
      <b-container fluid class="spotyfy-widget">
        <b-row>
          <b-col cols="12">
            <Musik />
          </b-col>
        </b-row>        
      </b-container>

      
      
      <transition name="fade" mode="out-in">
        <Nuxt />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Musik from '@/components/sections/Musik.vue'

export default Vue.extend({
  components: {
    Musik,
  },
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
.spotyfy-widget {
  background: linear-gradient(#202020, #000000);
}
</style>