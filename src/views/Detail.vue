<template>
  <div>
    <headerImage />
    <h2>{{trasa.name}}</h2>
    <div class="detail-stranka">
      

      <div v-html="trasa.map" class="mapa">
        <mapa />
      </div>

      <div class="trasapopis">
        <div class="info">
          <basicinfo v-bind:trasa="trasa" />
        </div>
        <div class="graf">
          <graf v-bind:trasa="trasa" v-bind:pozadi="'#eeeeee'" v-bind:velikost="'16px'"/>
        </div>
      </div>

      <podrobnosti v-bind:trasa="trasa" />

      <galerie v-bind:trasa="trasa" />
    </div>
    <paticka />
  </div>
</template>

<script>
import Graf from "./../components/Graf.vue";
import Mapa from "./../components/Mapa.vue";
import Galerie from "./../components/Galerie.vue";
import trasyData from "./../assets/data/trasy.js";
import BasicInfo from "./../components/BasicInfo.vue";
import Podrobnosti from "./../components/Podrobnosti.vue";
import headerImage from "./../components/HeaderImage.vue";
import Paticka from './../components/Paticka.vue'

function getTrasa(id) {
  return trasyData.find(trasa => trasa.id === id);
}

export default {
  data() {
    return {
      trasa: null
    };
  },

  methods: {
    getTrasa() {
      const id = this.$route.params.id;
      this.trasa = trasyData.find(trasa => trasa.id === id);
    }
  },

  computed: {
    region() {
      return this.trasa.region.join(", ");
    }
  },

  created() {
    this.getTrasa();
  },

  components: {
    galerie: Galerie,
    mapa: Mapa,
    graf: Graf,
    basicinfo: BasicInfo,
    podrobnosti: Podrobnosti,
    headerImage: headerImage,
    paticka: Paticka
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
  margin-bottom: 20px;
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
</style>