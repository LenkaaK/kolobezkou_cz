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
          <figure class="pie-chart">
            <figcaption>
              Terén {{trasa.terrain.gravel}}%<span style="color:#00818a"></span><br>
              Asfalt {{trasa.terrain.asphalt}}%<span style="color:#ec9b3b"></span>
            </figcaption>
          </figure>
        </div>


      </div>
        
          <galerie />
        
    </div>   

  </div>
</template>



<script>

import Mapa from './../components/Mapa.vue'
import Galerie from './../components/Galerie.vue'
import trasyData from './../assets/data/trasy.js';
function getTrasa (id) {
    return trasyData.find(trasa => trasa.id===id);
}

export default {
    data() {
        return {
            
        }
    },

    computed: {
        trasa() {
            return getTrasa(this.$route.params.id); 
        }
    },

    components:{
      galerie: Galerie,
      mapa: Mapa,
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

  /* STYLOVÁNÍ GRAFU */

  .pie-chart {
    background:
      radial-gradient(
        circle closest-side,
        #eee,
        #eee 39.6%,
        transparent 39.6%,
        transparent 60%,
        #eee 0
      ),
      conic-gradient(
        #00818a 0,
        #00818a 5%,
        #ec9b3b 0,
        #ec9b3b 100%
    );
    position: relative;
    max-width: 500px;
    min-height: 350px;
    margin: 0;
    /*outline: 1px solid #ccc;*/
    background-color: red;
  }
  .pie-chart figcaption {
    position: absolute;
    bottom: 45%;
    right: 42%;
    font-size: smaller;
    text-align: center;
  }
  .pie-chart span:after {
    display: inline-block;
    content: "";
    width: 0.8em;
    height: 0.8em;
    margin-left: 0.4em;
    height: 0.8em;
    border-radius: 0.2em;
    background: currentColor;
  }

</style>