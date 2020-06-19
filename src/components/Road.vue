<template>
  <div class="road">
    <div class="road_image">
      <img src="./../assets/images/foto-trasy/foto-001-01.jpeg">      
    </div>
      <div class="road_info">
        <h3 class="road_name">Název trasy</h3>
        <p class="road_distance">Vzdálenost /hodiny</p>
        <p class="ascent">Převýšení</p>
        <p class="road_region"> Region</p>
        <p class="hashtag"> Hashtagy</p>
      </div>

  <router-link to="/detail">
      <button class="to_detail">Chci vědět víc</button>
    </router-link>
</div>
</template>

<script>
export default {

}
</script>

<style>
.to_detail{
  
  font-size: 16px;
  color: #eeeeee;
  border: 1px solid #262b37;
  background-color: #262b37;
  padding: 6px 20px;
  border-radius: 5px
}

</style>