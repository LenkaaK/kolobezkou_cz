<template>
  <div>
    <headerImage v-bind:nadpis= "'Půjčovny'" />
        <div class="main_heading">
         </div>
        <div class="rental_map" id="mapa">
            <l-map
            :zoom= "zoom"
            :center= "center"
            style= "height: 750px">
          <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng= "center">
        <l-tooltip :options= "{permanent:true}">
            Půjčovna
        </l-tooltip>

      </l-marker >
    <l-marker :lat-lng= "kolobky">
      
      
       <l-popup>
          <l-icon
                    :icon-size="[50, 50]"
                    :icon-anchor="[44, 44]"
                    :icon-url="require('./../assets/icons/service.svg')"
                  />
           <h3 class= "mojeBarva">Půjčovna a prodejna</h3>
           <a href="http://kolobky.cz/">Kolobky.cz</a>
       </l-popup>

      
      </l-marker >
      </l-map>


        </div>

  </div>
</template>
<script>
import HeaderImage from './../components/HeaderImage.vue';
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip, LIcon } from "vue2-leaflet";
export default {
    components: {
        LMap, 
        LTileLayer, 
        LMarker, 
        LPopup, 
        LTooltip,
        LIcon,
        HeaderImage,

    },
    data(){
        return{
            zoom: 8,
            center: latLng(49.8888882, 15.4749003),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            kolobky: latLng(49.18925,16.60277)
        }
    }

}
</script>

<style scoped lang="scss">
 .mojeBarva{
     color: $dark-blue;
 }
 .rental_map{
   width: 1250px;
   margin: 50px auto 50px auto;

 }
</style>