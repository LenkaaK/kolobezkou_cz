<template>
  <div id="app">
      <navigace />
         <router-view/>
  </div>
</template>


<script>
import Navigace from './components/Navigace.vue'

export default {
  components:{
    navigace: Navigace
  }
   
}
</script>




<style>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html { box-sizing: border-box; }
*, ::before, ::after { box-sizing: inherit; }



body{

  margin: 0;  


  font-family: 'Open Sans', sans-serif;
  color:white
}

</style>
