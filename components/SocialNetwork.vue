<template>
  <div id="social-network">
    <ul class="inline">
      <li class="p-1" v-for="social in socialnetwrks" :key="social.id">
        <a :href="social.link" target="blank" class="mdi footer__i-size" :class="social.icon"></a>
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
        { link: 'https://github.com/EfimovSergeiV/', icon: 'mdi-github'},
        { link: 'https://www.facebook.com/s2nnauf/', icon: 'mdi-facebook'},
        { link: '#', icon: 'mdi-linkedin'},
        { link: 'https://www.reddit.com/user/EfimovSergeiV', icon: 'mdi-reddit'},
        { link: 'https://twitter.com/efimovsergeiv/', icon: 'mdi-twitter'},
        { link: 'mailto:efimovsergeiv@gmail.com', icon: 'mdi-gmail'},
      ],
    }
  }
})
</script>