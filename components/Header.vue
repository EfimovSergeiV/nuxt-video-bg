<template>
  <div class="header__background">
    <b-container>
      <b-row align-v="center">
        <b-col cols="6" lg="8" class="text-left">
          <h1 class="text-light">S2NNAUF</h1>
        </b-col>
        <b-col cols="6" lg="4" class="text-right">
          <b-form-input v-model="text" size="sm" placeholder="Поиск по сайту"></b-form-input>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.header__background {
  background-color: #000000ad;
}
</style>