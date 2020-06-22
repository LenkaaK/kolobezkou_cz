<template>
  <div class="roads">
    <headerImage v-bind:nadpis="'Zde si vyber trasu podle svých představ'" />
    <main>
      <div class="filter">
        <div class="region">
          <select v-model="region" class="select">
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
          <select v-model="distance" class="select">
            <option value="start">Vzdálenost</option>
            <option value="30">do 30km</option>
            <option value="d60">30km - 60km</option>
            <option value="n60">nad 60km</option>
          </select>
        </div>
        <div class="ascent">
          <select v-model="ascent" class="select">
            <option value="start">Převýšení</option>
            <option value="n500">do 500</option>
            <option value="d1000">do 1000m</option>
            <option value="n1000">nad 1000m</option>
          </select>
        </div>
        <div class="key_words">
          <!-- <label for="keyWords">
          Hledej klíčová slova-->
          <input id="keyWords" type="text" placeholder="Zadej klíčová slova" v-model="keyWords" />
          <!-- </label> -->
        </div>
      </div>

      <div class="road-container">
        <road
          v-for="trasa in filtrovaneTrasy"
          :key="trasa.id"
          :id="trasa.id"
          :trasa="trasa"
          class="road-item"
        />
      </div>
    </main>
    <paticka />
  </div>
</template>

<script>
import Paticka from './../components/Paticka.vue'
import headerImage from "./../components/HeaderImage";
import Vyhledavac from "./../components/Vyhledavac.vue";
import Road from "./../components/Road.vue";
import trasyData from "./../assets/data/trasy.js";

export default {
  components: {
    vyhledavac: Vyhledavac,
    road: Road,
    headerImage,
    Paticka
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
      return allKeyWords.some(keyword =>
        keyword.toLowerCase().startsWith(this.keyWords.toLowerCase())
      );
    }
  }
};
</script>


<style scoped lang="scss">
.filter {
  display: flex;
  background-color: $dark-blue;
  padding: 1px;
  justify-content: flex-start;
}

.region {
  margin-left: 50px;
}
.select {
  font-size: 16px;
  color: $text-color;
  background-color: #eeeeee;
  padding: 10px;
  margin: 10px 30px 10px 10px;
  border-radius: 5px;
  border: none;
}

.key_words input {
  font-size: 16px;
  color: $text-color;
  background-color: #eeeeee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  border: none;
}

.road-container {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}

</style>