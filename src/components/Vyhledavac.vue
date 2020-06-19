<template>
  <div>
     
     <div class="filter">
          <div class="region">
               <select v-model= "region">
                    <option value="start"> Vyber region </option>
                    <option value="pha"> Praha </option>
                    <option value="stc"> Střední Čechy</option>
                    <option value="jhc"> Jižní Čechy</option>
                    <option value="smv"> Šumava</option>
                    <option value="plk"> Plzeňsko a Český les</option>
                    <option value="zpl"> Západočeské lázně</option>
                    <option value="svc"> Severozápadní Čechy</option>
                    <option value="cljh"> Českolipsko a Jizerské hory</option>
                    <option value="csr"> Český ráj</option>
                    <option value="krk"> Krkonoše a Podkrkonoší</option>
                    <option value="krh"> Královéhradecko</option>
                    <option value="vdc"> Východní Čechy</option>
                    <option value="vys"> Vysočina</option>
                    <option value="jhm"> Jižní Morava</option>
                    <option value="vym"> Východní Morava</option>
                    <option value="stm"> Střední Morava a Jeseníky</option>
                    <option value="srm"> Severní Morava a Slezsko</option>
               </select>
          </div>
          <div class="distance">   
               <select v-model= "distance">
                    <option value="start">Vzdálenost</option>
                    <option value= "30">do 30km</option>
                    <option value="d60">do 60km</option>
                    <option value="n60">nad 60km</option>
                    <option value="days">vícedenní</option>
               </select>
          </div>
          <div class="ascent">
               <select v-model= "ascent">
                    <option value= "start">Převýšení</option>
                    <option value= "n500">do 500</option>
                    <option value= "d1000">do 1000m</option>
                    <option value= "n1000">nad 1000m</option>
               </select>
          </div>
         

          </div>
      </div>
</template>

<script>
export default {
     data(){
          return{
               region: 'start',
               distance: 'start',
               ascent: 'start'

          }
     }

}
</script>

<style>
.filter{
    display: flex; 
    background-color: #262b37;
    padding: 1px;
    

}


select{
     padding: 7px; 
     margin: 10px;
}
</style>