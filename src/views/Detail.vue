<template>
  <div>
    <header class="bgr_img">
      <img src ="./../assets/images/intro_routes.jpeg" alt="hlavicka">
    </header>

    <div class="detail-stranka">
      <div class="main_heading">
            <h1>Najdi svého parťáka</h1>
      </div>

      <h2>{{trasa.name}}</h2>

      <div v-html="trasa.map" class="mapa">
        <mapa />
      </div>

      

      <div class="trasapopis">

        <div class="info">
          <p>Hodnocení: {{trasa.stars}}</p>

          <div>
            <img src="./../assets/icons/distance02.svg" width="40px">
            {{trasa.distance}} km / {{trasa.time}} hodin
          </div>

          <div>
            <img src="./../assets/icons/ascent.svg" width="40px">
            {{trasa.ascent}} m
          </div>

          <img src="./../assets/icons/region.svg" width="40px">
          <div
            v-for="(region, index) in trasa.region"
            v-bind:key="index"
            class="inline"
          >
            {{region}}
          </div>
          <br>
          <img src="./../assets/icons/hash.svg" width="40px">
          <div
            v-for="(hash, index) in trasa.hashtags"
            v-bind:key="index"
            class="inline"
          >
            #{{hash}}
          </div>

        </div>
         <div class="graf">     
        <graf v-bind:trasa="trasa"/>
        </div>

      </div>
        
          <galerie />
        
    </div>   

  </div>
</template>

<script>
import Graf from './../components/Graf.vue'
import Mapa from './../components/Mapa.vue'
import Galerie from './../components/Galerie.vue'
import trasyData from './../assets/data/trasy.js';
function getTrasa (id) {
    return trasyData.find(trasa => trasa.id===id);
}

export default {
    data() {
        return {
          trasa: null  
        }
    },

    methods: {
        getTrasa() {
          const id= this.$route.params.id;
            this.trasa=trasyData.find(trasa=>""+trasa.id === id); 
        }
    },

    created(){
      this.getTrasa()
    },

    components:{
      galerie: Galerie,
      mapa: Mapa,
      graf: Graf,
    }

    /*beforeRouteEnter (to, from, next) {
        const trasa = getTrasa(to.params.id)
        next(vm => {
            vm.trasa = trasa;
        })
    }, */


}
</script>

<style scoped>
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
    background-color: #293462;
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
    flex: 2 1 calc((100%-20px)/2);
    text-align: left;
  }

  .graf {
    flex: 1 1 calc((100%-20px)/2);
  }

  
</style>