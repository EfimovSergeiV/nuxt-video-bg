<template>
  <div id="social-network">
    <ul class="inline">
      <li class="p-1" v-for="social in socialnetwrks" :key="social.id">
        <nuxt-link :to="social.link" target="blank" class="mdi footer__i-size" :class="social.icon"></nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    socialnetwrks: {
      type: Object,
      default: [
        { link: '#', icon: 'mdi-github'},
        { link: '#', icon: 'mdi-facebook'},
        { link: '#', icon: 'mdi-linkedin'},
        { link: '#', icon: 'mdi-reddit'},
        { link: '#', icon: 'mdi-twitter'},
        { link: '#', icon: 'mdi-gmail'},
      ],
    }
  }
})
</script>