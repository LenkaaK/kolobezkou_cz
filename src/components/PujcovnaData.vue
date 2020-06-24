<template>
  <div>
    <l-marker :lat-lng="gps" @click="onClick()">
      <l-icon
        :icon-size="[30, 42]"
        :icon-anchor="[15, 42]"
        :icon-url="require('./../assets/icons/map-looga/map-logo-greyzpisma.png')"
      />
      <l-tooltip>
        <h3 class="rental_color">{{nazev}}</h3>
      </l-tooltip>
    </l-marker>
  </div>
</template>

<script>
import { LMarker, LPopup, LTooltip, LIcon } from "vue2-leaflet";

export default {
  components: {
    LMarker,
    LPopup,
    LTooltip,
    LIcon
  },
  methods: {
    onClick() {
      window.open(this.url);
    }
  },
  props: ["nazev", "url", "gps"]
};
</script>

<style scoped lang="scss">
.rental_color {
  color: $light-blue;
}
</style>