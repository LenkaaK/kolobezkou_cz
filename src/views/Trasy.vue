<template>
  <div class="roads">
    
    <header class="bgr_img">
      <img src ="./../assets/images/intro_routes.jpeg" alt= "hlavicka">
    </header>
    
      <main>

        <h1>Zde si vyber trasu podle svých představ</h1>
        <div class="filter">
          <vyhledavac />
        </div>
         <div class="roads_view"> 
            <div class="road">
              <road/>
            </div>
            
               </div>

        
      </main>
      
  

  </div>
</template>

<script>
import Vyhledavac from './../components/Vyhledavac.vue'
import Road from './../components/Road.vue'
export default {
  components:{
    vyhledavac: Vyhledavac,
    road: Road
  }

}
</script>


<style>
.bgr_img img{
  display: block;
  width: 100%;
  height: auto;

}

main{
  text-align: center;
}

main h1{
  margin: 53px
}
.roads_view{
  display: flex;
  justify-content: space-between;
  flex-shrink: 1;
  flex-grow: 0;
}

.road{
  flex-basis: 33%
  
}

</style>