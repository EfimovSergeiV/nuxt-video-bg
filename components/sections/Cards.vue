<template>
  <b-row>
    <b-col class="mt-2 mb-2" v-for="like in likes" :key="like.id" cols="12" lg="6">
      <Card class="h-100" :card="like" />
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '../Card.vue'

export default Vue.extend({
  components: {
    Card,
  },
  props: {
    likes: {
      type: Object,
      default: Object,
    }
  },
})
</script>
