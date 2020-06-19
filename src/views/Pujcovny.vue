<template>
  <div>
    <header class="bgr_img">
      <img src ="./../assets/images/intro_routes.jpeg" alt="hlavicka">
    </header>
     <div class="main_heading">
          <h1>Tady bude mapa půjčoven</h1>
       </div>
        <div id="mapa">
            <l-map
            :zoom= "zoom"
            :center= "center"
            style= "height: 400px">
          <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng= "center">
        <l-tooltip :options= "{permanent:true}">
            centrum Brnéčka
        </l-tooltip>

      </l-marker >
    <l-marker :lat-lng= "czechitas">
       <l-popup>

           <h3 class= "mojeBarva">Czechití house</h3>
           <p>Czechití house</p>
       </l-popup>

      </l-marker >





            </l-map>


        </div>

  </div>
</template>
<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
export default {
    components: {
        LMap, 
        LTileLayer, 
        LMarker, 
        LPopup, 
        LTooltip

    },
    data(){
        return{
            zoom: 13,
            center: latLng(49.19506, 16.60684),
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            czechitas: latLng(49.18558,16.62565)
        }
    }

}
</script>

<style>
 .mojeBarva{
     color: hotpink;
 }
</style>