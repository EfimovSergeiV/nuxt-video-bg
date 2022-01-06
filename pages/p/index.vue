<template>
  <div id="page">
    <Header />
    <Main />

    <b-container class="mt-4" style="min-height: 60vh">
      <b-row>
        <b-col cols="12" class="text-center">
          <h3 class="text-light">Скоро...</h3>
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

export default Vue.extend({
  components: {
    Header,
    Main,
    Footer,
  },
})
</script>