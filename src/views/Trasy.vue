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
              <option value="d60">30km - 60km</option>
              <option value="n60">nad 60km</option>
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
          <div class="key_words">
            <label for="keyWords">
              Zadej klíčová slova
              <input
                id="keyWords"
                type="text"
                placeholder="Olomouc"
                v-model="keyWords"
              />
            </label>
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
      ascent: "start",
      keyWords: ""
    };
  },

  computed: {
    filtrovaneTrasy() {
      return this.trasy
        .filter(this.isFilterDistance)
        .filter(this.isFilterRegion)
        .filter(this.isFilterAscent)
        .filter(this.isFilterKeyWord);
    }
  },

  methods: {
    isFilterDistance(trasa) {
      if (this.distance === "start") {
        return true;
      }
      if (this.distance === "30") {
        return trasa.distance <= 30;
      } else if (this.distance === "d60") {
        return trasa.distance > 30 && trasa.distance <= 60;
      } else {
        return trasa.distance > 60;
      }
    },
    isFilterRegion(trasa) {
      if (this.region === "start") {
        return true;
      }
      return trasa.region.some(region => region === this.region);
    },
    isFilterAscent(trasa) {
      if (this.ascent === "start") {
        return true;
      }
      if (this.ascent === "n500") {
        return trasa.ascent <= 500;
      } else if (this.ascent === "d1000") {
        return trasa.ascent > 500 && trasa.ascent <= 1000;
      }
      return trasa.ascent > 1000;
    },

    isFilterKeyWord(trasa) {
      if (this.keyWords === "") {
        return true;
      }
      const allKeyWords = [...trasa.keywords, ...trasa.hashtags];
      return allKeyWords.some(keyword => keyword.toLowerCase().startsWith(this.keyWords.toLowerCase()));
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
.filter {
  display: flex;
  background-color: $dark-blue;
  padding: 1px;
}

select {
  padding: 7px;
  margin: 10px;
}
.key_words {
  padding: 7px;
  margin: 10px;
  color: white;
}
</style>