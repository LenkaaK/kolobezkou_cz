<template>
  <div>
    <header class="bgr_img">
      <img src="./../assets/images/intro_routes.jpeg" alt="hlavicka" />
    </header>

    <div class="detail-stranka">
      <h2>{{trasa.name}}</h2>

      <div v-html="trasa.map" class="mapa">
        <mapa />
      </div>

      <div class="trasapopis">
        <div class="info">
          <p>Hodnocení: {{trasa.stars}}</p>

          <basicinfo v-bind:trasa="trasa" />
        </div>
        <div class="graf">
          <graf v-bind:trasa="trasa" v-bind:pozadi="'#eeeeee'" />
        </div>
      </div>

      <podrobnosti v-bind:trasa="trasa" />

      <galerie />
    </div>
  </div>
</template>

<script>
import Graf from "./../components/Graf.vue";
import Mapa from "./../components/Mapa.vue";
import Galerie from "./../components/Galerie.vue";
import trasyData from "./../assets/data/trasy.js";
import BasicInfo from "./../components/BasicInfo.vue";
import Podrobnosti from "./../components/Podrobnosti.vue";

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
    podrobnosti: Podrobnosti
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
  width: 700px;
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
  margin-top: 10px;
  margin-bottom: 10px;
}

h2 {
  text-align: center;
  background-color: $dark-blue;
  color: white;
  padding: 5px;
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
}
</style>