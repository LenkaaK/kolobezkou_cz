<template>
  <div>
    
      
      
      
      
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

</style>