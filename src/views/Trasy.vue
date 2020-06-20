<template>
  <div class="roads">
    <header class="bgr_img">
      <img src="./../assets/images/intro_routes.jpeg" alt="hlavicka" />
    </header>

    <main>
      <div class="main_heading">
        <h1>Zde si vyber trasu podle svých představ</h1>
      </div>

      <div class="filter">
        <vyhledavac />
      </div>

      <div class="roads_view">
        <div class="road">
          <road v-for="trasa in trasy" :key="trasa.id" :id="trasa.id" :trasa="trasa" />
        </div>
      </div>
      
    </main>
  </div>
</template>

<script>
import Vyhledavac from "./../components/Vyhledavac.vue";
import Road from "./../components/Road.vue";
import trasyData from "./../assets/data/trasy.js";

export default {
  components: {
    vyhledavac: Vyhledavac,
    road: Road
  },

  data() {
    return {
      trasy: trasyData
    };
  }
};
</script>


<style>
.bgr_img img {
  display: block;
  width: 100%;
  height: auto;
}

main {
  text-align: center;
}

.main_heading {
  margin: 53px;
}
.roads_view {
  display: flex;
}
.road{
display: flex;
flex-wrap: wrap;
flex-basis:auto

}
</style>