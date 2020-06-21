<template>
  <div class="roads">
    <headerImage v-bind:nadpis="'Zde si vyber trasu podle svých představ'" />
    <main>
      <div class="filter">
        <div class="filter">
          <div class="region">
            <select v-model="region">
              <option value="start">Vyber region</option>
              <option value="Praha">Praha</option>
              <option value="Střední Čechy">Střední Čechy</option>
              <option value="Jižní Čechy">Jižní Čechy</option>
              <option value="Šumava">Šumava</option>
              <option value="Plzeňsko a Český les">Plzeňsko a Český les</option>
              <option value="Západočeské lázně">Západočeské lázně</option>
              <option value="Severozápadní Čechy">Severozápadní Čechy</option>
              <option value="Českolipsko a Jizerské hory">Českolipsko a Jizerské hory</option>
              <option value="Český ráj">Český ráj</option>
              <option value="Krkonoše a Podkrkonoší">Krkonoše a Podkrkonoší</option>
              <option value="Královéhradecko">Královéhradecko</option>
              <option value="Východní Čechy">Východní Čechy</option>
              <option value="Vysočina">Vysočina</option>
              <option value="Jižní Morava">Jižní Morava</option>
              <option value="Východní Morava">Východní Morava</option>
              <option value="Střední Morava a Jeseníky">Střední Morava a Jeseníky</option>
              <option value="Severní Morava a Slezsko">Severní Morava a Slezsko</option>
            </select>
          </div>
          <div class="distance">
            <select v-model="distance">
              <option value="start">Vzdálenost</option>
              <option value="30">do 30km</option>
              <option value="d60">do 60km</option>
              <option value="n60">nad 60km</option>
              <option value="days">vícedenní</option>
            </select>
          </div>
          <div class="ascent">
            <select v-model="ascent">
              <option value="start">Převýšení</option>
              <option value="n500">do 500</option>
              <option value="d1000">do 1000m</option>
              <option value="n1000">nad 1000m</option>
            </select>
          </div>
        </div>
      </div>

      <div class="road_view">
        <div class="road">
          <road v-for="trasa in filtrovaneTrasy" :key="trasa.id" :id="trasa.id" :trasa="trasa" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import headerImage from "./../components/HeaderImage";
import Vyhledavac from "./../components/Vyhledavac.vue";
import Road from "./../components/Road.vue";
import trasyData from "./../assets/data/trasy.js";

export default {
  components: {
    vyhledavac: Vyhledavac,
    road: Road,
    headerImage
  },

  data() {
    return {
      trasy: trasyData,
      region: "start",
      distance: "start",
      ascent: "start"
    };
  },

  computed: {
    filtrovaneTrasy(){
      return this.filtrujRegion(this.trasy);
    }
  },

  methods: {
    filtrujRegion (trasy) {
      if (this.region === "start") {
        return trasy;
      } else {
        return trasy.filter(trasa => (trasa.region[0] === this.region) || (trasa.region[1] === this.region) || (trasa.region[2] === this.region));
      }
    }
    
  }
};
</script>


<style scoped lang="scss">
.road_view {
  width: 90%;
  margin: 0 auto;
}
.road {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 30%;
}
.filter{
    display: flex; 
    background-color: $dark-blue;;
    padding: 1px;
    

}


select{
     padding: 7px; 
     margin: 10px;
}
</style>