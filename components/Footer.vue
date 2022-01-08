<template>
  <div class="footer__background">
    <b-container>
      <div class="text-center footer__content">
        <b-row align-v="center" class="pt-4 pb-4">
          <b-col cols="12" md="6" class="text-left">
            <ul>
              <li><router-link to="/">ГЛАВНАЯ</router-link></li>
              <li><router-link to="p">ПРОЕКТЫ</router-link></li>
              <li><router-link to="about">КОНТАКТЫ</router-link></li>
            </ul>
            
          </b-col>
          <b-col cols="12" lg="6" class="text-left">
          </b-col>
        </b-row>
      </div>
      <b-row class="text-center">
        <b-col cols="12">
          <SocialNetworks />
        </b-col>
        <b-col cols="12">
          <small class="text-light">s2nullnullachtundfunfzig/2022 (c) Этот проект живёт на
            <a href="https://github.com/EfimovSergeiV">GitHub</a>
          </small>
        </b-col>
      </b-row>
      <b-toast
        id="app-update"
        toaster="b-toaster-top-right"
        variant="info"
        no-auto-hide
        solid
      >
        <b-row align-v="center">
          <b-col cols="3">
            <!-- <b-img
              src="../static/icon-lg.png"
              fluid
              alt="Responsive image"
            ></b-img> -->
          </b-col>
          <b-col cols="9">
            <b-row>
              <b-col cols="12">
                <p class="text-dark">Доступна новая версия</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-toast>
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
  mounted() {
    this.checkUpdate()
  },
  methods: {
    async checkUpdate() {
      const version = await this.$axios.$get('/version/')
      if (version.version !== this.$config.clientVersion) {
        this.showToastUpdate()
      }
    },
    showToastUpdate() {
      this.$bvToast.show('app-update')
    },
  }
})
</script>
