<template>
  <b-row>
    <b-col v-for="i in 4" :key="i" cols="12" lg="6">
      <Card :card="cards" />
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from './sections/Card.vue'

export default Vue.extend({
  components: {
    Card,
  },
  props: {
    cards: {
      type: Object,
      default: Object,
    }
  },
})
</script>
