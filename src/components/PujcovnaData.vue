<template>
  <div>
    <l-marker :lat-lng="gps" @click="onClick()">
      <l-tooltip>
        <h3 class="mojeBarva">{{nazev}}</h3>
        <a v-bind:href="url" target="_blank">{{url}}</a>
      </l-tooltip>
    </l-marker>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LTileLayer, LMarker, LPopup, LTooltip, LIcon } from "vue2-leaflet";

export default {
  components: {
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LIcon
  },
  methods:{
    onClick(){
      window.open(this.url);
    }
  },
  props: ["nazev", "url", "gps"]
};
</script>

<style>
</style>