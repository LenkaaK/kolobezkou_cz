<template>
  <div>
    <headerImage v-bind:nadpis="'Půjčovny'" />
    <div class="main_heading"></div>
    <div class="rental_map" id="mapa">
      <l-map :zoom="zoom" :center="center" style="height: 750px">
        <l-tile-layer :url="url" />
        <pujcovna-data v-for="(pujcovna, index) in data"
        v-bind:key="index" 
        v-bind:nazev ="pujcovna.name"
        v-bind:url="pujcovna.url"
        v-bind:gps="pujcovna.gps"
         />
      </l-map>
    </div>
  </div>
</template>
<script>
import PujcovnaData from './../components/PujcovnaData.vue'
import PujcovnyInfo from './../assets/data/pujcovny'
import HeaderImage from "./../components/HeaderImage.vue";
import { latLng } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LTooltip,
  LIcon
} from "vue2-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LIcon,
    HeaderImage,
    PujcovnaData
    
  },

  data() {
    return {
      zoom: 8,
      center: latLng(49.8888882, 15.4749003),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      data: PujcovnyInfo
    };
  }
};
</script>

<style scoped lang="scss">
.mojeBarva {
  color: $dark-blue;
}
.rental_map {
  width: 1250px;
  margin: 50px auto 50px auto;
}
</style>