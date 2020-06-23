<template>
  <div>
    <l-marker :lat-lng="gps" @click="onClick()">
      <l-icon
          :icon-size="[35, 35]"
          :icon-anchor="[44, 44]"
          :icon-url="require('./../assets/icons/gps.svg')"
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
  methods:{
    onClick(){
      window.open(this.url);
    }
  },
  props: ["nazev", "url", "gps"]
};
</script>

<style scoped lang="scss">
  .rental_color{
      color:$light-blue;
  }
</style>