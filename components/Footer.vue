<template>
  <div class="footer__background">
    <b-container>
      <div class="footer__content">
        <b-row align-v="center">
          <b-col cols="6" lg="4">
            <ul>
              <li><router-link to="/">главная</router-link></li>
              <li><router-link to="p">проекты</router-link></li>
              <li><router-link to="about">контакты</router-link></li>
            </ul>
            
          </b-col>
          <b-col cols="6" lg="8">
            <div class="text-light text-right">
              <h3>s2NNAUF</h3>
              <h6>Python Developer</h6>
              <SocialNetworks />
            </div>
          </b-col>
        </b-row>
      </div>
      <b-row class="text-center">
        <b-col cols="12">
          <small class="text-light">s2nullnullachtundfunfzig/2022 (c) Этот проект живёт на
            <a href="https://github.com/EfimovSergeiV">GitHub</a>
          </small>
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
