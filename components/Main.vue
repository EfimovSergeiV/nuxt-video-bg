<template>
  <div class="main">
    <b-container>
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
          <b-col cols="12" lg="6">

          </b-col>
        </b-row>
        <b-row class="pb-1 text-center">
          <b-col cols="12">
            <ul class="inline">
              <li><b-btn size="sm" variant="outline-light">ГЛАВНАЯ</b-btn></li>
              <li><b-btn size="sm" variant="outline-light">ПРОЕКТЫ</b-btn></li>
              <li><b-btn size="sm" variant="outline-light">КОНТАКТЫ</b-btn></li>
            </ul>
          </b-col>
        </b-row>  
    </b-container> 
</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    title: "Lorem ipsum dolor sit amet",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  }),
})
</script>
