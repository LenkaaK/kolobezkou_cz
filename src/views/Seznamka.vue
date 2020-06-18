<template>
  <div>
    <div v-html="trasy[0].map" class="mapa"></div>
    <div class="trasapopis">
      <h2>{{trasy[0].name}}</h2>
      <p>Hodnocení: {{trasy[0].stars}}</p>
      <p>{{trasy[0].distance}} km / {{trasy[0].time}} hodin</p>
      <p>{{trasy[0].ascent}} m</p>

      <p
      v-for="(trasa, index) in trasy[0].region"
      v-bind:key="index"
      class="inline"
      >
        {{trasa}}
      </p>

      <p
      v-for="(trasa, index) in trasy[0].hashtags"
      v-bind:key="index"
      class="inline"
      >
        #{{trasa}}
      </p>
    </div>
  </div>
</template>

<script>
import trasyData from './../assets/data/trasy.js';
export default {
    data() {
        return {
            trasy: trasyData,
        }
    }
}
</script>

<style>
  .trasapopis p {
    color: black;
    text-transform: none;
    text-align: left;
  }

  .mapa {
    text-align: center;
    margin: 20px;
  }

  .inline {
    display: inline;
  }
</style>