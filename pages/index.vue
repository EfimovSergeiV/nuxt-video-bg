<template>
  <div id="page">
    <Header />
    <Main />

    <b-container class="text-light">
      <About />
    </b-container>


    <b-container>
      <!-- <b-row>
        <b-col class="text-center" cols="12">
          <h1 class="text-light">МОЙ СТЕК</h1>
        </b-col>
      </b-row> -->
      
      <Cards :likes='likes' /> 
    </b-container>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import About from '@/components/sections/About.vue'
import Cards from '@/components/sections/Cards.vue'
import Footer from '@/components/Footer.vue'

export default Vue.extend({
  components: {
    Header,
    Main,
    About,
    Cards,
    Footer,
  },
  data: () => ({
    likes: [
      { title: '#Python', desc: 'Тот самый, на котором нравится и он же первый.</br> Изучаю его в экосистеме фрэймворка Django и GNU/Linux'},
      { title: '#JS/TS', desc: 'Хотелось бы как можно реже, но VUE/NUXT/ELECTRON это JS'},
      { title: '#GOlang', desc: 'Когда Python не достаточно для решения зачач в виду его производительности'},
      { title: '#GNU/Linux', desc: 'Debian THE BEST</br> <b>Desktop and VPS/VDS</b>'},
    ]
  }),
})
</script>
