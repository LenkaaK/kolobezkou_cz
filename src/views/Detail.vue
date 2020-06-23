<template>
  <div>
    <headerImage />
    <h2>{{trasa.name}}</h2>
    <div class="detail-stranka">
      <div class="detail_map" id="mapa">
        <l-map ref="myMap" @ready="onReady" :zoom="zoom" :center="center" style="height:500px">
          <l-tile-layer :url="url" />
          <l-geo-json :geojson="geojson" :options="fgLineOptions"></l-geo-json>
          <l-geo-json :geojson="geojson" :options="mapOptions"></l-geo-json>
        </l-map>
      </div>

      <div class="trasapopis">
        <div class="info">
          <basicinfo v-bind:trasa="trasa" />
        </div>
        <div>
          <a :href="gpxUrl">GPX</a>
        </div>
        <div>
          <a :href="trasa.map" target="”_blank”">Mapy.cz</a>
        </div>
        <div class="graf">
          <graf v-bind:trasa="trasa" v-bind:pozadi="'#eeeeee'" v-bind:velikost="'16px'" />
        </div>
      </div>

      <podrobnosti v-bind:trasa="trasa" />

      <galerie v-bind:trasa="trasa" />
    </div>
    <paticka class="paticka" />
  </div>
</template>

<script>
import Graf from "./../components/Graf.vue";
import Galerie from "./../components/Galerie.vue";
import trasyData from "./../assets/data/trasy.js";
import BasicInfo from "./../components/BasicInfo.vue";
import Podrobnosti from "./../components/Podrobnosti.vue";
import headerImage from "./../components/HeaderImage.vue";
import Paticka from "./../components/Paticka.vue";
import { latLng, geoJson } from "leaflet";
import { LMap, LTileLayer, LGeoJson } from "vue2-leaflet";
import get from "axios";
import togeojson from "@mapbox/togeojson";

export default {
  data() {
    return {
      trasa: null,
      zoom: 7,
      center: latLng(49.8888882, 15.4749003),
      url: "https://mapserver.mapy.cz/turist-m/{z}-{x}-{y}",
      geojson: null,
      mapOptions: {
        style: function style(feature) {
          return {
            weight: 6,
            opacity: 1,
            color: "#293462",
            fillOpacity: 0.3,
            dashArray: "7",
            lineCap: "butt"
          };
        }
      },
      fgLineOptions: {
        style: function style(feature) {
          return {
            weight: 8,
            opacity: 0.6,
            color: "white",
            fillOpacity: 0.3,
            lineCap: "butt"
          };
        }
      },
      map: null
    };
  },

  methods: {
    // TODO API request getTrasa(id) from backend
    getTrasa() {
      const id = this.$route.params.id;
      this.trasa = trasyData.find(trasa => trasa.id === id);
    },

    getGPX() {
      get(this.gpxUrl, { responseType: "document" })
        .then(response => {
          this.geojson = togeojson.gpx(response.data);
          console.log("unicorn🦄");
          let leafletGeoJson = geoJson(this.geojson);
          this.map.fitBounds(leafletGeoJson.getBounds());
        })
        .catch(error => console.log("error"));
    },

    onReady() {
      this.map = this.$refs.myMap.mapObject;
    }
  },

  computed: {
    region() {
      return this.trasa.region.join(", ");
    },
    gpxUrl() {
      return `/gpx/gpx-${this.trasa.gpx}.gpx`;
    }
  },

  created() {
    this.getTrasa();
    this.getGPX();
  },

  components: {
    galerie: Galerie,
    graf: Graf,
    basicinfo: BasicInfo,
    podrobnosti: Podrobnosti,
    headerImage: headerImage,
    paticka: Paticka,
    LMap,
    LTileLayer,
    LGeoJson
  }

  /*beforeRouteEnter (to, from, next) {
        const trasa = getTrasa(to.params.id)
        next(vm => {
            vm.trasa = trasa;
        })
    }, */
};
</script>

<style scoped lang="scss">
.detail-stranka {
  width: 920px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  min-height: 100vh;
}

.trasapopis p {
  color: black;
  text-transform: none;
  text-align: left;
}

.trasapopis {
  display: flex;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
}

h2 {
  text-align: center;
  background-color: $dark-blue;
  color: white;
  padding: 5px;
  margin-top: 0;
  margin-bottom: 45px;
}

.mapa {
  text-align: center;
}

.inline {
  display: inline;
}

.info {
  flex: 2 1 calc((100%-20px) / 2);
  text-align: left;
}

.graf {
  flex: 1 1 calc((100%-20px) / 2);
  max-width: 250px;
  height: auto;
  font-size: 20px;
}

.paticka {
  position: relative;
  bottom: 0;
}
</style>