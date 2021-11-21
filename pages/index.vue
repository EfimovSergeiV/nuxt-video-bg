<template>
  <div id="page">
    <Header />
    <Main />


    <b-container class="mt-4">
      <Cards :cards='cards' /> 
    </b-container>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import Cards from '@/components/Cards.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Main,
    Cards,
    Footer,
  },
  data: () => ({
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cards: {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }
  }),
})
</script>

<style>
.main {
  background-color: #000000ad;
  color: #dadada;
}
.main__content {
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
