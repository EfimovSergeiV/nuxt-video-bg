<template>
  <div id="page">
    <Header />

    <div class="main">
      <b-container>
        <div>
          <b-row>
            <b-col cols="12" lg="6">
              <div class="main__content">
                <b-row>
                  <b-col cols="12">
                    <h1>{{ title }}</h1>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12">
                    <p>{{ desc }}</p>
                  </b-col>
                </b-row>
              </div>

            </b-col>
            <b-col cols="12" lg="6"></b-col>
          </b-row>
        </div>
        
      </b-container> 
    </div>
    <b-container class="mt-4">
      <Cards :cards='cards' /> 
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Cards from '@/components/Cards.vue'

export default Vue.extend({
  components: {
    Header,
    Cards,
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
