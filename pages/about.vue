<template>
  <div id="page">
    <Header />
    <Main />


    <b-container class="mt-4 h-100" style="min-height: 60vh">
      <b-row>
        <b-col class="text-center" cols="12">
          <SocialNetworks />
        </b-col>
      </b-row>
    </b-container>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Footer from '@/components/Footer.vue'
import SocialNetworks from '@/components/SocialNetwork.vue'

export default Vue.extend({
  components: {
    Header,
    Main,
    Footer,
    SocialNetworks,
  },
})
</script>