<template>
   <div>
    <header class="bgr_img">
      <img src ="./../assets/images/intro_routes.jpeg" alt="hlavicka">
       <div class="header_heading">   
          <h1>{{nadpis}}</h1>
      </div>
      </header>
  </div>
</template>

<script>
export default {
  props:['nadpis']
  

}
</script>

<style scoped>

.bgr_img img {
  display: block;
  width: 100%;
  height: auto;
  color:black;
 
}

h1{
  margin:0;
  position: absolute;
  color: white;
  top:108px;
  text-align: center;
  width: 100%;
  font-weight: 400;
  }
</style>