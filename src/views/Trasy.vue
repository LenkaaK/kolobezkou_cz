<template>
  <div class="roads">
    <headerImage v-bind:nadpis= "'Zde si vyber trasu podle svých představ'" />
    <main>
      <div class="filter">
        <vyhledavac />
      </div>
      <div class="road_view">
        <div class="road">
          <road v-for="trasa in trasy" :key="trasa.id" :id="trasa.id" :trasa="trasa" />
        </div>
      </div>
      
    </main>
  </div>
</template>

<script>
import headerImage from './../components/HeaderImage'
import Vyhledavac from "./../components/Vyhledavac.vue";
import Road from "./../components/Road.vue";
import trasyData from "./../assets/data/trasy.js";

export default {
  components: {
    vyhledavac: Vyhledavac,
    road: Road,
    headerImage,
  },

  data() {
    return {
      trasy: trasyData
    };
  }
};
</script>


<style scoped lang="scss">

.road_view{
  width: 90%;
  margin: 0 auto;
}
.road{
width: 90%;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
flex-basis: 30%

}
</style>