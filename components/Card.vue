<template>
  <div class="card__background p-2">
    <b-row>
      <b-col cols="12">
        <b-row>
          <b-col cols="12">
            <h1>{{ card.title }}</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <h6 v-html="card.desc"></h6>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    card: {
      type: Object,
      default: Object,
    }
  },
})
</script>

<style>
/* .card-rounded {
  background-color: #ffffffad;
  border-radius: 3px;
  transition: 1s;
}
.card-rounded:hover {
  background-color: #ffffffe0;
} */
</style>