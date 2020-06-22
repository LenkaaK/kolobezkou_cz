<template>
  <div id="nav" class="navigation">
    <div class="home_nav">
      <router-link to="/" class="home nav" >Domů</router-link> 
    </div> 
    <div >
      <router-link to="/trasy" class="trasy nav" >TRASY</router-link>
    </div>
    <div >
      <router-link to="/pujcovny" class= "pujcovny nav" >Půjčovny</router-link>
    </div>
    <div>
      <router-link to="/kontakty" class="kontakty nav">Kontakty</router-link>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">


  .navigation{
    background-color: rgba(0,0,0, 0.5);
    font-size: 22px;
    display: flex;
    justify-content: flex-end;
    position: absolute;
    width: 100%;
    z-index: 2
    
    
    
  }
  .nav{
    display: flex;
    color:$light-text-color;
    text-decoration: none;
    padding: 15px 35px
  }
  .nav:hover{
    background-color: black
  }
 

</style>