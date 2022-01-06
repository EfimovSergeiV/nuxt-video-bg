<template>
  <div class="header__background">
    <b-container>
      <b-row align-v="center">
        <b-col cols="6" lg="8" class="text-left">
          <router-link to="/">
            <h1 class="text-light">s2NNAUF</h1>
          </router-link>
        </b-col>
        <b-col cols="6" lg="4" class="text-right">
          <SocialNetworks />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SocialNetworks from './SocialNetwork.vue'

export default Vue.extend({
  components: {
    SocialNetworks,
  },
})
</script>
