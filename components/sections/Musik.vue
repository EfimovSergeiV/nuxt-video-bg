<template>
  <b-row>
    <b-col cols="12">
      <Spotify />
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Spotify from '../Spotyfy.vue'

export default Vue.extend({
  components: {
    Spotify,
  },
  props: {
    likes: {
      type: Object,
      default: Object,
    }
  },
})
</script>