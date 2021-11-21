<template>
  <div class="footer__background">
    <b-container>
      <div class="footer__content">
        <b-row align-v="center">
          <b-col cols="6" lg="4">
            <ul>
              <li><router-link to="about">главная</router-link></li>
              <li><router-link to="about">проекты</router-link></li>
              <li><router-link to="about">контакты</router-link></li>
            </ul>
            
          </b-col>
          <b-col cols="6" lg="8">
            <div class="text-light text-right">
              <h1>s2NNAUF</h1>
              <h6>Python Developer</h6>
              <ul class="inline">
                <li><nuxt-link to="#" target="blank" class="mdi footer__i-size mdi-github"></nuxt-link></li>
                <li><nuxt-link to="#" target="blank" class="mdi footer__i-size mdi-facebook"></nuxt-link></li>
                <li><nuxt-link to="#" target="blank" class="mdi footer__i-size mdi-linkedin"></nuxt-link></li>
                <li><nuxt-link to="#" target="blank" class="mdi footer__i-size mdi-reddit"></nuxt-link></li>
                <li><nuxt-link to="#" target="blank" class="mdi footer__i-size mdi-stack-owerflow"></nuxt-link></li>
                <li><nuxt-link to="#" target="blank" class="mdi footer__i-size mdi-twitter"></nuxt-link></li>
                <li><nuxt-link to="#" target="blank" class="mdi footer__i-size mdi-skype"></nuxt-link></li>
                <li><nuxt-link to="#" target="blank" class="mdi footer__i-size mdi-gmail"></nuxt-link></li>
                <!-- <li><nuxt-link to="#" target="blank" class="mdi footer__i-size mdi-vk"></nuxt-link></li> -->
              </ul>
            </div>
          </b-col>
        </b-row>
      </div>
      <b-row class="text-center">
        <b-col cols="12">
          <small class="text-light">s2nullnullachtundfunfzig(c)2022</small>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.footer__background {
  /* background-color: #000000ad; */
  background-color: #000000de;
  margin-top: 4vh;
}
.footer__content {
  padding-top: 8vw;
  padding-bottom: 8vw;
}
</style>