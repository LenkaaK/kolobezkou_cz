<template>
  <div id="nav" class="navigation">
    <div >
      <router-link to="/" class="home nav" >Home</router-link> 
    </div> 
    <div >
      <router-link to="/trasy" class="trasy nav" >TRASY</router-link>
    </div>
    <div>
      <router-link to="/seznamka" class="seznamka nav">Seznamka</router-link>
    </div>
    <div >
      <router-link to="/pujcovny" class= "pujcovny nav" >Půjčovny</router-link>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>


  .navigation{
    background-color: rgba(0,0,0, 0.5);
    font-size: 22px;
    display: flex;
    justify-content: flex-end;
    
    
  }
  .nav{
    display: flex;
    color:white;
    text-decoration: none;
    margin-right: 40px;
    padding: 15px
  }
  
</style>