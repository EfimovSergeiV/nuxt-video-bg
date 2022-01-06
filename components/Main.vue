<template>
  <div class="main">
    <b-container>
        <b-row>
          <b-col cols="12" lg="6">
            <div class="main__content">
              <b-row>
                <b-col cols="12">
                  <h2>{{ main.title }}</h2>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <p v-html="main.desc"></p>
                </b-col>
              </b-row>
            </div>

          </b-col>
          <b-col cols="12" lg="6">

          </b-col>
        </b-row>
        <b-row class="pb-1 text-center">
          <b-col cols="12">
            <ul class="inline">
              <li class="p-2"><nuxt-link to="/">ГЛАВНАЯ</nuxt-link></li>
              <li class="p-2"><nuxt-link to="p">ПРОЕКТЫ</nuxt-link></li>
              <li class="p-2"><nuxt-link to="about">КОНТАКТЫ</nuxt-link></li>
            </ul>
          </b-col>
        </b-row>  
    </b-container> 
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    main: {
      type: Object,
      default: { 
        title: 's2NNAUF PROJECT`s', 
        desc: "Разработка реактивных веб приложений на NuxtJS + Django </br> #Python #JS #TS #GO #GNU/Linux"}
    },
  },
})
</script>
