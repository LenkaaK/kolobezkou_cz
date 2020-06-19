<template>
  <div>
     <header class="bgr_img">
      <img src ="./../assets/images/intro_routes.jpeg" alt= "hlavicka">
    </header>
    
      <h1>Detail trasy</h1>
      
      <div v-html="trasy[0].map" class="mapa"></div>
    <div class="trasapopis">
      <h2>{{trasy[0].name}}</h2>
      <p>Hodnocení: {{trasy[0].stars}}</p>

      <div class="inline">
        <div><img src="./../assets/icons/distance01.svg" width="40px"></div>
        <div><p>{{trasy[0].distance}} km / {{trasy[0].time}} hodin</p></div>
      </div>
      <p>{{trasy[0].ascent}} m</p>


      <div>
        <p
        v-for="(trasa, index) in trasy[0].region"
        v-bind:key="index"
        class="inline"
        >
          {{trasa}}
        </p>
      </div>

      <div>
        <p
        v-for="(trasa, index) in trasy[0].hashtags"
        v-bind:key="index"
        class="inline"
        >
          #{{trasa}}
        </p>
      </div>
 <!-- ZKOUŠKA GRAFU -->

       <figure class="pie-chart">
      	<figcaption>
		      Terén 5%<span style="color:#59a14f"></span><br>
		      Asfalt 95%<span style="color:#edc949"></span>
	      </figcaption>
    </figure>
      
      </div>
      
      
      
      
      <!--
      <div v-html="trasy[0].map"></div>
      <div>
          <h2>{{trasy[0].name}}</h2>
          <p>Hodnocení: {{trasa.stars}}</p>
          <p>{{trasy[0].distance}} km / {{trasy[0].time}} hodin</p>
          <p>{{trasy[0].ascent}}</p>
          <p>{{trasy[0].region}}</p>

      </div>
      -->


      
  </div>
</template>

<script>
import trasyData from './../assets/data/trasy.js';
export default {
    data() {
        return {
            trasy: trasyData,
        }
    }
}
</script>

<style>
.bgr_img img{
  display: block;
  width: 100%;
  height: auto;
}

.trasapopis p {
    color: black;
    text-transform: none;
    text-align: left;
  }

  .trasapopis {
    margin-left: 15px;
    margin-right: 15px;
    max-width: 50%;
  }

  .mapa {
    text-align: center;
    margin: 20px;
  }

  .inline {
    display: inline;
  }

  /* STYLOVÁNÍ GRAFU */

  .pie-chart {
    background:
      radial-gradient(
        circle closest-side,
        white 0,
        white 39.6%,
        transparent 39.6%,
        transparent 60%,
        white 0
      ),
      conic-gradient(
        #59a14f 0,
        #59a14f 5%,
        #edc949 0,
        #edc949 100%
    );
    position: relative;
    max-width: 500px;
    min-height: 350px;
    margin: 0;
    /*outline: 1px solid #ccc;*/
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