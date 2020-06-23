<template>
  <div>
    <headerImage v-bind:nadpis="'Půjčovny'" />
    <div class="rental_map" id="mapa">
      <l-map :zoom="zoom" :center="center" style="height:rental_map">
        <l-tile-layer :url="url" />
        <pujcovna-data
          v-for="(pujcovna, index) in data"
          v-bind:key="index"
          v-bind:nazev="pujcovna.name"
          v-bind:url="pujcovna.url"
          v-bind:gps="pujcovna.gps"
        />
      </l-map>
    </div>
    <paticka class="paticka" />
  </div>
</template>
<script>
import Paticka from "./../components/Paticka.vue";
import PujcovnaData from "./../components/PujcovnaData.vue";
import PujcovnyInfo from "./../assets/data/pujcovny";
import HeaderImage from "./../components/HeaderImage.vue";
import { latLng } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    HeaderImage,
    PujcovnaData,
    Paticka
  },

  data() {
    return {
      zoom: 7,
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
  height: 500px;
  width: 920px;
  margin: 50px auto 50px auto;
  z-index: 1;
  min-height: calc(100vh - 230px);
}

.paticka {
  position: relative;
  bottom: 0;
  z-index: 2;
}
</style>