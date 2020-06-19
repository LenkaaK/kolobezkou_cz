<template>
  <div>
    <div class="all_roads">
      <div class="road_contain">
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
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

.to_detail{
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  color: #eeeeee;
  background-color: #262b37;
  padding: 6px 20px;
  border-radius: 5px;
  cursor:pointer;
  
	border: 2px solid white;
}
.all_roads{
  margin: 30px
}
.road_contain{
  background: white;
  border-radius: 0 0 10px 10px;
  padding-bottom: 20px;
  width: 33%;
  border: 1px solid #dbd8d8;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.road_image img{
  display: block;
  width: 100%;
  height: auto;
}

.road_name{
  margin:0;
  color: #eeeeee;
  background-color: #262b37;
  padding: 5px
}

</style>