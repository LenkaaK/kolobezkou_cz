<template>
  <div>
    <l-marker :lat-lng="gps">
      <l-popup>
        <h3 class="mojeBarva">{{nazev}}</h3>
        <a v-bind:href="url" target="_blank">{{url}}</a>
      </l-popup>
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
  props: ["nazev", "url", "gps"]
};
</script>

<style>
</style>